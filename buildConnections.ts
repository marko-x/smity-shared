import glob from "glob";
import fs from "fs";
import ts from "typescript";

console.log("Start building connection...");

function findSupportedExports(sourceFile: ts.SourceFile) {
  const supportedExports: string[] = [];
  function findSupportedExportsNode(node: ts.Node) {
    // console.log("->", ts.SyntaxKind);

    if (ts.isVariableStatement(node)) {
      const varName =
        node.declarationList.declarations[0].name.getText(sourceFile);
      if (
        ["get", "post", "put", "patch", "delete"].includes(varName) &&
        node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)
      ) {
        // console.log(`Found supported ${varName}`);
        supportedExports.push(varName);
      }
    }
  }

  ts.forEachChild(sourceFile, (node) => {
    findSupportedExportsNode(node);
  });

  return supportedExports;
}

function toVariableName(str: string) {
  return str.replace(/[\.,\/]/g, "_");
}
function removeTsExtension(str: string) {
  if (str.endsWith(".ts")) {
    str = str.substring(0, str.length - 3);
  }
  return str;
}

type ImportLink = {
  destination: string;
  importPath: string;
  import: string;
  importVariableName: string;
  routes: {
    method: string;
    route: string;
    routeParams: string[];
    key: string;
  }[];
};

async function buildConnections() {
  const connectionsDir = "./src/connections";
  fs.mkdirSync(connectionsDir, { recursive: true });
  const files = glob.sync("./src/api/**/*.ts");
  const linkedImports: (ImportLink | null)[] = await Promise.all(
    files.map((file) => {
      // './src/api/testfolder/hello.$helloId.ts'

      // ------- try out getting AST
      const sourceFile = ts.createSourceFile(
        file,
        fs.readFileSync(file).toString(),
        ts.ScriptTarget.ES2015,
        /*setParentNodes */ true
      );

      // findSupportedExports it
      const supportedExports = findSupportedExports(sourceFile);
      console.log(`supportedExports in ${file}:`, supportedExports);
      if (supportedExports.length === 0) return null;
      // ------- end

      let connectionFileName = file.replace("./src/api", "");
      // 'testfolder/hello.$helloId.ts'
      connectionFileName = connectionFileName.replace(/\//g, ".");
      // 'testfolder.hello.$helloId.ts'

      const connectionRoute = removeTsExtension(connectionFileName).replace(
        /\./g,
        "/"
      );

      const paramsRegex = /\$\w+/g;
      const params =
        connectionFileName.match(paramsRegex)?.map((p) => p.replace("$", "")) ||
        [];
      let importPath = file.replace("./src/api/", "../api/");
      importPath = removeTsExtension(importPath);

      const destination = `${connectionsDir}/${connectionFileName}`;
      console.log("write file", destination, params);

      return {
        destination,
        importPath,
        import: `import {${supportedExports.join(", ")}} from "${importPath}";`,
        importVariableName: toVariableName(removeTsExtension(importPath)),
        routes: supportedExports.map((name) => ({
          method: name,
          route: connectionRoute,
          routeParams: params,
          key: `${name}:${connectionRoute}`,
        })),
      };
      /*
      fs.writeFileSync(
        destination,
        `
          import { z } from "zod";
          import {${supportedExports.join(", ")}} from "${importPath}";

          ${supportedExports.map(
            (name) => `      
            export const ${name} = {
              method: "${name}",
              route: "${connectionRoute}",
              key: "${name}:${connectionRoute}",
              requestSchema: config.${name}.requestSchema.and(z.object({
                params: z.object({
                  ${params.map((p) => `${p}: z.string(),`).join(" ")}
                })
              })),
              responseSchema: config.${name}.responseSchema,
            }
          `
          )}
        `
      );

      return connectionFileName;
      */
    })
  );

  const indexImportFiles = linkedImports.flatMap((d) => (d !== null ? d : [])); //filter out nulls
  fs.writeFileSync(
    `${connectionsDir}/index.ts`,
    `
      import { z } from "zod";

      ${indexImportFiles
        .map(
          (d) => `import * as ${d.importVariableName} from "${d.importPath}";`
        )
        .join("\n")}

      const schemas = {
        ${indexImportFiles
          .map((d) =>
            d.routes
              .map(
                (r) => `
                  "${r.key}": {
                    requestSchema: ${d.importVariableName}.${
                  r.method
                }.requestSchema${
                  r.routeParams.length > 0
                    ? `.and(z.object({
                  params: z.object({
                    ${r.routeParams.map((p) => `${p}: z.string(),`).join(" ")}
                  })
                }))`
                    : ""
                },
                    responseSchema: ${d.importVariableName}.${
                  r.method
                }.responseSchema,
                  },
                `
              )
              .join("\n")
          )
          .join("\n")}
      };

      export const connections = {
        ${indexImportFiles
          .map((d) =>
            d.routes
              .map(
                (r) => `
                  "${r.key}": {
                    method: "${r.method}",
                    route: "${r.route}",
                    requestSchema: schemas["${r.key}"].requestSchema,
                    responseSchema: schemas["${r.key}"].responseSchema,
                  },
                `
              )
              .join("\n")
          )
          .join("\n")}
      };

      export type Connections = typeof connections;
      export type ConnectionKey = keyof Connections;
      export type ConnectionDatas = {
      ${indexImportFiles
        .map((d) =>
          d.routes
            .map(
              (r) => `
              "${r.key}": {
                RequestInput: z.input<typeof schemas["${r.key}"]["requestSchema"]>;
                RequestTransformed: z.output<typeof schemas["${r.key}"]["requestSchema"]>,
                ResponseInput: z.input<typeof schemas["${r.key}"]["responseSchema"]>,
                ResponseTransformed: z.output<typeof schemas["${r.key}"]["responseSchema"]>,
              };
              `
            )
            .join("\n")
        )
        .join("\n")}
      };
    `
  );
}

buildConnections();

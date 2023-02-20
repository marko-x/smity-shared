import fs from "fs";

console.log("Start building packages jsons...");

async function buildPackages() {
  fs.writeFileSync(
    `./dist/esm/package.json`,
    `{
      "type": "module"
    }`
  );

  fs.writeFileSync(
    `./dist/cjs/package.json`,
    `{
      "type": "commonjs"
    }`
  );
}

buildPackages();

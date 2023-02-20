import { z } from "zod";

import * as ___api_benefitGenerators from "../api/benefitGenerators";
import * as ___api_buttonClicker_$buttonClickerId from "../api/buttonClicker.$buttonClickerId";
import * as ___api_calendar from "../api/calendar";
import * as ___api_codeInteraction from "../api/codeInteraction";
import * as ___api_codeTracking_$codeTrackingId from "../api/codeTracking.$codeTrackingId";
import * as ___api_community_$communityId_context from "../api/community.$communityId/context";
import * as ___api_coupon_$couponId_context from "../api/coupon.$couponId/context";
import * as ___api_coupon_$couponId_redeem from "../api/coupon.$couponId/redeem";
import * as ___api_coupon_$couponId_unpack from "../api/coupon.$couponId/unpack";
import * as ___api_coupons from "../api/coupons";
import * as ___api_event_$eventId from "../api/event.$eventId";
import * as ___api_invitation_check from "../api/invitation/check";
import * as ___api_invitation_join from "../api/invitation/join";
import * as ___api_pointConverter_$pointConverterId from "../api/pointConverter.$pointConverterId";
import * as ___api_pointConverters from "../api/pointConverters";
import * as ___api_pointGenerators from "../api/pointGenerators";
import * as ___api_post_$postId from "../api/post.$postId";
import * as ___api_posts from "../api/posts";
import * as ___api_survey_$surveyId from "../api/survey.$surveyId";
import * as ___api_transactions from "../api/transactions";
import * as ___api_user_auth from "../api/user/auth";
import * as ___api_user_communities from "../api/user/communities";
import * as ___api_user_join from "../api/user/join";
import * as ___api_user_logout from "../api/user/logout";
import * as ___api_user_password_createPin from "../api/user/password.createPin";
import * as ___api_user_password_update from "../api/user/password.update";

const schemas = {
  "get:/benefitGenerators": {
    requestSchema: ___api_benefitGenerators.get.requestSchema,
    responseSchema: ___api_benefitGenerators.get.responseSchema,
  },

  "get:/buttonClicker/$buttonClickerId": {
    requestSchema: ___api_buttonClicker_$buttonClickerId.get.requestSchema.and(
      z.object({
        params: z.object({
          buttonClickerId: z.string(),
        }),
      })
    ),
    responseSchema: ___api_buttonClicker_$buttonClickerId.get.responseSchema,
  },

  "post:/buttonClicker/$buttonClickerId": {
    requestSchema: ___api_buttonClicker_$buttonClickerId.post.requestSchema.and(
      z.object({
        params: z.object({
          buttonClickerId: z.string(),
        }),
      })
    ),
    responseSchema: ___api_buttonClicker_$buttonClickerId.post.responseSchema,
  },

  "get:/calendar": {
    requestSchema: ___api_calendar.get.requestSchema,
    responseSchema: ___api_calendar.get.responseSchema,
  },

  "post:/codeInteraction": {
    requestSchema: ___api_codeInteraction.post.requestSchema,
    responseSchema: ___api_codeInteraction.post.responseSchema,
  },

  "get:/codeTracking/$codeTrackingId": {
    requestSchema: ___api_codeTracking_$codeTrackingId.get.requestSchema.and(
      z.object({
        params: z.object({
          codeTrackingId: z.string(),
        }),
      })
    ),
    responseSchema: ___api_codeTracking_$codeTrackingId.get.responseSchema,
  },

  "get:/community/$communityId/context": {
    requestSchema: ___api_community_$communityId_context.get.requestSchema.and(
      z.object({
        params: z.object({
          communityId: z.string(),
        }),
      })
    ),
    responseSchema: ___api_community_$communityId_context.get.responseSchema,
  },

  "get:/coupon/$couponId/context": {
    requestSchema: ___api_coupon_$couponId_context.get.requestSchema.and(
      z.object({
        params: z.object({
          couponId: z.string(),
        }),
      })
    ),
    responseSchema: ___api_coupon_$couponId_context.get.responseSchema,
  },

  "post:/coupon/$couponId/redeem": {
    requestSchema: ___api_coupon_$couponId_redeem.post.requestSchema.and(
      z.object({
        params: z.object({
          couponId: z.string(),
        }),
      })
    ),
    responseSchema: ___api_coupon_$couponId_redeem.post.responseSchema,
  },

  "post:/coupon/$couponId/unpack": {
    requestSchema: ___api_coupon_$couponId_unpack.post.requestSchema.and(
      z.object({
        params: z.object({
          couponId: z.string(),
        }),
      })
    ),
    responseSchema: ___api_coupon_$couponId_unpack.post.responseSchema,
  },

  "get:/coupons": {
    requestSchema: ___api_coupons.get.requestSchema,
    responseSchema: ___api_coupons.get.responseSchema,
  },

  "get:/event/$eventId": {
    requestSchema: ___api_event_$eventId.get.requestSchema.and(
      z.object({
        params: z.object({
          eventId: z.string(),
        }),
      })
    ),
    responseSchema: ___api_event_$eventId.get.responseSchema,
  },

  "post:/invitation/check": {
    requestSchema: ___api_invitation_check.post.requestSchema,
    responseSchema: ___api_invitation_check.post.responseSchema,
  },

  "post:/invitation/join": {
    requestSchema: ___api_invitation_join.post.requestSchema,
    responseSchema: ___api_invitation_join.post.responseSchema,
  },

  "get:/pointConverter/$pointConverterId": {
    requestSchema:
      ___api_pointConverter_$pointConverterId.get.requestSchema.and(
        z.object({
          params: z.object({
            pointConverterId: z.string(),
          }),
        })
      ),
    responseSchema: ___api_pointConverter_$pointConverterId.get.responseSchema,
  },

  "post:/pointConverter/$pointConverterId": {
    requestSchema:
      ___api_pointConverter_$pointConverterId.post.requestSchema.and(
        z.object({
          params: z.object({
            pointConverterId: z.string(),
          }),
        })
      ),
    responseSchema: ___api_pointConverter_$pointConverterId.post.responseSchema,
  },

  "get:/pointConverters": {
    requestSchema: ___api_pointConverters.get.requestSchema,
    responseSchema: ___api_pointConverters.get.responseSchema,
  },

  "get:/pointGenerators": {
    requestSchema: ___api_pointGenerators.get.requestSchema,
    responseSchema: ___api_pointGenerators.get.responseSchema,
  },

  "get:/post/$postId": {
    requestSchema: ___api_post_$postId.get.requestSchema.and(
      z.object({
        params: z.object({
          postId: z.string(),
        }),
      })
    ),
    responseSchema: ___api_post_$postId.get.responseSchema,
  },

  "get:/posts": {
    requestSchema: ___api_posts.get.requestSchema,
    responseSchema: ___api_posts.get.responseSchema,
  },

  "get:/survey/$surveyId": {
    requestSchema: ___api_survey_$surveyId.get.requestSchema.and(
      z.object({
        params: z.object({
          surveyId: z.string(),
        }),
      })
    ),
    responseSchema: ___api_survey_$surveyId.get.responseSchema,
  },

  "post:/survey/$surveyId": {
    requestSchema: ___api_survey_$surveyId.post.requestSchema.and(
      z.object({
        params: z.object({
          surveyId: z.string(),
        }),
      })
    ),
    responseSchema: ___api_survey_$surveyId.post.responseSchema,
  },

  "get:/transactions": {
    requestSchema: ___api_transactions.get.requestSchema,
    responseSchema: ___api_transactions.get.responseSchema,
  },

  "get:/user/auth": {
    requestSchema: ___api_user_auth.get.requestSchema,
    responseSchema: ___api_user_auth.get.responseSchema,
  },

  "get:/user/communities": {
    requestSchema: ___api_user_communities.get.requestSchema,
    responseSchema: ___api_user_communities.get.responseSchema,
  },

  "post:/user/join": {
    requestSchema: ___api_user_join.post.requestSchema,
    responseSchema: ___api_user_join.post.responseSchema,
  },

  "post:/user/logout": {
    requestSchema: ___api_user_logout.post.requestSchema,
    responseSchema: ___api_user_logout.post.responseSchema,
  },

  "post:/user/password/createPin": {
    requestSchema: ___api_user_password_createPin.post.requestSchema,
    responseSchema: ___api_user_password_createPin.post.responseSchema,
  },

  "post:/user/password/update": {
    requestSchema: ___api_user_password_update.post.requestSchema,
    responseSchema: ___api_user_password_update.post.responseSchema,
  },
};

export const connections = {
  "get:/benefitGenerators": {
    method: "get",
    route: "/benefitGenerators",
    requestSchema: schemas["get:/benefitGenerators"].requestSchema,
    responseSchema: schemas["get:/benefitGenerators"].responseSchema,
  },

  "get:/buttonClicker/$buttonClickerId": {
    method: "get",
    route: "/buttonClicker/$buttonClickerId",
    requestSchema: schemas["get:/buttonClicker/$buttonClickerId"].requestSchema,
    responseSchema:
      schemas["get:/buttonClicker/$buttonClickerId"].responseSchema,
  },

  "post:/buttonClicker/$buttonClickerId": {
    method: "post",
    route: "/buttonClicker/$buttonClickerId",
    requestSchema:
      schemas["post:/buttonClicker/$buttonClickerId"].requestSchema,
    responseSchema:
      schemas["post:/buttonClicker/$buttonClickerId"].responseSchema,
  },

  "get:/calendar": {
    method: "get",
    route: "/calendar",
    requestSchema: schemas["get:/calendar"].requestSchema,
    responseSchema: schemas["get:/calendar"].responseSchema,
  },

  "post:/codeInteraction": {
    method: "post",
    route: "/codeInteraction",
    requestSchema: schemas["post:/codeInteraction"].requestSchema,
    responseSchema: schemas["post:/codeInteraction"].responseSchema,
  },

  "get:/codeTracking/$codeTrackingId": {
    method: "get",
    route: "/codeTracking/$codeTrackingId",
    requestSchema: schemas["get:/codeTracking/$codeTrackingId"].requestSchema,
    responseSchema: schemas["get:/codeTracking/$codeTrackingId"].responseSchema,
  },

  "get:/community/$communityId/context": {
    method: "get",
    route: "/community/$communityId/context",
    requestSchema: schemas["get:/community/$communityId/context"].requestSchema,
    responseSchema:
      schemas["get:/community/$communityId/context"].responseSchema,
  },

  "get:/coupon/$couponId/context": {
    method: "get",
    route: "/coupon/$couponId/context",
    requestSchema: schemas["get:/coupon/$couponId/context"].requestSchema,
    responseSchema: schemas["get:/coupon/$couponId/context"].responseSchema,
  },

  "post:/coupon/$couponId/redeem": {
    method: "post",
    route: "/coupon/$couponId/redeem",
    requestSchema: schemas["post:/coupon/$couponId/redeem"].requestSchema,
    responseSchema: schemas["post:/coupon/$couponId/redeem"].responseSchema,
  },

  "post:/coupon/$couponId/unpack": {
    method: "post",
    route: "/coupon/$couponId/unpack",
    requestSchema: schemas["post:/coupon/$couponId/unpack"].requestSchema,
    responseSchema: schemas["post:/coupon/$couponId/unpack"].responseSchema,
  },

  "get:/coupons": {
    method: "get",
    route: "/coupons",
    requestSchema: schemas["get:/coupons"].requestSchema,
    responseSchema: schemas["get:/coupons"].responseSchema,
  },

  "get:/event/$eventId": {
    method: "get",
    route: "/event/$eventId",
    requestSchema: schemas["get:/event/$eventId"].requestSchema,
    responseSchema: schemas["get:/event/$eventId"].responseSchema,
  },

  "post:/invitation/check": {
    method: "post",
    route: "/invitation/check",
    requestSchema: schemas["post:/invitation/check"].requestSchema,
    responseSchema: schemas["post:/invitation/check"].responseSchema,
  },

  "post:/invitation/join": {
    method: "post",
    route: "/invitation/join",
    requestSchema: schemas["post:/invitation/join"].requestSchema,
    responseSchema: schemas["post:/invitation/join"].responseSchema,
  },

  "get:/pointConverter/$pointConverterId": {
    method: "get",
    route: "/pointConverter/$pointConverterId",
    requestSchema:
      schemas["get:/pointConverter/$pointConverterId"].requestSchema,
    responseSchema:
      schemas["get:/pointConverter/$pointConverterId"].responseSchema,
  },

  "post:/pointConverter/$pointConverterId": {
    method: "post",
    route: "/pointConverter/$pointConverterId",
    requestSchema:
      schemas["post:/pointConverter/$pointConverterId"].requestSchema,
    responseSchema:
      schemas["post:/pointConverter/$pointConverterId"].responseSchema,
  },

  "get:/pointConverters": {
    method: "get",
    route: "/pointConverters",
    requestSchema: schemas["get:/pointConverters"].requestSchema,
    responseSchema: schemas["get:/pointConverters"].responseSchema,
  },

  "get:/pointGenerators": {
    method: "get",
    route: "/pointGenerators",
    requestSchema: schemas["get:/pointGenerators"].requestSchema,
    responseSchema: schemas["get:/pointGenerators"].responseSchema,
  },

  "get:/post/$postId": {
    method: "get",
    route: "/post/$postId",
    requestSchema: schemas["get:/post/$postId"].requestSchema,
    responseSchema: schemas["get:/post/$postId"].responseSchema,
  },

  "get:/posts": {
    method: "get",
    route: "/posts",
    requestSchema: schemas["get:/posts"].requestSchema,
    responseSchema: schemas["get:/posts"].responseSchema,
  },

  "get:/survey/$surveyId": {
    method: "get",
    route: "/survey/$surveyId",
    requestSchema: schemas["get:/survey/$surveyId"].requestSchema,
    responseSchema: schemas["get:/survey/$surveyId"].responseSchema,
  },

  "post:/survey/$surveyId": {
    method: "post",
    route: "/survey/$surveyId",
    requestSchema: schemas["post:/survey/$surveyId"].requestSchema,
    responseSchema: schemas["post:/survey/$surveyId"].responseSchema,
  },

  "get:/transactions": {
    method: "get",
    route: "/transactions",
    requestSchema: schemas["get:/transactions"].requestSchema,
    responseSchema: schemas["get:/transactions"].responseSchema,
  },

  "get:/user/auth": {
    method: "get",
    route: "/user/auth",
    requestSchema: schemas["get:/user/auth"].requestSchema,
    responseSchema: schemas["get:/user/auth"].responseSchema,
  },

  "get:/user/communities": {
    method: "get",
    route: "/user/communities",
    requestSchema: schemas["get:/user/communities"].requestSchema,
    responseSchema: schemas["get:/user/communities"].responseSchema,
  },

  "post:/user/join": {
    method: "post",
    route: "/user/join",
    requestSchema: schemas["post:/user/join"].requestSchema,
    responseSchema: schemas["post:/user/join"].responseSchema,
  },

  "post:/user/logout": {
    method: "post",
    route: "/user/logout",
    requestSchema: schemas["post:/user/logout"].requestSchema,
    responseSchema: schemas["post:/user/logout"].responseSchema,
  },

  "post:/user/password/createPin": {
    method: "post",
    route: "/user/password/createPin",
    requestSchema: schemas["post:/user/password/createPin"].requestSchema,
    responseSchema: schemas["post:/user/password/createPin"].responseSchema,
  },

  "post:/user/password/update": {
    method: "post",
    route: "/user/password/update",
    requestSchema: schemas["post:/user/password/update"].requestSchema,
    responseSchema: schemas["post:/user/password/update"].responseSchema,
  },
};

export type Connections = typeof connections;
export type ConnectionKey = keyof Connections;
export type ConnectionDatas = {
  "get:/benefitGenerators": {
    RequestInput: z.input<
      (typeof schemas)["get:/benefitGenerators"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["get:/benefitGenerators"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["get:/benefitGenerators"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["get:/benefitGenerators"]["responseSchema"]
    >;
  };

  "get:/buttonClicker/$buttonClickerId": {
    RequestInput: z.input<
      (typeof schemas)["get:/buttonClicker/$buttonClickerId"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["get:/buttonClicker/$buttonClickerId"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["get:/buttonClicker/$buttonClickerId"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["get:/buttonClicker/$buttonClickerId"]["responseSchema"]
    >;
  };

  "post:/buttonClicker/$buttonClickerId": {
    RequestInput: z.input<
      (typeof schemas)["post:/buttonClicker/$buttonClickerId"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["post:/buttonClicker/$buttonClickerId"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["post:/buttonClicker/$buttonClickerId"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["post:/buttonClicker/$buttonClickerId"]["responseSchema"]
    >;
  };

  "get:/calendar": {
    RequestInput: z.input<(typeof schemas)["get:/calendar"]["requestSchema"]>;
    RequestTransformed: z.output<
      (typeof schemas)["get:/calendar"]["requestSchema"]
    >;
    ResponseInput: z.input<(typeof schemas)["get:/calendar"]["responseSchema"]>;
    ResponseTransformed: z.output<
      (typeof schemas)["get:/calendar"]["responseSchema"]
    >;
  };

  "post:/codeInteraction": {
    RequestInput: z.input<
      (typeof schemas)["post:/codeInteraction"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["post:/codeInteraction"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["post:/codeInteraction"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["post:/codeInteraction"]["responseSchema"]
    >;
  };

  "get:/codeTracking/$codeTrackingId": {
    RequestInput: z.input<
      (typeof schemas)["get:/codeTracking/$codeTrackingId"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["get:/codeTracking/$codeTrackingId"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["get:/codeTracking/$codeTrackingId"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["get:/codeTracking/$codeTrackingId"]["responseSchema"]
    >;
  };

  "get:/community/$communityId/context": {
    RequestInput: z.input<
      (typeof schemas)["get:/community/$communityId/context"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["get:/community/$communityId/context"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["get:/community/$communityId/context"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["get:/community/$communityId/context"]["responseSchema"]
    >;
  };

  "get:/coupon/$couponId/context": {
    RequestInput: z.input<
      (typeof schemas)["get:/coupon/$couponId/context"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["get:/coupon/$couponId/context"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["get:/coupon/$couponId/context"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["get:/coupon/$couponId/context"]["responseSchema"]
    >;
  };

  "post:/coupon/$couponId/redeem": {
    RequestInput: z.input<
      (typeof schemas)["post:/coupon/$couponId/redeem"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["post:/coupon/$couponId/redeem"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["post:/coupon/$couponId/redeem"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["post:/coupon/$couponId/redeem"]["responseSchema"]
    >;
  };

  "post:/coupon/$couponId/unpack": {
    RequestInput: z.input<
      (typeof schemas)["post:/coupon/$couponId/unpack"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["post:/coupon/$couponId/unpack"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["post:/coupon/$couponId/unpack"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["post:/coupon/$couponId/unpack"]["responseSchema"]
    >;
  };

  "get:/coupons": {
    RequestInput: z.input<(typeof schemas)["get:/coupons"]["requestSchema"]>;
    RequestTransformed: z.output<
      (typeof schemas)["get:/coupons"]["requestSchema"]
    >;
    ResponseInput: z.input<(typeof schemas)["get:/coupons"]["responseSchema"]>;
    ResponseTransformed: z.output<
      (typeof schemas)["get:/coupons"]["responseSchema"]
    >;
  };

  "get:/event/$eventId": {
    RequestInput: z.input<
      (typeof schemas)["get:/event/$eventId"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["get:/event/$eventId"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["get:/event/$eventId"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["get:/event/$eventId"]["responseSchema"]
    >;
  };

  "post:/invitation/check": {
    RequestInput: z.input<
      (typeof schemas)["post:/invitation/check"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["post:/invitation/check"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["post:/invitation/check"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["post:/invitation/check"]["responseSchema"]
    >;
  };

  "post:/invitation/join": {
    RequestInput: z.input<
      (typeof schemas)["post:/invitation/join"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["post:/invitation/join"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["post:/invitation/join"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["post:/invitation/join"]["responseSchema"]
    >;
  };

  "get:/pointConverter/$pointConverterId": {
    RequestInput: z.input<
      (typeof schemas)["get:/pointConverter/$pointConverterId"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["get:/pointConverter/$pointConverterId"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["get:/pointConverter/$pointConverterId"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["get:/pointConverter/$pointConverterId"]["responseSchema"]
    >;
  };

  "post:/pointConverter/$pointConverterId": {
    RequestInput: z.input<
      (typeof schemas)["post:/pointConverter/$pointConverterId"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["post:/pointConverter/$pointConverterId"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["post:/pointConverter/$pointConverterId"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["post:/pointConverter/$pointConverterId"]["responseSchema"]
    >;
  };

  "get:/pointConverters": {
    RequestInput: z.input<
      (typeof schemas)["get:/pointConverters"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["get:/pointConverters"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["get:/pointConverters"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["get:/pointConverters"]["responseSchema"]
    >;
  };

  "get:/pointGenerators": {
    RequestInput: z.input<
      (typeof schemas)["get:/pointGenerators"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["get:/pointGenerators"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["get:/pointGenerators"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["get:/pointGenerators"]["responseSchema"]
    >;
  };

  "get:/post/$postId": {
    RequestInput: z.input<
      (typeof schemas)["get:/post/$postId"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["get:/post/$postId"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["get:/post/$postId"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["get:/post/$postId"]["responseSchema"]
    >;
  };

  "get:/posts": {
    RequestInput: z.input<(typeof schemas)["get:/posts"]["requestSchema"]>;
    RequestTransformed: z.output<
      (typeof schemas)["get:/posts"]["requestSchema"]
    >;
    ResponseInput: z.input<(typeof schemas)["get:/posts"]["responseSchema"]>;
    ResponseTransformed: z.output<
      (typeof schemas)["get:/posts"]["responseSchema"]
    >;
  };

  "get:/survey/$surveyId": {
    RequestInput: z.input<
      (typeof schemas)["get:/survey/$surveyId"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["get:/survey/$surveyId"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["get:/survey/$surveyId"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["get:/survey/$surveyId"]["responseSchema"]
    >;
  };

  "post:/survey/$surveyId": {
    RequestInput: z.input<
      (typeof schemas)["post:/survey/$surveyId"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["post:/survey/$surveyId"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["post:/survey/$surveyId"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["post:/survey/$surveyId"]["responseSchema"]
    >;
  };

  "get:/transactions": {
    RequestInput: z.input<
      (typeof schemas)["get:/transactions"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["get:/transactions"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["get:/transactions"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["get:/transactions"]["responseSchema"]
    >;
  };

  "get:/user/auth": {
    RequestInput: z.input<(typeof schemas)["get:/user/auth"]["requestSchema"]>;
    RequestTransformed: z.output<
      (typeof schemas)["get:/user/auth"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["get:/user/auth"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["get:/user/auth"]["responseSchema"]
    >;
  };

  "get:/user/communities": {
    RequestInput: z.input<
      (typeof schemas)["get:/user/communities"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["get:/user/communities"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["get:/user/communities"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["get:/user/communities"]["responseSchema"]
    >;
  };

  "post:/user/join": {
    RequestInput: z.input<(typeof schemas)["post:/user/join"]["requestSchema"]>;
    RequestTransformed: z.output<
      (typeof schemas)["post:/user/join"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["post:/user/join"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["post:/user/join"]["responseSchema"]
    >;
  };

  "post:/user/logout": {
    RequestInput: z.input<
      (typeof schemas)["post:/user/logout"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["post:/user/logout"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["post:/user/logout"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["post:/user/logout"]["responseSchema"]
    >;
  };

  "post:/user/password/createPin": {
    RequestInput: z.input<
      (typeof schemas)["post:/user/password/createPin"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["post:/user/password/createPin"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["post:/user/password/createPin"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["post:/user/password/createPin"]["responseSchema"]
    >;
  };

  "post:/user/password/update": {
    RequestInput: z.input<
      (typeof schemas)["post:/user/password/update"]["requestSchema"]
    >;
    RequestTransformed: z.output<
      (typeof schemas)["post:/user/password/update"]["requestSchema"]
    >;
    ResponseInput: z.input<
      (typeof schemas)["post:/user/password/update"]["responseSchema"]
    >;
    ResponseTransformed: z.output<
      (typeof schemas)["post:/user/password/update"]["responseSchema"]
    >;
  };
};

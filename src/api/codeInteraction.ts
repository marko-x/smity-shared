import { z } from "zod";
import { zNullableDate } from "../utils/customZ";

export const post = {
  requestSchema: z.object({
    body: z.object({
      code: z.string(),
    }),
  }),
  responseSchema: z.object({
    code: z.string(),
    codeInteraction: z.object({
      userId: z.string().nullable(),
      communityInvitation: z
        .object({
          communityId: z.string(),
          name: z.string(),
          description: z.string(),
        })
        .nullable(),
      joinableCommunityCampaigns: z.array(
        z.object({
          communityId: z.string(),
          communityName: z.string(),
          campaignId: z.string(),
          campaignDescription: z.string(),
          invitationCode: z.string(),
        })
      ),
      codeTrackerResults: z.array(
        z.object({
          campaignId: z.string(),
          codeTrackingId: z.string(),
          communityName: z.string(),
          communityId: z.string(),
          state: z.enum(["completed", "uncompleted"]),
          generatedCouponId: z.string().nullable(),
          generatedPoints: z.number().nullable(),
        })
      ),
      cooldowns: z.array(
        z.object({
          campaignId: z.string(),
          codeTrackingId: z.string(),
          communityName: z.string(),
          communityId: z.string(),
          multipleParticipation: z.boolean(),
          cooldownUntil: zNullableDate(false),
          codeTrackerId: z.string(),
        })
      ),
      couponLinks: z.array(
        z.object({
          couponId: z.string(),
          locationCode: z.string(),
          label: z.string(),
        })
      ),
    }),
  }),
};

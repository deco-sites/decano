import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 400,
  site: "decano",
  domains: ["decano.deco.site"],
});
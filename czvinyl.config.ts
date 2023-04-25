import type { Config } from "cz-vinyl";

const czvinylConfig: Config = {
  headerFormat: "{type}: {emoji} {subject}",
  allowEmptyTicketIdForBranches: ["main"],
  skipTicketId: true,

};

export default czvinylConfig;

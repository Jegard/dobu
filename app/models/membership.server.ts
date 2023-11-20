import type { Memberships } from "@prisma/client";

import { prisma } from "~/db.server";

export function getMemberships() {
  return prisma.memberships.findMany();
}

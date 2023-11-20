import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "test@test.com";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("password", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.memberships.create({
    data: {
      name: "Basic (1 martial art – 2 sessions per week) – monthly fee",
      price: "£25.00",
    },
  });

  await prisma.memberships.create({
    data: {
      name: "Intermediate (1 martial art – 3 sessions per week) – monthly fee",
      price: "£35.00",
    },
  });

  await prisma.memberships.create({
    data: {
      name: "Advanced (any 2 martial arts – 5 sessions per week) – monthly fee",
      price: "£45.00",
    },
  });

  await prisma.memberships.create({
    data: {
      name: "Elite (Unlimited classes)",
      price: "£60.00",
    },
  });

  await prisma.memberships.create({
    data: {
      name: "Private martial arts tuition – per hour",
      price: "£15.00",
    },
  });

  await prisma.memberships.create({
    data: {
      name: "Junior membership – can attend all-kids martial arts",
      price: "£15.00",
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

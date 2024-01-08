/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
// import * as bcrypt from 'bcrypt';
// initialize Prisma Client
const prisma = new PrismaClient();
// const roundsOfHashing = 10;
async function main() {
  // create two dummy articles
  const kategori1 = await prisma.kategori.upsert({
    where: { id: 1 },
    update: {},
    create: {
      Nama: 'Bangunan',
    },
  });
  const tipe1 = await prisma.tipe.upsert({
    where: { id: 1 },
    update: {},
    create: {
      nama_tipe : 'kerusakan bangunan',
      id_kategori: 1,

    },
  });
  console.log({ kategori1, tipe1 });
}
// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });

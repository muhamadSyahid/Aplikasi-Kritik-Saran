/*
  Warnings:

  - You are about to drop the column `id_kategori` on the `krisar` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Nama]` on the table `kategori` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nama_tipe]` on the table `tipe` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `krisar` DROP FOREIGN KEY `id_kategori2`;

-- AlterTable
ALTER TABLE `krisar` DROP COLUMN `id_kategori`;

-- CreateIndex
CREATE UNIQUE INDEX `Nama_UNIQUE` ON `kategori`(`Nama`);

-- CreateIndex
CREATE UNIQUE INDEX `nama_tipe_UNIQUE` ON `tipe`(`nama_tipe`);

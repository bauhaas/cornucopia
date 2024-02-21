/*
  Warnings:

  - Added the required column `director` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `runtime` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "director" TEXT NOT NULL,
ADD COLUMN     "runtime" INTEGER NOT NULL;

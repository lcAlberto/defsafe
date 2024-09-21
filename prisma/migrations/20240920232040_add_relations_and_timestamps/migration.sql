/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Cat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cat_id` to the `Adoption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Adoption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Cat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Adoption" ADD COLUMN     "cat_id" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Cat" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cat_name_key" ON "Cat"("name");

-- AddForeignKey
ALTER TABLE "Adoption" ADD CONSTRAINT "Adoption_cat_id_fkey" FOREIGN KEY ("cat_id") REFERENCES "Cat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

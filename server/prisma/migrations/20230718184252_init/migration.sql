/*
  Warnings:

  - Made the column `image` on table `post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `post_edit` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `post` MODIFY `image` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `post_edit` MODIFY `image` TEXT NOT NULL;

/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Test` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Test_email_key" ON "Test"("email");

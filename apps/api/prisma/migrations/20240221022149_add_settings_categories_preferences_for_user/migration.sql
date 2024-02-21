-- AlterTable
ALTER TABLE "User" ADD COLUMN     "displayRecentlyWatched" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "displayTop10" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "displayWatchlist" BOOLEAN NOT NULL DEFAULT true;

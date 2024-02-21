-- CreateTable
CREATE TABLE "Actor" (
    "id" SERIAL NOT NULL,
    "tmdb_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profile_path" TEXT NOT NULL,

    CONSTRAINT "Actor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ActorMovies" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Actor_tmdb_id_key" ON "Actor"("tmdb_id");

-- CreateIndex
CREATE UNIQUE INDEX "_ActorMovies_AB_unique" ON "_ActorMovies"("A", "B");

-- CreateIndex
CREATE INDEX "_ActorMovies_B_index" ON "_ActorMovies"("B");

-- AddForeignKey
ALTER TABLE "_ActorMovies" ADD CONSTRAINT "_ActorMovies_A_fkey" FOREIGN KEY ("A") REFERENCES "Actor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActorMovies" ADD CONSTRAINT "_ActorMovies_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

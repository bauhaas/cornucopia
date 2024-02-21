/* eslint-disable @typescript-eslint/no-unused-vars */
import { ActorCard } from "./ActorCard";

export const Filmography = () => {
  // const { data: watchedMovies } = useQuery({
  //   queryKey: ["getWatchedMovies"],
  //   queryFn: async () => {
  //     const res = await axios.get(
  //       `${import.meta.env.VITE_BASE_API_URL}/api/users/1/watched-movies`
  //     );

  //     return res.data;
  //   },
  // });

  // console.log(watchedMovies);
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-slate-200 p-4">
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
      </div>
    </>
  );
};

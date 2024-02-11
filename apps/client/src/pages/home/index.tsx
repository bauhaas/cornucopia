import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import logo from "../../assets/logo.svg";

export const Home = () => {
  const { data } = useQuery({
    queryKey: ["getWatchedMovies"],
    queryFn: async () => {
      return await axios.get(
        "https://cornucopia-korkrane.vercel.app/api/users/1/watched-movies"
      );
    },
  });

  console.log(data);
  return (
    <>
      <div className="text-red-500">Home</div>
      <img src={logo} alt="Home illustration" />
    </>
  );
};

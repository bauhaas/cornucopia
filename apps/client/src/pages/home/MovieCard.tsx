type MovieCardProps = {
  title: string;
};

export const MovieCard = ({ title }: MovieCardProps) => {
  return (
    <div className="flex flex-col rounded-md">
      <img
        className="object-contain h-48 rounded-md "
        src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
      />
      <p className="text-center">{title}</p>
    </div>
  );
};

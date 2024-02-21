import logo from "../../assets/logo.svg";

export const Hero = () => {
  return (
    <div className="container relative grid items-center pt-20 gap-6 pb-8  ">
      <div className="flex gap-12">
        <img src={logo} alt="Home illustration" width={200} height={200} />

        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Track easily your movie journey <br className="hidden sm:inline" />
            <span className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-normal">
              Made for stats enjoyers
            </span>
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Packed with customizable options, log each movie you watch with
            ease.
          </p>
        </div>
      </div>
    </div>
  );
};

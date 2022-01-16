import Image from "next/image";

function Banner() {
  return (
    <div className="relative">
      <div className="relative h-[350px]">
        <Image
          src="https://links.papareact.com/0fm"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-1/2 text-center w-full space-y-4">
          <p className="font-bold text-3xl">Not sure where to go ? Perfect</p>
          <button className="btn bg-white animate-pulse font-bold text-purple-500 px-10 py-4 shadow-md rounded-full hover:shadow-2xl hover:scale-100 transform transition duration-100">I'm flexible</button>
      </div>
    </div>
  );
}

export default Banner;

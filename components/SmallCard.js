import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex space-x-3 items-center hover:bg-gray-100 cursor-pointer transform transition duration-300">
      <div className="relative h-24 w-24">
        <Image className="rounded-2xl" src={img} layout="fill" objectFit="contain" />
      </div>
      <div className="space-y-2">
          <p className="font-bold">{location} </p>
          <p>{distance} </p>
      </div>
    </div>
  );
}

export default SmallCard;

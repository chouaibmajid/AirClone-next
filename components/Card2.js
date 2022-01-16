import Image from "next/image";

function Card2({ img, title }) {
  return (
    <div className="space-y-3 cursor-pointer">
      <div className="relative h-[250px] w-[250px]">
        <Image
          className="rounded-3xl"
          src={img}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div>{title} </div>
    </div>
  );
}

export default Card2;

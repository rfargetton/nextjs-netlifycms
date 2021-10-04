import Image from "next/image";
import { BlurhashCanvas } from "react-blurhash";

export default function BlurhashImage({ imageProps }) {
  return (
    <>
      <BlurhashCanvas
        {...imageProps.blurhash}
        punch={1}
        className="absolute inset-0 w-full h-full"
      />
      <Image {...imageProps.img} className="object-cover object-center" />
    </>
  );
}

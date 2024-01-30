import Image from "next/image";
import { BlurhashCanvas } from "react-blurhash";

export default function ImageWithPlaceholder({ imageProps }) {
  return (
      <Image {...imageProps.img}  className="object-cover object-center" placeholder="blur" blurDataURL={imageProps.base64} />
  );
}

import Image from "next/image";

export default function ImageWithPlaceholder({ imageProps }) {
  return (
      <Image {...imageProps.img}  className="object-cover object-center" placeholder="blur" blurDataURL={imageProps.base64} />
  );
}

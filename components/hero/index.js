import Image from 'next/image';

import Container from "../container";

export default function Hero({image, children}){
  return (
    <div className="bg-gray-200 py-8 md:py-16">
      <Container>
        <div className="relative">
          <div className="relative md:absolute z-20 h-full w-full md:w-6/12 my-6 flex flex-col justify-center items-start">
            {children}
          </div>
          <div className="ml-auto h-48 md:h-96 w-full md:w-8/12 relative rounded-r-xl overflow-hidden">
            <div className="absolute z-10 top-0 bottom-0 w-4/12 bg-gradient-to-r from-gray-200 to-transparent" ></div>
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
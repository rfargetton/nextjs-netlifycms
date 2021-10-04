import Container from "@components/container";
import BlurhashImage from "@components/blurhash-image";

export default function Hero({ imageProps, children }) {
  return (
    <div className="bg-gray-200 py-8 md:py-16">
      <Container>
        <div className="relative">
          <div className="relative md:absolute z-20 h-full w-full md:w-6/12 my-6 flex flex-col justify-center items-start">
            {children}
          </div>
          <div className="ml-auto w-full md:w-8/12 max-h-96 relative rounded-r-xl overflow-hidden flex">
            <div className="absolute z-10 top-0 bottom-0 w-4/12 bg-gradient-to-r from-gray-200 to-transparent"></div>
            <BlurhashImage 
              imageProps={imageProps}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
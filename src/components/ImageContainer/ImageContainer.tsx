import Image from "next/image";
import { useState } from "react";

interface ImageProps {
  image: string;
  name: string;
}

const ImageContainer = ({ image, name }: ImageProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[250px] h-[350px]">
        <Image
          src={image}
          alt={name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setLoading(false)}
        />
        {loading && (
          <div className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div className="flex items-center justify-center w-full h-[350px] bg-gray-700 rounded sm:w-96 ">
              <svg
                className="w-10 h-10 text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageContainer;

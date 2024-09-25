import Image from 'next/image';

const BannerImage = ({ src, alt, text }: { src: string; alt: string; text: string }) => {
  return (
    <div className="banner-image-container relative">
      <div className="scale">
        <Image src={src} alt={alt} layout="fill" objectFit="cover" priority />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-uppercase rounded p-4 text-2xl text-white md:text-[60px]">{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;

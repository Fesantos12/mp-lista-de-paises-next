import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface CardCountryProps {
  image: string | StaticImport;
  name: string;
  alt: string;
}

export const CardCountry = ({ image, name, alt }: CardCountryProps) => {
  return (
    <div className="w-[241px] h-[226px] bg-white rounded-xl flex flex-col items-center justify-center gap-3.5 p-4">
      <Image
        src={image}
        alt={alt}
        width={220}
        height={130}
        className="rounded-xl"
      />
      <h3 className="text-2xl font-bold text-black text-center">{name}</h3>
    </div>
  );
};

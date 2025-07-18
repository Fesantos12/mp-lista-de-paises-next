import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface CardDetailProps {
  cca3: string;
  flags: { png: string; svg: string; alt?: string };
  name: { common: string };
  capital: string[];
  region: string;
  population: string;
  languages: { [key: string]: string };
}

export const CardDetail = ({
  flags,
  name,
  capital,
  region,
  languages,
  population,
}: CardDetailProps) => {
  return (
    <div className="w-full">
      <h1 className="text-center mt-8 text-3xl font-bold">{name.common}</h1>
      <Link href="/" className="text-black flex items-center gap-1">
        <ArrowLeft size={16} /> Voltar
      </Link>
      <div className="w-full rounded-2xl mt-4 flex flex-col-reverse items-center justify-around gap-6 xl:flex-row md:gap-2 bg-white p-8">
        <ul className="space-y-1">
          <li>🏙️ Capital: {capital.join(', ')}</li>
          <li>🗺️ Continente: {region}</li>
          <li>👨‍👩‍👧‍👦 População: {population}</li>
          <li className="flex flex-col gap-2">
            🗣️ Línguas faladas:
            <div className="flex gap-2">
              {Object.values(languages).map((lang, index) => (
                <p
                  key={index}
                  className="bg-blue-700 rounded-xl w-16 p-1 text-center text-white text-[12px] font-normal"
                >
                  {lang}
                </p>
              ))}
            </div>
          </li>
        </ul>
        <Image
          src={flags.png}
          width={200}
          height={120}
          alt={flags.alt || name.common}
          className="mt-4 rounded"
        />
      </div>
    </div>
  );
};

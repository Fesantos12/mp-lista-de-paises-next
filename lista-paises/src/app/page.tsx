import { CardCountry } from '@/components/CardCoutry';
import Link from 'next/link';

type Country = {
  cca3: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
  };
};

export default async function Home() {
  const response = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,flags,cca3'
  );
  const data: Country[] = await response.json();

  return (
    <div className="w-full px-10 md:px-52 mt-16">
      <div className="w-full grid grid-cols-2 justify-center gap-8 md:grid-cols-5">
        {data.map((pais) => (
          <Link href={`/detalhe/${pais.cca3}`} key={pais.cca3}>
            <CardCountry
              image={pais.flags.svg}
              alt={pais.flags.alt}
              name={pais.name.common}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

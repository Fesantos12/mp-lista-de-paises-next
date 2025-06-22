import Link from 'next/link';
import { CardCountry } from './CardCoutry';

interface DetailPageProps {
  params: { code: string };
}

type Country = {
  cca3: string;
  flags: { png: string; svg: string; alt?: string };
  name: { common: string };
  capital: string[];
  region: string;
  population: string;
  languages: string;
  borders: string[];
};

export async function PaisesFronteira({ params }: DetailPageProps) {
  const { code } = params;

  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const data: Country[] = await response.json();
  const country = data[0];

  if (country.borders && country.borders.length > 0) {
    const bordersCodes = country.borders.join(',');
    const neighborsRes = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${bordersCodes}`
    );
    const neighborsData = await neighborsRes.json();

    return (
      <div className="w-full flex flex-wrap justify-center gap-8">
        {neighborsData.map((pais: Country) => (
          <Link href={`/detalhe/${pais.cca3}`} key={pais.cca3}>
            <CardCountry
              image={pais.flags.svg}
              alt={pais.flags.alt}
              name={pais.name.common}
            />
          </Link>
        ))}
      </div>
    );
  }
}

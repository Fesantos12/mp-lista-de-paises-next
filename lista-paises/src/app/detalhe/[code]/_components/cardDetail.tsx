import Link from 'next/link';

interface cardDetailProps {
  cca3: string;
  flags: { png: string; svg: string; alt?: string };
  name: { common: string };
  capital: string[];
  region: string;
  population: string;
  languages: string;
}

export const CardDetail = ({
  flags,
  name,
  capital,
  region,
  languages,
  population,
}: cardDetailProps) => {
  return (
    <div className="w-full">
      <h1 className="text-center mt-8">{name.common}</h1>
      <div>
        <Link href="/">voltar</Link>
        <div>
          <ul>
            <li>
              🏙️Capital: <p>{capital}</p>
            </li>
            <li>
              🗺️Continente: <p>{region}</p>
            </li>
            <li>
              👨🏽‍👩🏽‍👧🏽‍👦🏽População: <p>{population}</p>
            </li>
            <li>
              🗣️Linguas faladas: <p>{languages}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

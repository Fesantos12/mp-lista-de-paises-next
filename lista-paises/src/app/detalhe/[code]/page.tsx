import { CardDetail } from './_components/cardDetail';

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
};

export default async function DetailCountry({ params }: DetailPageProps) {
  const { code } = params;

  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const data: Country[] = await response.json();
  const country = data[0];

  // função que abrevia a população de 1100 para 1.1mil
  function abreviarNumero(valor: string): string {
    const num = parseFloat(valor); // converte a string pra número

    if (isNaN(num)) return '—'; // caso a string esteja inválida

    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + ' bi';
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + ' mi';
    if (num >= 1_000) return (num / 1_000).toFixed(1) + ' mil';
    return num.toString();
  }

  return (
    <div className="w-full px-52">
      <CardDetail
        capital={country.capital}
        region={country.region}
        languages={Object.values(country.languages).join(', ')}
        population={abreviarNumero(country.population)}
        name={country.name}
        flags={country.flags}
        cca3={country.cca3}
      />
    </div>
  );
}

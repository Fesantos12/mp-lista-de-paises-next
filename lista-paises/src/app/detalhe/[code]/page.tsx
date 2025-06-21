interface DetailPageProps {
  params: { code: string };
}

type CountryDetails = {
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

export default async function DetailCoutry({ params }: DetailPageProps) {
  const { code } = await params;

  return <div>detalhe do post {}</div>;
}

import Container from './Container';

export default function PageHeader({ data }) {
  const { pageTitle, caption } = data;
  return (
    <div className="flex flex-col items-center text-white text-center py-10">
      <Container>
        <h1 className="font-cursive text-6xl mb-10">{pageTitle}</h1>
        <p className="text-2xl lg:px-36 md:px-24">{caption}</p>
      </Container>
    </div>
  );
}

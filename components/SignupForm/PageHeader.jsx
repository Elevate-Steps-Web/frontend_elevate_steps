import Container from '../Container';

export default function PageHeader({ pageHeader }) {
  const { pageTitle, caption } = pageHeader;
  return (
    <div className="flex flex-col items-center text-center py-10 mt-8">
      <Container>
        <h1 className="font-cursive text-6xl mb-10 text-primary-blue">
          {pageTitle}
        </h1>
        {caption && <p className="text-2xl lg:px-36 md:px-24">{caption}</p>}
      </Container>
    </div>
  );
}

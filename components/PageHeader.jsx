import Container from './Container';

export default function PageHeader({
  data,
  titleStyle = '',
  captionStyle = '',
}) {
  const { pageTitle, caption } = data;
  return (
    <div className="flex flex-col items-center text-center py-10">
      <Container>
        <h1 className={`font-cursive text-6xl mb-10 ${titleStyle}`}>
          {pageTitle}
        </h1>
        <p className={`text-2xl lg:px-36 md:px-24 ${captionStyle}`}>
          {caption}
        </p>
      </Container>
    </div>
  );
}

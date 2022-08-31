import BouncingArrow from '../BouncingArrow';
import Container from '../Container';

export default function FormIntroSection({ title, introText, direction }) {
  return (
    <div className="flex flex-col items-center text-center py-10">
      <Container>
        <h1 className="font-cursive text-6xl mb-10 text-green font-bold">
          {title}
        </h1>
        <p className="text-2xl lg:px-36 md:px-24 text-white ">{introText}</p>
        <span className="block text-xl text-white mb-16">
          Fields marked with
          {' '}
          <span className="text-orange inline text-3xl">{' * '}</span>
          are required.
        </span>
        <BouncingArrow direction={direction} />
      </Container>
    </div>
  );
}

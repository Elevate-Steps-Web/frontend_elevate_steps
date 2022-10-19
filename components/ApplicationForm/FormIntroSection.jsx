import BouncingArrow from '../BouncingArrow';

export default function FormIntroSection({ title, introText, direction }) {
  return (
    <div className="flex flex-col md:items-center text-center lg:py-10 px-4">
      <h1 className="font-cursive lg:text-6xl text-4xl mb-10 text-green font-bold px-4 lg:px-8">
        {title}
      </h1>
      <p className="text-xl lg:text-2xl px-6 lg:px-36 md:px-24 text-white ">
        {introText}
      </p>
      <span className="block text-lg lg:text-xl text-white mb-4 md:mb-16 mt-8 italic">
        Fields marked with
        {' '}
        <span className="text-orange inline lg:text-2xl">{' * '}</span>
        are required.
      </span>
      <BouncingArrow direction={direction} />
    </div>
  );
}

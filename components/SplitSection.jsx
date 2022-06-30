import Link from 'next/link';

export default function SplitSection({ data }) {
  const {
    heading, description, linkText, linkRoute,
  } = data;
  return (
    <div id="split-section" className="h-[42rem] grid grid-cols-2">
      <div id="picture" className="h-full w-full bg-orange">
        {/* <AdvancedImage
          className="object-cover object-center h-full md:h-fit"
          cldImg={cld.image(imageData[0].attributes.provider_metadata.public_id)}
        /> */}
      </div>
      <div
        id="bg_text"
        className="flex flex-col justify-center h-full w-full bg-primary-blue"
      >
        <div className="flex flex-row items-center mx-auto max-w-lg">
          <div id="content" className="flex flex-col text-center gap-y-5">
            <h1 className="text-5xl text-white">
              {heading || 'Our Objective? Your Career Success'}
            </h1>
            <p className="text-xl text-secondary-blue">
              {description || 'We help prepare young, upcoming African professionals to succeed in their future career endeavours. '}
            </p>
            <Link href={linkRoute || '#'} passHref>
              <a className="text-lg hover:text-secondary-blue hover:underline text-green">
                {linkText || 'Click here to learn more! >'}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

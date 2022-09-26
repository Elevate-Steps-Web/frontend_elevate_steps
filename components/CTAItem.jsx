import Link from 'next/link';

export default function CTAItem({ data }) {
  const {
    header, caption, linkText, linkRoute, downloadAsset,
  } = data;
  return (
    <div className="flex flex-col items-center flex-1 gap-y-3 text-center">
      <h2 className="text-primary-blue text-3xl font-bold">{header}</h2>
      <p className="text-neutral-700 text-xl">{caption}</p>
      {downloadAsset && downloadAsset.data !== null ? (
        <a
          href={downloadAsset.data.attributes.url}
          target="_blank"
          className="text-lg hover:text-white text-green hover:bg-green btn btn-outline border-green mt-4"
          rel="noreferrer"
        >
          {linkText}
        </a>
      ) : (
        <Link href={linkRoute} passHref>
          <a className="text-lg hover:text-white text-green hover:text-white hover:bg-green btn btn-outline border-green mt-4">
            {linkText}
          </a>
        </Link>
      )}
    </div>
  );
}

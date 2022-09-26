export function CTAItem({ cta, open = true }) {
  const {
    header, caption, linkText, linkRoute, downloadAsset,
  } = cta;
  return (
    <>
      {header && (
        <h3 className="text-center text-primary-blue text-3xl font-bold">
          {header}
        </h3>
      )}
      <p className="text-neutral-700 text-xl text-center">{caption}</p>
      <a
        role="button"
        href={linkRoute}
        className={`text-2xl mt-4 lg:mx-auto ${
          open
            ? 'hover:text-primary-blue btn btn-green hover:bg-green text-green hover:border-green border-green'
            : 'hover:text-secondary-blue text-orange hover:bg-orange  hover:border-orange btn btn-white border-orange'
        }`}
      >
        {linkText}
      </a>
      {downloadAsset && downloadAsset.data !== null && (
        <a
          href={downloadAsset.data.attributes.url}
          target="_blank"
          className="text-lg text-green hover:text-primary-blue hover:bg-green btn btn-outline border-green mt-4"
          rel="noreferrer"
        >
          {linkText}
        </a>
      )}
    </>
  );
}

export default function ApplicationCTASection({ data }) {
  const { isApplicationOpen, appOpenCTA, appClosedCTA } = data;
  return (
    <div className="pb-16 flex flex-col gap-2 justify-center">
      {isApplicationOpen
        ? appOpenCTA && <CTAItem cta={appOpenCTA} open />
        : appClosedCTA && <CTAItem cta={appOpenCTA} open={false} />}
    </div>
  );
}

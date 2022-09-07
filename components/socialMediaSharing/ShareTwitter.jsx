import { useRouter } from 'next/router';

export default function ShareTwitter({ locale }) {
  const router = useRouter();
  function renderButton(routeLocale) {
    switch (routeLocale) {
      case 'en':
        return (
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            className="twitter-share-button"
            data-size="large"
            data-text="Check out this article!"
            data-url={URL + router.asPath}
            data-via="elevate_steps"
            data-lang="en"
            data-show-count="false"
          >
            Tweet
          </a>
        );
      case 'fr':
        return (
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            className="twitter-share-button"
            data-size="large"
            data-text="Lire cet article!"
            data-url={URL + router.asPath}
            data-via="elevate_steps"
            data-lang="fr"
            data-show-count="false"
          >
            Tweet
          </a>
        );
      default:
        return (
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            className="twitter-share-button"
            data-size="large"
            data-text="Check out this article!"
            data-url={URL + router.asPath}
            data-via="elevate_steps"
            data-lang="en"
            data-show-count="false"
          >
            Tweet
          </a>
        );
    }
  }
  return <>{renderButton(locale)}</>;
}

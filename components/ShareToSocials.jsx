import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

import { useRouter } from 'next/router';

export default function ShareToSocials({ target, pageTitle }) {
  const router = useRouter();
  const { URL } = process.env;
  function renderShare(network) {
    switch (network) {
      case 'Twitter':
        return (
          <TwitterShareButton
            url={URL + router.asPath}
            title={pageTitle}
            via="elevate_steps"
            hashtags={['DoUnconventionalThings']}
          >
            <TwitterIcon size={36} round />
          </TwitterShareButton>
        );
      case 'Facebook':
        return (
          <FacebookShareButton
            url={URL + router.asPath}
            quote={pageTitle}
            hashtags="DoUnconventionalThings"
          >
            <FacebookIcon size={36} round />
          </FacebookShareButton>
        );
      case 'WhatsApp':
        return (
          <WhatsappShareButton url={URL + router.asPath} title={pageTitle}>
            <WhatsappIcon size={36} round />
          </WhatsappShareButton>
        );
      case 'Telegram':
        return (
          <TelegramShareButton url={URL + router.asPath} title={pageTitle}>
            <TelegramIcon size={36} round />
          </TelegramShareButton>
        );
      case 'LinkedIn':
        return (
          <LinkedinShareButton url={URL + router.asPath} title={pageTitle}>
            <LinkedinIcon size={36} round />
          </LinkedinShareButton>
        );
      default:
        return <span />;
    }
  }
  return <>{renderShare(target)}</>;
}

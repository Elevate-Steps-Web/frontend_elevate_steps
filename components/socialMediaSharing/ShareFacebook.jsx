import { useRouter } from 'next/router';

export default function ShareFacebook() {
  const router = useRouter();
  const { URL } = process.env;

  return (
    <iframe
      title="Share to facebook"
      src={`https://www.facebook.com/plugins/share_button.php?href=${encodeURI(
        URL + router.asPath,
      )}&layout=button&size=large&appId=393841796264916&width=77&height=28`}
      width="77"
      height="28"
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  );
}

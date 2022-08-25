export default function SocialMediaHandle({ data }) {
  function renderIcon(platform) {
    switch (platform) {
      case 'Instagram':
        return <i className="bi bi-instagram" />;
      case 'Twitter':
        return <i className="bi bi-twitter" />;
      case 'LinkedIn':
        return <i className="bi bi-linkedin" />;
      case 'Facebook':
        return <i className="bi bi-facebook" />;
      default:
        return <i className="bi bi-bug" />;
    }
  }

  const { linkText, linkRoute, platform } = data;
  return (
    <div className="flex flex-row justify-center text-white text-3xl lg:text-2xl">
      <a className="hover:text-secondary-blue" href={linkRoute}>
        {platform && renderIcon(platform)}
        {linkText && linkRoute && <span className="ml-2">{linkText}</span>}
      </a>
    </div>
  );
}

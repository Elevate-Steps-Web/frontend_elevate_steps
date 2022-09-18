export default function SocialMediaHandle({
  data,
  fullHandle = true,
  displayColored = false,
}) {
  function renderIcon(platform) {
    switch (platform) {
      case 'Instagram':
        return (
          <i
            className={`bi bi-instagram ${
              displayColored
                ? 'text-[#833AB4] hover:text-[#5B51D8]'
                : 'text-white'
            }`}
          />
        );
      case 'Twitter':
        return (
          <i
            className={`bi bi-twitter ${
              displayColored
                ? 'text-[#1DA1F2] hover:text-sky-400'
                : 'text-white'
            }`}
          />
        );
      case 'LinkedIn':
        return (
          <i
            className={`bi bi-linkedin ${
              displayColored
                ? 'text-[#0072b1] hover:text-cyan-500'
                : 'text-white'
            }`}
          />
        );
      case 'Facebook':
        return (
          <i
            className={`bi bi-facebook ${
              displayColored
                ? 'text-blue-600 hover:text-blue-400'
                : 'text-white'
            }`}
          />
        );
      default:
        return (
          <i
            className={`bi bi-bug ${
              displayColored ? 'text-purple-500' : 'text-white'
            }`}
          />
        );
    }
  }

  const { linkText, linkRoute, platform } = data;
  return (
    <div className="flex flex-row justify-center text-3xl lg:text-2xl">
      <a className="hover:text-secondary-blue" href={linkRoute}>
        {platform && renderIcon(platform)}
        {linkText && linkRoute && fullHandle && (
          <span className="ml-2">{linkText}</span>
        )}
      </a>
    </div>
  );
}

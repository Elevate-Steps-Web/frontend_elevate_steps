import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

export default function ProfileCatalogEntry({
  firstName,
  middleName,
  lastName,
  socialMedia,
  position,
  email,
  photo,
}) {
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

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'elevate-steps',
    },
    url: {
      secure: true,
    },
  });
  const fullName = middleName
    ? `${firstName} ${middleName} ${lastName}`
    : `${firstName} ${lastName}`;
  return (
    <div
      className="mt-5 w-full md:w-10/12 mx-auto border-2 h-36 rounded-lg flex flex-row"
      id="grid item"
    >
      <div className="h-full w-1/3 md:w-1/4" id="profile-pic">
        {photo.data && (
          <AdvancedImage
            className="object-cover object-center rounded-l-md h-full w-full"
            cldImg={cld.image(
              photo.data.attributes.provider_metadata.public_id,
            )}
          />
        )}
      </div>
      <div
        className="h-full w-2/3 md:w-3/4 py-2 md:py-5 px-3 md:p-5 flex flex-col justify-between"
        id="Contact information"
      >
        <div>
          <h2
            className="text-lg md:text-2xl font-cursive text-primary-blue"
            id="name"
          >
            {fullName}
          </h2>
          <h3 className="text-xs" id="position">
            {position}
          </h3>
        </div>
        <div
          id="contact-details"
          className="flex flex-wrap justify-between w-full text-xs md:text-sm"
        >
          <a className="text-secondary-blue hover:underline" href="mailto:">
            {email}
          </a>
          <div className="space-x-2">
            {socialMedia.map((sm) => (
              <a
                key={sm.platform}
                className="text-primary-blue hover:underline"
                href={sm.linkRoute}
              >
                {renderIcon(sm.platform)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

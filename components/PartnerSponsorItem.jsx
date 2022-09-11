import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

export default function PartnerSponsorItem({ item }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'elevate-steps',
    },
    url: {
      secure: true,
    },
  });
  const mediaId = item.logo.data.attributes.provider_metadata.public_id;

  return (
    <div className="w-48 flex flex-col items-center p-2">
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <div id={`${item.id}-${item.name}-photo`} className="h-32 w-full">
          <AdvancedImage
            className="object-fit object-center h-full w-full"
            cldImg={cld.image(mediaId)}
          />
        </div>
        <h4 className=" font-cursive mt-4 text-center text-2xl text-primary-blue hover:text-secondary-blue">
          {item.name}
        </h4>
      </a>
    </div>
  );
}

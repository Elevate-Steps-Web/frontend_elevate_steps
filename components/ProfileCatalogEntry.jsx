import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

export default function ProfileCatalogEntry({ data }) {
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'elevate-steps',
        },
        url: {
          secure: true, // force https, set to false to force http
        },
      });
    return (
        <div className="mt-5 w-full md:w-10/12 mx-auto border-2 h-36 rounded-lg flex flex-row" id="grid item">
            <div className="h-full w-1/4" id="profile-pic">
                {/* <AdvancedImage
                className="object-cover object-center h-full w-full"
                cldImg={cld.image(image.attributes.provider_metadata.public_id)}
            /> */}
            </div>
            <div className="h-full w-3/4 py-5 pl-3 md:p-5" id="Contact information">
                <h2 className="text-xl md:text-2xl font-cursive text-primary-blue" id="name">Name of Person</h2>
                <h3 className="text-sm" id="position">Position at some firm</h3>
                <div id="contact-details" className="flex flex-row w-full gap-x-10 mt-6 text-sm">
                    <a className="text-secondary-blue hover:underline" href={"mailto:"}>Email</a>
                    <a className="text-secondary-blue hover:underline" href={"https://:"}>Social Media</a>
                </div>
            </div>
        </div>
    )
}
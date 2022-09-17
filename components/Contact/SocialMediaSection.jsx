import { v4 as uuidv4 } from 'uuid';
import SocialMediaHandle from './SocialMediaHandle';

export default function SocialMediaSection({ data, fullHandle = true }) {
  const { socialMediaItems } = data;
  return (
    <div
      className={`flex  lg:flex-row lg:items-center justify-center gap-x-8 gap-y-8 px-14 lg:px-36 ${
        fullHandle ? 'flex-col' : 'flex-row'
      }`}
    >
      {socialMediaItems.map((Handle) => (
        <SocialMediaHandle
          key={uuidv4()}
          data={Handle}
          fullHandle={fullHandle}
        />
      ))}
    </div>
  );
}

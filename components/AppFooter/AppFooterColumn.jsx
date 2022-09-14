import { v4 as uuidv4 } from 'uuid';
import AppFooterItem from './AppFooterItem';

export default function AppFooterColumn({ title, footerItems }) {
  return (
    <div id={title} className="text-center flex-1">
      <h1 className="text-xl">{title}</h1>
      <div className="text-secondary-blue md:text-sm text-lg flex flex-col xl:space-y-2 mt-2 font-normal">
        {footerItems.map((footerItem) => (
          <AppFooterItem
            key={uuidv4()}
            linkText={footerItem.linkText}
            linkRoute={footerItem.linkRoute}
          />
        ))}
      </div>
    </div>
  );
}

import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';
import { v4 as uuidv4 } from 'uuid';
import SlideInSectionDesktop from './SlideInSection/Desktop';
import SlideInSectionMobile from './SlideInSection/Mobile';
import { useWindowSize } from '../hooks/useWindowSize';

export default function AboutUsSection({ sections }) {
  const { width: screenWidth } = useWindowSize();
  const isMobile = screenWidth >= 1024;
  const SlideInElem = isMobile ? SlideInSectionDesktop : SlideInSectionMobile;
  const md = new MarkdownIt({ html: true, linkify: true, breaks: true });
  return (
    <div className="pb-24">
      {sections.map((section, index) => {
        const content = md.render(section.content);
        return (
          <SlideInElem
            key={uuidv4()}
            header={section.header}
            subText={section.subText ?? ''}
            coverMedia={section.coverMedia}
            contentLeft={index % 2 === 0}
          >
            <div className="markdown">{parse(content)}</div>
          </SlideInElem>
        );
      })}
    </div>
  );
}

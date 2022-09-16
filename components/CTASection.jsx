import { v4 as uuidv4 } from 'uuid';
import CTAItem from './CTAItem';
import Section from './Section';

export default function CTASection({ data }) {
  const { ctaItems } = data;
  return (
    <Section>
      <div className="h-full bg-white px-4 py-36 w-full flex flex-col gap-y-14 lg:flex-row lg:gap-y-0">
        {ctaItems.map((ctaItem) => (
          <CTAItem key={uuidv4()} data={ctaItem} />
        ))}
      </div>
    </Section>
  );
}

import { v4 as uuidv4 } from 'uuid';
import Section from './Section';

export default function ImportantNumbersSection({ data }) {
  const { blocks, summary } = data;
  return (
    <Section>
      <div className="h-full bg-white px-16 py-36 w-full">
        <div className="w-full h-1/2 flex flex-col md:flex-row justify-center gap-y-16 md:gap-0">
          {blocks.map((block) => (
            <div
              key={uuidv4()}
              className="flex flex-col w-full h-full px-16 text-center justify-center items-center gap-y-3"
            >
              <h2 className="block text-6xl lg:text-8xl text-primary-blue">
                {block.number}
              </h2>
              <p className="block text-2xl lg:text-3xl font-normal text-green">
                {block.metric}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-2xl lg:text-3xl lg:pt-16 pt-28 text-primary-blue">
          {summary}
        </p>
      </div>
    </Section>
  );
}

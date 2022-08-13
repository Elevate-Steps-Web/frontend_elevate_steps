import { v4 as uuidv4 } from 'uuid';
import Container from './Container';
import FAQuestion from './FAQuestion';
import Section from './Section';

export default function FAQSection({ data }) {
  const { faqs } = data;
  return (
    <Section>
      <div className="bg-primary-blue text-white py-28">
        <Container>
          <div className="h-fit w-full text-center">
            <h1 className="text-5xl mb-4">FAEQs</h1>
            <h1 className="text-4xl">Frequently Asked Elevate Questions</h1>
          </div>
          <div
            className="flex flex-col accordion accordion-flush mt-12"
            id="acc"
          >
            {faqs.map((faq, index) => (
              <div key={uuidv4()} className="accordion-item">
                <FAQuestion
                  key={uuidv4()}
                  id={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
}

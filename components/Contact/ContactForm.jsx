import ContactFormInput from './ContactFormInput';
import Container from '../Container';

export default function ContactForm({ data }) {
  const { title, fields, submit } = data;
  const id = 1;
  return (
    <Container>
      <div className="flex flex-row justify-center w-full mb-24">
        <div
          className="flex flex-col flex-none accordion accordion-flush mt-12 w-3/4 px-auto rounded-sm border-b-2"
          id="acc"
        >
          <div className="accordion-item">
            <div className="bg-primary-blue ">
              <h2 className="accordion-header" id={`heading${id}`}>
                <button
                  className="accordion-button collapsed focus:bg-secondary-blue bg-primary-blue text-white focus:ring-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${id}`}
                  aria-expanded="false"
                  aria-controls={`collapse${id}`}
                >
                  <span className="text-inherit text-xl mb-2 hover:cursor-pointer">
                    {title}
                  </span>
                </button>
              </h2>

              <div
                id={`collapse${id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${id}`}
                data-bs-parent="#acc"
              >
                <div className="accordion-body">
                  <div className="flex flex-row justify-center">
                    <div className="mt-4 flex-1">
                      <form>
                        <div className="grid grid-cols-1 gap-6 w-full ">
                          {fields.map((field) => (
                            <ContactFormInput field={field} />
                          ))}
                          <button
                            type="submit"
                            className="text-lg hover:text-secondary-blue btn btn-outline-light text-green mt-4 md:w-1/3 mx-auto"
                          >
                            {submit}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

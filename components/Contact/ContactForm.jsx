import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import ContactFormInput from './ContactFormInput';
import Container from '../Container';

export default function ContactForm({ data }) {
  const {
    title, fields, submit, successHeader, successMessage,
  } = data;
  const id = 1;
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formdata = new FormData(event.target);
    const formDataObj = {};

    /* eslint-disable-next-line no-return-assign */
    formdata.forEach((value, key) => (formDataObj[key] = value));

    const endpoint = '/api/forms/contact';
    const options = {
      method: 'post',
      body: formdata,
    };
    const response = await fetch(endpoint, options);

    const result = await response.json();
    console.log(result);
    // redirect to homepage
    // router.push('/');
    setEmailSent(true);
  };

  return (
    <Container>
      <div className="flex flex-row justify-center w-full mb-24">
        <div
          className="flex flex-col flex-none accordion accordion-flush mt-12 w-3/4 px-auto border-2 rounded-lg border-secondary-blue"
          id="acc"
        >
          <div className="accordion-item rounded-lg">
            <div className="bg-primary-blue rounded-md">
              <h2 className="accordion-header rounded-lg" id={`heading${id}`}>
                <button
                  className="accordion-button collapsed focus:bg-primary-blue focus:text-secondary-blue bg-white text-primary-blue focus:ring-0 rounded-md"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${id}`}
                  aria-expanded="false"
                  aria-controls={`collapse${id}`}
                >
                  <span className="text-inherit text-xl hover:cursor-pointer">
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
                      {emailSent ? (
                        <div className="flex flex-col items-center gap-y-5">
                          <h2 className="text-3xl font-cursive text-green">
                            {successHeader}
                          </h2>
                          <p className="text-xl px-32 text-center text-secondary-blue">
                            {successMessage}
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit}>
                          <div className="grid grid-cols-1 gap-6 w-full ">
                            {fields.map((field) => (
                              <ContactFormInput key={uuidv4()} field={field} />
                            ))}
                            <button
                              type="submit"
                              className="text-lg btn btn-outline-light border-green hover:bg-green hover:text-primary-blue text-green mt-4 md:w-1/3 mx-auto"
                            >
                              {submit}
                            </button>
                          </div>
                        </form>
                      )}
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

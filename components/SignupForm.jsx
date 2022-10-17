import { GridLoader } from 'react-spinners';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormInput from './SignupForm/FormInput';
import Container from './Container';

export default function SignupForm({
  fields,
  responseMessage: { successHeader, successMessage },
}) {
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formdata = new FormData(event.target);
    const formDataObj = {};

    /* eslint-disable-next-line no-return-assign */
    formdata.forEach((value, key) => (formDataObj[key] = value));

    const endpoint = '/api/forms/signup';
    const options = {
      method: 'post',
      body: formdata,
    };
    const response = await fetch(endpoint, options);

    const result = await response.json();
    console.log(result);
    setLoading(false);
    setEmailSent(true);
  };

  return (
    <Container>
      <div className="flex flex-row justify-center w-full mb-24">
        <div className="flex flex-col flex-none w-3/4 px-auto rounded-lg">
          <div className="flex flex-row justify-center">
            {isLoading ? (
              <GridLoader
                color="#23796"
                className="transition-opacity"
                loading={isLoading}
              />
            ) : (
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
                        <FormInput key={uuidv4()} data={field} />
                      ))}
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

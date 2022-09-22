import 'react-phone-input-2/lib/bootstrap.css';

import React, { useMemo, useState } from 'react';

import PhoneInput from 'react-phone-input-2';
import countryList from 'react-select-country-list';
import { v4 as uuidv4 } from 'uuid';
import BouncingArrow from '../BouncingArrow';

export default function FormInput({ data }) {
  function renderInput(inputData) {
    const [count, setCount] = useState(0);
    const recount = (e) => {
      const newCount = e.target.value.length;
      setCount(newCount);
    };
    const {
      inputField: {
        fieldName,
        inputType,
        maxLength,
        fieldPrompt,
        required: requiredField,
      },
      fieldOptions,
    } = inputData;
    const countryOptions = useMemo(() => countryList().getData(), []);

    switch (inputType) {
      case 'Short Text':
        return (
          <label className="flex flex-col" htmlFor={fieldName} key={uuidv4()}>
            <span className="text-secondary-blue font-cursive text-3xl lg:text-4xl mb-10">
              {fieldPrompt}
              {requiredField && (
                <span className="text-orange inline">{' *'}</span>
              )}
            </span>
            <input
              id={fieldName}
              type="text"
              name={fieldName}
              className="
                            text-white
                            mt-1
                            h-16
                            text-center
                            text-2xl lg:text-4xl
                            block
                            w-full
                            rounded-md
                            empty:border-white border-2
                            shadow-sm
                            focus:border-secondary-blue
                            focus:ring
                        focus:ring-secondary-blue
                            bg-transparent
                        valid:border-green invalid:border-red-600
                        focus:invalid:border-red-600 focus:invalid:ring-red-600
                        focus:valid:border-green focus:valid:ring-green
                        focus:autofill:bg-transparent
                        "
              placeholder=""
              required={requiredField}
            />
          </label>
        );
      case 'Long Text':
        return (
          <label
            className="flex flex-col"
            htmlFor={fieldName}
            key="text-area-application-form"
          >
            <span className="text-secondary-blue font-cursive text-3xl lg:text-4xl mb-5 lg:mb-10">
              {fieldPrompt}
              {requiredField && (
                <span className="text-orange inline">{' *'}</span>
              )}
            </span>
            <textarea
              id={fieldName}
              name={fieldName}
              className="
                                    mt-1
                                text-white
                                    block
                                    w-full
                                    text-xl
                                    rounded-md
                                    empty:border-white border-2
                                    shadow-sm
                                    focus:border-secondary-blue
                                    focus:ring
                                    focus:ring-secondary-blue
                                bg-transparent
                                valid:border-green invalid:border-red-600
                                focus:invalid:border-red-600 focus:invalid:ring-red-600
                                focus:valid:border-green focus:valid:ring-green
                                "
              rows="8"
              required={requiredField}
              maxLength={maxLength ?? null}
              onChange={recount}
            />
            {maxLength && (
              <span className="text-xl text-white pt-4">{`${count}/${maxLength}`}</span>
            )}
          </label>
        );
      case 'Email Address':
        return (
          <label className="flex flex-col" htmlFor={fieldName} key={uuidv4()}>
            <span className="text-secondary-blue font-cursive text-3xl lg:text-4xl mb-10">
              {fieldPrompt}
              {requiredField && (
                <span className="text-orange inline">{' *'}</span>
              )}
            </span>
            <input
              type="email"
              id={fieldName}
              name={fieldName}
              className="
                                    mt-1
                              text-white
                                    h-16
                                    text-center
                                    text-2xl lg:text-4xl
                                    block
                                    w-full
                                    rounded-md
                                    empty:border-white border-2
                                    shadow-sm
                                    focus:border-secondary-blue
                                    focus:ring
                                focus:ring-secondary-blue
                                    bg-transparent
                                valid:border-green invalid:border-red-600
                                focus:invalid:border-red-600 focus:invalid:ring-red-600
                                focus:valid:border-green focus:valid:ring-green
                                placeholder:text-gray-300
                                    placeholder:font-normal
                                    placeholder:text-opacity-40
                                "
              placeholder="email@example.com"
              required={requiredField}
            />
          </label>
        );
      case 'Telephone':
        return (
          <label className="flex flex-col" htmlFor={fieldName} key={uuidv4()}>
            <span className="text-secondary-blue font-cursive text-3xl lg:text-4xl mb-10">
              {fieldPrompt}
              {requiredField && (
                <span className="text-orange inline">{' *'}</span>
              )}
            </span>
            <PhoneInput
              inputProps={{
                name: fieldName,
                required: requiredField,
              }}
              placeholder="+123456789"
              inputClass="
                                    mt-1
                              text-white
                                    h-16
                                    text-center
                                    text-2xl lg:text-4xl
                                    block
                                    w-full
                                    rounded-md
                                    empty:border-white border-2
                                    shadow-sm
                                    focus:border-secondary-blue
                                    focus:ring
                                focus:ring-secondary-blue
                                    bg-transparent
                                valid:border-green invalid:border-red-600
                                focus:invalid:border-red-600 focus:invalid:ring-red-600
                                focus:valid:border-green focus:valid:ring-green
                                placeholder:text-gray-300
                                    placeholder:font-normal
                                    placeholder:text-opacity-40
                                "
              buttonClass="focus:ring focus:ring-secondary-blue focus:border-secondary-blue h-full"
              country="us"
            />
          </label>
        );
      case 'Radio':
        return (
          <fieldset className="block" key={uuidv4()}>
            <span className="text-secondary-blue font-cursive text-3xl lg:text-4xl mb-10">
              {fieldPrompt}
              {requiredField && (
                <span className="text-orange inline">{' *'}</span>
              )}
            </span>
            <div className="mt-8 text-xl lg:text-3xl flex flex-row justify-center">
              <div className="flex flex-col justify-start mx-auto">
                {fieldOptions.map((option) => (
                  <label
                    className="inline-flex items-center mb-4"
                    htmlFor={fieldName}
                    key={uuidv4()}
                  >
                    <input
                      className="form-radio h-6 w-6 checked:bg-primary-blue bg-transparent border-white"
                      type="radio"
                      defaultChecked
                      name={fieldName}
                      value={option.option}
                    />
                    <span className="ml-2 text-white">{option.option}</span>
                  </label>
                ))}
              </div>
            </div>
          </fieldset>
        );
      case 'Checkboxes':
        return (
          <fieldset className="block text-xl lg:text-3xl" key={uuidv4()}>
            <span className="text-secondary-blue font-cursive text-3xl lg:text-4xl mb-10">
              {fieldPrompt}
              {requiredField && (
                <span className="text-orange inline">{' *'}</span>
              )}
            </span>
            <div className="mt-2 text-xl lg:text-3xl flex flex-row justify-center">
              <div className="flex flex-col justify-start mx-auto mt-8">
                {fieldOptions.map((option) => (
                  <label
                    className="inline-flex items-center mb-6 ml-8 lg:ml-0"
                    htmlFor={fieldName}
                    key={uuidv4()}
                    required={requiredField}
                  >
                    <input
                      className="form-checkbox rounded-md checked:bg-green h-6 w-6 bg-transparent border-white"
                      type="checkbox"
                      name={fieldName}
                      id={fieldName}
                      value={option.option}
                    />
                    <span className="ml-3 text-white font-normal text-left">
                      {option.option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </fieldset>
        );
      case 'Select':
        return (
          <label className="block text-3xl" htmlFor={fieldName} key={uuidv4()}>
            <span className="text-secondary-blue font-cursive text-3xl lg:text-4xl mb-10">
              {fieldPrompt}
              {requiredField && (
                <span className="text-orange inline">{' *'}</span>
              )}
            </span>
            <select
              className="form-select block w-full mt-1text-white rounded border-2 border-secondary-blue h-16 text-2xl bg-transparent text-green mt-10"
              id={fieldName}
              name={fieldName}
            >
              {fieldOptions.map((option) => (
                <option key={uuidv4()} value={option.option}>
                  {option.option}
                </option>
              ))}
            </select>
          </label>
        );
      case 'Select Country':
        return (
          <label className="block text-3xl" htmlFor={fieldName} key={uuidv4()}>
            <span className="text-secondary-blue font-cursive text-3xl lg:text-4xl mb-10">
              {fieldPrompt}
              {requiredField && (
                <span className="text-orange inline">{' *'}</span>
              )}
            </span>
            <select
              className="form-select block w-full rounded border-2 border-secondary-blue h-16 text-2xl bg-transparent text-green text-center mt-10"
              id={fieldName}
              name={fieldName}
            >
              {countryOptions.map((option) => (
                <option key={uuidv4()} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        );
      case 'Submit':
        return (
          <label
            className="flex flex-col text-3xl"
            htmlFor={fieldName}
            key={uuidv4()}
          >
            <span className="text-secondary-blue font-cursive text-3xl lg:text-4xl mb-10">
              {fieldPrompt}
              {requiredField && (
                <span className="text-orange inline">{' *'}</span>
              )}
            </span>
            <button
              type="submit"
              className="text-2xl hover:text-primary-blue btn btn-green hover:bg-green text-green hover:border-green border-green mt-4 lg:w-1/3 lg:mx-auto"
            >
              Do It!
            </button>
          </label>
        );
      default:
        return (
          <label className="flex flex-col" htmlFor={fieldName} key={uuidv4()}>
            <span className="text-secondary-blue font-cursive text-3xl lg:text-5xl mb-10">
              {fieldPrompt}
              {requiredField && (
                <span className="text-orange inline">{' *'}</span>
              )}
            </span>
            <input
              id={fieldName}
              type="text"
              className="
                                    mt-1
                                text-white
                                    h-16
                                    text-center
                                    text-2xl lg:text-4xl
                                    block
                                    w-full
                                    rounded-md
                                    empty:border-white border-2
                                    shadow-sm
                                    focus:border-secondary-blue
                                    focus:ring
                                focus:ring-secondary-blue
                                    bg-transparent
                                valid:border-green invalid:border-red-600
                                focus:invalid:border-red-600 focus:invalid:ring-red-600
                                "
              placeholder="default"
              required={requiredField}
            />
          </label>
        );
    }
  }

  return (
    <div className="h-full w-full flex flex-col justify-center px-12 lg:px-64 gap-y-8">
      {renderInput(data)}
      {data.inputField.inputType !== 'Submit' && (
        <BouncingArrow direction="down" />
      )}
    </div>
  );
}

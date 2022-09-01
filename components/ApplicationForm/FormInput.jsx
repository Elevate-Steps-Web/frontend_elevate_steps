import { v4 as uuidv4 } from 'uuid';
import BouncingArrow from '../BouncingArrow';

export default function FormInput({ data }) {
  function renderInput(inputData) {
    const {
      required: requiredField,
      inputField: { fieldName, inputType, fieldPrompt },
      fieldOptions,
    } = inputData;
    switch (inputType) {
      case 'Short Text':
        return (
          <label className="flex flex-col" htmlFor={fieldName} key={uuidv4()}>
            <span className="text-secondary-blue font-cursive text-5xl mb-10">
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
                            text-4xl
                            block
                            w-full
                            rounded-md
                            empty:border-white
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
      case 'Text Area':
        return (
          <label className="flex flex-col" htmlFor={fieldName} key={uuidv4()}>
            <span className="text-secondary-blue font-cursive text-5xl mb-10">
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
                                    text-2xl
                                    rounded-md
                                    empty:border-white
                                    shadow-sm
                                    focus:border-secondary-blue
                                    focus:ring
                                    focus:ring-secondary-blue
                                bg-transparent
                                valid:border-green invalid:border-red-600
                                focus:invalid:border-red-600 focus:invalid:ring-red-600
                                focus:valid:border-green focus:valid:ring-green
                                "
              rows="14"
              required={requiredField}
            />
          </label>
        );
      case 'Email Address':
        return (
          <label className="flex flex-col" htmlFor={fieldName} key={uuidv4()}>
            <span className="text-secondary-blue font-cursive text-5xl mb-10">
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
                                    text-4xl
                                    block
                                    w-full
                                    rounded-md
                                    empty:border-white
                                    shadow-sm
                                    focus:border-secondary-blue
                                    focus:ring
                                focus:ring-secondary-blue
                                    bg-transparent
                                valid:border-green invalid:border-red-600
                                focus:invalid:border-red-600 focus:invalid:ring-red-600
                                focus:valid:border-green focus:valid:ring-green
                                placeholder:text-gray-300
                                    placeholder:font-light
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
            <span className="text-secondary-blue font-cursive text-5xl mb-10">
              {fieldPrompt}
              {requiredField && (
                <span className="text-orange inline">{' *'}</span>
              )}
            </span>
            <input
              id={fieldName}
              type="tel"
              name={fieldName}
              className="
                                    mt-1
                              text-white
                                    h-16
                                    text-center
                                    text-4xl
                                    block
                                    w-full
                                    rounded-md
                                    empty:border-white
                                    shadow-sm
                                    focus:border-secondary-blue
                                    focus:ring
                                focus:ring-secondary-blue
                                    bg-transparent
                                valid:border-green invalid:border-red-600
                                focus:invalid:border-red-600 focus:invalid:ring-red-600
                                "
              placeholder=""
              pattern="^\+([0-9]){9,}$"
              required={requiredField}
            />
          </label>
        );
      case 'Radio':
        return (
          <fieldset className="block" key={uuidv4()}>
            <span className="text-secondary-blue font-cursive text-5xl mb-10">
              {fieldPrompt}
              {requiredField && (
                <span className="text-orange inline">{' *'}</span>
              )}
            </span>
            <div className="mt-8 text-3xl flex flex-row justify-center">
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
          <fieldset className="block text-3xl" key={uuidv4()}>
            <span className="text-secondary-blue font-cursive text-5xl mb-10">
              {fieldPrompt}
              {requiredField && (
                <span className="text-orange inline">{' *'}</span>
              )}
            </span>
            <div className="mt-2 text-3xl flex flex-row justify-center">
              <div className="flex flex-col justify-start mx-auto mt-8">
                {fieldOptions.map((option) => (
                  <label
                    className="inline-flex items-center mb-6"
                    htmlFor={fieldName}
                    key={uuidv4()}
                    // required={requiredField}
                  >
                    <input
                      className="form-checkbox rounded-sm checked:bg-green h-6 w-6 bg-transparent border-white"
                      type="checkbox"
                      name={fieldName}
                      id={fieldName}
                      value={option.option}
                    />
                    <span className="ml-2 text-white font-light">
                      {option.option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </fieldset>
        );
      case 'Dropdown':
        return (
          <label className="block text-3xl" htmlFor={fieldName} key={uuidv4()}>
            <span className="text-secondary-blue font-cursive text-5xl mb-10">
              {fieldPrompt}
              {requiredField && (
                <span className="text-orange inline">{' *'}</span>
              )}
            </span>
            <select
              className="form-select block w-full mt-1text-white rounded border-secondary-blue h-16 text-2xl bg-transparent text-green mt-10"
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
      case 'Submit':
        return (
          <label
            className="flex flex-col text-3xl"
            htmlFor={fieldName}
            key={uuidv4()}
          >
            <span className="text-secondary-blue font-cursive text-5xl mb-10">
              {fieldPrompt}
              {requiredField && (
                <span className="text-orange inline">{' *'}</span>
              )}
            </span>
            <button
              type="submit"
              className="text-2xl hover:text-primary-blue btn btn-green hover:bg-green text-green hover:border-green border-green mt-4 md:w-1/3 mx-auto"
            >
              Do It!
            </button>
          </label>
        );
      default:
        return (
          <label className="flex flex-col" htmlFor={fieldName} key={uuidv4()}>
            <span className="text-secondary-blue font-cursive text-5xl mb-10">
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
                                    text-4xl
                                    block
                                    w-full
                                    rounded-md
                                    empty:border-white
                                    shadow-sm
                                    focus:border-secondary-blue
                                    focus:ring
                                focus:ring-secondary-blue
                                    bg-transparent
                                valid:border-green invalid:border-red-600
                                focus:invalid:border-red-600 focus:invalid:ring-red-600
                                "
              placeholder=""
              required={requiredField}
            />
          </label>
        );
    }
  }

  return (
    <div className="h-full w-full flex flex-col justify-center px-64 gap-y-8">
      {renderInput(data)}
      {data.inputField.inputType !== 'Submit' && (
        <BouncingArrow direction="down" />
      )}
    </div>
  );
}

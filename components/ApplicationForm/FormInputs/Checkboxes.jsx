import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

export default function CheckboxesInput({
  fieldPrompt,
  requiredField,
  fieldOptions,
  fieldName,
}) {
  return (
    <fieldset className="block text-xl lg:text-3xl" key={uuidv4()}>
      <span className="text-secondary-blue font-cursive text-2xl lg:text-3xl mb-6">
        {fieldPrompt}
        {requiredField && <span className="text-orange inline">{' *'}</span>}
      </span>
      <div className="mt-2 text-xl lg:text-2xl flex flex-row justify-center">
        <div className="flex flex-col justify-start mx-auto mt-8">
          {fieldOptions.map((option) => (
            <label
              className="inline-flex items-center mb-2 ml-8 lg:ml-0"
              htmlFor={_.kebabCase(fieldName)}
              key={uuidv4()}
              required={requiredField}
            >
              <input
                className="form-checkbox rounded-md checked:bg-green h-6 w-6 bg-transparent border-white"
                type="checkbox"
                name={_.kebabCase(fieldName)}
                id={_.kebabCase(fieldName)}
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
}

import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

export default function RadioInput({
  fieldOptions,
  fieldPrompt,
  fieldName,
  requiredField,
}) {
  return (
    <fieldset className="block" key={uuidv4()}>
      <span className="text-secondary-blue font-cursive text-2xl lg:text-3xl mb-6">
        {fieldPrompt}
        {requiredField && <span className="text-orange inline">{' *'}</span>}
      </span>
      <div className="mt-8 text-xl lg:text-2xl flex flex-row justify-center">
        <div className="flex flex-col justify-start mx-auto">
          {fieldOptions.map((option) => (
            <label
              className="inline-flex items-center mb-2"
              htmlFor={_.kebabCase(fieldName)}
              key={uuidv4()}
            >
              <input
                className="form-radio h-6 w-6 checked:bg-primary-blue bg-transparent border-white"
                type="radio"
                defaultChecked
                name={_.kebabCase(fieldName)}
                value={option.option}
              />
              <span className="ml-2 text-white">{option.option}</span>
            </label>
          ))}
        </div>
      </div>
    </fieldset>
  );
}

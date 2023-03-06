import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

export default function SelectInput({
  fieldName,
  fieldPrompt,
  requiredField,
  fieldOptions,
}) {
  return (
    <label
      className="block text-3xl"
      htmlFor={_.kebabCase(fieldName)}
      key={uuidv4()}
    >
      <span className="text-secondary-blue font-cursive text-3xl lg:text-3xl mb-6">
        {fieldPrompt}
        {requiredField && <span className="text-orange inline">{' *'}</span>}
      </span>
      <select
        className="form-select block w-full mt-1text-white rounded border-2 border-secondary-blue h-16 text-2xl bg-transparent text-green mt-10"
        id={_.kebabCase(fieldName)}
        name={_.kebabCase(fieldName)}
      >
        {fieldOptions.map((option) => (
          <option key={uuidv4()} value={option.option}>
            {option.option}
          </option>
        ))}
      </select>
    </label>
  );
}

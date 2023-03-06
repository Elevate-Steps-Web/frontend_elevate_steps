import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

export default function SubmitBox({
  fieldName,
  fieldPrompt,
  requiredField,
  buttonText = 'Submit',
}) {
  return (
    <label
      className="flex flex-col text-3xl"
      htmlFor={_.kebabCase(fieldName)}
      key={uuidv4()}
    >
      <span className="text-secondary-blue font-cursive text-3xl lg:text-3xl mb-6">
        {fieldPrompt}
        {requiredField && <span className="text-orange inline">{' *'}</span>}
      </span>
      <button
        type="submit"
        className="text-2xl hover:text-primary-blue btn btn-green hover:bg-green text-green hover:border-green border-green mt-4 lg:w-1/3 lg:mx-auto"
      >
        {buttonText}
      </button>
    </label>
  );
}

import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

export default function ShortTextInput({
  fieldName,
  requiredField,
  fieldPrompt,
}) {
  return (
    <label
      className="flex flex-col"
      htmlFor={_.kebabCase(fieldName)}
      key={uuidv4()}
    >
      <span className="text-secondary-blue font-cursive text-2xl lg:text-3xl mb-6 px-1">
        {fieldPrompt}
        {requiredField && <span className="text-orange inline">{' *'}</span>}
      </span>
      <input
        id={_.kebabCase(fieldName)}
        type="text"
        name={_.kebabCase(fieldName)}
        className="
                            text-white
                            mt-1
                            h-12
                            text-center
                            text-2xl lg:text-3xl
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
}

import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

export default function EmailAddressInput({
  fieldName,
  fieldPrompt,
  requiredField,
}) {
  return (
    <label
      className="flex flex-col"
      htmlFor={_.kebabCase(fieldName)}
      key={uuidv4()}
    >
      <span className="text-secondary-blue font-cursive text-2xl lg:text-3xl mb-6">
        {fieldPrompt}
        {requiredField && <span className="text-orange inline">{' *'}</span>}
      </span>
      <input
        type="email"
        id={_.kebabCase(fieldName)}
        name={_.kebabCase(fieldName)}
        className="
                                    mt-1
                              text-white
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
                                placeholder:text-gray-300
                                    placeholder:font-normal
                                    placeholder:text-opacity-40
                                "
        placeholder="email@example.com"
        required={requiredField}
      />
    </label>
  );
}

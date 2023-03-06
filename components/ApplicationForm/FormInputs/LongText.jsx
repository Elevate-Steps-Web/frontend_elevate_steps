import _ from 'lodash';
import { useState } from 'react';

export default function LongTextInput({
  fieldName,
  fieldPrompt,
  requiredField,
  maxLength,
}) {
  const [count, setCount] = useState(0);
  const recount = (e) => {
    const newCount = e.target.value.length;
    setCount(newCount);
  };
  return (
    <label
      className="flex flex-col"
      htmlFor={_.kebabCase(fieldName)}
      key="text-area-application-form"
    >
      <span className="text-secondary-blue font-cursive text-xl md:text-2xl lg:text-3xl mb-5 lg:mb-6">
        {fieldPrompt}
        {requiredField && <span className="text-orange inline">{' *'}</span>}
      </span>
      <textarea
        id={_.kebabCase(fieldName)}
        name={_.kebabCase(fieldName)}
        className="
                                    mt-1
                                text-white
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
                                "
        rows={`${window.innerHeight > window.innerWidth ? '6' : '10'}`}
        required={requiredField}
        maxLength={maxLength ?? null}
        onChange={recount}
      />
      {maxLength && (
        <span className="text-xl text-white pt-4">{`${count}/${maxLength}`}</span>
      )}
    </label>
  );
}

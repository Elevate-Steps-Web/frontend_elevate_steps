import _ from 'lodash';

export default function ContactFormInput({ field }) {
  const { inputType, fieldName, required } = field;

  function renderInput(type, name) {
    switch (type) {
      case 'Short Text':
        return (
          <input
            id={name}
            name={_.camelCase(name)}
            type="text"
            className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        empty:border-white
                        shadow-sm
                        focus:border-secondary-blue
                        focus:ring
                    focus:ring-secondary-blue
                    text-white bg-transparent
                    valid:border-green invalid:border-red-600
                    focus:invalid:border-red-600 focus:invalid:ring-red-600
                    "
            placeholder=""
            required={required}
          />
        );
      case 'Text Area':
        return (
          <textarea
            id={name}
            name={_.camelCase(name)}
            className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        empty:border-white
                        shadow-sm
                        focus:border-secondary-blue
                        focus:ring
                        focus:ring-secondary-blue
                    text-white bg-transparent
                    valid:border-green invalid:border-red-600
                    focus:invalid:border-red-600 focus:invalid:ring-red-600
                    focus:valid:border-green focus:valid:ring-green
                    "
            rows="4"
            required={required}
          />
        );
      case 'Email Address':
        return (
          <input
            type="email"
            id={name}
            name={_.camelCase(name)}
            className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        empty:border-white
                        shadow-sm
                        focus:border-secondary-blue
                        focus:ring
                        focus:ring-secondary-blue
                    text-white bg-transparent
                    placeholder-shown:text-white
                    valid:border-green invalid:border-red-600
                    focus:invalid:border-red-600 focus:invalid:ring-red-600
                    focus:valid:border-green focus:valid:ring-green
                    "
            placeholder="john@example.com"
            required={required}
          />
        );
      case 'Telephone':
        return (
          <input
            id={name}
            type="tel"
            name={_.camelCase(name)}
            className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        empty:border-white
                        shadow-sm
                        focus:border-secondary-blue
                        focus:ring
                        focus:ring-secondary-blue
                text-white bg-transparent
                valid:border-green invalid:border-red-600
                focus:invalid:border-red-600 focus:invalid:ring-red-600
                focus:valid:border-green focus:valid:ring-green
                    "
            placeholder=""
            pattern="^\+([0-9]){9,}$"
            required={required}
          />
        );
      default:
        return (
          <input
            id={name}
            name={_.camelCase(name)}
            type="text"
            className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        empty:border-white
                        shadow-sm
                        focus:border-secondary-blue
                        focus:ring
                    focus:ring-secondary-blue
                    text-white bg-transparent
                    valid:border-green invalid:border-red-600
                    focus:invalid:border-red-600 focus:invalid:ring-red-600
                    "
            placeholder="default"
            required={required}
          />
        );
    }
  }

  return (
    <label className="block" htmlFor={fieldName}>
      <span className="text-orange font-medium text-lg">{fieldName}</span>
      {required && <span className="text-orange inline">{' *'}</span>}
      {renderInput(inputType, fieldName)}
    </label>
  );
}

import 'react-phone-input-2/lib/bootstrap.css';

import React, { useMemo } from 'react';

import countryList from 'react-select-country-list';
import BouncingArrow from '../BouncingArrow';
import CheckboxesInput from './FormInputs/Checkboxes';
import EmailAddressInput from './FormInputs/EmailAddress';
import LongTextInput from './FormInputs/LongText';
import RadioInput from './FormInputs/Radio';
import SelectInput from './FormInputs/Select';
import ShortTextInput from './FormInputs/ShortText';
import SubmitBox from './FormInputs/Submit';
import TelephoneInput from './FormInputs/Telephone';

export default function FormInput({ data }) {
  function renderInput(inputData) {
    const {
      required: requiredField,
      maxLength,
      fieldName,
      inputType,
      fieldPrompt,
      fieldOptions,
    } = inputData;
    const countryOptions = useMemo(() => countryList().getData(), []);

    switch (inputType) {
      case 'Short Text':
        return (
          <ShortTextInput
            fieldName={fieldName}
            fieldPrompt={fieldPrompt}
            requiredField={requiredField}
          />
        );
      case 'Long Text':
        return (
          <LongTextInput
            fieldName={fieldName}
            fieldPrompt={fieldPrompt}
            requiredField={requiredField}
            maxLength={maxLength}
          />
        );
      case 'Email Address':
        return (
          <EmailAddressInput
            fieldName={fieldName}
            fieldPrompt={fieldPrompt}
            requiredField={requiredField}
          />
        );
      case 'Telephone':
        return (
          <TelephoneInput
            fieldName={fieldName}
            fieldPrompt={fieldPrompt}
            requiredField={requiredField}
          />
        );
      case 'Radio':
        return (
          <RadioInput
            fieldName={fieldName}
            fieldPrompt={fieldPrompt}
            fieldOptions={fieldOptions}
            requiredField={requiredField}
          />
        );
      case 'Checkboxes':
        return (
          <CheckboxesInput
            fieldName={fieldName}
            fieldPrompt={fieldPrompt}
            fieldOptions={fieldOptions}
            requiredField={requiredField}
          />
        );
      case 'Select':
        return (
          <SelectInput
            fieldName={fieldName}
            fieldPrompt={fieldPrompt}
            fieldOptions={fieldOptions}
            requiredField={requiredField}
          />
        );
      case 'Select Country':
        return (
          <SelectInput
            fieldName={fieldName}
            fieldPrompt={fieldPrompt}
            fieldOptions={countryOptions}
            requiredField={requiredField}
          />
        );
      case 'Submit':
        return (
          <SubmitBox
            fieldName={fieldName}
            fieldPrompt={fieldPrompt}
            requiredField={requiredField}
            buttonText="Do It!"
          />
        );
      default:
        return (
          <ShortTextInput
            fieldName={fieldName}
            fieldPrompt={fieldPrompt}
            requiredField={requiredField}
          />
        );
    }
  }

  return (
    <div className="h-full w-full flex flex-col justify-center px-12 lg:px-64 gap-y-8">
      {renderInput(data)}
      {data.inputType !== 'Submit' && <BouncingArrow direction="down" />}
    </div>
  );
}

import { v4 as uuidv4 } from 'uuid';

export default function PhoneNumbersSection({ data }) {
  const { contactPhones } = data;
  return (
    <div className="flex flex-col gap-y-2 pt-10">
      {contactPhones.map((email) => (
        <div
          key={uuidv4()}
          className="flex flex-row justify-center text-white text-2xl"
        >
          <a className="hover:text-secondary-blue" href={`tel:${email.value}`}>
            <i className="bi bi-telephone" />
            {email.value && <span className="ml-2">{email.value}</span>}
          </a>
        </div>
      ))}
    </div>
  );
}

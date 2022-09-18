import { v4 as uuidv4 } from 'uuid';

export default function ContactEmails({ data }) {
  const { email_addresses: emailAddresses } = data;
  return (
    <div className="flex flex-col gap-y-2 pt-10">
      {emailAddresses.map((email) => (
        <div
          key={uuidv4()}
          className="flex flex-row justify-center text-primary-blue text-2xl"
        >
          <a
            className="hover:text-secondary-blue"
            href={`mailto:${email.value}`}
          >
            <i className="bi bi-envelope" />
            {email.value && <span className="ml-2">{email.value}</span>}
          </a>
        </div>
      ))}
    </div>
  );
}

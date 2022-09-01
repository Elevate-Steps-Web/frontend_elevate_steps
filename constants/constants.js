const appliedEmails = [];
const appliedNames = [];

export default function alreadyApplied(email, name) {
  if (appliedNames.includes(name) || appliedEmails.includes(email)) {
    return true;
  }
  appliedNames.push(name);
  appliedEmails.push(email);
  return false;
}

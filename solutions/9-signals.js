import get from 'lodash';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN

const getFreeDomainsCount = (emails) => {
  const domainsCount = {};

  emails.forEach((email) => {
      const domain = email.split('@')[1];
      if (freeEmailDomains.includes(domain)) {
          domainsCount[domain] = (domainsCount[domain] || 0) + 1;
      }
  });

  return domainsCount;
};

export default getFreeDomainsCount;
// END
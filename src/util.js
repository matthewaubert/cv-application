import { parse, format } from 'date-fns';

// convert given camel-cased string to title-cased string
// input: camel-cased string (e.g. 'thisString')
// output: title-cased string (e.g. 'This String')
export function camelToTitleCase(string) {
  return (
    string
      // insert a space before all caps
      .replace(/([A-Z])/g, ' $1')
      // uppercase the first character
      .replace(/^./, (str) => str.toUpperCase())
  );
}

// convert given form data to JavaScript object
// e.g. output: { name: 'John Smith', website: 'website.com', email: 'example@email.com', phone: '123-456-7890', location: 'New York, NY' }
export function extractFormValues(form) {
  const formValues = {};

  if (form.id) formValues.id = form.id;
  Array.from(form).forEach((field) => {
    formValues[field.name] = field.value;
  });

  return formValues;
}

// format given date using the 'date-fns' library
// if incorrect format given, return original input
// input format:   'MM/yyyy' || 'MM-yyyy'  (e.g. '05/2014' || '05-2014')
// output format:  'MMMM yyyy'             (e.g. 'May 2014')
export function formatDate(date) {
  try {
    try {
      return format(parse(date, 'MM/yyyy', new Date()), 'MMMM yyyy');
    } catch {
      return format(parse(date, 'MM-yyyy', new Date()), 'MMMM yyyy');
    }
  } catch {
    return date;
  }
}

// callback for Array.sort() function
// compare the endDate properties of two objects,
// putting most recent in front
export function compareByDate(a, b) {
  let parsedA, parsedB;

  // try to parse endDate; if can't: put behind
  try {
    parsedA = parse(a.endDate, 'MM/yyyy', new Date());
  } catch {
    return 1;
  } try {
    parsedB = parse(b.endDate, 'MM/yyyy', new Date());
  } catch {
    return -1;
  }

  // if endDate is 'present': put in front
  // else: put most recent endDate in front
  return a.endDate === 'present'
    ? -1
    : b.endDate === 'present'
      ? 1
      : parsedB - parsedA;
}

// converts a camel-cased string to a title-cased string
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

// converts given form to object
// e.g. output: { name: 'John Smith', website: 'website.com', email: 'example@email.com', phone: '123-456-7890', location: 'New York, NY' }
export function extractFormValues(form) {
  const formValues = {};

  if (form.id) formValues.id = form.id;

  Array.from(form).forEach((field) => {
    formValues[field.labels[0].textContent.split(' ')[0].toLowerCase()] =
      field.value;
  });

  return formValues;
}

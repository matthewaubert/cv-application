export const exampleData = {
  basicInfo: {
    name: 'Jonathan Smith',
    email: 'example@email.com',
    phone: '123-456-7890',
    location: 'New York, NY',
    website: 'website.com',
  },
  education: [
    {
      id: crypto.randomUUID(),
      school: 'Example College',
      location: 'New York, NY',
      degree: 'B.S. in Computer Science',
      graduation: 'May 2014',
    },
    {
      id: crypto.randomUUID(),
      school: 'Example University',
      location: 'Boston, MA',
      degree: 'M.S. in Computer Science',
      graduation: 'May 2018',
    },
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'Example Company',
      location: 'New York, NY',
      startDate: 'August 2014',
      endDate: 'September 2016',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
    },
    {
      id: crypto.randomUUID(),
      company: 'Example Studio',
      location: 'Boston, MA',
      startDate: 'June 2018',
      endDate: 'present',
      description:
        'Magna etiam tempor orci eu. Sollicitudin tempor id eu nisl nunc mi ipsum. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Mi ipsum faucibus vitae aliquet.',
    },
  ],
};

export const exampleData = {
  basicInfo: {
    name: 'John Smith',
    website: 'website.com',
    email: 'example@email.com',
    phone: '123-456-7890',
    location: 'New York, NY'
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
    }
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'Example Company',
      location: 'New York, NY',
      startDate: 'August 2014',
      endDate: 'September 2016',
    },
    {
      id: crypto.randomUUID(),
      company: 'Example Studio',
      location: 'Boston, MA',
      startDate: 'June 2014',
      endDate: 'present',
    }
  ],
};

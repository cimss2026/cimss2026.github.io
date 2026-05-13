export default function PastEvents() {
  const events = [
    {
      year: 'CIMSS 2025',
      title: '5th International Workshop on Critical Infrastructure and Manufacturing System Security',
      conjunction: 'ACNS 2025',
      date: 'June 23–26, 2025',
      location: 'Munich, Germany',
      url: 'https://cimssworkshop.github.io/index.html',
    },
    {
      year: 'CIMSS 2024',
      title: '4th International Workshop on Critical Infrastructure and Manufacturing System Security',
      conjunction: 'ACNS 2024',
      date: 'March 5, 2024',
      location: 'Abu Dhabi, UAE',
      url: 'https://cimssworkshop.github.io/contents/CIMSS2024/cimss2024.html',
    },
    {
      year: 'CIMSS 2023',
      title: '3rd International Workshop on Critical Infrastructure and Manufacturing System Security',
      conjunction: 'ACNS 2023',
      date: 'June 20, 2023',
      location: 'Kyoto, Japan',
      url: 'https://cimssworkshop.github.io/contents/CIMSS2023/cimss2023.html',
    },
    {
      year: 'CIMSS 2022',
      title: '2nd International Workshop on Critical Infrastructure and Manufacturing System Security',
      conjunction: 'ACNS 2022',
      date: 'June 20, 2022',
      location: 'Rome, Italy',
      url: 'https://cimssworkshop.github.io/contents/CIMSS2022/cimss2022.html',
    },
    {
      year: 'CIMSS 2021',
      title: '1st International Workshop on Critical Infrastructure and Manufacturing System Security',
      conjunction: 'ACNS 2021',
      date: 'June 21, 2021',
      location: 'Kamakura, Japan',
      url: 'https://cimssworkshop.github.io/contents/CIMSS2021/cimss2021.html',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">Past Events</h1>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <p className="text-gray-700 text-lg leading-relaxed mb-2">
          The CIMSS workshop series has been held annually in conjunction with the{' '}
          <span className="font-semibold">Applied Cryptography and Network Security (ACNS)</span> conference since 2021.
          Below is a summary of previous editions.
        </p>
      </div>

      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event.year}
            className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-600 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h2 className="text-2xl font-bold text-primary-800">{event.year}</h2>
              <span className="inline-flex items-center gap-2 text-sm text-gray-500 font-medium">
                <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {event.date}
              </span>
            </div>
            <p className="text-gray-800 font-medium mb-1">{event.title}</p>
            <p className="text-gray-600 mb-1">
              In Conjunction with <span className="font-semibold text-primary-700">{event.conjunction}</span>
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-3">
              <span className="flex items-center gap-1 text-gray-600 text-sm">
                <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </span>
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-800 font-medium transition-colors"
              >
                View Workshop Website
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

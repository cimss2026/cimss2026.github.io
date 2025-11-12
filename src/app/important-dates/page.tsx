export default function ImportantDates() {
  const dates = [
    { event: "Workshop Date", date: "June 22-25, 2026", note: "One day between these dates", highlight: true },
    { event: "Workshop Paper Submission Deadline (Cycle 1)", date: "January 24, 2026", highlight: false },
    { event: "Notification of Acceptance/Rejection (Cycle 1)", date: "February 21, 2026", highlight: false },
    { event: "Workshop Paper Submission Opening (Cycle 2)", date: "February 23, 2026", highlight: false },
    { event: "Workshop Paper Submission Deadline (Cycle 2)", date: "March 22, 2026", highlight: false },
    { event: "Notification of Acceptance/Rejection (Cycle 2)", date: "April 24, 2026", highlight: false },
    { event: "Submission of Camera-Ready Papers", date: "May 10, 2026", highlight: true },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">Important Dates</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="space-y-4">
          {dates.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border-l-4 ${
                item.highlight
                  ? 'bg-primary-50 border-primary-600'
                  : 'bg-gray-50 border-gray-300'
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="mb-2 md:mb-0">
                  <h3 className={`text-lg font-semibold ${
                    item.highlight ? 'text-primary-900' : 'text-gray-800'
                  }`}>
                    {item.event}
                  </h3>
                  {item.note && (
                    <p className="text-sm text-gray-600 mt-1">{item.note}</p>
                  )}
                </div>
                <div className={`text-xl font-bold ${
                  item.highlight ? 'text-primary-600' : 'text-gray-700'
                }`}>
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg shadow-md">
        <div className="flex items-start">
          <svg className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <h3 className="text-lg font-bold text-yellow-900 mb-2">Note on Deadlines</h3>
            <p className="text-yellow-800">
              All deadlines are Anywhere on Earth (AoE) time zone. This means you have until the end of the day, 
              anywhere on Earth, to submit your paper.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

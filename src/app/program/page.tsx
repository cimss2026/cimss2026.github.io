export default function Program() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">Workshop Program</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-6">Workshop Format</h2>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Length:</span> Half-day/Full-day workshop
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Expected Number of Submissions:</span> 16 ~ 20
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Expected Acceptance Rate:</span> ~ 40%
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Expected Number of Attendees:</span> 18 ~ 20 participants
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-6">Tentative Agenda (Half-day)</h2>
        
        <div className="space-y-4">
          <div className="flex items-start border-l-4 border-primary-600 pl-4 py-2">
            <div className="w-48 font-semibold text-primary-900 flex-shrink-0">
              09:30 - 09:45 am
            </div>
            <div className="text-gray-700">
              Opening Remarks
            </div>
          </div>

          <div className="flex items-start border-l-4 border-primary-500 pl-4 py-2 bg-primary-50">
            <div className="w-48 font-semibold text-primary-900 flex-shrink-0">
              09:45 - 10:45 am
            </div>
            <div className="text-gray-700">
              <span className="font-semibold">First Keynote Talk</span>
            </div>
          </div>

          <div className="flex items-start border-l-4 border-primary-400 pl-4 py-2">
            <div className="w-48 font-semibold text-primary-900 flex-shrink-0">
              10:45 - 11:25 am
            </div>
            <div className="text-gray-700">
              Technical Presentations (20-min × 2)
            </div>
          </div>

          <div className="flex items-start border-l-4 border-gray-400 pl-4 py-2 bg-gray-50">
            <div className="w-48 font-semibold text-gray-700 flex-shrink-0">
              11:25 - 11:40 am
            </div>
            <div className="text-gray-700">
              Break
            </div>
          </div>

          <div className="flex items-start border-l-4 border-primary-400 pl-4 py-2">
            <div className="w-48 font-semibold text-primary-900 flex-shrink-0">
              11:40 am - 12:20 pm
            </div>
            <div className="text-gray-700">
              Technical Presentations (20-min × 2)
            </div>
          </div>

          <div className="flex items-start border-l-4 border-gray-400 pl-4 py-2 bg-gray-50">
            <div className="w-48 font-semibold text-gray-700 flex-shrink-0">
              12:20 - 01:20 pm
            </div>
            <div className="text-gray-700">
              Lunch Break
            </div>
          </div>

          <div className="flex items-start border-l-4 border-primary-500 pl-4 py-2 bg-primary-50">
            <div className="w-48 font-semibold text-primary-900 flex-shrink-0">
              01:20 - 02:20 pm
            </div>
            <div className="text-gray-700">
              <span className="font-semibold">Second Keynote Talk</span>
            </div>
          </div>

          <div className="flex items-start border-l-4 border-primary-600 pl-4 py-2">
            <div className="w-48 font-semibold text-primary-900 flex-shrink-0">
              02:20 - 02:30 pm
            </div>
            <div className="text-gray-700">
              Concluding Remarks
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-blue-900 mb-2">Note</h3>
        <p className="text-blue-800">
          Detailed program with speaker names and paper titles will be announced after the paper selection process is complete.
        </p>
      </div>
    </div>
  );
}

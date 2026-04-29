export default function Submissions() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">Submission Information</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-6">How to Submit</h2>
        
        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-6">
          <p className="text-lg font-semibold text-primary-900 mb-2">
            Submission System
          </p>
          <p className="text-gray-700">
            Submission Link: <a href="https://easychair.org/my2/conference?conf=cimss2026" className="text-primary-600 hover:underline break-all">https://easychair.org/my2/conference?conf=cimss2026</a>
          </p>
        </div>

        <h3 className="text-xl font-semibold text-primary-800 mb-4">Submission Process</h3>
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start">
            <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="font-semibold mb-1">Prepare Your Paper</h4>
              <p>Format according to <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">LNCS guidelines</a>, max 20 pages including references</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="font-semibold mb-1">Ensure Anonymity</h4>
              <p>Remove all author names, affiliations, and identifying information</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="font-semibold mb-1">Submit Online</h4>
              <p>Use the <a href="https://easychair.org/my2/conference?conf=cimss2026" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">submission system</a></p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              4
            </div>
            <div>
              <h4 className="font-semibold mb-1">Await Review</h4>
              <p>Papers will undergo peer review by the technical program committee</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-4">Two Submission Cycles</h2>
        <p className="text-gray-700 mb-6">
          CIMSS 2026 offers two submission cycles to provide more flexibility for authors:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border-2 border-gray-300 opacity-75">
            <h3 className="text-xl font-bold text-gray-600 mb-4 line-through">Cycle 1</h3>
            <ul className="space-y-2 text-gray-500 line-through">
              <li><span className="font-semibold">Submission Deadline:</span> <span className="line-through text-gray-400">January 24, 2026</span> <span className="font-bold text-gray-500 line-through">January 30, 2026 (Extended)</span></li>
              <li><span className="font-semibold">Notification:</span> February 21, 2026</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-lg border-2 border-primary-300 opacity-75">
            <h3 className="text-xl font-bold text-primary-900 mb-4 line-through">Cycle 2</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="line-through"><span className="font-semibold">Submission Opens:</span> February 23, 2026</li>
              <li className="line-through"><span className="font-semibold">Submission Deadline:</span> March 22, 2026</li>
              <li className="line-through"><span className="font-semibold">Notification:</span> April 24, 2026</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded">
          <p className="text-gray-700 mb-3">
            <span className="font-semibold">Camera-Ready Submission:</span> As announced by the ACNS Organizing Committee, CIMSS 2026 will be published in the form of post-proceedings this year. Instructions regarding the preparation of the post-proceedings will be announced around the last week of May 2026.
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Early-bird Registration Deadline:</span> May 1, 2026
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-4">Publication</h2>
        <p className="text-gray-700">
          Accepted papers will be published in the ACNS 2026 workshop proceedings by Springer in their Lecture Notes 
          in Computer Science (LNCS) series. Authors of accepted papers are required to present their work at the workshop.
        </p>
      </div>
    </div>
  );
}

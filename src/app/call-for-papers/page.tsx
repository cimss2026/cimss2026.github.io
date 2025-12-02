export default function CallForPapers() {
  const topics = [
    "New Attack Vectors on CIMSS",
    "Empirical Study of CIMSS",
    "Formal Treatment of CIMSS",
    "Authentication and Remote Attestation for CIMSS",
    "Human Factors in CIMSS",
    "Intrusion/Anomaly Detection/Prevention for CIMSS",
    "Forensics in CIMSS",
    "Novel Security Notions for CIMSS",
    "Cryptographic Tools for CIMSS",
    "Vulnerabilities Discovery and Management in CIMSS",
    "Intellectual Property Protection in CIMSS",
    "Novel Analysis Tools for CIMSS",
    "Risk Management for CIMSS",
    "Control Theoretic Methods for CIMSS",
    "Ransomware in CIMSS"
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">Call for Papers</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-4">Topics of Interest</h2>
        <p className="text-gray-700 mb-6">
          Topics of interest include, but are not limited to:
        </p>
        <ul className="grid md:grid-cols-2 gap-3">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{topic}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-4">Submission Guidelines</h2>
        
        <div className="space-y-4 text-gray-700">
          <p>
            Submissions must not substantially duplicate work that any of the authors has published elsewhere or has 
            submitted in parallel to any other venue with formally published proceedings. Information about submissions 
            may be shared with program chairs of other conferences for that purpose.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p className="font-semibold text-yellow-900">Anonymity Requirements</p>
            <p className="text-yellow-800">
              Submissions must be anonymous, with no author names, affiliations, acknowledgement or obvious references.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-primary-800 mt-6 mb-3">Format Requirements</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Must begin with a title, short abstract, and a list of keywords</li>
            <li>Introduction should summarize contributions at a level appropriate for a non-specialist reader</li>
            <li>Follow the original LNCS format (see <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" className="text-primary-600 hover:underline">Springer LNCS Guidelines</a>)</li>
            <li>Page limit: 20 pages (including references)</li>
            <li>Authors of accepted papers must guarantee presentation at the conference</li>
            <li>Authors must make a full version of their paper available online</li>
            <li>It is strongly encouraged that submissions be processed in LaTeX</li>
          </ul>

          <h3 className="text-xl font-semibold text-primary-800 mt-6 mb-3">Work-in-Progress Papers</h3>
          <div className="bg-primary-50 p-4 rounded">
            <p className="mb-2">
              Work-in-progress papers are welcome, and such submissions can expectedly be less than the maximum page 
              limit of 20 pages.
            </p>
            <p className="mb-2">
              Submissions less than 10 pages are discouraged as there is not enough space for appropriate technical 
              content presentation.
            </p>
            <p className="font-semibold text-primary-900">
              Authors are required to include "WiP:" in the title of a work-in-progress paper submission.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
            <p className="font-semibold text-red-900">Important</p>
            <p className="text-red-800">
              Submissions not meeting the submission guidelines risk rejection without consideration of their merits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

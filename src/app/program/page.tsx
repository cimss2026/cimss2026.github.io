const papers = [
  {
    title: 'Data2Damage: Using Large Language Models to Uncover Logic-Level Attack Vectors in ICS',
    authors: 'Kuberan Sandrasekaran, Muhammad Usman Shahid, Chuadhr Mujeeb Ahmed, Rajiv Ranjan and Jianying Zhou',
  },
  {
    title: 'TTNeural: A TFHE-Ready Lightweight Deep Learning Architecture for Encrypted Time-Series Analytics in Critical Infrastructures',
    authors: 'Alvin Chew',
  },
  {
    title: 'OpenBridge: An Open-Source Platform for NMEA 2000 Education and Security Research',
    authors: 'Constantine Macris, James Campbell and Anissa Elias',
  },
];

export default function Program() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">Workshop Program</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8 space-y-8">
        <div className="border-l-4 border-primary-600 bg-primary-50 rounded-r-lg p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-700 mb-2">Session I</p>
          <div className="space-y-5 text-gray-700">
            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
              <div className="min-w-[140px] font-bold text-primary-900">14:00 – 14:20</div>
              <div className="text-lg">Welcome and Opening Remarks</div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
              <div className="min-w-[140px] font-bold text-primary-900">14:20 – 15:20</div>
              <div>
                <p className="text-lg font-semibold text-gray-900">Keynote</p>
                <p className="mt-1">Engineering Trust at Sea: Cyber Risk Management in the Future Maritime Ecosystem</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
              <div className="min-w-[140px] font-bold text-primary-900">15:20 – 16:00</div>
              <div className="text-lg">Coffee Break and Networking</div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-2">Session II</p>
          <div className="flex flex-col md:flex-row md:items-start md:gap-6 mb-5 text-gray-700">
            <div className="min-w-[140px] font-bold text-primary-900">16:00 – 17:00</div>
            <div>
              <p className="text-lg font-semibold text-gray-900">Three Paper Presentations and Closing Remarks</p>
            </div>
          </div>

          <div className="space-y-4">
            {papers.map((paper, index) => (
              <div key={paper.title} className="bg-white rounded-lg border border-blue-100 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{paper.title}</h2>
                    <p className="mt-2 text-gray-700">
                      <span className="font-semibold">By </span>
                      {paper.authors}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-green-900 mb-2">Workshop Day</h3>
        <p className="text-green-800">
          CIMSS 2026 will take place on June 24, 2026 as part of ACNS 2026.
        </p>
      </div>
    </div>
  );
}

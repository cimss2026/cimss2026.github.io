export default function Home() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section 
        className="relative text-center py-48 text-white min-h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/Picture1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 container mx-auto px-4">
          {/* ACNS Logo */}
          <div className="flex justify-center mb-8">
             <img src="/acns-logo_L.jpg" alt="ACNS 2026 Logo" className="h-32 w-auto rounded-xl border-4 border-white/20 shadow-xl backdrop-blur-sm" />
          </div>

          <h1 className="text-5xl font-bold mb-8 drop-shadow-lg">
            CIMSS 2026
          </h1>
          <h2 className="text-3xl font-semibold mb-10 drop-shadow-md">
            6th International Workshop on Critical Infrastructure and Maritime Systems Security
          </h2>
          <p className="text-xl mb-6 drop-shadow-md">
            In Conjunction with <a href="https://acns2026.github.io/index.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-200 transition-colors">ACNS 2026</a>
          </p>
          <p className="text-lg mb-12 drop-shadow-md">
            June 22-25, 2026
          </p>
          
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
            {/* Important Dates Badge */}
            <div className="bg-primary-600 text-white px-8 py-6 rounded-lg shadow-lg bg-opacity-90 backdrop-blur-sm w-full max-w-md transform hover:scale-105 transition-transform flex flex-col justify-center">
              <p className="font-semibold text-lg mb-2">Workshop Paper Submission (Cycle 1)</p>
              <p className="text-3xl font-bold">January 24, 2026</p>
            </div>

            {/* Award Badge */}
            <div className="bg-white text-primary-900 px-8 py-6 rounded-lg shadow-lg bg-opacity-95 backdrop-blur-sm w-full max-w-md border-2 border-yellow-400 relative overflow-hidden transform hover:scale-105 transition-transform flex flex-col justify-center">
              <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 shadow-sm">AWARD</div>
              <h3 className="text-xl font-bold mb-2 text-primary-800">Best ACNS Workshops Paper Award</h3>
              <p className="text-2xl font-bold text-yellow-600 mb-3">EUR 500 Prize</p>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-600 font-medium">
                <span>Sponsored by</span>
                <img src="/Springer.jpg" alt="Springer" className="h-8 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-3xl font-bold text-primary-900 mb-6">About the Workshop</h3>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Critical infrastructure including power grids, water treatment facilities, and transportation systems 
              across land and sea, forms the foundation of modern society. Within this landscape, the maritime industry 
              is undergoing a significant transformation through the adoption of Industry 4.0 technologies, often referred 
              to as Maritime 4.0. This evolution involves the integration of advanced digital tools such as automation, 
              real-time data analytics, artificial intelligence, and cybersecurity frameworks to enhance operational 
              efficiency, safety, and sustainability.
            </p>
            <p className="mb-4">
              As maritime systems become increasingly digitized, compliance with cybersecurity standards such as the 
              International Association of Classification Societies (IACS) Unified Requirements E-26 and E-27 is becoming 
              essential. Cyberattacks targeting critical infrastructure, especially maritime systems, can lead to severe 
              disruptions affecting manufacturers, ship owners, and society at large.
            </p>
            <p className="mb-4">
              This workshop aims to bring together researchers and professionals working in Critical Infrastructure and 
              Maritime Systems Security (CIMSS) to share cutting-edge research, innovative ideas, and practical insights. 
              It also seeks to foster collaboration between academia and industry, encouraging dialogue on real-world 
              challenges and creative solutions to strengthen the resilience and security of maritime and other critical systems.
            </p>
            <div className="bg-primary-50 border-l-4 border-primary-600 p-4 my-6">
              <p className="font-semibold text-primary-900">
                Note: For the sixth version of CIMSS, we are changing its name to Critical Infrastructure and Maritime 
                Systems Security from previously titled as Critical Infrastructure and Manufacturing Systems Security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-3xl font-bold text-primary-900 mb-6">News</h3>
          <ul className="space-y-4">
            <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-primary-700 min-w-[150px]">Nov 26, 2025</span>
              <span className="text-gray-700">Submission Cycle 1 opened</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-primary-700 min-w-[150px]">Nov 26, 2025</span>
              <span className="text-gray-700">CFP announced</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-primary-700 min-w-[150px]">Nov 25, 2025</span>
              <span className="text-gray-700">Website launched</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/call-for-papers" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary-600">
            <h4 className="text-xl font-bold text-primary-900 mb-2">Call for Papers</h4>
            <p className="text-gray-600">View topics and submission guidelines</p>
          </a>
          <a href="/important-dates" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary-600">
            <h4 className="text-xl font-bold text-primary-900 mb-2">Important Dates</h4>
            <p className="text-gray-600">Submission deadlines and schedule</p>
          </a>
          <a href="/organization" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary-600">
            <h4 className="text-xl font-bold text-primary-900 mb-2">Organization</h4>
            <p className="text-gray-600">Program chairs and committee</p>
          </a>
        </div>
      </section>
    </div>
  );
}

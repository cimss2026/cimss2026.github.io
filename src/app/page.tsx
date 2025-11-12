export default function Home() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-primary-900 mb-4">
          CIMSS 2026
        </h1>
        <h2 className="text-3xl font-semibold text-primary-700 mb-6">
          6th International Workshop on Critical Infrastructure and Maritime Systems Security
        </h2>
        <p className="text-xl text-gray-700 mb-4">
          In Conjunction with ACNS 2026
        </p>
        <p className="text-lg text-gray-600 mb-8">
          June 22-25, 2026
        </p>
        
        {/* Important Dates Badge */}
        <div className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg shadow-lg">
          <p className="font-semibold text-lg">Workshop Paper Submission (Cycle 1)</p>
          <p className="text-2xl font-bold">January 24, 2026</p>
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

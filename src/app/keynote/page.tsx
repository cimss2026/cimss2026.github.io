export default function Keynote() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">Keynote</h1>

      {/* Keynote Speaker Card */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Speaker Photo */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <img
              src="/osiris-valdez-banda.jpg"
              alt="Prof. Osiris A. Valdez Banda"
              className="w-48 h-56 object-cover rounded-lg shadow-md border-2 border-primary-200"
            />
          </div>

          {/* Speaker Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-primary-900 mb-1">
              Prof. Osiris A. Valdez Banda
            </h2>
            <p className="text-primary-600 font-semibold text-lg mb-1">
              Aalto University, Finland
            </p>
            <p className="text-gray-500 italic mb-4">
              Professor of Marine and Arctic Technology
            </p>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-lg mb-4">
              <h3 className="text-lg font-bold text-primary-900 mb-2">Talk Title</h3>
              <p className="text-gray-800 font-medium italic">
                "Engineering Trust at Sea: Cyber Risk Management in the Future Maritime Ecosystem"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-4">Abstract</h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify">
          <p>
            The maritime sector is undergoing a rapid digital transformation driven by autonomous systems, artificial
            intelligence, satellite connectivity, and increasingly interconnected ship and shore infrastructures. While
            these technologies improve efficiency, sustainability, and safety, they also introduce new cyber
            vulnerabilities that challenge trust and resilience at sea. As vessels evolve into highly networked
            cyber-physical systems, cyber risk management must move beyond technical compliance and become an integral
            part of maritime engineering, governance, and operational decision-making.
          </p>
          <p className="mt-4">
            This keynote discusses how trust can be engineered within the future maritime ecosystem through proactive
            and adaptive cybersecurity/safety strategies. It highlights emerging risks related to autonomous
            navigation, operational technology, and data-driven maritime services, while emphasizing the importance
            of establishing resilient frameworks, safe and secure-by-design principles, and interdisciplinary
            collaboration. Ultimately, the presentation argues that the sustainability and competitiveness of maritime
            transport will depend on the industry&apos;s ability to build safe and secure, transparent, and trustworthy
            digital ecosystems for increasingly complex operational environments embedded in the future maritime
            ecosystem.
          </p>
        </div>
      </div>

      {/* Speaker Bio */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-4">Speaker Biography</h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify">
          <p className="mb-4">
            Osiris Valdez Banda is Professor of Marine and Arctic Technology at Aalto University and leads the
            Research Team on Safe and Efficient Marine and Ship Systems. His research focuses on maritime risk
            analysis, safety systems engineering, and resilience in smart shipping and winter navigation operations.
            He develops advanced methods, processes, and decision-support tools for analyzing and managing the
            safety, reliability, and resilience of ship and marine systems in increasingly digitalized and autonomous
            maritime environments.
          </p>
          <p>
            His work has contributed significantly to the development of risk analysis and management models for
            maritime traffic in the Northern Baltic Sea, particularly in critical waterways and fairways. His
            research addresses the safety implications of emerging smart shipping services, including remote
            pilotage and autonomous maritime technologies, with the aim of supporting safer, more efficient, and
            resilient maritime traffic operations in complex operating conditions.
          </p>
        </div>
      </div>
    </div>
  );
}

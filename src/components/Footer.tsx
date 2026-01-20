export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-3">CIMSS 2026</h4>
            <p className="text-gray-300 text-sm">
              6th International Workshop on Critical Infrastructure and Maritime Systems Security
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3">In Conjunction With</h4>
            <p className="text-gray-300 text-sm">
              <a href="https://acns2026.github.io/index.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">ACNS 2026</a><br />
              24th International Conference on Applied Cryptography and Network Security
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3">Contact</h4>
            <p className="text-gray-300 text-sm mb-2">
              For inquiries, please contact:
            </p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>
                <a href="mailto:awais_yousaf@sutd.edu.sg" className="hover:text-white transition-colors">
                  awais_yousaf@sutd.edu.sg
                </a>
              </li>
              <li>
                <a href="mailto:victor.bolbot@novia.fi" className="hover:text-white transition-colors">
                  victor.bolbot@novia.fi
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2026 CIMSS Workshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

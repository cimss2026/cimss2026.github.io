export default function Organization() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">Organization</h1>
      
      {/* Program Chairs */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-6">Program Chairs</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Awais Yousaf */}
          <div className="border-l-4 border-primary-600 pl-6">
            <h3 className="text-xl font-semibold text-primary-900 mb-2">Awais Yousaf</h3>
            <p className="text-gray-600 mb-4">Singapore University of Technology and Design (SUTD), Singapore</p>
            <div className="text-gray-700 text-sm space-y-2">
              <p>
                Awais Yousaf serves as a Research Fellow at iTrust, Singapore University of Technology and Design (SUTD), 
                Singapore. He earned his B.Sc., M.Sc., and Ph.D. in Electrical Engineering from University of Engineering 
                and Technology, Lahore, Pakistan, in 2008, 2010, and 2018, respectively.
              </p>
              <p>
                His prior research has focused on secure cyber-physical systems, intrusion detection systems, signal 
                processing for defense, and performance modeling and simulation of multicore microprocessor platforms 
                and architectures. His current research interests include maritime cybersecurity, maritime cybersecurity 
                testbeds, and maritime cyber risk management.
              </p>
              <p>
                He has served as TPC member for ICEE-2018, CPSComm-2024, CPSComm-2025 and DCS-Water 2025. He was also 
                part of the organizing committees for AsiaCCS 2024 conference and CPSS 2024 workshop. Recently, he has 
                served as a chair of CPSS 2025.
              </p>
            </div>
          </div>

          {/* Victor Bolbot */}
          <div className="border-l-4 border-primary-600 pl-6">
            <h3 className="text-xl font-semibold text-primary-900 mb-2">Victor Bolbot</h3>
            <p className="text-gray-600 mb-4">Aalto University, Finland</p>
            <div className="text-gray-700 text-sm space-y-2">
              <p>
                Victor Bolbot is a post-doc researcher at the Research group on Safe and Efficient Marine and Ship 
                Systems of Aalto University with doctoral degree from the University of Strathclyde, Glasgow, Scotland, 
                and M.Sc. degree from the National Technical University of Athens, Greece.
              </p>
              <p>
                During his studies as a Master and PhD student Victor has received multiple awards for his outstanding 
                performance from distinguished organisations such as DNV, IMarEST, Limmat Stiftung, Thomaideion, TRA 
                VISIONS 2020.
              </p>
              <p>
                Victor's research interests focus on design, educational aspects, safety and cybersecurity assurance 
                of complex and autonomous marine systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Committee Members */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-6">Organization Committee</h2>
        
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold text-primary-900">Publication Chair</h3>
            <p className="text-gray-700">Eyasu Getahun Chekole, SUTD, Singapore</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold text-primary-900">Web Chair</h3>
            <p className="text-gray-700">Sunil Basnet, Aalto University, Finland</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold text-primary-900">Publicity Chair</h3>
            <p className="text-gray-700">Weizhi Meng, Lancaster University, UK</p>
          </div>
        </div>
      </div>

      {/* Technical Program Committee */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-6">Technical Program Committee</h2>
        <div className="bg-gray-50 p-6 rounded text-center">
          <p className="text-gray-600 italic">To Be Determined</p>
        </div>
      </div>
    </div>
  );
}

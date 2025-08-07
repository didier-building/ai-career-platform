export function ImpactSection() {
  return (
    <section id="impact" className="bg-green-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-green-700 mb-6">
          Impact So Far
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          Our pilot program has already helped dozens of African graduates build confidence, land interviews, and launch their careers. Here are some highlights:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-8">
            <div className="text-4xl font-bold text-blue-600 mb-2">+50</div>
            <div className="text-gray-600">CVs Improved</div>
          </div>
          <div className="bg-white rounded-xl shadow p-8">
            <div className="text-4xl font-bold text-green-600 mb-2">+30</div>
            <div className="text-gray-600">Mock Interviews</div>
          </div>
          <div className="bg-white rounded-xl shadow p-8">
            <div className="text-4xl font-bold text-blue-600 mb-2">+10</div>
            <div className="text-gray-600">Job Offers</div>
          </div>
        </div>
      </div>
    </section>
  );
}

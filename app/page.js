import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center text-white mb-16 animate-fade-in-down">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            🎓 Interview Preparation Hub
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-95">
            Your Complete Guide to Aptitude, Programming & Technical Interviews
          </p>
        </header>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {[
            { number: '500+', label: 'Practice Questions' },
            { number: '100+', label: 'Topics Covered' },
            { number: '50+', label: 'Interactive Quizzes' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-center text-white transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Aptitude Section */}
          <Link href="/aptitude">
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="text-6xl text-center mb-6 group-hover:scale-110 transition-transform">
                🧮
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                Aptitude
              </h2>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                Master quantitative aptitude, logical reasoning, and verbal ability for competitive exams and placement tests.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h3 className="text-indigo-600 font-semibold mb-3 text-center">Key Areas</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">✓</span>
                    Quantitative Aptitude (30+ topics)
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">✓</span>
                    Logical Reasoning (15+ topics)
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">✓</span>
                    Verbal Ability (20+ topics)
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">✓</span>
                    Interactive Quizzes & Solutions
                  </li>
                </ul>
              </div>
              <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                Start Learning →
              </button>
            </div>
          </Link>

          {/* Programming Section */}
          <Link href="/programming">
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="text-6xl text-center mb-6 group-hover:scale-110 transition-transform">
                💻
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                Programming
              </h2>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                Learn Python from basics to advanced, solve coding challenges, and prepare for coding interviews.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h3 className="text-indigo-600 font-semibold mb-3 text-center">Key Areas</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">✓</span>
                    Python Fundamentals & Syntax
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">✓</span>
                    Data Structures in Python
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">✓</span>
                    Problem-Solving Patterns
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">✓</span>
                    LeetCode-Style Challenges
                  </li>
                </ul>
              </div>
              <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                Start Coding →
              </button>
            </div>
          </Link>

          {/* Technical Section */}
          <Link href="/technical">
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="text-6xl text-center mb-6 group-hover:scale-110 transition-transform">
                🚀
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                Technical
              </h2>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                Deep dive into computer science fundamentals: OOP, DSA, DBMS, OS, Networks, and System Design.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h3 className="text-indigo-600 font-semibold mb-3 text-center">Key Areas</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">✓</span>
                    Object-Oriented Programming
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">✓</span>
                    Data Structures & Algorithms
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">✓</span>
                    Database Management (SQL)
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">✓</span>
                    Operating Systems & Networks
                  </li>
                </ul>
              </div>
              <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                Explore Topics →
              </button>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-center text-white mt-16">
          <p className="text-lg">&copy; 2025 Interview Preparation Hub | Built for Success 🎯</p>
          <p className="text-sm mt-2 opacity-90">Everything you need to ace your interviews in one place</p>
        </footer>
      </div>
    </div>
  );
}

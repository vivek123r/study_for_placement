import Link from 'next/link';

const PracticePage = async ({ params }) => {
  const { difficulty } = await params;
  
  const difficulties = {
    easy: { name: 'Easy', color: 'green', icon: '🟢', range: '1-50' },
    medium: { name: 'Medium', color: 'yellow', icon: '🟡', range: '51-150' },
    hard: { name: 'Hard', color: 'red', icon: '🔴', range: '151-200' },
  };

  const currentDifficulty = difficulties[difficulty] || difficulties.easy;

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-500 via-pink-500 to-red-500 p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/programming" className="text-white hover:underline mb-4 inline-block">
          ← Back to Programming
        </Link>
        
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-5xl">{currentDifficulty.icon}</span>
              <h1 className="text-4xl font-bold text-purple-600">
                {currentDifficulty.name} Problems
              </h1>
            </div>
            <p className="text-gray-600 text-lg">
              Problems {currentDifficulty.range} - LeetCode Style Challenges
            </p>
          </div>

          <div className="space-y-4">
            {/* Sample problems - replace with actual content */}
            {[1, 2, 3, 4, 5].map((num) => (
              <div 
                key={num}
                className="border-2 border-purple-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-${currentDifficulty.color}-100 text-${currentDifficulty.color}-700`}>
                        {currentDifficulty.name}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">
                        Problem #{num}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Problem description will be added here. This will include the problem statement,
                      examples, constraints, and expected output format.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        Array
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        Two Pointers
                      </span>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors whitespace-nowrap">
                    Solve →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-purple-700 mb-2">💡 Coming Soon</h3>
            <p className="text-gray-700">
              Full problem set with detailed solutions, test cases, and video explanations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticePage;

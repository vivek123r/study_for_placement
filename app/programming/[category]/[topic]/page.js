import Link from 'next/link';
import { getTopicData } from '../../data/topics';
import CodeEditor from './CodeEditor';

const TopicPage = async ({ params }) => {
  const { category, topic } = await params;
  
  // Get topic data
  const topicData = getTopicData(category, topic);
  
  // Fallback if no data found
  if (!topicData) {
    return (
      <div className="min-h-screen bg-linear-to-br from-purple-500 via-pink-500 to-red-500 p-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/programming" className="text-white hover:underline mb-4 inline-block">
            ← Back to Programming
          </Link>
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h1 className="text-4xl font-bold text-purple-600 mb-6">
              Content Coming Soon
            </h1>
            <p className="text-gray-600">This topic is under development.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-500 via-pink-500 to-red-500 p-4 md:p-6">
      <div className="max-w-[1800px] mx-auto">
        <Link href="/programming" className="text-white hover:underline mb-4 inline-block">
          ← Back to Programming
        </Link>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        <div className="flex-1 bg-white rounded-2xl shadow-2xl p-4 md:p-6">
          <div className="mb-6">
            <span className="text-sm font-semibold text-purple-500 uppercase tracking-wide">
              {category}
            </span>
            <h1 className="text-4xl font-bold text-purple-600 mt-2">
              {topicData.title}
            </h1>
          </div>
          
          <div className="prose max-w-none">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-purple-700 mb-2">📚 Overview</h3>
              <p className="text-gray-700">
                {topicData.overview}
              </p>
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 What You'll Learn</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {topicData.whatYouLearn.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">🧪 Practice Problems</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {topicData.practiceProblems.map((problem, index) => (
                      <li key={index}>{problem}</li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </div>
          <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 Code Example</h2>
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="flex">
                    {/* Line numbers */}
                    <div className="bg-gray-800 text-gray-500 px-4 py-6 select-none">
                      <pre className="text-sm leading-6">
                        {topicData.codeExample.split('\n').map((_, i) => (
                          <div key={i} className="text-right">{i + 1}</div>
                        ))}
                      </pre>
                    </div>
                    {/* Code content */}
                    <div className="flex-1 text-gray-100 px-4 py-6 overflow-x-auto">
                      <pre className="text-sm leading-6">
                        <code>{topicData.codeExample}</code>
                      </pre>
                    </div>
                  </div>
                </div>
            </div>
            </div>
          <CodeEditor />
        </div>
      </div>
    </div>
  );
};

export default TopicPage;

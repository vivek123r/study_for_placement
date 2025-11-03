'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { quantitativeData } from '../../data/quantitative';
import { logicalData } from '../../data/logical';
import { verbalData } from '../../data/verbal';

export default function TopicPage() {
  const params = useParams();
  const { section, topic } = params;
  const [expandedQuestions, setExpandedQuestions] = useState(new Set());
  const [activeView, setActiveView] = useState('questions'); // 'questions' or 'quiz'
  
  // Quiz state
  const [userAnswers, setUserAnswers] = useState({});

  // Get topic data based on section
  let topicData = null;
  if (section === 'quantitative') {
    topicData = quantitativeData[topic];
  } else if (section === 'logical') {
    topicData = logicalData[topic];
  } else if (section === 'verbal') {
    topicData = verbalData[topic];
  }

  if (!topicData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-2xl text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Topic Not Found</h1>
          <p className="text-gray-600 mb-6">This topic content is coming soon!</p>
          <Link href="/aptitude" className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">
            Back to Aptitude
          </Link>
        </div>
      </div>
    );
  }

  const toggleQuestion = (id) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedQuestions(newExpanded);
  };

  const handleAnswerSelect = (questionIdx, optionIdx) => {
    if (userAnswers[questionIdx] !== undefined) return;
    setUserAnswers({
      ...userAnswers,
      [questionIdx]: optionIdx
    });
  };

  const calculateScore = () => {
    let correct = 0;
    topicData.quiz.forEach((q, idx) => {
      if (userAnswers[idx] === q.correct) {
        correct++;
      }
    });
    return { correct, total: topicData.quiz.length };
  };

  const resetQuiz = () => {
    setUserAnswers({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500">
      <div className="max-w-7xl mx-auto pb-12">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-10 px-6 rounded-b-3xl shadow-2xl mb-8">
          <Link href="/aptitude" className="inline-block mb-4 text-white/80 hover:text-white transition-colors">
            ← Back to Aptitude
          </Link>
          <h1 className="text-4xl font-bold mb-2">{topicData.title}</h1>
          <p className="text-lg opacity-90">{topicData.description}</p>
        </header>

        <div className="px-6">
          {/* Toggle Buttons */}
          <div className="flex gap-4 mb-8 justify-center">
            <button
              onClick={() => setActiveView('questions')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                activeView === 'questions'
                  ? 'bg-white text-blue-600 shadow-xl'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              📚 Solved Questions ({topicData.questions.length})
            </button>
            <button
              onClick={() => setActiveView('quiz')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                activeView === 'quiz'
                  ? 'bg-white text-blue-600 shadow-xl'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              🎯 Quiz ({topicData.quiz.length} Questions)
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">
            {/* Solved Questions View */}
            {activeView === 'questions' && (
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-blue-600 mb-6 border-l-4 border-blue-600 pl-4">
                  Solved Questions
                </h2>
                {topicData.questions.map((q) => (
                  <div
                    key={q.id}
                    className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200 p-6 hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => toggleQuestion(q.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-bold">
                            Q{q.id}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            q.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                            q.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {q.difficulty}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {q.question}
                        </h3>
                      </div>
                      <span 
                        className="text-2xl text-blue-600 transition-transform duration-300" 
                        style={{
                          transform: expandedQuestions.has(q.id) ? 'rotate(180deg)' : 'rotate(0deg)',
                          display: 'inline-block'
                        }}
                      >
                        ▼
                      </span>
                    </div>

                    {expandedQuestions.has(q.id) && (
                      <div className="mt-6 pt-6 border-t border-blue-200">
                        <div className="bg-white rounded-lg p-4 mb-4">
                          <h4 className="font-bold text-blue-600 mb-2">💡 Solution:</h4>
                          <pre className="text-gray-800 whitespace-pre-wrap font-sans">{q.solution}</pre>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                          <h4 className="font-bold text-green-600 mb-2">✓ Answer:</h4>
                          <p className="text-gray-800 font-semibold text-lg">{q.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Quiz View */}
            {activeView === 'quiz' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-600 mb-6 border-l-4 border-blue-600 pl-4">
                  🎯 Interactive Quiz
                </h2>

                {topicData.quiz.map((q, qIdx) => (
                  <div key={qIdx} className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 shadow-md border-2 border-blue-200">
                    <h3 className="text-xl font-semibold text-black mb-4">
                      {qIdx + 1}. {q.question}
                    </h3>
                    <div className="space-y-3">
                      {q.options.map((option, oIdx) => {
                        const isCorrect = oIdx === q.correct;
                        const isUserAnswer = userAnswers[qIdx] === oIdx;
                        const isAnswered = userAnswers[qIdx] !== undefined;
                        const isWrongAnswer = isAnswered && isUserAnswer && !isCorrect;
                        
                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleAnswerSelect(qIdx, oIdx)}
                            disabled={isAnswered}
                            className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-300 text-black ${
                              isAnswered
                                ? isCorrect
                                  ? 'bg-green-100 border-green-500 font-semibold'
                                  : isWrongAnswer
                                  ? 'bg-red-100 border-red-500 font-semibold'
                                  : 'bg-white border-gray-200'
                                : 'bg-white border-gray-300 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
                            }`}
                          >
                            <span className="font-medium">
                              {String.fromCharCode(65 + oIdx)}. 
                              {isAnswered && isCorrect && ' ✓ '}
                              {isAnswered && isWrongAnswer && ' ✗ '}
                            </span>
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    {userAnswers[qIdx] !== undefined && (
                      <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                        <p className="text-sm font-semibold text-black mb-1">💡 Explanation:</p>
                        <p className="text-sm text-black">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Quiz Score */}
                <div className="flex gap-4 justify-center mt-8 flex-wrap">
                  {Object.keys(userAnswers).length === topicData.quiz.length && topicData.quiz.length > 0 && (
                    <div className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl shadow-lg text-center">
                      Score: {calculateScore().correct} / {calculateScore().total}
                      <div className="text-sm opacity-90">
                        ({Math.round((calculateScore().correct / calculateScore().total) * 100)}%)
                      </div>
                    </div>
                  )}
                  {Object.keys(userAnswers).length > 0 && (
                    <button
                      onClick={resetQuiz}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Retry Quiz
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

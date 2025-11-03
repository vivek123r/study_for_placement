'use client';

import Link from 'next/link';
import { useState } from 'react';
import { technicalQuestions, quizData } from './data/questions';

export default function TechnicalPage() {
  const [activeTab, setActiveTab] = useState('oop');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestions, setExpandedQuestions] = useState(new Set());
  const [selectedQuizCategory, setSelectedQuizCategory] = useState('oop');
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const tabs = [
    { id: 'oop', label: 'OOP' },
    { id: 'dsa', label: 'DSA' },
    { id: 'dbms', label: 'DBMS' },
    { id: 'os', label: 'Operating Systems' },
    { id: 'networks', label: 'Networks' },
    { id: 'web', label: 'Web Dev' },
    { id: 'system', label: 'System Design' },
    { id: 'coding', label: 'Coding Patterns' },
    { id: 'cloud', label: 'Cloud/DevOps' },
    { id: 'aiml', label: 'AI/ML' },
    { id: 'quiz', label: '🎯 Quiz' },
  ];

  const toggleQuestion = (id) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedQuestions(newExpanded);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const currentQuestions = technicalQuestions[activeTab] || [];
  const filteredQuestions = currentQuestions.filter((q) =>
    q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAnswerSelect = (questionIdx, optionIdx) => {
    if (userAnswers[questionIdx] !== undefined) return; // Already answered
    setUserAnswers({
      ...userAnswers,
      [questionIdx]: optionIdx
    });
  };

  const calculateScore = () => {
    const currentQuizData = quizData[selectedQuizCategory] || [];
    let correct = 0;
    currentQuizData.forEach((q, idx) => {
      if (userAnswers[idx] === q.correct) {
        correct++;
      }
    });
    return { correct, total: currentQuizData.length };
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-10 px-6 text-center rounded-b-3xl shadow-2xl">
          <Link href="/" className="inline-block mb-4 text-white/80 hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-3 drop-shadow-lg">🚀 Technical Interview Preparation</h1>
          <p className="text-xl opacity-95">Complete Computer Science Guide for Tech Interviews</p>
        </header>

        {/* Search Box */}
        <div className="p-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="🔍 Search questions by keyword (e.g., 'polymorphism', 'binary tree', 'Docker')..."
            className="w-full px-6 py-4 text-lg border-2 border-indigo-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg"
          />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 px-6 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-white text-indigo-600 shadow-lg scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="px-6 pb-12">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold">200+</div>
                <div className="text-sm opacity-90">Questions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">10</div>
                <div className="text-sm opacity-90">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-sm opacity-90">Interview Ready</div>
              </div>
            </div>

            {/* Questions or Quiz */}
            {activeTab === 'quiz' ? (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-indigo-600 mb-6 border-l-4 border-indigo-600 pl-4">
                  🎯 Interactive Quiz
                </h2>

                {/* Quiz Category Selector */}
                <div className="mb-8">
                  <label className="block text-lg font-semibold text-black mb-3">Select Quiz Category:</label>
                  <select
                    value={selectedQuizCategory}
                    onChange={(e) => {
                      setSelectedQuizCategory(e.target.value);
                      resetQuiz();
                    }}
                    className="w-full px-4 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg text-black"
                  >
                    <option value="oop">OOP (Object-Oriented Programming)</option>
                    <option value="dsa">DSA (Data Structures & Algorithms)</option>
                    <option value="dbms">DBMS (Database Management Systems)</option>
                    <option value="os">Operating Systems</option>
                    <option value="networks">Computer Networks</option>
                    <option value="web">Web Development</option>
                  </select>
                </div>

                {/* Quiz Questions */}
                {(quizData[selectedQuizCategory] || []).map((q, qIdx) => (
                  <div key={qIdx} className="bg-gray-50 rounded-xl p-6 shadow-md border-2 border-purple-200">
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
                                : 'bg-white border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer'
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
                        <p className="text-sm font-semibold text-black mb-1">Explanation:</p>
                        <p className="text-sm text-black">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Quiz Score and Actions */}
                <div className="flex gap-4 justify-center mt-8 flex-wrap">
                  {Object.keys(userAnswers).length === (quizData[selectedQuizCategory] || []).length && (quizData[selectedQuizCategory] || []).length > 0 && (
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
                      className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Retry Quiz
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-indigo-600 mb-6 border-l-4 border-indigo-600 pl-4">
                  {tabs.find((t) => t.id === activeTab)?.label}
                </h2>

                {filteredQuestions.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <p className="text-xl">No questions found matching your search.</p>
                  </div>
                ) : (
                  filteredQuestions.map((q) => (
                    <div
                      key={q.id}
                      className="bg-gray-50 rounded-xl border-l-4 border-purple-500 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                      onClick={() => toggleQuestion(q.id)}
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold text-gray-800 flex-1 pr-4">
                          {q.question}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(q.difficulty)}`}>
                            {q.difficulty}
                          </span>
                          <span 
                            className="text-2xl text-indigo-600 transition-transform duration-300" 
                            style={{
                              transform: expandedQuestions.has(q.id) ? 'rotate(180deg)' : 'rotate(0deg)',
                              display: 'inline-block'
                            }}
                          >
                            ▼
                          </span>
                        </div>
                      </div>

                      {expandedQuestions.has(q.id) && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <div className="prose prose-indigo max-w-none">
                            {q.answer.split('\n').map((line, idx) => (
                              <p key={idx} className="text-black leading-relaxed mb-2">
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-white py-8">
          <p>&copy; 2025 Interview Prep Guide | Powered by Computer Science Fundamentals</p>
        </footer>
      </div>
    </div>
  );
}

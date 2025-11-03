'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AptitudePage() {
  const [activeSection, setActiveSection] = useState('quantitative');

  const sections = [
    { id: 'quantitative', label: '📊 Quantitative Aptitude', icon: '🔢' },
    { id: 'logical', label: '🧠 Logical Reasoning', icon: '🧩' },
    { id: 'verbal', label: '📖 Verbal Ability', icon: '✍️' },
  ];

  const quantitativeTopics = [
    { id: 'numbers', name: 'Numbers', icon: '🔢' },
    { id: 'work-wages', name: 'Work and Wages', icon: '💼' },
    { id: 'pipes-cistern', name: 'Pipes and Cistern', icon: '🚰' },
    { id: 'time-speed-distance', name: 'Time, Speed, and Distance', icon: '🏃' },
    { id: 'trains-boats', name: 'Trains, Boats, and Streams', icon: '🚂' },
    { id: 'lcm-hcf', name: 'LCM and HCF', icon: '🔄' },
    { id: 'percentages', name: 'Percentages', icon: '📊' },
    { id: 'ratio-proportion', name: 'Ratio, Proportion, and Partnership', icon: '⚖️' },
    { id: 'mixture-alligations', name: 'Mixture and Alligations', icon: '🧪' },
    { id: 'algebra', name: 'Algebra', icon: '📐' },
    { id: 'average', name: 'Average', icon: '📈' },
    { id: 'age-problems', name: 'Problem on Age', icon: '👶' },
    { id: 'profit-loss', name: 'Profit and Loss', icon: '💰' },
    { id: 'simple-interest', name: 'Simple Interest', icon: '💵' },
    { id: 'compound-interest', name: 'Compound Interest', icon: '💸' },
    { id: 'mensuration-2d', name: 'Mensuration 2D', icon: '📏' },
    { id: 'mensuration-3d', name: 'Mensuration 3D', icon: '📦' },
    { id: 'trigonometry', name: 'Trigonometry & Height and Distances', icon: '📐' },
    { id: 'progressions', name: 'Progressions', icon: '➡️' },
    { id: 'logarithms', name: 'Logarithms', icon: '📊' },
    { id: 'permutation-combination', name: 'Permutation and Combination', icon: '🎲' },
    { id: 'probability', name: 'Probability', icon: '🎯' },
    { id: 'geometry', name: 'Geometry', icon: '△' },
    { id: 'clocks', name: 'Clocks', icon: '⏰' },
    { id: 'calendars', name: 'Calendars', icon: '📅' },
    { id: 'coding-decoding', name: 'Coding-Decoding', icon: '🔐' },
    { id: 'race', name: 'Race', icon: '🏁' },
    { id: 'simplification', name: 'Simplification and Approximation', icon: '🧮' },
    { id: 'data-interpretation', name: 'Data Interpretation', icon: '📊' },
  ];

  const logicalTopics = [
    { id: 'number-series', name: 'Number Series', icon: '🔢' },
    { id: 'letter-symbol-series', name: 'Letter and Symbol Series', icon: '🔤' },
    { id: 'verbal-classification', name: 'Verbal Classification', icon: '📑' },
    { id: 'analogies', name: 'Analogies', icon: '🔗' },
    { id: 'logical-problems', name: 'Logical Problems', icon: '🧩' },
    { id: 'course-action', name: 'Course of Action', icon: '🎯' },
    { id: 'statement-conclusion', name: 'Statement and Conclusion', icon: '📝' },
    { id: 'theme-detection', name: 'Theme Detection', icon: '🎨' },
    { id: 'blood-relations', name: 'Blood Relations', icon: '👨‍👩‍👧‍👦' },
    { id: 'directions', name: 'Directions', icon: '🧭' },
    { id: 'statement-argument', name: 'Statement and Argument', icon: '💬' },
    { id: 'logical-deduction', name: 'Logical Deduction', icon: '🔍' },
    { id: 'letter-series', name: 'Letter Series', icon: '🔤' },
    { id: 'coding-decoding-logical', name: 'Coding Decoding', icon: '🔐' },
    { id: 'statement-assumptions', name: 'Statement and Assumptions', icon: '💭' },
    { id: 'logical-venn', name: 'Logical Venn Diagram', icon: '⭕' },
  ];

  const verbalTopics = [
    { id: 'spotting-errors', name: 'Spotting Errors', icon: '🔍' },
    { id: 'synonyms', name: 'Synonyms', icon: '📖' },
    { id: 'antonyms', name: 'Antonyms', icon: '🔄' },
    { id: 'selecting-words', name: 'Selecting Words', icon: '✅' },
    { id: 'spellings', name: 'Spellings', icon: '✍️' },
    { id: 'sentence-formation', name: 'Sentence Formation', icon: '📝' },
    { id: 'ordering-words', name: 'Ordering of Words', icon: '🔢' },
    { id: 'sentence-correction', name: 'Sentence Correction', icon: '✏️' },
    { id: 'sentence-improvement', name: 'Sentence Improvement', icon: '⬆️' },
    { id: 'completing-statements', name: 'Completing Statements', icon: '➡️' },
    { id: 'para-jumbles', name: 'Para Jumbles', icon: '🔀' },
    { id: 'paragraph-formation', name: 'Paragraph Formation', icon: '📄' },
    { id: 'cloze-test', name: 'Cloze Test', icon: '📝' },
    { id: 'comprehension', name: 'Comprehension', icon: '📚' },
    { id: 'one-word-substitutes', name: 'One Word Substitutes', icon: '💡' },
    { id: 'idioms-phrases', name: 'Idioms and Phrases', icon: '💬' },
    { id: 'change-voice', name: 'Change of Voice', icon: '🔄' },
    { id: 'change-speech', name: 'Change of Speech', icon: '💭' },
    { id: 'verbal-analogies', name: 'Verbal Analogies', icon: '🔗' },
    { id: 'articles', name: 'Articles', icon: '📰' },
    { id: 'preposition', name: 'Preposition', icon: '➡️' },
    { id: 'adjectives', name: 'Adjectives', icon: '✨' },
  ];

  const getCurrentTopics = () => {
    switch (activeSection) {
      case 'quantitative':
        return quantitativeTopics;
      case 'logical':
        return logicalTopics;
      case 'verbal':
        return verbalTopics;
      default:
        return [];
    }
  };

  const getSectionTitle = () => {
    switch (activeSection) {
      case 'quantitative':
        return 'Quantitative Aptitude Topics';
      case 'logical':
        return 'Logical Reasoning Topics';
      case 'verbal':
        return 'Verbal Ability Topics';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-10 px-6 text-center rounded-b-3xl shadow-2xl">
          <Link href="/" className="inline-block mb-4 text-white/80 hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-3 drop-shadow-lg">📊 Aptitude Preparation</h1>
          <p className="text-xl opacity-95">Master Quantitative, Logical & Verbal Skills</p>
        </header>

        {/* Section Tabs */}
        <div className="flex flex-wrap gap-4 px-6 py-8 justify-center">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-white text-blue-600 shadow-xl scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30 hover:scale-102'
              }`}
            >
              {section.icon} {section.label}
            </button>
          ))}
        </div>

        {/* Topics Grid */}
        <div className="px-6 pb-12">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-8 border-l-4 border-blue-600 pl-4">
              {getSectionTitle()}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCurrentTopics().map((topic) => (
                <div
                  key={topic.id}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-400"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{topic.icon}</span>
                    <h3 className="text-lg font-bold text-gray-800">{topic.name}</h3>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Link
                      href={`/aptitude/${activeSection}/${topic.id}`}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors text-sm"
                    >
                      📚 Solved Questions
                    </Link>
                    <Link
                      href={`/aptitude/${activeSection}/${topic.id}/quiz`}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm"
                    >
                      🎯 Quiz
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-white py-8">
          <p>&copy; 2025 Aptitude Prep Guide | Master Every Topic</p>
        </footer>
      </div>
    </div>
  );
}

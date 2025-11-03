'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ProgrammingPage() {
  const [activeTab, setActiveTab] = useState('basics');

  const tabs = [
    { id: 'basics', label: '📚 Python Basics' },
    { id: 'intermediate', label: '🔧 Intermediate' },
    { id: 'advanced', label: '🚀 Advanced' },
    { id: 'practice', label: '💻 Practice Problems' },
  ];

  const pythonBasics = [
    { id: 'variables', name: 'Variables & Data Types', icon: '📦', desc: 'Learn about int, float, string, boolean' },
    { id: 'operators', name: 'Operators', icon: '➕', desc: 'Arithmetic, comparison, logical operators' },
    { id: 'conditionals', name: 'Conditionals (if-else)', icon: '🔀', desc: 'Control flow with if, elif, else' },
    { id: 'loops', name: 'Loops (for, while)', icon: '🔄', desc: 'Iteration and loop control' },
    { id: 'strings', name: 'String Manipulation', icon: '✂️', desc: 'String methods, slicing, formatting' },
    { id: 'lists', name: 'Lists & List Comprehension', icon: '📝', desc: 'Dynamic arrays and list operations' },
    { id: 'tuples', name: 'Tuples & Sets', icon: '📌', desc: 'Immutable sequences and unique collections' },
    { id: 'dictionaries', name: 'Dictionaries', icon: '📖', desc: 'Key-value pairs and hash maps' },
    { id: 'functions', name: 'Functions & Lambda', icon: '⚙️', desc: 'Function definition, parameters, return' },
    { id: 'modules', name: 'Modules & Packages', icon: '📦', desc: 'Import statements and code organization' },
  ];

  const intermediateTopics = [
    { id: 'oop', name: 'Object-Oriented Programming', icon: '🏗️', desc: 'Classes, objects, inheritance' },
    { id: 'file-handling', name: 'File Handling', icon: '📁', desc: 'Reading and writing files' },
    { id: 'exception', name: 'Exception Handling', icon: '⚠️', desc: 'Try, except, finally blocks' },
    { id: 'iterators', name: 'Iterators & Generators', icon: '🔄', desc: 'Yield, next(), custom iterators' },
    { id: 'decorators', name: 'Decorators', icon: '🎨', desc: 'Function wrappers and annotations' },
    { id: 'list-methods', name: 'Advanced List Methods', icon: '📋', desc: 'Map, filter, reduce, sorted' },
    { id: 'regex', name: 'Regular Expressions', icon: '🔍', desc: 'Pattern matching with re module' },
    { id: 'datetime', name: 'Date & Time', icon: '⏰', desc: 'Working with dates and timestamps' },
  ];

  const advancedTopics = [
    { id: 'complexity', name: 'Time & Space Complexity', icon: '⏱️', desc: 'Big O notation analysis' },
    { id: 'recursion', name: 'Recursion', icon: '♻️', desc: 'Recursive functions and backtracking' },
    { id: 'dynamic-programming', name: 'Dynamic Programming', icon: '💎', desc: 'Memoization and tabulation' },
    { id: 'binary-search', name: 'Binary Search', icon: '🔍', desc: 'Efficient searching algorithms' },
    { id: 'sorting', name: 'Sorting Algorithms', icon: '🔢', desc: 'Bubble, merge, quick sort' },
    { id: 'linked-lists', name: 'Linked Lists', icon: '🔗', desc: 'Node-based data structures' },
    { id: 'stacks-queues', name: 'Stacks & Queues', icon: '📚', desc: 'LIFO and FIFO structures' },
    { id: 'trees', name: 'Trees & BST', icon: '🌳', desc: 'Binary trees and tree traversal' },
    { id: 'graphs', name: 'Graphs', icon: '🕸️', desc: 'DFS, BFS, shortest path' },
    { id: 'heaps', name: 'Heaps & Priority Queues', icon: '⛰️', desc: 'Min/max heap operations' },
  ];

  const practiceProblems = [
    { id: 'easy', name: 'Easy Problems (1-50)', icon: '🟢', difficulty: 'Easy', count: 50 },
    { id: 'medium', name: 'Medium Problems (51-150)', icon: '🟡', difficulty: 'Medium', count: 100 },
    { id: 'hard', name: 'Hard Problems (151-200)', icon: '🔴', difficulty: 'Hard', count: 50 },
  ];

  const getCurrentContent = () => {
    switch (activeTab) {
      case 'basics':
        return pythonBasics;
      case 'intermediate':
        return intermediateTopics;
      case 'advanced':
        return advancedTopics;
      case 'practice':
        return practiceProblems;
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-10 px-6 text-center rounded-b-3xl shadow-2xl">
          <Link href="/" className="inline-block mb-4 text-white/80 hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-3 drop-shadow-lg">🐍 Python Programming</h1>
          <p className="text-xl opacity-95">From Basics to Advanced + LeetCode Style Problems</p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 px-6 py-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-white text-purple-600 shadow-xl scale-105'
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
            {activeTab !== 'practice' && (
              <div className="grid grid-cols-3 gap-6 mb-10 bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold">{getCurrentContent().length}</div>
                  <div className="text-sm opacity-90">Topics</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">100+</div>
                  <div className="text-sm opacity-90">Examples</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">200+</div>
                  <div className="text-sm opacity-90">Problems</div>
                </div>
              </div>
            )}

            {/* Topics Grid */}
            {activeTab !== 'practice' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getCurrentContent().map((topic) => (
                  <div
                    key={topic.id}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-purple-200 hover:border-purple-400"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{topic.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{topic.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{topic.desc}</p>
                        <Link
                          href={`/programming/${activeTab}/${topic.id}`}
                          className="inline-block px-6 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors"
                        >
                          Learn Now →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-purple-600 mb-6 border-l-4 border-purple-600 pl-4">
                  LeetCode Style Practice Problems
                </h2>
                {practiceProblems.map((category) => (
                  <div
                    key={category.id}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg border-2 border-purple-200"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl">{category.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{category.name}</h3>
                          <p className="text-gray-600">
                            <span className={`font-semibold ${
                              category.difficulty === 'Easy' ? 'text-green-600' :
                              category.difficulty === 'Medium' ? 'text-yellow-600' :
                              'text-red-600'
                            }`}>
                              {category.difficulty}
                            </span>
                            {' '}- {category.count} Problems
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`/programming/practice/${category.id}`}
                        className="px-8 py-3 bg-purple-500 text-white rounded-xl font-bold hover:bg-purple-600 transition-colors shadow-md hover:shadow-lg"
                      >
                        Start Solving →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-white py-8">
          <p>&copy; 2025 Python Programming Guide | Code Your Way to Success</p>
        </footer>
      </div>
    </div>
  );
}

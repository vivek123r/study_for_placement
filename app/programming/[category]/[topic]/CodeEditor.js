'use client';

import { useState, useEffect, useRef } from 'react';

export default function CodeEditor() {
  const [code, setCode] = useState('# Write your Python code here\nprint("Hello, World!")');
  const [output, setOutput] = useState('Click "Run Code" to see output...');
  const [isRunning, setIsRunning] = useState(false);
  const pyodideRef = useRef(null);
  
  const lineCount = code.split('\n').length;

  // Load Pyodide
  useEffect(() => {
    const loadPyodide = async () => {
      try {
        const pyodide = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
        });
        pyodideRef.current = pyodide;
      } catch (error) {
        console.error('Failed to load Pyodide:', error);
      }
    };
    loadPyodide();
  }, []);

  const runCode = async () => {
    if (!pyodideRef.current) {
      setOutput('⚠️ Python engine is still loading... Please wait.');
      return;
    }

    setIsRunning(true);
    setOutput('Running...');

    try {
      // Redirect stdout to capture print statements
      pyodideRef.current.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `);

      // Run user code
      pyodideRef.current.runPython(code);

      // Get output
      const result = pyodideRef.current.runPython('sys.stdout.getvalue()');
      setOutput(result || '✅ Code executed successfully (no output)');
    } catch (error) {
      setOutput(`❌ Error:\n${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };
  
  return (
    <div className="w-[820px] bg-white rounded-2xl shadow-2xl p-5 sticky top-4 h-fit">
      <h2 className="text-xl font-bold text-gray-800 mb-4">💡 Try it Yourself</h2>
      
      {/* Code Editor with line numbers */}
      <div className="bg-gray-900 rounded-lg overflow-hidden mb-4">
        <div className="bg-gray-800 px-4 py-2 text-gray-300 text-sm font-semibold border-b border-gray-700">
          Python
        </div>
        <div className="flex">
          {/* Dynamic Line numbers */}
          <div className="bg-gray-800 text-gray-500 px-3 py-3 select-none text-xs font-mono">
            {Array.from({ length: lineCount }, (_, i) => (
              <div key={i} className="leading-5 text-right pr-2">{i + 1}</div>
            ))}
          </div>
          {/* Code textarea */}
          <textarea 
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 bg-gray-900 text-gray-100 px-3 py-3 font-mono text-xs leading-5 outline-none resize-none border-none"
            rows={Math.max(8, lineCount)}
            spellCheck="false"
          />
        </div>
      </div>

      {/* Run Button */}
      <button 
        onClick={runCode}
        disabled={isRunning}
        className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition-colors mb-4 shadow-md"
      >
        {isRunning ? '⏳ Running...' : '▶ Run Code'}
      </button>

      {/* Output */}
      <div className="bg-gray-100 rounded-lg p-4 min-h-28">
        <div className="text-xs font-semibold text-gray-600 mb-2 uppercase">Output:</div>
        <pre className="text-sm text-gray-800 font-mono whitespace-pre-wrap">
          {output}
        </pre>
      </div>
    </div>
  );
}

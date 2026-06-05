import React, { useState, useEffect, useRef } from 'react';
import { examQuestions } from './questions';

function App() {
  const [sessionQuestions, setSessionQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [isExamFinished, setIsExamFinished] = useState(false);
  
  // App view workflow tracking states
  const [viewMode, setViewMode] = useState('welcome'); // 'welcome' | 'test' | 'results'
  const [examMode, setExamMode] = useState('review'); // 'immediate' | 'review'
  const [hasVerifiedCurrent, setHasVerifiedCurrent] = useState(false); 
  
  const [timeElapsed, setTimeElapsed] = useState(0);
  const timerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const configureAndStartSession = (selectedMode) => {
    setExamMode(selectedMode);
    
    // Safety Fallback check: If the questions array is empty or missing, prevent crash
    if (!examQuestions || examQuestions.length === 0) {
      alert("Error: No questions found inside your src/questions.js file. Please make sure it is saved correctly!");
      return;
    }

    // NEW: Limit sessions to exactly 100 unique questions.
    // Persist used question ids in localStorage to avoid duplicates across retakes.
    const USED_KEY = 'usedQuestionIds_v1';
    const allQuestions = [...examQuestions];

    let usedIds = [];
    try {
      const raw = localStorage.getItem(USED_KEY);
      usedIds = raw ? JSON.parse(raw) : [];
    } catch (e) {
      usedIds = [];
    }

    // Filter out questions already used in prior sessions
    let available = allQuestions.filter(q => !usedIds.includes(q.id));

    // If not enough unused questions remain to form a 100-item session,
    // reset the used history so a fresh full draw can be made.
    if (available.length < 100) {
      // Only notify when there are some used ids (otherwise pool itself is <100)
      if (usedIds.length > 0) {
        // Inform the user that used history is being reset to allow a new 100-question session
        // This avoids silently duplicating across retakes when pool is exhausted.
        // Using alert keeps UI simple and explicit.
        alert('Not enough unused questions remaining to form a 100-question session. Resetting previous session history to allow a fresh session.');
      }
      available = allQuestions.slice();
      usedIds = [];
    }

    // Shuffle available and pick exactly 100 items (or fewer if pool <100)
    const shuffled = available.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(100, shuffled.length));

    // Update used ids and persist
    const newUsed = Array.from(new Set([...usedIds, ...selected.map(q => q.id)]));
    try { localStorage.setItem(USED_KEY, JSON.stringify(newUsed)); } catch (e) {}

    setSessionQuestions(selected);
    setCurrentIdx(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setHasVerifiedCurrent(false);
    setIsExamFinished(false);
    setTimeElapsed(0);
    setViewMode('test'); 
  };

  useEffect(() => {
    if (viewMode !== 'test' || isExamFinished) return;
    timerRef.current = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [viewMode, isExamFinished]);

  // Prevent crash during state initialization
  if (viewMode === 'test' && sessionQuestions.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
        <h3>Assembling Exam Session Matrix...</h3>
      </div>
    );
  }

  const currentQuestion = sessionQuestions[currentIdx];

  const handleOptionSelect = (optionIndex) => {
    if (examMode === 'immediate' && hasVerifiedCurrent) return;
    setUserAnswers({ ...userAnswers, [currentIdx]: optionIndex });
  };

  const clearChoice = () => {
    if (examMode === 'immediate' && hasVerifiedCurrent) return;
    const updatedAnswers = { ...userAnswers };
    delete updatedAnswers[currentIdx];
    setUserAnswers(updatedAnswers);
  };

  const toggleFlag = () => {
    setFlaggedQuestions({
      ...flaggedQuestions,
      [currentIdx]: !flaggedQuestions[currentIdx]
    });
  };

  const handleNextNavigation = () => {
    if (currentIdx + 1 < sessionQuestions.length) {
      setCurrentIdx(prev => prev + 1);
      setHasVerifiedCurrent(false); 
    }
  };

  const handleFinishExam = () => {
    clearInterval(timerRef.current);
    setIsExamFinished(true);
    setViewMode('results');
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // --- WELCOME/SETUP VIEW INTERFACE ---
  if (viewMode === 'welcome') {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1e1e38 0%, #0f0f1d 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', fontFamily: 'system-ui, sans-serif', boxSizing: 'border-box' }}>
        <div style={{ width: '100%', maxWidth: '640px', background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.08)', padding: isMobile ? '30px 20px' : '45px 40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', textAlign: 'center', color: '#ffffff', boxSizing: 'border-box' }}>
          
          <div style={{ display: 'inline-flex', padding: '16px', background: 'rgba(92, 91, 196, 0.15)', borderRadius: '50%', marginBottom: '20px', border: '1px solid rgba(92, 91, 196, 0.3)' }}>
            <span style={{ fontSize: '36px' }}>⚙️</span>
          </div>
          
          <h1 style={{ margin: '0 0 10px 0', fontSize: isMobile ? '24px' : '32px', fontWeight: '800', letterSpacing: '-0.02em', background: 'linear-gradient(90deg, #ffffff, #a5a6f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Advanced Exam Simulator
          </h1>
          <p style={{ margin: '0 0 35px 0', fontSize: '15px', color: '#94a3b8', lineHeight: '1.5' }}>
            Configure your professional evaluation session pipeline.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left', marginBottom: '40px' }}>
            
            {/* Immediate Feedback Option */}
            <div 
              onClick={() => configureAndStartSession('immediate')}
              style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', gap: '16px', alignItems: 'center' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = '#5c5bc4'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              <div style={{ fontSize: '28px' }}>⚡</div>
              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600', color: '#ffffff' }}>Immediate Feedback Mode</h3>
                <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8', lineHeight: '1.4' }}>See correct answers instantly with detailed explanatory rationales after processing each single question node.</p>
              </div>
            </div>

            {/* Review Mode Option */}
            <div 
              onClick={() => configureAndStartSession('review')}
              style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', gap: '16px', alignItems: 'center' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = '#3b3bc4'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              <div style={{ fontSize: '28px' }}>📝</div>
              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600', color: '#ffffff' }}>Exam Review Mode</h3>
                <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8', lineHeight: '1.4' }}>Simulates authentic certification testing. Complete all questions first, unlocking full dashboard diagnostic explanations at the end.</p>
              </div>
            </div>

          </div>

          <div style={{ fontSize: '12px', color: '#64748b' }}>
            System Engine v2.7 • Total Pool Size: {examQuestions?.length || 0} Questions Loaded
          </div>
        </div>
      </div>
    );
  }

  // --- RESULTS VIEW INTERFACE ---
  if (viewMode === 'results') {
    let finalScore = 0;
    sessionQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.a) finalScore++;
    });

    const passMessage = finalScore > 50 ? 'Congratulations — great job!' : 'Needs Improvement — keep studying.';

    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '20px 10px', fontFamily: 'sans-serif', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', boxSizing: 'border-box' }}>
          <h2 style={{ color: '#374151', borderBottom: '2px solid #e5e7eb', paddingBottom: '15px', textAlign: 'center' }}>Exam Complete</h2>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '15px', margin: '20px 0' }}>
            <div style={{ flex: 1, padding: '15px', background: '#f9fafb', borderRadius: '6px', textAlign: 'center', border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: 'bold' }}>FINAL SCORE</div>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#4f46e5' }}>{finalScore} / {sessionQuestions.length}</div>
              <div style={{ marginTop: '8px', fontSize: '14px', color: finalScore > 50 ? '#065f46' : '#7f1d1d', fontWeight: '600' }}>{passMessage}</div>
            </div>
            <div style={{ flex: 1, padding: '15px', background: '#f9fafb', borderRadius: '6px', textAlign: 'center', border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: 'bold' }}>TIME ELAPSED</div>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827' }}>{formatTime(timeElapsed)}</div>
            </div>
          </div>
          
          <button onClick={() => setViewMode('welcome')} style={{ padding: '14px', backgroundColor: '#3b3bc4', color: 'white', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', width: '100%', marginBottom: '25px' }}>
            🔄 Return to Main Menu
          </button>

          <h3 style={{ color: '#4b5563', marginBottom: '15px' }}>Session Item Review</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {sessionQuestions.map((q, idx) => (
              <div key={idx} style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: userAnswers[idx] === q.a ? '#f0fdf4' : '#fef2f2' }}>
                <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>{idx + 1}. {q.q}</p>
                <div style={{ fontSize: '14px', color: '#4b5563' }}>
                  <div><strong>Your Selection:</strong> {userAnswers[idx] !== undefined ? q.o[userAnswers[idx]] : 'Skipped'}</div>
                  <div><strong>Correct Answer:</strong> {q.o[q.a]}</div>
                  <div style={{ marginTop: '8px', padding: '8px', background: '#ffffff', borderRadius: '4px', borderLeft: '3px solid #9ca3af', fontStyle: 'italic' }}>{q.e}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --- RUNTIME SIMULATOR ENVIRONMENT ---
  const isCorrectInImmediateMode = userAnswers[currentIdx] === currentQuestion?.a;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', position: 'relative', paddingBottom: '90px' }}>
      
      {/* Top Floating Stopwatch Banner */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '15px 10px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #f87171', padding: '8px 20px', borderRadius: '4px', fontSize: '14px', fontWeight: '600', color: '#000000', backgroundColor: '#ffffff', textAlign: 'center' }}>
          ⏱️ Time spent {formatTime(timeElapsed)}
          <span style={{ fontSize: '11px', background: '#f3f4f6', padding: '2px 6px', borderRadius: '3px', marginLeft: '5px', color: '#4b5563', display: isMobile ? 'none' : 'inline' }}>
            {examMode === 'immediate' ? '⚡ Feedback Active' : '📝 Review Active'}
          </span>
        </div>
      </div>

      {/* Main Responsive Grid Engine */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', flex: 1, padding: '10px 15px', gap: '15px', alignItems: 'stretch', boxSizing: 'border-box' }}>
        
        {/* LEFT ATTR: Question Tracker */}
        <div style={{ width: isMobile ? 'auto' : '130px', backgroundColor: '#e2e5eb', padding: '15px', borderRadius: '4px', display: 'flex', flexDirection: isMobile ? 'row' : 'column', justifyContent: 'space-between', alignItems: isMobile ? 'center' : 'flex-start', gap: '10px', flexShrink: 0 }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#3c4858' }}>
            Question {currentIdx + 1}/{sessionQuestions.length}
          </div>
          <button 
            onClick={toggleFlag} 
            style={{ background: 'none', border: 'none', color: flaggedQuestions[currentIdx] ? '#dc2626' : '#3b82f6', textDecoration: 'underline', cursor: 'pointer', fontSize: '14px', padding: 0, fontWeight: flaggedQuestions[currentIdx] ? 'bold' : 'normal' }}
          >
            {flaggedQuestions[currentIdx] ? '🚩 Unflag' : 'Flag Question'}
          </button>
        </div>

        {/* CENTER ATTR: Active Card Node */}
        <div style={{ flex: 1, backgroundColor: '#e6f4f4', padding: '20px', borderRadius: '4px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '16px', fontWeight: '500', color: '#111827', lineHeight: '1.5' }}>
              <strong>{currentIdx + 1}.</strong> {currentQuestion?.q}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {currentQuestion?.o.map((option, index) => {
                const isSelected = userAnswers[currentIdx] === index;
                return (
                  <label key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: (examMode === 'immediate' && hasVerifiedCurrent) ? 'not-allowed' : 'pointer', fontSize: '14px', color: '#1f2937', lineHeight: '1.4', padding: '4px 0' }}>
                    <input 
                      type="radio" 
                      name={`question-${currentIdx}`} 
                      checked={isSelected}
                      disabled={examMode === 'immediate' && hasVerifiedCurrent}
                      onChange={() => handleOptionSelect(index)}
                      style={{ marginTop: '2px', cursor: 'pointer', width: '16px', height: '16px' }}
                    />
                    <span><strong>{String.fromCharCode(65 + index)}.</strong> {option}</span>
                  </label>
                );
              })}
            </div>

            {/* Immediate Explanation Component */}
            {examMode === 'immediate' && hasVerifiedCurrent && currentQuestion && (
              <div style={{ marginTop: '25px', padding: '15px', borderLeft: '4px solid', borderColor: isCorrectInImmediateMode ? '#10b981' : '#ef4444', backgroundColor: isCorrectInImmediateMode ? '#f0fdf4' : '#fef2f2', borderRadius: '4px' }}>
                <div style={{ fontWeight: 'bold', color: isCorrectInImmediateMode ? '#15803d' : '#b91c1c', marginBottom: '4px', fontSize: '14px' }}>
                  {isCorrectInImmediateMode ? '✓ Correct Answer' : '✕ Incorrect'}
                </div>
                <div style={{ fontSize: '13px', color: '#374151', lineHeight: '1.5' }}>
                  <strong>Rationale:</strong> {currentQuestion.e}
                </div>
              </div>
            )}
          </div>

          <div style={{ marginTop: '25px', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button 
              onClick={clearChoice}
              style={{ background: 'none', border: 'none', color: '#4b5563', fontSize: '13px', cursor: 'pointer', padding: '5px 0', textDecoration: 'underline' }}
            >
              Clear Choice
            </button>

            {examMode === 'immediate' && !hasVerifiedCurrent && userAnswers[currentIdx] !== undefined && (
              <button 
                onClick={() => setHasVerifiedCurrent(true)}
                style={{ backgroundColor: '#111827', color: '#ffffff', border: 'none', padding: '6px 14px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Verify Answer
              </button>
            )}
          </div>
        </div>

        {/* RIGHT ATTR: Infinite Auto-Packing Layout Grid */}
        <div style={{ width: isMobile ? 'auto' : '260px', backgroundColor: '#eadddd', padding: '15px', borderRadius: '4px', flexShrink: 0 }}>
          <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#1f2937', textAlign: 'center', marginBottom: '12px' }}>
            Exam Navigation
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(42px, 1fr))', gap: '6px', maxHeight: isMobile ? '140px' : '420px', overflowY: 'auto', paddingRight: '2px' }}>
            {sessionQuestions.map((_, idx) => {
              let bg = '#ffffff';
              let color = '#1f2937';
              let border = '1px solid #d1d5db';

              if (currentIdx === idx) {
                bg = '#5a6170';
                color = '#ffffff';
                border = '1px solid #5a6170';
              } else if (flaggedQuestions[idx]) {
                bg = '#fca5a5'; 
                color = '#b91c1c';
                border = '1px solid #f87171';
              } else if (userAnswers[idx] !== undefined) {
                bg = '#c7d2fe'; 
                color = '#3730a3';
              }

              return (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIdx(idx);
                    setHasVerifiedCurrent(false); 
                  }}
                  style={{ width: '100%', height: '34px', backgroundColor: bg, color: color, border: border, borderRadius: '4px', fontSize: '11px', cursor: 'pointer', fontWeight: '600' }}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
          
          <div style={{ marginTop: '20px', borderTop: '1px solid #cbd5e1', paddingTop: '12px' }}>
            <button 
              onClick={handleFinishExam}
              style={{ width: '100%', padding: '10px', backgroundColor: '#dc2626', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}
            >
              Submit & Finish Exam
            </button>
          </div>
        </div>

      </div>

      {/* FIXED FOOTER CONTROL LAYER */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '65px', backgroundColor: '#ffffff', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 15px', boxSizing: 'border-box', zIndex: 100 }}>
        <button 
          disabled={currentIdx === 0}
          onClick={() => {
            setCurrentIdx(prev => prev - 1);
            setHasVerifiedCurrent(false);
          }}
          style={{ height: '40px', padding: '0 25px', backgroundColor: '#9fa1e3', color: '#ffffff', border: 'none', borderRadius: '2px', fontSize: '14px', fontWeight: '500', cursor: currentIdx === 0 ? 'not-allowed' : 'pointer', opacity: currentIdx === 0 ? 0.4 : 1 }}
        >
          Previous
        </button>

        {currentIdx + 1 < sessionQuestions.length ? (
          <button 
            onClick={handleNextNavigation}
            style={{ height: '40px', padding: '0 35px', backgroundColor: '#3b3bc4', color: '#ffffff', border: 'none', borderRadius: '2px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}
          >
            Next
          </button>
        ) : (
          <button 
            onClick={handleFinishExam}
            style={{ height: '40px', padding: '0 35px', backgroundColor: '#10b981', color: '#ffffff', border: 'none', borderRadius: '2px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}
          >
            Finish Exam
          </button>
        )}
      </div>

    </div>
  );
}

export default App;
import React, { useState } from 'react';
import './style.css';

const questions = [
  // 0
  {
    questionText: 'Jakou máš náladičku?',
    answerOptions: [
      { answerText: 'Skvělou', nextQuestionIndex: 1 },
      { answerText: 'Dobrou', nextQuestionIndex: 4 },
      { answerText: 'Ujde to', nextQuestionIndex: 4 },
      { answerText: 'Špatnou', nextQuestionIndex: 3 },
      { answerText: 'Velmi špatnou', nextQuestionIndex: 3 },
    ],
  },
  // 1
  {
    questionText: 'Proč ji máš skvělou?',
    answerOptions: [
      { answerText: 'Proto', nextQuestionIndex: 4 },
      { answerText: 'Nevim', nextQuestionIndex: 4 },
      { answerText: 'Jentak', nextQuestionIndex: 4 },
      { answerText: 'Nečum', nextQuestionIndex: 4 },
      { answerText: 'Svítí slunce', nextQuestionIndex: 4 },
    ],
  },
  // 2
  {
    questionText: 'Nevíš, jak je to možné?',
    answerOptions: [
      { answerText: 'Proto', nextQuestionIndex: 4 },
      { answerText: 'Nevim', nextQuestionIndex: 4 },
      { answerText: 'Jentak', nextQuestionIndex: 4 },
      { answerText: 'Nečum', nextQuestionIndex: 4 },
      { answerText: 'Svítí slunce', nextQuestionIndex: 4 },
    ],
  },
  // 3
  {
    questionText: 'Máš často špatnou náladu?',
    answerOptions: [
      { answerText: 'Nikdy', nextQuestionIndex: 4 },
      { answerText: 'Občas', nextQuestionIndex: 4 },
      { answerText: 'Často', nextQuestionIndex: 4 },
      { answerText: 'Velmi často', nextQuestionIndex: 4 },
      { answerText: 'Vždy', nextQuestionIndex: 4 },
    ],
  },
  // 4
  {
    questionText: 'Jak často se snažíte být přítomní v daném okamžiku?',
    answerOptions: [
      { answerText: 'Nikdy', nextQuestionIndex: null },
      { answerText: 'Občas', nextQuestionIndex: null },
      { answerText: 'Často', nextQuestionIndex: null },
      { answerText: 'Velmi často', nextQuestionIndex: null },
      { answerText: 'Vždy', nextQuestionIndex: null },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [lastSentence, setLastSentence] = useState(false);

  const handleAnswerOptionClick = (nextQuestionIndex) => {
    setCurrentQuestion(nextQuestionIndex);
  };

  return (
    <div className="container">
      <div className="container__quiz">
        <h1>Dotazník</h1>
        {currentQuestion === null ? (
          <div className="lastSentence-section">Dokončil jsi dotazníček.</div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                {/* Odpočítávadlo otázek: */}
                <span>Otázka {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer__section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    key={index}
                    className='answer__section--button'
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.nextQuestionIndex)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                ),
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
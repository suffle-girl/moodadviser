import React, { useState, useEffect } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Bubble from "../Bubble";
import { useNavigate } from "react-router-dom"; 
import breath from "./img/1.png";
import music from "./img/3.png";

const questions = [
  // 0
  {
    questionText: "quiz.0.questionText",
    answerOptions: [
      {
        answerText: "quiz.0.answerOptions.a.answer",
        nextQuestionIndex: "quiz.0.answerOptions.a.nextQuestionIndex",
      },
      {
        answerText: "quiz.0.answerOptions.b.answer",
        nextQuestionIndex: "quiz.0.answerOptions.b.nextQuestionIndex",
      },
      {
        answerText: "quiz.0.answerOptions.c.answer",
        nextQuestionIndex: "quiz.0.answerOptions.c.nextQuestionIndex",
      },
      {
        answerText: "quiz.0.answerOptions.d.answer",
        nextQuestionIndex: "quiz.0.answerOptions.d.nextQuestionIndex",
      },
      {
        answerText: "quiz.0.answerOptions.e.answer",
        nextQuestionIndex: "quiz.0.answerOptions.e.nextQuestionIndex",
      },
    ],
  },
  // 1
  {
    questionText: "quiz.1.questionText",
    answerOptions: [
      {
        answerText: "quiz.1.answerOptions.a.answer",
        nextQuestionIndex: "quiz.1.answerOptions.a.nextQuestionIndex",
      },
    ],
  },
  // 2
  {
    questionText: "quiz.2.questionText",
    answerOptions: [
      {
        answerText: "quiz.2.answerOptions.a.answer",
        nextQuestionIndex: "quiz.2.answerOptions.a.nextQuestionIndex",
      },
      {
        answerText: "quiz.2.answerOptions.b.answer",
        nextQuestionIndex: "quiz.2.answerOptions.b.nextQuestionIndex",
      },
      {
        answerText: "quiz.2.answerOptions.c.answer",
        nextQuestionIndex: "quiz.2.answerOptions.c.nextQuestionIndex",
      },
      {
        answerText: "quiz.2.answerOptions.d.answer",
        nextQuestionIndex: "quiz.2.answerOptions.d.nextQuestionIndex",
      },
    ],
  },
  // 3
  {
    questionText: "quiz.3.questionText",
    answerOptions: [
      {
        answerText: "quiz.3.answerOptions.a.answer",
        nextQuestionIndex: "quiz.3.answerOptions.a.nextQuestionIndex",
      },
    ],
  },
  // 4
  {
    questionText: "quiz.4.questionText",
    answerOptions: [
      {
        answerText: "quiz.4.answerOptions.a.answer",
        nextQuestionIndex: "quiz.4.answerOptions.a.nextQuestionIndex",
      },
    ],
  },
  // 5
  {
    questionText: "quiz.5.questionText",
    answerOptions: [
      {
        answerText: "quiz.5.answerOptions.a.answer",
        nextQuestionIndex: "quiz.5.answerOptions.a.nextQuestionIndex",
      },
    ],
  },
  // 6
  {
    questionText: "quiz.6.questionText",
    answerOptions: [
      {
        answerText: "quiz.6.answerOptions.a.answer",
        nextQuestionIndex: "quiz.6.answerOptions.a.nextQuestionIndex",
      },
      {
        answerText: "quiz.6.answerOptions.b.answer",
        link:"quiz.6.answerOptions.b.link",
        nextQuestionIndex: "quiz.6.answerOptions.b.nextQuestionIndex",
      },
      {
        answerText: "quiz.6.answerOptions.c.answer",
        nextQuestionIndex: "quiz.6.answerOptions.c.nextQuestionIndex",
      },
    ],
  },
  // 7
  {
    questionText: "quiz.7.questionText",
    answerOptions: [
      {
        answerText: "quiz.7.answerOptions.a.answer",
        nextQuestionIndex: "",
      },
      {
        answerText: "quiz.7.answerOptions.b.answer",
        nextQuestionIndex: "quiz.7.answerOptions.b.nextQuestionIndex",
      },
    ],
  },
  // 8
  {
    questionText: "quiz.8.questionText",
    answerOptions: [
      {
        answerText: "quiz.8.answerOptions.a.answer",
        link:"quiz.8.answerOptions.a.link",
        nextQuestionIndex: "quiz.8.answerOptions.a.nextQuestionIndex",
      },
      {
        answerText: "quiz.8.answerOptions.b.answer",
        link:"quiz.8.answerOptions.b.link",
        nextQuestionIndex: "quiz.8.answerOptions.b.nextQuestionIndex",
      },
      {
        answerText: "quiz.8.answerOptions.c.answer",
        link:"quiz.8.answerOptions.c.link",
        nextQuestionIndex: "quiz.8.answerOptions.c.nextQuestionIndex",
      },
    ],
  },
  // 9
  {
    questionText: "quiz.9.questionText",
    answerOptions: [
      {
        answerText: "quiz.9.answerOptions.a.answer",
        nextQuestionIndex: "quiz.9.answerOptions.a.nextQuestionIndex",
      },
      {
        answerText: "quiz.9.answerOptions.b.answer",
        nextQuestionIndex: "quiz.9.answerOptions.b.nextQuestionIndex",
      },
      {
        answerText: "quiz.9.answerOptions.c.answer",
        nextQuestionIndex: "quiz.9.answerOptions.c.nextQuestionIndex",
      },
    ],
  },
  // 10
  {
    questionText: "quiz.10.questionText",
    answerOptions: [
      {
        answerText: "quiz.10.answerOptions.a.answer",
        nextQuestionIndex: "quiz.10.answerOptions.a.nextQuestionIndex",
      },
      {
        answerText: "quiz.10.answerOptions.b.answer",
        nextQuestionIndex: "quiz.10.answerOptions.b.nextQuestionIndex",
      },
      {
        answerText: "quiz.10.answerOptions.c.answer",
        nextQuestionIndex: "quiz.10.answerOptions.c.nextQuestionIndex",
      },
    ],
  },
  // 11
  {
    questionText: "quiz.11.questionText",
    answerOptions: [
      {
        answerText: "quiz.11.answerOptions.a.answer",
        nextQuestionIndex: "quiz.11.answerOptions.a.nextQuestionIndex",
      },
    ],
  },
  // 12
  {
    questionText: "quiz.12.questionText",
    answerOptions: [
      {
        answerText: "quiz.12.answerOptions.a.answer",
        nextQuestionIndex: "quiz.12.answerOptions.a.nextQuestionIndex",
      },
    ],
  },
  // 13
  {
    questionText: "quiz.13.questionText",
    answerOptions: [
      {
        answerText: "quiz.13.answerOptions.a.answer",
        nextQuestionIndex: "quiz.13.answerOptions.a.nextQuestionIndex",
      },
      {
        answerText: "quiz.13.answerOptions.b.answer",
        nextQuestionIndex: "quiz.13.answerOptions.b.nextQuestionIndex",
      },
      {
        answerText: "quiz.13.answerOptions.c.answer",
        nextQuestionIndex: "quiz.13.answerOptions.c.nextQuestionIndex",
      },
      {
        answerText: "quiz.13.answerOptions.d.answer",
        nextQuestionIndex: "quiz.13.answerOptions.d.nextQuestionIndex",
      },
      {
        answerText: "quiz.13.answerOptions.e.answer",
        nextQuestionIndex: "quiz.13.answerOptions.e.nextQuestionIndex",
      },
    ],
  },
];

const Quiz = () => {
  const { t } = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [lastSentence, setLastSentence] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowBubble(false);
    }, 5000);
  }, []);

  const handleAnswerOptionClick = (nextQuestionIndex, link) => {
        if (link) {
          navigate(link);
        } else if (typeof nextQuestionIndex === "number") {
          setCurrentQuestion(nextQuestionIndex);
        } else {
          setLastSentence(true);
        }
      };

  return (
    <div className="container__mainQuiz">
      {showBubble && <Bubble />}
      {/* <h1 className="container__mainQuiz--title">Mood Quiz</h1> */}
      <div className="container__quiz">
        {lastSentence ? (
          <div className="lastSentence-section">
            {/* <div className="lastSentence-section__title">
              Dokončil jsi dotazníček.
            </div> */}
            <div className="lastSentence-section__recommended">{t("quiz.last")}</div>
            <div className="lastSentence-section__menu">
              <div className="lastSentence-section__menu--items">
                <a href="/breath">
                  <img src={breath} alt="breath" />
                </a>
                <a href="/music">
                  <img src={music} alt="music" />
                </a>
                <a href="/exercises">
                  <img src={music} alt="exercises" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="question__section">
    
              <div className="question-text">
                {t(questions[currentQuestion].questionText)}
              </div>
            </div>
            <div className="answer__section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    key={index}
                    className="answer__section--button"
                    onClick={() =>
                      handleAnswerOptionClick(t(answerOption.nextQuestionIndex),t(answerOption.link))
                    }
                  >
                    {t(answerOption.answerText)}
                  </button>
                )
              )}
            </div>

    
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;




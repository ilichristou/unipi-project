import React, { useState, useRef, useEffect } from "react";
import "./QuizTest.css";
import NavigationBar from "../../navBar/NavigationBar";

function EnergySaving() {
    const intervalRef = useRef(null);

    const [timer, setTimer] = useState("00:00:00");

    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
            total,
            days,
            hours,
            minutes,
            seconds,
        };
    }

    function startTimer(deadline) {
        let { total, days, hours, minutes, seconds } = getTimeRemaining(deadline);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                ":" +
                (minutes > 9 ? minutes : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        } else {
            clearInterval(intervalRef.current);
            // alert("You are out of time!");
            setShowScore(true);
        }
    }
    function clearTimer(endtime) {
        setTimer("00:00:30");
        if (intervalRef.current) clearInterval(intervalRef.current);
        const id = setInterval(() => {
            startTimer(endtime);
        }, 1000);
        intervalRef.current = id;
    }
    function getDeadlineTime() {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 30);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadlineTime());
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    // function onClickResetBtn() {
    //   if (intervalRef.current) clearInterval(intervalRef.current);
    //   clearTimer(getDeadlineTime());
    // }

    const questions = [
        {
            questionText:
                "How many liters of water do we consume in brushing our teeth with an open tap?",
            answerOptions: [
                { answerText: "1-5lt", isCorrect: false },
                { answerText: "2-8lt", isCorrect: false },
                { answerText: "5-15lt", isCorrect: false },
                { answerText: "10-20lt", isCorrect: true },
            ],
        },
        {
            questionText:
                "How many liters of water are consumed with each pull in the cistern?",
            answerOptions: [
                { answerText: "8lt", isCorrect: false },
                { answerText: "10lt", isCorrect: true },
                { answerText: "5lt", isCorrect: false },
                { answerText: "7lt", isCorrect: false },
            ],
        },
        {
            questionText:
                "How many liters of water are saved if we wash the vegetables in a basin of water instead of running water?",
            answerOptions: [
                { answerText: "Up to 100lt", isCorrect: true },
                { answerText: "Up to 50lt", isCorrect: false },
                { answerText: "Up to 80lt", isCorrect: false },
                { answerText: "Up to 60lt", isCorrect: false },
            ],
        },
        {
            questionText:
                "How many liters of water are saved if we use the eco-friendly program in home appliances?",
            answerOptions: [
                { answerText: "40lt", isCorrect: false },
                { answerText: "80lt", isCorrect: false },
                { answerText: "150lt", isCorrect: true },
                { answerText: "200lt", isCorrect: false },
            ],
        },
        {
            questionText:
                "How many liters of water are saved if we turn off the tap during shaving?",
            answerOptions: [
                { answerText: "18lt", isCorrect: false },
                { answerText: "20lt", isCorrect: false },
                { answerText: "25lt", isCorrect: false },
                { answerText: "22lt", isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }

        const nextQuetions = currentQuestion + 1;
        if (nextQuetions < questions.length) {
            setCurrentQuestion(nextQuetions);
        } else {
            setShowScore(true);
        }
    };

    return (
        <>
            <NavigationBar />
            <h1 className="header">{timer}</h1>
            {/* <h1 className="header">{timer}</h1> */}
            <br />
            {/* <h1>{timer}</h1> */}
            {/* <button onClick={onClickResetBtn}>Reset</button> */}

            <h1 className="header">Quiz</h1>
            <div className="quiztest">
                {showScore ? (
                    <div className="score-section">
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className="question-section">
                            <div className="question-count">
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className="question-text">
                                {questions[currentQuestion].questionText}
                            </div>
                        </div>

                        <div className="answer-section">
                            {questions[currentQuestion].answerOptions.map((answerOptions) => (
                                <button
                                    onClick={() =>
                                        handleAnswerButtonClick(answerOptions.isCorrect)
                                    }
                                >
                                    {answerOptions.answerText}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default EnergySaving;

import React, { useState, useRef, useEffect } from "react";
import "./QuizTest.css";
import NavigationBar from "../../navBar/NavigationBar";

function WaterCycle() {
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
            questionText: "What is the water cycle?",
            answerOptions: [
                {
                    answerText:
                        "The continuous recycling of the Earth's water into the hydrosphere, atmosphere and lithosphere",
                    isCorrect: true,
                },
                { answerText: "The movement of water in the sea", isCorrect: false },
                { answerText: "The movement of water in rivers", isCorrect: false },
                { answerText: "The rain", isCorrect: false },
            ],
        },
        {
            questionText:
                "How much water evaporates every minute from the sea, lakes and rivers?",
            answerOptions: [
                { answerText: "1.000.000 cubic meters of water", isCorrect: false },
                { answerText: "2.000.000.000 cubic meters of water", isCorrect: false },
                { answerText: "100.000 cubic meters of water", isCorrect: false },
                { answerText: "1.000.000.000 cubic meters of water", isCorrect: true },
            ],
        },
        {
            questionText: "Where is most of the water stored on Earth?",
            answerOptions: [
                {
                    answerText: "Rivers hold most of the water on Earth",
                    isCorrect: false,
                },
                {
                    answerText: "The ocean holds about 97% of the Earth's waterars",
                    isCorrect: true,
                },
                {
                    answerText: "Lakes retain more than 90% of the Earth's water",
                    isCorrect: false,
                },
                {
                    answerText:
                        "more than 90% of the water on Earth is found in glaciers",
                    isCorrect: false,
                },
            ],
        },
        {
            questionText: "What is fog?",
            answerOptions: [
                {
                    answerText: "Fog is a kind of cloud that touches the ground",
                    isCorrect: true,
                },
                { answerText: "A human-made phenomenon", isCorrect: false },
                { answerText: "A phenomenon caused by plants", isCorrect: false },
                { answerText: "It is smoke", isCorrect: false },
            ],
        },
        {
            questionText: "How old is the water on Earth?",
            answerOptions: [
                {
                    answerText: "Water existed on Earth 1 billion years ago",
                    isCorrect: false,
                },
                {
                    answerText: "Water existed on Earth 100 million years ago",
                    isCorrect: false,
                },
                {
                    answerText: "Water existed on Earth 5 billion years ago",
                    isCorrect: false,
                },
                {
                    answerText: "Water existed on Earth 3.8 billion years ago",
                    isCorrect: true,
                },
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

export default WaterCycle;

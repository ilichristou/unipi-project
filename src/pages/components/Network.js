import React, { useState, useRef, useEffect } from "react";
import "./QuizTest.css";
import NavigationBar from "../../navBar/NavigationBar";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";

function Network() {
    const intervalRef = useRef(null);

    const [user, loading, error] = useAuthState(auth);
    const [firstName, setFirstName] = useState("");
    const history = useHistory();

    const fetchUserName = async () => {
        try {
            const query = await db
                .collection("users")
                .where("uid", "==", user?.uid)
                .get();
            const data = await query.docs[0].data();
            setFirstName(data.firstName);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

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
                "When was the construction of the dam in Marathon completed?",
            answerOptions: [
                { answerText: "1929", isCorrect: true },
                { answerText: "1941", isCorrect: false },
                { answerText: "1915", isCorrect: false },
                { answerText: "1924", isCorrect: false },
            ],
        },
        {
            questionText:
                "From which source did the Peisistratio aqueduct draw water?",
            answerOptions: [
                { answerText: "From the springs of the Hymettus", isCorrect: true },
                { answerText: "From the springs of Kifissos", isCorrect: false },
                { answerText: "From the springs of Ilissos", isCorrect: false },
                { answerText: "From the springs Iridanos", isCorrect: false },
            ],
        },
        {
            questionText: "When was the Hadrian's aqueduct built?",
            answerOptions: [
                { answerText: "5th century BC", isCorrect: false },
                { answerText: "2nd century BC", isCorrect: true },
                { answerText: "5th century AC", isCorrect: false },
                { answerText: "2nd century AC", isCorrect: false },
            ],
        },
        {
            questionText: "What is the height of the Mornos river dam?",
            answerOptions: [
                { answerText: "214m", isCorrect: false },
                { answerText: "195m", isCorrect: false },
                { answerText: "126m", isCorrect: true },
                { answerText: "112m", isCorrect: false },
            ],
        },
        {
            questionText: "Which company built the Marathon dam?",
            answerOptions: [
                { answerText: "TEKA SA", isCorrect: false },
                { answerText: "BUILD SA", isCorrect: false },
                { answerText: "ULEN SA", isCorrect: true },
                { answerText: "FTF SA", isCorrect: false },
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
            db.collection("users").doc(user?.uid).collection("networkQuiz").add({
                networkScore: score,
                createdAt: new Date().toDateString(),
            });
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

export default Network;

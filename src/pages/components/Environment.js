import React, { useState, useRef, useEffect } from "react";
import "./QuizTest.css";
import NavigationBar from "../../navBar/NavigationBar";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";

function Environment() {
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

    useEffect(() => {
        if (loading) return;
        if (!user) return history.replace("/");

        fetchUserName();
    }, [user, loading]);

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
                "How many cubic meters of drinking water are produced daily in the facilities of Acquattica?",
            answerOptions: [
                { answerText: "1.066.585 cubic meters", isCorrect: true },
                { answerText: "842.324 cubic meters", isCorrect: false },
                { answerText: "575.051 cubic meters", isCorrect: false },
                { answerText: "2.156.345 cubic meters", isCorrect: false },
            ],
        },
        {
            questionText:
                "How much wastewater is treated daily at the Wastewater Treatment Plants?",
            answerOptions: [
                { answerText: "845.142 cubic meters", isCorrect: false },
                { answerText: "755.500 cubic meters", isCorrect: true },
                { answerText: "1.015.123 cubic meters", isCorrect: false },
                { answerText: "1.254.465 cubic meters", isCorrect: false },
            ],
        },
        {
            questionText:
                "What percentage of the wastewater is cleaned in the Wastewater Treatment Plants and ends up in the sea?",
            answerOptions: [
                { answerText: "95%", isCorrect: false },
                { answerText: "80%", isCorrect: false },
                { answerText: "75%", isCorrect: true },
                { answerText: "50%", isCorrect: false },
            ],
        },
        {
            questionText:
                "What is the 'ecological flow' that has been provided in the river Evinos?",
            answerOptions: [
                { answerText: "2 m3/sec", isCorrect: false },
                { answerText: "5 m3/sec", isCorrect: false },
                { answerText: "1 m3/sec", isCorrect: true },
                { answerText: "10 m3/sec", isCorrect: false },
            ],
        },
        {
            questionText:
                "What is the percentage of biogas produced in Wastewater Treatment Plant of Psyttalia used for the needs of the installation?",
            answerOptions: [
                { answerText: "90%", isCorrect: false },
                { answerText: "75%", isCorrect: false },
                { answerText: "100%", isCorrect: false },
                { answerText: "68%", isCorrect: true },
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
            db.collection("users").doc(user?.uid).collection("environmentQuiz").add({
                environmentScore: score,
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

export default Environment;

import { useState, useEffect } from "react";
import "./index3.css"

function Index3() {
    const [input, setInput] = useState("");
    const [res, setRes] = useState("");







    const [guess, setGuess] = useState("");
    const [guessMessage, setGuessMessage] = useState("");
    const [numberGuess] = useState(Math.floor(Math.random() * 10) + 1);






    const [rpsResult, setRpsResult] = useState("");
    const rpsChoices = ["r", "p", "s"];





    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [maxRes, setMaxRes] = useState("");
    const calc = () => {
        let op = "";

        switch (true) {
            case input.includes("+"): op = "+"; break;
            case input.includes("-"): op = "-"; break;
            case input.includes("*"): op = "*"; break;
            case input.includes("/"): op = "/"; break;
            default: return;
        }

        const [a, b] = input.split(op).map(Number);

        switch (op) {
            case "+": setRes(a + b); break;
            case "-": setRes(a - b); break;
            case "*": setRes(a * b); break;
            case "/": setRes(b !== 0 ? a / b : "err"); break;
            default: break;
        }
    };


    const Guess = () => {
        const num = parseInt(guess);
        if (isNaN(guess) || guess < 1 || guess > 10) {
            return;
        }
        if (num === numberGuess) {
            setGuessMessage("тa");
        } else if (num < numberGuess) {
            setGuessMessage("більше");
        } else {
            setGuessMessage("менше");
        }
        setGuess("");
    };




    const RPS = (playerChoice) => {
        const compChoice = rpsChoices[Math.floor(Math.random() * 3)];
        let result = "";

        if (playerChoice === compChoice) {
            result = `нвічия ${compChoice}`;
        } else if (
            (playerChoice === "r" && compChoice === "s") ||
            (playerChoice === "s" && compChoice === "p") ||
            (playerChoice === "p" && compChoice === "r")
        ) {
            result = `виграв комп вибрав ${compChoice}`;
        } else {
            result = `програв комп вибрав ${compChoice}`;
        }

        setRpsResult(result);
    };




    const max = () => {
        let result = "";

        if (a === "" || b === "") {
            result = "введи два числа";
        } else if (a > b) {
            result = a;
        } else if (b > a) {
            result = b;
        } else {
            result = "числа рівні";
        }

        setMaxRes(result);
    };

    return (
        <>
            <section className="sec1">
                <div className="sec1container">
                    <div className="sec1image">
                        <div className="sec1imagetext">
                            <p>математика & JavaScript</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec2">
                <div className="sec2container">
                    <div className="sec2images">

                        <div className="sec2image">
                            <input value={input} onChange={e => setInput(e.target.value)} />
                            <button onClick={calc}>=</button>
                            <div>{res}</div>
                        </div>

                        <div className="sec2image">
                            <h2>Вгадай число від 1 до 10</h2>
                            <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} />
                            <button onClick={Guess}>guess</button>
                            <p>{guessMessage}</p>
                        </div>

                        <div className="sec2image">
                            <h2>Камінь-Ножиці-Папір</h2>
                            <button onClick={() => RPS("r")}>Камінь</button>
                            <button onClick={() => RPS("s")}>Ножиці</button>
                            <button onClick={() => RPS("p")}>Папір</button>
                            <p>{rpsResult}</p>
                        </div>

                        <div className="sec2image">
                            <input type="number" value={a} onChange={e => setA(e.target.value)} />
                            <input type="number" value={b} onChange={e => setB(e.target.value)} />
                            <button onClick={max}>enter</button>
                            <div>більше — {maxRes}</div>
                        </div>

                        <div className="sec2image">
                            <h2>Заголовок</h2>
                            <p>Текст...</p>
                        </div>

                        <div className="sec2image">
                            <h2>Заголовок</h2>
                            <p>Текст...</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Index3;
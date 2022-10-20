import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizprogress, setQuizprogress] = useState<boolean>(false);

    function start(): void {
        setAttempts(attempts - 1);
        setQuizprogress(true);
    }

    function stop(): void {
        setQuizprogress(false);
    }

    function mulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <div>
                <Button
                    onClick={start}
                    disabled={quizprogress || attempts === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={stop} disabled={!quizprogress}>
                    Stop Quiz
                </Button>
                <Button onClick={mulligan} disabled={quizprogress}>
                    Mulligan
                </Button>
            </div>
            <div>{attempts}</div>
        </div>
    );
}

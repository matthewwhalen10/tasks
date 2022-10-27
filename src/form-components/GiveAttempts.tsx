import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsReq, setAttemptsReq] = useState<string>("");

    function updateAttemptsReq(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptsReq(event.target.value);
    }
    return (
        <div>
            <div>
                <h3>Give Attempts</h3>
            </div>
            <Form.Group controlId="formAttemptsRequested">
                <Form.Label>Attempts Requested: </Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsReq}
                    onChange={updateAttemptsReq}
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                    disabled={attemptsLeft <= 0}
                >
                    use
                </Button>
                <Button
                    onClick={() =>
                        setAttemptsLeft(
                            attemptsLeft + parseInt(attemptsReq) || attemptsLeft
                        )
                    }
                >
                    gain
                </Button>
            </div>
            <div>Attempts left: {attemptsLeft}</div>
        </div>
    );
}

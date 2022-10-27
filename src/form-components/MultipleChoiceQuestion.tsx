import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <div>
                <h3>Multiple Choice Question</h3>
            </div>
            <Form.Group controlId="formAnswers">
                <Form.Label>Select an Answer</Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                    {options.map((opt: string) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {answer === expectedAnswer ? "/✔️/i" : "/❌/i"}
        </div>
    );
}

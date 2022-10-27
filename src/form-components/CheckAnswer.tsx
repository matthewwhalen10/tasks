import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [response, setResponse] = useState<string>("");
    function updateResponse(event: React.ChangeEvent<HTMLInputElement>) {
        setResponse(event.target.value);
    }

    return (
        <div>
            <div>
                <h3>Check Answer</h3>
            </div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Answer: </Form.Label>
                <Form.Control value={response} onChange={updateResponse} />
            </Form.Group>
            <div>{response === expectedAnswer ? "/✔️/i" : "/❌/i"}</div>
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "green",
        "blue",
        "orange",
        "purple",
        "white",
        "black",
        "cyan"
    ];
    const [color, setColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <div>
                <h3>Change Color</h3>
            </div>
            <Form.Group controlId="color-radio-buttons">
                {COLORS.map((opt: string) => (
                    <Form.Check
                        inline
                        key={opt}
                        type="radio"
                        name={opt}
                        value={opt}
                        label={opt}
                        checked={color === opt}
                        onChange={updateColor}
                    />
                ))}
            </Form.Group>
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </span>
        </div>
    );
}

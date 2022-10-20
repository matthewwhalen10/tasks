import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dieOne, setDieOne] = useState<number>(1);
    const [dieTwo, setDieTwo] = useState<number>(2);

    function d1(): void {
        setDieOne(d6());
    }
    function d2(): void {
        setDieTwo(d6());
    }
    return (
        <div>
            <div>
                <Button onClick={d1}>Roll Left</Button>
                <Button onClick={d2}>Roll Right</Button>
            </div>
            <span data-testid="left-die">{String(dieOne)}</span>
            <span data-testid="right-die">{String(dieTwo)}</span>
            {dieOne === dieTwo && dieOne === 1 ? "You Lose" : ""}
            {dieOne === dieTwo && dieOne !== 1 ? "You Win" : ""}
        </div>
    );
}

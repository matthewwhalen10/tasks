import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfProps {
    setDhValue: (newValue: number) => void;
    dhValue: number;
}

function Doubler({ setDhValue, dhValue }: DoubleHalfProps): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}
function Halver({ setDhValue, dhValue }: DoubleHalfProps): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}
export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            Double Half The current value is: <span>{dhValue}</span>
            <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
            <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
        </div>
    );
}

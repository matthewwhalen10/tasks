import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Emoji =
    | "\u{1F383}"
    | "\u{1F384}"
    | "\u{1F386}"
    | "\u{1F388}"
    | "\u{1F389}";
// Halloween | Christmas | Fourth of July | Birthday | New Years
const ALPHABETIC_TRANSITIONS: Record<Emoji, Emoji> = {
    "\u{1F388}": "\u{1F384}",
    "\u{1F384}": "\u{1F386}",
    "\u{1F386}": "\u{1F383}",
    "\u{1F383}": "\u{1F389}",
    "\u{1F389}": "\u{1F388}"
};
const CHRONOLOGICAL_TRANSITIONS: Record<Emoji, Emoji> = {
    "\u{1F389}": "\u{1F388}",
    "\u{1F388}": "\u{1F386}",
    "\u{1F386}": "\u{1F383}",
    "\u{1F383}": "\u{1F384}",
    "\u{1F384}": "\u{1F389}"
};
export function CycleHoliday(): JSX.Element {
    const [emoji, setEmoji] = useState<Emoji>("\u{1F383}");

    function changeAlphabetically(): void {
        const newEmoji = ALPHABETIC_TRANSITIONS[emoji];
        setEmoji(newEmoji);
    }
    function changeChronologically(): void {
        const newEmoji = CHRONOLOGICAL_TRANSITIONS[emoji];
        setEmoji(newEmoji);
    }
    return (
        <div>
            <div>Holiday: {emoji}</div>
            <div>
                <Button onClick={changeAlphabetically}>
                    Advance By Alphabet
                </Button>
                <Button onClick={changeChronologically}>Advance By Year</Button>
            </div>
        </div>
    );
}

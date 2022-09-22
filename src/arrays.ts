/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const allNums = numbers.map((val: string): number =>
        isNaN(parseInt(val)) ? 0 : parseInt(val)
    );
    return allNums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollars = amounts.map((val: string): string =>
        val.charAt(0) === "$" ? val.substring(1, val.length) : val
    );
    const allNums = noDollars.map((val: string): number =>
        isNaN(parseInt(val)) ? 0 : parseInt(val)
    );
    return allNums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages.filter(
        (val: string): boolean => val.charAt(val.length - 1) !== "?"
    );
    const shouting = noQuestions.map((val: string): string =>
        val.charAt(val.length - 1) === "!" ? val.toUpperCase() : val
    );
    return shouting;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const nums = words.map((val: string): number => (val.length < 4 ? 1 : 0));
    const total = nums.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    return total;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const noRed = colors.filter((val: string): boolean => val !== "red");
        const noBlue = noRed.filter((val: string): boolean => val !== "blue");
        const noRGB = noBlue.filter((val: string): boolean => val !== "green");
        return noRGB.length === 0;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const rightSide = addends.join("+");
    const sum = String(addends.reduce((i: number, num: number) => i + num, 0));
    return sum.concat("=", rightSide);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negIndex = values.findIndex((val: number): boolean => val < 0);
    if (negIndex === -1) {
        const sum = values.reduce((i: number, num: number) => i + num, 0);
        return [...values, sum];
    } else {
        const tempValuesArray = [...values];
        const spliced = tempValuesArray.splice(
            negIndex,
            tempValuesArray.length - negIndex
        );
        const sum = spliced.reduce((i: number, num: number) => i + num, 0);
        const ans = [...values];
        ans.splice(negIndex + 1, 0, sum);
        return ans;
    }
}

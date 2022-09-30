const { sqrRoot, tooHigh, tooLow } = require("./sqr-root");

test("Too high indeed", () => {
    expect(tooHigh(9, 4, 1)).toBeTruthy();
    expect(tooLow(9, 4, 1)).toBeFalsy();
});

test("Too low indeed", () => {
    expect(tooHigh(16, 3, 1)).toBeFalsy();
    expect(tooLow(16, 3, 1)).toBeTruthy();
});

test("Square root of negative numbers not supported", () => {
    expect(sqrRoot(-4, 0)).toBeUndefined();
    // if throwing error in the function
    //expect(() => sqrRoot(-4, 0)).toThrow(Error);
});

test("Square root of zero", () => {
    expect(sqrRoot(0, 0)).toBe(0);
});

test("Square root of one", () => {
    expect(sqrRoot(1, 0)).toBe(1);
});

test("4 precision 0", () => {
    expect(sqrRoot(4, 0)).toBe(2);
});

test("4 precision 1", () => {
    expect(sqrRoot(4, 1)).toBe(2);
});

test("9 precision 1", () => {
    expect(sqrRoot(9, 1)).toBe(3.09375);
});

test("9 precision 7", () => {
    expect(sqrRoot(9, 7)).toBe(2.25);
});

test("9 precision 5", () => {
    expect(sqrRoot(9, 5)).toBe(2.25);
});

test("16 precision 0", () => {
    expect(sqrRoot(16, 0)).toBe(4);
});

test("16 precision 47", () => {
    expect(sqrRoot(16, 47)).toBe(4);
});

test("16 precision 48", () => {
    expect(sqrRoot(16, 48)).toBe(8);
});

test("16 precision 47", () => {
    expect(sqrRoot(16, 48)).toBe(8);
});

test("2 precision 0.1", () => {
    expect(sqrRoot(2, 0.1)).toBe(1.4375);
});

test("3 precision 0.1", () => {
    expect(sqrRoot(3, 0.1)).toBe(1.734375);
});
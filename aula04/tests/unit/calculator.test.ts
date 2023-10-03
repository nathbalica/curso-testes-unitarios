import calculator from "calculator";


describe("calculator tests", () => {
  it("should work", async () => {
    expect(true).toBe(true);
  });

  it("should sum two numbers", () => {
    const soma = calculator.sum(2, 3)
    expect(soma).toBe(5);
  });

  it("should subtract two numbers", () => {

    const subtract = calculator.sub(6, 2)
    expect(subtract).toBe(4);
  });
  it("should multiply two numbers", () => {

    const multiply = calculator.mul(2, 5)
    expect(multiply).toBe(10);
  });

  it("should divide two numbers", async () => {

    const divide = calculator.div(6, 3)
    expect(divide).toBe(2);
  });

  it("should return 0 when diving by zero", async () => {
    const divide = calculator.div(6, 0)
    expect(divide).toBe(0);
  });
})
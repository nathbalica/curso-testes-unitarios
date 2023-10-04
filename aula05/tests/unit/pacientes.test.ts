import { generateProtocolForPacient } from "protocols-generator";
import { v4 as uuidv4 } from 'uuid';

jest.mock("uuid", () => {
  return {
    v4: () => { return "valor simulado no mock" }
  }
})

describe("calculator tests", () => {
  it("should work", async () => {
    expect(true).toBe(true);
  });

  it("should generate the protocols", () => {
    const protocols = generateProtocolForPacient('Lucas', 'Silva', true)
    expect(protocols).toEqual({
      priority: true,
      date: expect.any(Date),
      pacient: 'Lucas Silva',
      protocol: "valor simulado no mock", 
    })
  })
});
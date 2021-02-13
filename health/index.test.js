const { handler } = require(".");

jest.mock("lambda-log");

describe("handler", () => {
  beforeEach(() => jest.resetAllMocks());

  it("should not throw", async () => {
    const resp = await handler({ foo: "bar" });
    expect(resp).toMatchSnapshot();
  });
});

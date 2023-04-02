import { render } from "@testing-library/react";
import Login from "./login-component";

const handleSteps = jest.fn();
const createUser = jest.fn();
jest.isMockFunction(createUser);
describe("Login", () => {
  it("Render Login", () => {
    const { getByTestId } = render(<Login handleSteps={handleSteps} />);
    expect(getByTestId("login-component")).toBeInTheDocument();
  });
});

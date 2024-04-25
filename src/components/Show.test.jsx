import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Show from "./Show";

describe.only("Test Show component", () => {
  test("Show is rendering correctly", () => {
    render(<Show />);
    const getH1 = screen.queryByRole("heading");
    expect(getH1).not.toBeInTheDocument();

    const getBtn = screen.getByRole("button", { name: "Click" });
    expect(getBtn).toBeInTheDocument();
  });

  test("test click interaction of Show", async () => {
    user.setup();
    render(<Show />);
    const getBtn = screen.getByRole("button", { name: "Click" });
    await user.click(getBtn);
    const getDisplayedH1 = screen.getByRole("heading", { level: 1 });
    expect(getDisplayedH1).toBeInTheDocument();
  });

  test("testfor doule click show", async () => {
    user.setup();
    render(<Show />);

    const getBtn = screen.getByRole("button");
    await user.dblClick(getBtn);
    const getH1 = screen.queryByRole("button");
    expect(getH1).not.toBeInTheDocument();
  });
});

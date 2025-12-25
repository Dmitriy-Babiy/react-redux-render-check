import { expect, it, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
  it("должен рендерить значение счетчика", () => {
    render(<Counter value={5} increment={vi.fn()} decrement={vi.fn()} />);
    expect(screen.getByText("Counter: 5")).toBeInTheDocument();
  });

  it("должен увеличивать значение при нажатии на Increment", async () => {
    let value = 0;
    const increment = () => { value += 1; };
    const { rerender } = render(
      <Counter value={value} increment={increment} decrement={vi.fn()} />
    );

    await userEvent.click(screen.getByText("Increment"));
    
    rerender(<Counter value={value} increment={increment} decrement={vi.fn()} />);
    expect(screen.getByText("Counter: 1")).toBeInTheDocument();
  });

  it("должен уменьшать значение при нажатии на Decrement", async () => {
    let value = 5;
    const decrement = () => { value -= 1; };
    const { rerender } = render(
      <Counter value={value} increment={vi.fn()} decrement={decrement} />
    );

    await userEvent.click(screen.getByText("Decrement"));
    
    rerender(<Counter value={value} increment={vi.fn()} decrement={decrement} />);
    expect(screen.getByText("Counter: 4")).toBeInTheDocument();
  });
});
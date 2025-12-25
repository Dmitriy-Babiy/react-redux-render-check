export const Counter = ({
  value,
  increment,
  decrement,
}: {
  value: number;
  increment: () => void;
  decrement: () => void;
}) => {
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>Counter: {value}</div>
    </div>
  );
};

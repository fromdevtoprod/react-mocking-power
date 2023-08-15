export type CounterProps = {
    count: number;
    updateCounter: () => void;
};

export function Counter({ count, updateCounter }: CounterProps) {
    return (
        <div className="card">
        <button onClick={() => updateCounter()} data-testId="button-update-counter">
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    );
}
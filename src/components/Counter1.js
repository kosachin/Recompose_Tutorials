import { compose, lifecycle, withHandlers, withState } from "recompose";

const Counter1 = ({ count, handleDec, handleInc, handleReset }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>Dec</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

const countState = withState("count", "setCount", 0);
const countHandlers = withHandlers({
  handleInc:
    ({ setCount }) =>
    () =>
      setCount((num) => num + 1),
  handleDec:
    ({ setCount }) =>
    () =>
      setCount((num) => num - 1),
  handleReset:
    ({ setCount }) =>
    () =>
      setCount(0),
});

const enhance = compose(
  countState,
  countHandlers,
  lifecycle({
    componentDidCatch: function () {
      alert("Initial count is", this.count);
    },
  })
);
export default enhance(Counter1);

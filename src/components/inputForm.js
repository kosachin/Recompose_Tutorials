import { withHandlers, withState } from "recompose";

const InpForm = ({ onChange, value }) => {
  return (
    <div>
      <p>{value}</p>
      <input onChange={onChange} />
    </div>
  );
};

const addState = withState("value", "setValue", "");
const addHandlers = withHandlers({
  onChange:
    ({ setValue }) =>
    (e) =>
      setValue(e.target.value),
});

export default addState(addHandlers(InpForm));

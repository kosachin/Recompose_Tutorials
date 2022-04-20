import { withState } from "recompose";

const ShowNum = ({ num, setNum }) => (
  <div>
    <h3>{num}</h3>
    <button onClick={()=>setNum(num=>num+1)}>add</button>
  </div>
);

export const Number = withState("num", "setNum", 10)(ShowNum);

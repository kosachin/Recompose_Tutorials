import { withHandlers } from "recompose";

const Home = ({ greet }) => <button onClick={greet}>Say hi</button>;
export const WithHandlers = withHandlers({
  greet: () => alert("Hi!!"),
})(Home);

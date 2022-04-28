import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav>
        <Link to="/invoices">Book 1</Link> | &nbsp;
        <Link to="/expenses">Book 2</Link>
      </nav>
    </div>
  );
};
export default App;

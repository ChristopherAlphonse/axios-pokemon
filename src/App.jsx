import { NavLink } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav>
        <NavLink to="/invoices">Book 1</NavLink> | &nbsp;
        <NavLink to="/expenses">Book 2</NavLink>
      </nav>
    </div>
  );
};
export default App;

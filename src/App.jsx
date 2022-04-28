import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav>
        <Link to="/invoices">Invoices</Link> | &nbsp;
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h2>AI Resume Analyzer</h2>

      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/auth">Auth</Link>{" | "}
        <Link to="/upload">Upload</Link>
      </nav>
    </header>
  );
}

export default Navbar;
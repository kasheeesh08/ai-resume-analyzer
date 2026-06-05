import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <h1>Track Your Applications & Resume Ratings</h1>

      <h2>Review your resume with AI-powered feedback</h2>

      <p>
        Upload your resume and receive ATS-style insights,
        improvement suggestions, and job match feedback.
      </p>

      <Link to="/upload">
        Analyze Resume
      </Link>
    </section>
  );
}

export default Home;
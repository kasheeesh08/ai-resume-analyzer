import { useState } from "react";

function Upload() {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!companyName || !jobTitle || !jobDescription || !resumeFile) {
      setErrorMessage("Please fill all fields and upload your resume.");
      return;
    }

    setErrorMessage("");
    setIsAnalyzing(true);

    console.log({
      companyName,
      jobTitle,
      jobDescription,
      resumeFile,
    });

    setTimeout(() => {
      setIsAnalyzing(false);
      alert("Resume analysis flow will be connected next.");
    }, 2000);
  };

  return (
    <section>
      <h1>Upload Your Resume</h1>

      <p>
        Add your resume and job details to receive
        AI-powered feedback.
      </p>

      {errorMessage && (
        <p style={{ color: "red" }}>
          {errorMessage}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="companyName">
            Company Name
          </label>

          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="Enter company name"
            value={companyName}
            onChange={(event) =>
              setCompanyName(event.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="jobTitle">
            Job Title
          </label>

          <input
            id="jobTitle"
            name="jobTitle"
            type="text"
            placeholder="Enter job title"
            value={jobTitle}
            onChange={(event) =>
              setJobTitle(event.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="jobDescription">
            Job Description
          </label>

          <textarea
            id="jobDescription"
            name="jobDescription"
            placeholder="Paste job description here"
            value={jobDescription}
            onChange={(event) =>
              setJobDescription(event.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="resume">
            Resume File
          </label>

          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf"
            onChange={(event) =>
              setResumeFile(
                event.target.files?.[0] || null
              )
            }
          />
        </div>

        <button type="submit" disabled={isAnalyzing}>
          {isAnalyzing ? "Analyzing..." : "Analyze Resume"}
        </button>
      </form>
    </section>
  );
}

export default Upload;
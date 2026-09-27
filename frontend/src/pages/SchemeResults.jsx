import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./SchemeResults.css";

export default function SchemeResults() {
  const location = useLocation();
  const navigate = useNavigate();

  const { schemes } = location.state || { schemes: [] };

  return (
    <div className="resultsContainer">
      

      <div className="resultsContent">
        <div className="resultsHeader">
          <h2 className="resultsTitle">Matching Schemes</h2>

          <button
            className="backButton"
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </button>
        </div>

        {schemes.length === 0 ? (
          <p className="noSchemes">
            No matching schemes found.
          </p>
        ) : (
          <div className="schemesList">
            {schemes.map((scheme, index) => (
          <div key={index} className="schemeCard">
    
          <h3 className="schemeTitle">
            {scheme.name}
          </h3>

        <p className="schemeDescription">
          {scheme.description}
        </p>

        <p className="schemeEligibility">
          <strong>Eligibility:</strong>{" "}
          {scheme.eligibility}
        </p>

        {scheme.documents && (
          <p className="schemeDocuments">
            <strong>Required Documents:</strong>{" "}
            {scheme.documents}
          </p>
        )}

        <a
          href={scheme.applyLink || 'https://www.myscheme.gov.in/'}
          target="_blank"
          rel="noopener noreferrer"
          className="schemeLink"
        >
               Apply Now →
              </a>

            </div>
         ))}
          </div>
           )}
        </div>
    </div>
      );
    }


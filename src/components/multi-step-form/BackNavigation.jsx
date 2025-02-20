import { Link } from "react-router-dom";

function BackNavigation({ pageNumber }) {
  return (
    <button className="back">
        <Link to={`/registration/step-${pageNumber - 1}`}>Back</Link>
      </button>
  )
}

export default BackNavigation
// src/pages/MainHub.jsx
import "./styles.css";
import { Link } from "react-router-dom";

const MainHub = () => {
  return (
    <div>
      {/* Input field for user prompt */}
      <div className="content">
        <h1>
          Learning Topic
          <hr/>
        </h1>
        Parents, what are you hoping to teach your little one with this story?
        <br/>
        <br/>
        <div>
        <input className="prompt-input"
          type="text"
          placeholder="Learning to share, diversity, "
        />
        </div>
        <br/>
        <Link to="/childmode" className="button">
          Submit
        </Link>
      </div>
    </div>
  );
};

export default MainHub;

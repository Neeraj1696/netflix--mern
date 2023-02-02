import { InfoOutlined, PlayArrow} from "@mui/icons-material";
import React from "react";
import "../styles/featured.scss"

function Featured({type}) {
  return (
    <div className="featured">
      <div className="featured-container">
        <img
          src="https://bloody-disgusting.com/wp-content/uploads/2022/01/netflix-the-house.png"
          alt="error"
          width="100%"
        />
      </div>
      <div className="info">
        <h2>Movie Title</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          distinctio laudantium facilis temporibus suscipit labore quia iste
          sequi illum amet!
        </span>
        <div className="btn">
            <button className="play">
                <PlayArrow />
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined />
                <span>info</span> 
            </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;

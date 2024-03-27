import { ReactElement, FC, CSSProperties, useState } from "react";
import { CardProps } from "../types";

import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Card: FC<CardProps> = ({
  id,
  name,
  img,
  description,
  rating,
}): ReactElement => {
  const [clicked, setCliked] = useState<boolean>(false);

  const colors: string[] = [
    "rgba(0, 0, 0, 0.1)",
    "rgba(0, 0, 0, 0.4)",
    "rgba(0, 0, 0, 0.7)",
    "rgba(0, 0, 0, 0.98)",
  ];

  const backgroudImage: CSSProperties = {
    backgroundImage: `linear-gradient(to bottom, ${colors.join(",")}), url(${img})`,
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "12px",
    padding: "40px",
    color: "white",
  };

  return (
    <div className="card" id={!id ? "" : id} >
      <div style={backgroudImage} id="backgroudImage">
        <button onClick={(): void => setCliked((b: boolean): boolean => !b)}>
          <FaHeart className={`icon ${clicked && "active"}`} />
        </button>
        <footer>
          <span>
            <h1>{name}</h1>
            <span>
              <p>{rating}</p>
              <FaStar className="icon" style={{ marginRight: "12px" }} />
            </span>
          </span>
          <p>{description}</p>
        </footer>
      </div>
    </div>
  );
};

export default Card;

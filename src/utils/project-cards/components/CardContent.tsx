import { Card } from "react-bootstrap";
import { IProjectCards } from "../../../types/types";
import { Link } from "react-router-dom";



const CardContent = ({
  imgSrc,
  cardText,
  cardTitle,
  minHeight,
  maxHeight,
  projectName,
  link
}: IProjectCards) => {
  return (
    <Link
      to={link}
      target={link && "_blank"}
    >
      <Card
        className="project-card"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <Card.Img
          src={imgSrc}
          variant="top"
          alt={projectName}
          className="card-img"
          style={{
            minHeight,
            maxHeight
          }}
        />
        <Card.Body className="card-content">
          <Card.Title className="card-title-div">
            <p>{cardTitle}</p>
            <div
              className="card-border"
            ></div>
          </Card.Title>
          <Card.Text
            className="card-truncated-text"
          >
            {cardText}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CardContent;

import React from "react";
import { Card } from "react-bootstrap";

function BlogCard({ title, img, desc }) {
  return (
    <div>
      <Card style={{ width: "30rem", padding: "10px" }}>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BlogCard;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import TopBar from "./TopBar";
import BlogCard from "./common/BlogCard";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { API_URL } from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  let navigate = useNavigate();
  let [title, setTitle] = useState("");
  let [img, setImage] = useState("");
  let [desc, setDesc] = useState("");
  let handleSubmit = async () => {
    try {
      let data = { title, img, desc, status: false };
      let res = await axios.post(API_URL, data);
      if (res.status === 201) {
        toast.success("Blog Created Successfully");
        navigate("/dashboard");
      }
    } catch (error) {}
  };
  return (
    <div className="container-fluid">
      <TopBar />
      <div style={{ padding: "25px" }}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Enter the title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setImage(e.target.value);
              }}
              placeholder="Image Url"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </Form.Group>
          <div style={{ textAlign: "center" }}>
            <Button
              variant="primary"
              onClick={() => {
                handleSubmit();
              }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
      <p style={{ color: "red", textAlign: "center" }}>
        {!title && !img && !desc
          ? "Please give any one of the field to show preview"
          : ""}
      </p>
      {title || img || desc ? (
        <div className="d-flex flex-column align-items-center">
          <h3>Preview</h3>
          <BlogCard title={title} img={img} desc={desc} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CreateBlog;

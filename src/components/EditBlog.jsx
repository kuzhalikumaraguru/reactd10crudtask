import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import TopBar from "./TopBar";
import BlogCard from "./common/BlogCard";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { API_URL } from "../App";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

function EditBlog() {
  let navigate = useNavigate();
  let [title, setTitle] = useState("");
  let [img, setImage] = useState("");
  let [desc, setDesc] = useState("");
  let {id} = useParams();
  let getBlogById = async () => {
    try {
      let res = await axios.get(`${API_URL}/${id}`);
      if (res.status === 200) {
        setTitle(res.data.title);
        setImage(res.data.img);
        setDesc(res.data.desc);
      }
    } catch (error) {}
  };
  let handleUpdate = async () => {
    try {
      let data = { title, img, desc, status: false };
      let res = await axios.put(`${API_URL}/${id}`, data);
      if (res.status === 200) {
        toast.success("Blog Edited Successfullt");
        navigate('/dashboard');
      }
    } catch (error) {}
  };
  useEffect(() => {
    getBlogById();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <TopBar />
        <div style={{ padding: "25px" }}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
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
                value={img}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                placeholder="Image Url"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </Form.Group>
            <div style={{ textAlign: "center" }}>
              <Button
                variant="primary"
                onClick={() => {
                  handleUpdate();
                }}
              >
                Update
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
    </>
  );
}

export default EditBlog;

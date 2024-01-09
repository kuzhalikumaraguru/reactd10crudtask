import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import axios from "axios";
import { API_URL } from "../App";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveAllBlogs, deleteBlog, toggleBlog } from "../Redux/BlogSlice";

function Dashboard() {
  let dispatch = useDispatch();
  let blogs = useSelector(state => state.blogs);
  let navigate = useNavigate();
  // let [blogs, setBlog] = useState([]);
  let getBlogsData = async () => {
    try {
      let res = await axios.get(API_URL);
      if (res.status === 200) {
        // setBlog(res.data);
        dispatch(saveAllBlogs(res.data)); //this will call the functions in the reducers which is inside the slice and data can be get in actions parameter
      }
    } catch (error) {}
  };
  let toggleBlogById = async (e) => {
    try {
      // e.status = !e.status;
      dispatch(toggleBlog(e));
      console.log(e);
      let res = await axios.put(`${API_URL}/${e.id}`, {
        ...e,
        status:!e.status
      });
      if (res.status === 200) {
        toast.success("Blog Status Changed");
        getBlogsData();
      }
        
    } catch (error) {
      
    }
  }
  let handleDelete = async (id) => {
    try {
      dispatch(deleteBlog(id));
      let res = await axios.delete(`${API_URL}/${id}`);
      if (res.status === 200) {
        toast.success("Blog Deleted")
        getBlogsData();
      }
    } catch (error) {
      
    }
  }
  
  useEffect(() => {
    getBlogsData();
  }, []);
  return (
    <>
      <TopBar />
      <div style={{padding:"25px"}}>
        <Table striped bordered hover variant="light" style={{textAlign:"center"}}>
          <thead>
            <tr>
              <th>SL.NO</th>
              <th>Title</th>
              <th>Image</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((e, i) => {
              return <tr key={i}>
                <td>{i+1}</td>
                <td>{e.title}</td>
                <td><img src={e.img} alt={e.title} style={{width:"50px"}}/></td>
                <td width={"50%"}>{e.desc}</td>
                <td> <label className="switch">
                  <input type="checkbox" defaultChecked={e.status} onChange={()=>toggleBlogById(e)}/>
                  <span className="slider round"></span>
                </label></td>
                <td><Button variant="info" onClick={() => {navigate(`/edit/${e.id}`)}}>Edit</Button>
                &nbsp;
                <Button variant="danger" onClick={() => {handleDelete(e.id)}}>Delete</Button></td>
              </tr>;
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Dashboard;

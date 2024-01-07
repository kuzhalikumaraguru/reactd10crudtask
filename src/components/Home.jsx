import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import BlogCard from "./common/BlogCard";
import { API_URL } from "../App";
import axios from "axios";

function Home() {
  let [blogs, setBlog] = useState([]);
  let getBlogsData = async () => {
    try {
      let res = await axios.get(API_URL);
      setBlog(res.data.filter((e) => e.status));
    } catch (error) {}
  };
  useEffect(() => {
    getBlogsData();
  }, []);
  return (
    <>
      <TopBar />
      <div>
        {blogs.length > 0 ? blogs.map((e, i) => {
            return <>
                <div className="d-flex flex-column align-items-center" key={e.id}>
                    <BlogCard title={e.title} img={e.img} desc={e.desc}/>;
                </div>
            </>
        }) : <p style={{color:"green", textAlign:"center", fontSize: "2em", fontStyle: "italic", fontWeight:"bolder", paddingTop: "15px"}}>To list out the approved blogs please change the status in the dashboard page</p>}
      </div>
    </>
  );
}

export default Home;

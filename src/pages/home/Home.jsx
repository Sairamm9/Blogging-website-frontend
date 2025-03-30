import "./Home.css";
import Hero from "../../components/hero/Hero";
import Posts from "../../components/posts/Posts";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts"+search)
      setPosts(res.data)
      // console.log(res);
    }
    fetchPosts()
  }, [search])
  return (
    <>
      <Hero />
      <div className="home">
        <Posts posts={posts}/>
      </div>
      {/* <Footer /> */}
    </>
  )
}

import { useLocation } from "react-router";
import "./SinglePost.css";
// import { img1 } from "../../assets";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";



export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/";
    const {user} = useContext(Context); 
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)


    useEffect(() => {
        const getPost = async() => {
            try {
                const res = await axios.get("/posts/" + path);
                setPost(res.data);
                setTitle(res.data.title);
                setDesc(res.data.desc);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };
        getPost();
    },[path]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    const handleDelete = async() => {
        try {
            await axios.delete("/posts/" + path, {
                data:{username:user.username},
            });
            window.location.replace("/");
        } catch (error) {
            
        }
    };

    const handleUpdate = async() => {
        try {
            await axios.put("/posts/" + path, {
                username: user.username, 
                title, 
                desc,
            });
            setUpdateMode(false);
        } catch (error) {
            
        }
    }

  return (
    <div className="singlePost">
        <div className="postWrapper">
            {post.photo && (
                <img className="singlePostImg" src={PF + post.photo} alt="" />
            )}
            {updateMode ? (
                <input 
                    className="singlePostTitleInput" 
                    type="text" 
                    value={title}
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                />
            ) : (
                    <h1 className="singlePostTitle">
                        {title}
                        {post.username === user?.username && (
                            <div className="singlePostEdit">
                                <i 
                                    className="singlePostIcon" 
                                    onClick={()=>setUpdateMode(true)}>
                                        <FaEdit />
                                </i>
                                <i 
                                    className="singlePostIcon" 
                                    onClick={handleDelete}>
                                        <RiDeleteBin6Line />
                                </i>
                            </div>
                        )} 
                    </h1>
                )
            }


            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: 
                    <Link to={`/?user=${post.username}`} className="link">
                        <b>{post.username}</b>
                    </Link>
                </span>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>

            {updateMode ? (
                <textarea 
                    className="singlePostDescInput" 
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
            ) : (
                <p className="singlePostDesc">{desc}</p>
            )}
            {updateMode && (
                <button className="singlePostButton" onClick={handleUpdate}>Update</button>
            )}
        </div>
    </div>
  );
}

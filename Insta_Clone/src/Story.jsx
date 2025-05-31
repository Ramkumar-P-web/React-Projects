import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './index.css';
import { Link } from "react-router-dom";

const Story = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState({}); // Object to store likes for each post

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data); // Debugging step
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setLoading(false);
      });
  }, [id]);

  const toggleLike = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: !prevLikes[postId], // Toggle the like state for the specific post
    }));
  };

  if (loading) {
    return <div className="story-container">Loading...</div>;
  }

  if (!post) {
    return <div className="story-container">Story not found</div>;
  }

  return (
    <div className="d-flex justify-content-center padding vw-100 vh-100">
      <div className="mt-3 mb-1 tab_Instagram_name">
        <img
          className="Instagram_name_story"
          src={`http://localhost:5173/src/assets/Instagram_logo (1).svg`}
          alt="Instagram_name"
        />
      </div>
      <div className="text-secondary">
        <Link
          to={`/story/${parseInt(id) - 1}`}
          className="text-decoration-none text-secondary"
        >
          <i className="bi bi-arrow-left-circle fs-2"></i>
        </Link>
      </div>
      <div className="story">
        <div className="header">
          <img
            className="react_icons rounded-circle m-0 me-1"
            width="40"
            height="40"
            src={`http://localhost:5173/${post.profile_picture}`}
            alt="profile_picture"
          />
          <span className="my-2 fw-medium">{post.username}</span>
        </div>
        <img
          className="image"
          src={`http://localhost:5173/${post.image}`}
          alt={post.username}
        />
        <div className="footer">
          <input
            className="form-input"
            type="text"
            placeholder={`Reply to ${post.username}...`}
            onKeyDown={(event) => {
              event.key === "Enter"
                ? (event.target.value = "")
                : (event.target.value = event.target.value);
            }}
          />
          <div className="ms-auto">
            <i
              className={`fs-4 mx-1 react_icons bi ${
                likes[post.id] ? "bi-heart-fill text-danger" : "bi-heart"
              }`}
              onClick={() => toggleLike(post.id)}
            ></i>
            <i className="bi bi-send fs-4 mx-1 react_icons"></i>
          </div>
        </div>
      </div>
      <div className="text-secondary">
        <Link
          to={`/story/${parseInt(id) + 1}`}
          className="text-decoration-none text-secondary"
        >
          <i className="bi bi-arrow-right-circle fs-2"></i>
        </Link>
      </div>

      <Link className="close-btn" to={"/"}>
        <i className="bi bi-x text-decoration-none text-secondary fs-1"></i>
      </Link>
    </div>
  );
};

export default Story;

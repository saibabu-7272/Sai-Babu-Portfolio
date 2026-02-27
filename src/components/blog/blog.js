import "./Blog.css";
import PostCard from "./PostCard";
import { useState, use, useEffect } from "react";

const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
// Sample Data
const blogPosts = [...storedBlogs]

function BlogPage() {
  const [blogPosts, setBlogPosts] = useState(storedBlogs);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("https://api.gsaibabu.com/api/blogs");
      const data = await res.json();
      setBlogPosts(data.data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchBlogs();
  }, []);


  return (
    <div className="blog-container">
      <h1 className="blog-heading">My Blog</h1>

      <div className="posts-grid">
        {blogPosts.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            slug={post.slug}
            author={post.author}
            date={post.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
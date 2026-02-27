import { useState } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      author: "Sai Babu",
      content,
      isPublished: true,
    };

    const endpoint = "https://api.gsaibabu.com/api/blogs";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    };

    const res = fetch(endpoint, options);
    // Get existing posts
    // const existingPosts = JSON.parse(localStorage.getItem("blogs")) || [];

    // // Save new list
    // localStorage.setItem("blogs", JSON.stringify([...existingPosts, newPost]));

    alert("Blog Added Successfully!");

    // Reset form
    setTitle("");
    setSlug("");
    setCategory("");
    setContent("");
  };

  return (
    <div className="admin-container">
      <h1>Create Blog Post</h1>

      <form onSubmit={handleSubmit} className="admin-form">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />


        <textarea
          placeholder="Blog Content"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button type="submit">Publish Blog</button>
      </form>
    </div>
  );
}

export default AdminDashboard;
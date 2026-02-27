import { useNavigate } from "react-router-dom";

function PostCard({ slug, title, author, date }) {
    const navigate = useNavigate();
  return (
    <div className="post-card" onClick={() => navigate(`/blog/${slug}`)}>
      <h2 className="post-title">{title}</h2>

      <div className="post-footer">
        <span>{author}</span>
        <span>{new Date(date).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default PostCard;
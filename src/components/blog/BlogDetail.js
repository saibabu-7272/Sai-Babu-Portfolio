import { useEffect, useState, React} from "react";
import "./BlogDetail.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";




function BlogDetail() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchBlogContent = async () => {
      const slug = window.location.pathname.split("/").pop();
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${slug}`);
        const data = await response.json();
        if (data.success) {
          console.log("Fetched blog content:", data.data.content);
          setMarkdownContent(data.data.content);
        } else {
          console.error("Error fetching blog content:", data.message);
        }
      } catch (error) {
        console.error("Error fetching blog content:", error);
      }
    };

    fetchBlogContent();
  }, []);

  return (
    <div className="article-container">
      <article className="article">


        <section className="article-content">
          <div className="article-markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdownContent}
            </ReactMarkdown>
          </div>
        </section>
      </article>
    </div>
  );
}

export default BlogDetail;

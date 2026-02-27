import "./BlogDetail.css";

function BlogDetail() {
  return (
    <div className="article-container">
      <article className="article">
        <h1 className="article-title">
          Understanding React Routing in Modern Applications
        </h1>

        <div className="article-meta">
          <span>By Sai Babu</span>
          <span>•</span>
          <span>February 23, 2026</span>
          <span>•</span>
          <span>React</span>
        </div>

        <img
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
          alt="React routing"
          className="article-image"
        />

        <section className="article-content">
          <p>
            Routing is a core concept in modern web applications. In React,
            routing allows us to build single-page applications (SPA) where the
            UI updates dynamically without refreshing the page.
          </p>

          <h2>What is React Router?</h2>

          <p>
            React Router is a standard library used for handling routing in
            React applications. It enables navigation between views while
            maintaining application state.
          </p>

          <p>
            Instead of traditional page reloads, React Router renders
            components dynamically based on the URL path.
          </p>

          <h2>Why Routing is Important</h2>

          <ul>
            <li>Improves user experience</li>
            <li>Faster navigation</li>
            <li>Maintains state across views</li>
            <li>Enables scalable architecture</li>
          </ul>

          <h2>Basic Example</h2>

          <pre>
{`<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/blog" element={<Blog />} />
</Routes>`}
          </pre>

          <p>
            With proper routing, you can scale your application into a modular,
            maintainable, and production-ready architecture.
          </p>

          <blockquote>
            “Good routing architecture makes scaling your frontend 10x easier.”
          </blockquote>

          <p>
            As your application grows, you can implement nested routes,
            protected routes, dynamic routes, and lazy loading for performance
            optimization.
          </p>

          <h2>Final Thoughts</h2>

          <p>
            Routing is not just navigation — it is the backbone of structured
            frontend engineering. Mastering it will significantly improve how
            you build large-scale applications.
          </p>
        </section>
      </article>
    </div>
  );
}

export default BlogDetail;
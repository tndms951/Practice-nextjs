import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The blog posts</h1>
      <ul>
        <li>
          <a href="/portfolio">portfolio</a>
        </li>
      </ul>
    </div>
  );
}

export default BlogPostsPage;

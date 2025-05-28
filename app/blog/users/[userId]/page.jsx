import { blogPost } from "@/app/Data/blog/blogPosts";
import { users } from "@/app/Data/blog/users";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function AuthorPage({ params }) {
  const userId = Number(params.userId);
  const user = users.find((u) => u.id === userId);

  if (!user) return notFound();

  const posts = blogPost.filter((post) => post.userId === userId);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="flex items-center mb-4 space-x-4">
        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
        <p className="text-sm text-gray-700 font-semibold">
          使用者：#{user.id}: {user.name}
        </p>
      </div>

      <h1 className="text-xl font-bold mb-4">
        技術文章 {posts.length} 篇
      </h1>

      <div className="space-y-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/posts/${post.id}`}
            className="block p-3 border rounded text-blue-600 hover:text-blue-800 hover:bg-gray-50 transition"
          >
            {post.id}: {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

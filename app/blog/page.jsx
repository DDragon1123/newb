import Link from "next/link";

import { blogPost } from "@/app/Data/blog/blogPosts";
import { users } from "@/app/Data/blog/users";

const posts = blogPost;

export default function PostPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">技術文章<span className="text-2xl text-slate-500">（{posts.length}</span>篇）</h1>
        <div className="grid gap-4">
    {posts.map((post) => {
      const user = users[post.userId - 1];
      return (
        <div key={post.id} className="p-4 shadow-sm rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <img
              src={user.avatar}
              alt={`User ${post.userId}'s avatar`}
              className="w-10 h-10 rounded-full"
            />
            <Link href={`/blog/users/${user.id}`}>
              <span className="text-gray-600 hover:bg-slate-300">
                使用者：#{user.id}: {user.name}
              </span>
            </Link>
          </div>
          <Link href={`/blog/posts/${post.id}`}>
            <span className="text-gray-600 hover:bg-yellow-300">
              {post.id}: {post.title}
            </span>
          </Link>
        </div>
      );
    })}
        </div>
      </div>
    );
  }
  
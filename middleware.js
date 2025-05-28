import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";

import { protectedRoutes } from "./routes";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const isLoggedIn = !!req.auth;
  const isProtectedRoute = protectedRoutes.includes(req.nextUrl.pathname);
  const isAuthRoute = req.nextUrl.pathname.includes("/auth");
  const isApiRoute = req.nextUrl.pathname.startsWith("/api");

  if (isApiRoute || (isAuthRoute && isLoggedIn)) {
    return;
  }

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

// middleware
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ["/login(.*)", "/register(.*)"],
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

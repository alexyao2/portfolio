import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // The home page
  index("routes/home.tsx"),

  // The projects page (URL will be /projects)
  route("projects", "routes/projects.tsx"),

  // The interests page (URL will be /interests)
  route("interests", "routes/interests.tsx"),
] satisfies RouteConfig;
import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  basename: "/portfolio/",
  ssr: false,
  async prerender() {
    return ["/", "/interests", "/projects"]; 
  },
} satisfies Config;

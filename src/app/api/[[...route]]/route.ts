import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({ hello: "World" });
});

app.get("/project/:projectId", (c) => {

    const projectId = c.req.param("projectId")
    return c.json({projectId: projectId})
})

// overwritten the get and redirected to hono
export const GET = handle(app);

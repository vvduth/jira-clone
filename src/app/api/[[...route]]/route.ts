import { Hono } from "hono";
import { handle } from "hono/vercel";
import auth from "@/features/auth/server/route"
const app = new Hono().basePath("/api");

const routes = app.route("/auth", auth);

// overwritten the get and redirected to hono
export const GET = handle(app);
export const POST = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)
export const UPDATE = handle(app)

export type AppType = typeof routes;

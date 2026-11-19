import type { APIRoute } from "astro";
import { llmsText } from "../seo/llms";

export const GET: APIRoute = ({ site }) =>
  new Response(llmsText(site!), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });

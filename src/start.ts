import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

/**
 * Server functions are same-origin RPC: `submitLead` writes to the database and
 * the admin functions edit content, all authorised by nothing but being called.
 * Without this, any page on any site could invoke them in a visitor's session.
 *
 * Only server functions are checked. Document requests are navigations, which
 * legitimately arrive cross-site — every inbound link from Google, Instagram or
 * Telegram is one, and rejecting those would take the site off the internet.
 */
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

// CSRF first: a cross-site call is refused before it reaches anything that could
// touch the database. errorMiddleware still wraps the handlers themselves.
export const startInstance = createStart(() => ({
  requestMiddleware: [csrfMiddleware, errorMiddleware],
}));

# Two with one - browse the world with variants of "to kill two birds with one stone" saying

## About the project

## Content

## Images

## Technologies used and development

TwoWithOne is built with fantastic [Astro](https://astro.build).build/chat).

Hosted on Cloudflare Pages. Most of the pages are generated statically at build time.

Only main page, search and contact form utilize simple server side functionality.

### Contact form

Trick used for a low tech and no cost form accepting solution is to use

a [val.town](https://val.town) service. It is something like a [zapier](https://zapier.com)
but with code - you can expose to internet simple functions that can, for example, accept form
data and send emails.

The simple val we use:

```
<import { email } from "https://esm.town/v/std/email?v=9";

export async function handle(req: Request) {
  (async () => {
    const body = await req.formData();
    const text = `
    Message from Two With One form:
    name: ${body.get("name")},
    email: ${body.get("email")},
    message: ${body.get("message")}`;
    await email({ text });
  })();
  return Response.json({ ok: true });
}
```

which accepts form data and sends it as an email to us.

No database, no costs and no publicly eposed email addresses :)

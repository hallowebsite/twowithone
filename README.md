# Two with one - browse the world with variants of "to kill two birds with one stone" saying

## About the project

Piotr, one of our collaborators, being a Polish immigrant in Germany had a good laugh when
he discovered that in Germany they say [Zwei Fliegen mit einer Klappe schlagen](https://twowwithone.com/german)

A saying that in English he knew as quite boring [To kill two birds with one stone](https://twowithone.com/english)
and in Polish is actually too quite funny [Upiec dwie pieczenie na jednym ogniu](https://twowithone.com/polish)

So we started wondering, what are the variants of this in other languages.

It is not an easy thing to google or automatically translate, as automatic translators
just tend to return a local version of the saying and not a literal translation. Luckily
Aachen is a pretty international city so we were able to quickly collect examples in many
languages from native speakers.

We thought it might be a funny way to explore the world and thus the project was born.

## Technologies used

The site uses fantastic [Astro](https://astro.build) with hybrid server side rendering, which
means that sites that remain static (like pages for particular languages) are generated as
static html and just served as such from a CDN (Content Delivery Network). While sites that
require some interactivity (like the main page where you can see a random language every time)
are server generated using very handy and fast [Cloudflare](https://cloudflare.com) pages.

We took to heart also a proper progressive enhancment - site is functional and allows browsing
through the languages without javascript enabled. A little bit of javascript sprinkled here and there
using a standard Web Components is used to things a bit more fun.

Design-wise site uses fantastic Forest and Cmyk themes from [daisy ui](https://daisyui.com)

## Content

Unless we get a really good written source, we try to verify all sayings with native speakers.

If you notice an error or would like to add your own language, make a PR or use the [contact form](https://twowithone.com/contact)

## Images

All used images are works of art available in public domain. When possible we try to find and art work
that is connected with the saying and geographically close to the area where the given language is spoken.

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

---

Made with love in Aachen by:

[{hallowebsite}](https://hallowebsite.de)
Webdesign aus Aachen

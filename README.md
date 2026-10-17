# Studio Matsya

Static portfolio website for Studio Matsya, the Jaipur-based art and design studio founded by Satyam Sharma.

## Publish

The site is configured for GitHub Pages at <https://www.studiomatsya.in/>. In the repository settings, choose **Pages → Deploy from a branch**, then select `main` and `/ (root)`. Set the Pages custom domain to `www.studiomatsya.in`.

Configure DNS with your domain provider so `www` is a CNAME to `naruto0o23.github.io`. For the apex domain (`studiomatsya.in`), add A records for `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. Once both domains resolve to GitHub Pages, it redirects the apex domain to `www`.

## SEO and site URL

The canonical URL, social-sharing metadata and structured business data are in `index.html`; the sitemap is `sitemap.xml`. If the domain changes, update the URL in both files. Submit `https://www.studiomatsya.in/sitemap.xml` to Google Search Console after deployment.

Service copy and project details are maintained in `index.html` and `script.js`, respectively.

# Studio Matsya

Static portfolio website for Studio Matsya, the Jaipur-based art and design studio founded by architect and artist Satyam Sharma.

## Project contents

- `index.html` contains the page structure, service copy, SEO metadata and structured business data.
- `styles.css` contains the responsive layout and visual styles.
- `script.js` contains the portfolio projects, category filters, image viewer and mobile navigation.
- `assets/images/` contains the locally served logo and favicon. Artwork is served from ImageKit.
- `assets/studio-matsya-pitch-deck.pdf` is linked from the home page.
- `sitemap.xml` lists the canonical site URL.

## Preview locally

Open `index.html` in a browser. The site is static and has no build step or package dependencies.

## Publish with GitHub Pages

In the repository's **Settings → Pages**, choose **Deploy from a branch**, then select the `main` branch and `/ (root)`.

The site uses the custom domain `www.studiomatsya.in`. Configure `www` as a CNAME to `naruto0o23.github.io`. For the apex domain, configure A records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`. The repository's `CNAME` file configures the Pages custom domain.

## Updating the site

- Add or edit portfolio entries and their image galleries in `script.js`. Portfolio, hero, portrait and contact artwork are served from ImageKit at `https://ik.imagekit.io/chiragartcdn/studiomatsya/` with automatic format and quality optimization; upload each image there using its existing filename. Keep the logo and favicon in `assets/images/` so they continue to be served locally.
- Update page sections and service copy in `index.html`; update layout and styling in `styles.css`.
- If the site domain changes, update the canonical, social-sharing and structured-data URLs in `index.html`, along with `sitemap.xml` and `CNAME`.
- Submit `https://www.studiomatsya.in/sitemap.xml` to search engines after publishing.

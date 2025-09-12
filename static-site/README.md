# MODEMO Static Site

This folder contains a static, framework-free marketing site that can be hosted on any web server.

## Structure
```
static-site/
  index.html
  solutions.html
  how-it-works.html
  pricing.html
  css/styles.css
  js/main.js
  assets/Modemo.svg
```

## Notes
- Styling extracted into a handcrafted utility + component CSS that mirrors the Tailwind classes used originally.
- Icons replaced with simple emoji to avoid bundling an icon library; swap for inline SVG if preferred.
- Demo form triggers a `mailto:` like the React version (no backend).
- Active nav highlighting is achieved via a tiny script comparing `location.pathname`.

## Deploying to IIS
1. Copy the entire `static-site` directory contents into your IIS site root.
2. Ensure `Default Document` includes `index.html`.
3. (Optional) Enable Server Side Includes if you want native includes instead of fetch-based injection.
4. Confirm MIME types for `.svg` (image/svg+xml) are allowed (usually default).

## Customization
- To add analytics, place the script tag just before the closing `</body>`.
- To convert emojis to SVGs, replace the span contents inside icon circles.

## License
Internal use - mirrors original marketing content.

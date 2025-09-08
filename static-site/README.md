# MODEMO Static Site (IIS-Friendly)

This folder contains a static, framework-free replica of the React marketing site so it can be hosted on IIS or any basic static web server.

## Structure
```
static-site/
  index.html
  solutions.html
  how-it-works.html
  key-benefits.html
  pricing.html
  partials-header.html
  partials-footer.html
  css/styles.css
  js/main.js
  assets/Modemo.svg (copy from src assets if not already)
```

`partials-header.html` and `partials-footer.html` are dynamically fetched (client-side) for DRY layout. For IIS you can also use Server Side Includes (uncomment the `<!--#include ... -->` lines) if SSI is enabled.

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

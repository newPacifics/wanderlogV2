<!-- 16afd0f7-0348-423b-b59f-0d2de2fcd03c 17a4d3ee-d5b0-4b3f-b307-b39f00230e65 -->
# Website Branding Updates

## Overview

Implement the website branding by adding the floating wood log SVG as a logo in the sidebar and mobile header, and ensure the favicon is properly configured.

## Changes

### 1. Store the SVG Logo

Copy the `a-floating-wood-log.svg` file to `public/logo.svg`

- The `public/` directory is the standard location for static assets in Next.js
- Assets in `public/` are served from the root URL path

### 2. Update the Favicon Configuration

The favicon is already in place at `app/favicon.ico`. Next.js 13+ automatically serves this file from the app directory, so no additional configuration is needed. However, we should verify it's properly referenced in the metadata.

Update [`app/layout.tsx`](app/layout.tsx):

- The favicon will be automatically detected by Next.js from `app/favicon.ico`
- We can optionally add explicit metadata for the icon if needed

### 3. Add Logo to Sidebar Component

Update [`components/Sidebar.tsx`](components/Sidebar.tsx):

- Add the logo image above or beside the site name "Wanderlog" in the header section (lines 48-53)
- Use Next.js `Image` component for optimized loading
- Add appropriate sizing (e.g., 32x32px or 40x40px) and styling
- Ensure the logo works in both light and dark themes

Current header section:

```typescript
<div className="p-8 pb-4 flex justify-between items-center">
    <Link href="/" className="group">
        <h1 className="text-2xl font-serif font-bold tracking-tight text-ink dark:text-white group-hover:opacity-80 transition-opacity">
            {SITE_NAME}
        </h1>
    </Link>
    ...
</div>
```

### 4. Add Logo to Mobile Header

Update [`app/layout-client.tsx`](app/layout-client.tsx):

- Add the logo to the mobile header (line 40) alongside "Sev@Wanderlog"
- Maintain consistent sizing with the sidebar logo
- Ensure proper alignment and spacing

Current mobile header:

```typescript
<header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-paper-50/80...">
    <span className="text-xl font-serif font-bold text-ink dark:text-white">{SITE_NAME}</span>
    ...
</header>
```

## Implementation Details

- The logo SVG contains brown/wood tones that should work well with the existing paper-like aesthetic
- The logo dimensions are 512x512pt, so we'll scale it down appropriately
- We'll add `alt="Wanderlog logo"` for accessibility
- The logo will be clickable as part of the home link in the sidebar
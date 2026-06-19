# Bé Atelier Website

Minimal, editorial website for Bé Atelier, a private dining at home project in Lisbon.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

This project is ready to deploy on Vercel.

## Editing Content

Menus are stored in:

```text
src/data/menus.ts
```

Gallery images are stored in:

```text
src/data/gallery.ts
```

Main sections are in:

```text
src/components/
```

## Booking Setup

The booking form currently opens a pre-filled email to:

```text
bernardoallen@icloud.com
```

To change it, edit `bookingEmail` in `src/components/BookingForm.tsx`.

The Instagram link is:

```text
https://www.instagram.com/allen_cook_photography?igsh=MWVxMWIyOGtoZ292bA%3D%3D&utm_source=qr
```

Change it in `src/components/BookingForm.tsx` and `src/components/Footer.tsx`.

## Images

Current photography lives in `src/assets/images/`. To replace photos later, keep the same filenames if you do not want to update imports in `src/data/gallery.ts`.

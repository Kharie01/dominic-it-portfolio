# Dominic Domingo — IT Portfolio

Responsive, monochrome static portfolio website for Dominic De Leon Domingo.

## Run locally

Run the included PowerShell launcher:

```powershell
.\run.ps1
```

Or open `index.html` in a browser, or serve the directory with any static server:

The launcher uses Python when available and falls back to Node.js.

Then visit `http://localhost:8000`.

## Before publishing

- Replace `your.email@example.com` in `index.html` with Dominic's actual email address.
- Connect `#contact-form` in `script.js` to a form endpoint or backend. It currently validates locally and shows a configuration note; it does not send email.
- Add a real resume file and link only when it is available.
- Add LinkedIn or GitHub links only when the actual URLs are provided.

## Vercel / GitHub

This project is deployment-ready as a static site, but no GitHub or Vercel integration has been configured or verified in this workspace. For deployment, import the repository into Vercel, use the `main` branch for production, enable Preview Deployments, and set any future environment variables in Vercel Project Settings.

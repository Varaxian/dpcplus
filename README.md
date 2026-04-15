# DPCPlus Max Conversion Demo

Railway-ready root-only deploy.

## Files
- `index.html` -> optimized landing page
- `server.js` -> root static server with `/health`
- `package.json` -> start script for Railway

## Deploy
1. Upload these files to GitHub repo root
2. Deploy repo on Railway
3. Ensure Railway public networking points to the active app port
4. Test:
   - `/`
   - `/health`

## Notes
- This is a conversion-optimized demo using known information only
- Pricing and testimonials are still placeholder content and should be replaced before production use
- The form is demo-only until connected to email, CRM, or webhook

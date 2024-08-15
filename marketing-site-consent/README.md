This is a [Next.js](https://nextjs.org/) project demonstrates how to use Syft SDK while respecting user consent.

## Steps

- Get JS code snippet from [Syft](https://app.syftdata.com/dashboard/settings/snippets)
- Paste it in the root [layout.tsx](/src/app/layout.tsx). 
- Pass "enabled" flag as false to begin with.
- Once user gives consent, call `window.syft.enable()`.
   - E.g: [consent-banner.tsx](./src/app/consent-banner.tsx). 



This is a [Next.js](https://nextjs.org/) project demonstrates how to use Syft SDK to call "identify" call on login.

## Steps

- Get JS code snippet from [Syft](https://app.syftdata.com/dashboard/settings/snippets)
- Paste it in the root [layout.tsx](./src/app/layout.tsx). 
- Once user logs in, call `window.syft.identify`.
   - E.g: [profile/page.tsx](./src/app/profile/page.tsx). 

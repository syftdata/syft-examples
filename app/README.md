This is [Next.js](https://nextjs.org/) project shows how to use Syft SDK to "identify" users on login or signup. 

## Steps

- Get JS code snippet from [Syft](https://app.syftdata.com/dashboard/settings/snippets)
- Paste it in the root [layout.tsx](./src/app/layout.tsx). 
- Once user logs in, call `window.syft.identify`.
   - E.g: [profile/page.tsx](./src/app/profile/page.tsx). 

This is [Next.js](https://nextjs.org/) project shows how to use Syft SDK to "identify" users on login or signup. 

## Instrumentation Steps

- Get JS code snippet from [Syft](https://app.syftdata.com/dashboard/settings/snippets)
- Paste it in the root [layout.tsx](./src/app/layout.tsx). 
- When user logs in or signs up, call `window.syft.identify`.
   - You can see an example in [profile/page.tsx](./src/app/profile/page.tsx). 

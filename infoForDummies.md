## Development and Deployment

To start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open

# empty
```

## Building

To create a production version of your app:

```bash
npm run build
```

You will need to add a `.env` file to the root of the build file with the following variables:

```bash
PUBLIC_URI=https://9rwoprs2o3.execute-api.eu-west-2.amazonaws.com/prod
```

You can preview the production build with `npm run preview`.

## Deploying to the web

Deployed via Vercel. See below for link:
https://vercel.com/minhazrahmanbaltic-gmailcom/team-holiday-manager-ui

# Below is no longer relevant but have left for reference

> To deploy the app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Front-end to Team Holiday Manager

This is the front-end to the Team Holiday Manager application. It is built using SvelteKit.

## Getting Started

To get started, clone this repository and run the following commands:

```bash
cd team-holiday-manager-ui
npm install
```

## Running the application (if back-end is already running)

To run the application locally ensure the back-end is running locally also via Docker or through an venv on an IDE, run the following command:

```bash
npm run dev
```

This will start the application on port 5173. You can then access the application at http://localhost:5173/.

## Running the application with the back-end in docker

To run the application with the back-end in Docker, you will need to run the back-end in Docker. 
Instructions for doing this can be found in the [TeamHolidayManager](https://github.com/MinyMinz/TeamHolidayManager) repository.

Once the back-end is running, you can run the front-end with the following command:

```bash
npm run dev 
```

This will start the application on port 5173. You can then access the application at http://localhost:5173/.


## Below is for development purposes only

To start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy the app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

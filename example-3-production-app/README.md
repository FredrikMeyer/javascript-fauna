# "Real World" Demo App

To run, first do `npm install`. Then `npm run dev`.

Run linting with `npm run lint`.

The project uses [Vite](https://vitejs.dev/) to bundle and serve the Javascript code. Vite is a very opiniated alternative to Webpack (and other popular bundlers).

## Dependencies

## eslint

I followed the instructions [here](https://eslint.org/docs/user-guide/getting-started). Basically this:

```
npm install eslint --save-dev
```

Then set up config file. Just follow the guide:
```
npx eslint --init
```

To be able to run lint easily, put `eslint --ext .ts,.js,.tsx,.jsx src` under `scripts` in `package.json`.

There is a very nice `eslint` plugin that helps with React Hooks, which can be confusing (and if you're not careful, you end up with infinite loops in your code). Install it with [instructions here](https://www.npmjs.com/package/eslint-plugin-react-hooks).

## mui (formerly Material UI)

Installation instructions from [their docs](https://mui.com/getting-started/installation/). Basically:

```
npm install @mui/material @emotion/react @emotion/styled
```

## prettier

Follow instructions [here](https://prettier.io/docs/en/install.html).

## recharts

Follow instructions [in docs](https://recharts.org/en-US/guide).

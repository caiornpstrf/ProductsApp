# ProductsApp

This React Native app fetches a list of products and displays to the user. It's possible to filter by category and to sort the list of products.

## Building the app

### Step 1: Installing dependencies

To install npm dependencies just run `yarn`.

In order to run on iOS, make sure pods are installed. Just run the following command:

```
cd ios
pod install
cd ..
```

### Step 2: Starting the app

You can run the React Native bundler with `yarn start`

But if you run either of the following building commands the bundler will run automatically.

```
yarn android
yarn ios
```

### Development notes

- The app fetches data from https://dummyjson.com/docs/products.

- `@testing-library/react-native` was chosen for overall JS tests. I find it to be cleaner than `test-renderer`;

- `lodash` was added solely to handle strings. Didn't want to setup any localization library to save time. Instead I implemented my own solution, which is `useStringHandler`;

- `styled-components` and `styled-system` were chosen due to familiarity, velocity and because I wanted to maintain a pattern of styles while developing.
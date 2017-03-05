# numenera-tools

> A set of tools and generators for the Numenera roleplaying game

## Build Setup

``` bash
# install dependencies
yarn install

# To build name markov model. For this (and build) to work,
# there must be a src/data/names/names.txt file. One name per line.
yarn run gen-names

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run unit tests
yarn run unit

# run e2e tests
yarn run e2e

# run all tests
yarn test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

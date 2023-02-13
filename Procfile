web: {
    "dev": "nodemon cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts",
    "build:payload": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts payload build",
    "build:server": "tsc",
    "build": "yarn copyfiles && yarn build:payload && yarn build:server",
    "serve": "cross-env PAYLOAD_CONFIG_PATH=dist/payload.config.js NODE_ENV=production node dist/server.js",
    "copyfiles": "copyfiles -u 1 \"src/**/*.{html,css,scss,ttf,woff,woff2,eot,svg,jpg,png}\" dist/",
    "generate:types": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts payload generate:types",
    "generate:graphQLSchema": "PAYLOAD_CONFIG_PATH=src/payload.config.ts payload generate:graphQLSchema"
  }
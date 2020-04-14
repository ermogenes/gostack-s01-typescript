# TypeScript hands-on

Install TypeScript as dev dependency:
```
yarn add typescript -D
```

Install types for the libs (in this case, Express):
```
yarn add @types/express -D
```

Create the TS config file:
```
yarn tsc --init
```

Configure the output dir on `tsconfig.json`:
```
"outDir": "./dist",
```

Convert TS to JS:
```
yarn tsc
```
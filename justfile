run:
  cd ./editor && npm start

proto:
  npx pbjs --target=static-module --wrap=commonjs --out=./out/schema.js ./proto/schema.proto
  npx pbts --out=./out/schema.d.ts ./out/schema.js

install:
  npm install

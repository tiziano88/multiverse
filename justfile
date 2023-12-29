run: proto
  cd ./editor && npm start

proto:
  npx pbjs --target=static-module --wrap=commonjs --out=./editor/src/compiled/schema.js ./proto/schema.proto
  npx pbts --out=./editor/src/compiled/schema.d.ts ./editor/src/compiled/schema.js

install:
  npm install

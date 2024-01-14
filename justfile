editor: proto
  cd ./editor && npm start

viewer: proto
  cd ./viewer && npm start

proto:
  npx pbjs --target=static-module --wrap=commonjs --out=./editor/src/compiled/schema.js ./proto/schema.proto
  npx pbjs --target=static-module --wrap=commonjs --out=./viewer/src/compiled/schema.js ./proto/schema.proto

  npx pbts --out=./editor/src/compiled/schema.d.ts ./editor/src/compiled/schema.js
  npx pbts --out=./viewer/src/compiled/schema.d.ts ./viewer/src/compiled/schema.js

install:
  npm install

build-editor: proto
  cd ./editor && npm run build

deploy-editor: build-editor
  wrangler pages deploy --commit-dirty=true --project-name=multiverse ./editor/build

build-viewer: proto
  cd ./viewer && npm run build

deploy-viewer: build-viewer
  wrangler pages deploy --commit-dirty=true --project-name=multiverse-viewer-0 ./viewer/build

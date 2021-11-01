npm run generate
npm run build
git add dist -f
git commit -m "deploying build" --no-verify
git subtree push --prefix dist gh main

npm run generate
npm run build
git add dist -f
git commit -m "deploying build" --no-verify
git subtree push -f --prefix dist gh main

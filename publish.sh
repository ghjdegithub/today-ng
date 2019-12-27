ng build --prod;
cp ./404.html ./dist/today-ng/404.html
cd ./dist/today-ng
git add .
git commit -m "init project"
git push origin gh-pages
#git add dist --force;
#git commit -m "demo: build deml";
#git subtree push --prefix dist/today-ng origin gh-pages;

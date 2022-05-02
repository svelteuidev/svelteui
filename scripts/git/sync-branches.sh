git checkout main
git pull

git checkout next-minor
git pull
git merge main
git push

git checkout experimental
git pull
git merge next-minor
git push
git checkout main
git pull

git checkout next-minor
git pull
git rebase main
git push

git checkout experimental
git pull
git rebase next-minor
git push
git checkout main
git pull

git checkout next-minor
git rebase main
git push

git checkout experimental
git rebase main
git push
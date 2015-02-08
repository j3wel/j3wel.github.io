#!/bin/bash

cp ~/.vimrc ./vimrc
git add .
git commit -m"add"
git push origin master
#git push origin :gh-pages

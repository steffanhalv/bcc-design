#!/bin/bash

# Take the version increment as an argument
INCREMENT=$1

if [ -z "$INCREMENT" ]; then
    echo "No version given!"
    exit 1
fi

# Version main package
NEW_VERSION=$(npm version $INCREMENT --no-git-tag-version)

# Version vue package
cd vue
npm version $INCREMENT --no-git-tag-version

# Navigate back to the root of the workspace
cd ..

# Add changes to git
git add .

# Commit changes
git commit -m "icons $NEW_VERSION"

# Create a tag
git tag -am icons-$NEW_VERSION "icons-$NEW_VERSION"

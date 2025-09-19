#!/bin/bash

# NeuroCode Deployment Script for GitHub Pages
# This script automates the deployment process

echo "🧠 NeuroCode - Deployment Script"
echo "================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized. Run 'git init' first."
    exit 1
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
read -p "Enter commit message (or press Enter for default): " commit_message
if [ -z "$commit_message" ]; then
    commit_message="Deploy NeuroCode v$(date +%Y%m%d-%H%M%S)"
fi
git commit -m "$commit_message"

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Setting up GitHub remote..."
    read -p "Enter your GitHub username: " github_username
    read -p "Enter repository name (default: neurocode): " repo_name
    if [ -z "$repo_name" ]; then
        repo_name="neurocode"
    fi
    
    git remote add origin "https://github.com/$github_username/$repo_name.git"
    echo "✅ Remote origin set to: https://github.com/$github_username/$repo_name.git"
fi

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Your NeuroCode platform will be available at:"
echo "   https://$(git remote get-url origin | sed 's/.*github.com\///g' | sed 's/\.git//g' | sed 's/\//.github.io\//g')"
echo ""
echo "⚙️  To enable GitHub Pages:"
echo "   1. Go to your repository on GitHub"
echo "   2. Click Settings → Pages"
echo "   3. Select 'Deploy from a branch'"
echo "   4. Choose 'main' branch and '/ (root)'"
echo "   5. Save settings"
echo ""
echo "🎉 Happy coding with NeuroCode!"
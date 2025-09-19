#!/bin/bash

# Comprehensive GitHub Pages deployment script for NeuroCode
# This script ensures clean build and deployment

set -e  # Exit on any error

echo "🚀 Starting NeuroCode GitHub Pages deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "frontend/package.json" ]; then
    print_error "Please run this script from the project root directory"
    exit 1
fi

# Change to frontend directory
cd frontend

print_status "Checking Node.js and npm versions..."
node --version
npm --version

# Clean previous builds
print_status "Cleaning previous builds..."
rm -rf build/
rm -rf node_modules/.cache/

# Clean npm cache
print_status "Cleaning npm cache..."
npm cache clean --force

# Install dependencies with fallback
print_status "Installing dependencies..."
if ! npm ci; then
    print_warning "npm ci failed, trying npm install..."
    rm -f package-lock.json
    npm install
fi

# Check for common missing dependencies
print_status "Checking for missing postcss dependencies..."
if ! npm list cosmiconfig > /dev/null 2>&1; then
    print_warning "Installing missing cosmiconfig dependency..."
    npm install cosmiconfig
fi

# Verify critical files exist
print_status "Verifying critical files..."
if [ ! -f "src/App.js" ]; then
    print_error "src/App.js not found!"
    exit 1
fi

if [ ! -f "public/index.html" ]; then
    print_error "public/index.html not found!"
    exit 1
fi

if [ ! -f "public/404.html" ]; then
    print_error "public/404.html not found!"
    exit 1
fi

print_success "All critical files verified"

# Build the application
print_status "Building React application..."
CI=false npm run build

# Verify build was successful
if [ ! -d "build" ]; then
    print_error "Build directory not created!"
    exit 1
fi

if [ ! -f "build/index.html" ]; then
    print_error "build/index.html not found!"
    exit 1
fi

if [ ! -f "build/404.html" ]; then
    print_error "build/404.html not found!"
    exit 1
fi

print_success "Build completed successfully"

# Check build contents
print_status "Checking build contents..."
echo "Build directory size:"
du -sh build/
echo ""
echo "JavaScript files:"
find build/static/js/ -name "*.js" -exec basename {} \; 2>/dev/null || true
echo ""
echo "CSS files:"
find build/static/css/ -name "*.css" -exec basename {} \; 2>/dev/null || true

# Check if gh-pages is installed
if ! npm list gh-pages > /dev/null 2>&1; then
    print_error "gh-pages package not found!"
    exit 1
fi

# Deploy to GitHub Pages
print_status "Deploying to GitHub Pages..."

# Force clean deployment
print_status "Performing clean deployment..."
npx gh-pages -d build

# Verify deployment
print_status "Verifying deployment..."
cd ..
git fetch origin gh-pages

# Check if gh-pages branch was updated
LATEST_COMMIT=$(git log origin/gh-pages --oneline -1)
print_status "Latest gh-pages commit: $LATEST_COMMIT"

# Wait a moment for GitHub Pages to process
print_status "Waiting for GitHub Pages to process..."
sleep 5

print_success "🎉 Deployment completed successfully!"
print_success "Your site should be available at: https://emtiaz-ruet.github.io/neurocode-ai/"
print_warning "Note: It may take a few minutes for changes to propagate"

echo ""
echo "🔗 URLs to test:"
echo "   Root: https://emtiaz-ruet.github.io/neurocode-ai/#/"
echo "   System Design: https://emtiaz-ruet.github.io/neurocode-ai/#/system-design"
echo ""
echo "If you see 'You need to enable JavaScript', try:"
echo "   1. Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)"
echo "   2. Clear browser cache"
echo "   3. Try in incognito/private mode"
echo "   4. Wait 5-10 minutes for GitHub Pages CDN to update"


# Project root folder
PROJECT="datavinci-frontend"
mkdir $PROJECT && cd $PROJECT

# Create public folder
mkdir public
touch public/index.html
touch public/favicon.ico

# Create src folder and subfolders
mkdir -p src/api
mkdir -p src/components
mkdir -p src/pages
mkdir -p src/styles

# Create API files
touch src/api/data.js

# Create Components
touch src/components/Footer.js
touch src/components/Header.js
touch src/components/Layout.js
touch src/components/Navbar.js
touch src/components/NestedCheckbox.js

# Create Pages
touch src/pages/HomePage.js
touch src/pages/AboutPage.js

# Create Styles
touch src/styles/App.css
touch src/styles/Navbar.css
touch src/styles/NestedCheckbox.css
touch src/styles/Responsive.css

# Create main React files
touch src/App.js
touch src/index.js
touch src/reportWebVitals.js

# Create package files
touch package.json
touch package-lock.json

# Create README
touch README.md

echo "DataVinci frontend project structure created successfully!"

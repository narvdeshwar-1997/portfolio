# Narvdeshwar Kumar Singh - Portfolio Website

A modern, premium-quality static portfolio website built with HTML, CSS, and JavaScript.

## Live Preview

Open `index.html` in any modern browser to view the portfolio.

## About

This is a personal developer portfolio for **Narvdeshwar Kumar Singh**, an MCA Graduate and aspiring MERN Stack Developer. The website showcases skills, projects, and contact information in a visually appealing, fully responsive design.

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid, animations
- **JavaScript** (Vanilla) - Interactive features, no frameworks
- **Google Fonts** - Poppins
- **Font Awesome** - Icons

## Features

- Dark/Light mode toggle with localStorage persistence
- Typing text animation in Hero section
- Interactive particle background (mouse-responsive)
- Smooth scrolling navigation
- Animated skill progress bars
- 3D tilt effect on project cards
- Scroll reveal animations
- Active navbar section highlighting
- Responsive design (mobile + tablet + desktop)
- Contact form with JavaScript validation
- Scroll-to-top button

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with dark/light themes
├── script.js           # JavaScript interactive features
├── narvdeshwar.jpg     # Hero section profile photo
├── NKS PHOTO A.png     # About section profile photo
├── profile.svg         # Placeholder avatar (optional)
└── README.md           # Project documentation
```

## Sections

1. **Navbar** - Fixed top navigation with logo, menu links, and theme toggle
2. **Hero** - Split layout with intro text (left) and profile photo (right)
3. **About** - Professional summary with profile photo and highlight badges
4. **Skills** - Categorized animated progress bars (Programming, Web Dev, Cloud & Tools)
5. **Projects** - Premium cards with descriptions, tech tags, and links
6. **Resume** - Call-to-action with download button
7. **Contact** - Contact info cards and validated form
8. **Footer** - Logo, social links, and copyright

## Setup & Usage

1. Clone or download this repository
2. Place your profile photos in the project folder
3. Open `index.html` in a browser

No build tools, dependencies, or server required - it's a fully static website.

## Customization

- **Colors**: Edit CSS custom properties in `style.css` (`:root` and `[data-theme="light"]`)
- **Content**: Edit text directly in `index.html`
- **Photos**: Replace `narvdeshwar.jpg` and `NKS PHOTO A.png` with your own images
- **Resume**: Update the Google Drive link in the Resume section
- **Contact**: Update email, phone, GitHub, and LinkedIn links in the Contact section

## Browser Support

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Microsoft Edge (latest)
- Safari (latest)

## Author

**Narvdeshwar Kumar Singh**
- GitHub: [github.com/narvdeshwar-1997](https://github.com/narvdeshwar-1997)
- LinkedIn: [linkedin.com/in/narvdeshwar-singh-197432293](https://www.linkedin.com/in/narvdeshwar-singh-197432293)
- Email: nks181997@gmail.com

## License

This project is open source and available for personal use.

## How to Push to GitHub

### Step 1: Install Git

Download and install Git from [git-scm.com](https://git-scm.com/downloads) if not already installed.

### Step 2: Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon (top right) > **New repository**
3. Repository name: `portfolio`
4. Keep it **Public**
5. **Do NOT** check "Add a README file" (we already have one)
6. Click **Create repository**

### Step 3: Open Terminal / Command Prompt

Open **Command Prompt** or **Git Bash** and navigate to your project folder:

```bash
cd C:\Users\DELL\Desktop\portfolio
```

### Step 4: Initialize Git & Push

Run these commands one by one:

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create the first commit
git commit -m "Initial commit - Portfolio website"

# Set the main branch
git branch -M main

# Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/narvdeshwar-1997/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 5: Verify

Go to `https://github.com/narvdeshwar-1997/portfolio` in your browser. All your files should be visible there.

### Deploy on GitHub Pages (Free Hosting)

1. Go to your repository on GitHub
2. Click **Settings** > **Pages** (left sidebar)
3. Under **Source**, select **Branch: main** and folder **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes, your site will be live at:
   `https://narvdeshwar-1997.github.io/portfolio/`

### Future Updates

After making changes to your code, push updates with:

```bash
git add .
git commit -m "Updated portfolio"
git push
```

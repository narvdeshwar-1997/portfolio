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

# Deployment using AWS EC2, Jenkins & Nginx (CI/CD Setup)

### This portfolio is not only a static website but also deployed using a complete CI/CD pipeline on AWS.

### The goal was to understand how real-world deployment works — from writing code locally to making it live automatically after every update.

# Tools Used for Deployment

1.AWS EC2 (Ubuntu Server) – Hosting environment

2.Jenkins – Continuous Integration & Deployment automation

3.Nginx – Web server to serve the website

4.GitHub – Source code management

5.SSH – Remote server access


# How the Deployment Works

##This project follows a simple CI/CD flow:

`Local Code → GitHub → Jenkins → EC2 → Nginx → Browser`


# Whenever changes are pushed and merged into the main branch, Jenkins automatically pulls the latest code and deploys it to the live server.

# EC2 Server Setup

An Ubuntu EC2 instance was launched on AWS and configured for deployment.

Security Group ports opened:

1.Port 22 – SSH access

2.Port 80 – Website (HTTP)

3.Port 8080 – Jenkins Dashboard

Connected to the server using SSH from a Windows system.

# Connect to EC2 using SSH (Windows PowerShell)

`ssh -i myportfolio-server-key.pem ubuntu@<EC2-Public-IP>`

This command connects securely to the Ubuntu server running on AWS.

### Jenkins Installation & Configuration

Jenkins was installed on the EC2 instance and accessed using:

 Install Java (Required for Jenkins)
`sudo apt update`
`sudo apt install openjdk-17-jdk -y`
`java -version`
Jenkins requires Java to run.

# Install Jenkins

`curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
/usr/share/keyrings/jenkins-keyring.asc > /dev/null`

`echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \`
`https://pkg.jenkins.io/debian-stable binary/ | sudo tee \`
`/etc/apt/sources.list.d/jenkins.list > /dev/null`

`sudo apt update`
`sudo apt install jenkins -y`

# Start Jenkins:

`sudo systemctl start jenkins`
`sudo systemctl enable jenkins`

# Check status:

`sudo systemctl status jenkins`

# Jenkins runs on:

`http://<EC2-Public-IP>:8080`

 # Get Jenkins Admin Password
 
`sudo cat /var/lib/jenkins/secrets/initialAdminPassword`

Use this password to unlock Jenkins in the browser.

# After setup:

Created an admin user

Installed required plugins

Connected Jenkins to the GitHub repository

# Nginx Web Server Setup

Install Nginx (Web Server)

`sudo apt install nginx -y`
`sudo systemctl start nginx`
`sudo systemctl enable nginx`

Nginx was installed to host the website.

Test:

`http://<EC2-IP>`

If "Welcome to nginx" appears → success.

# Give Jenkins Permission to Deploy Website
`echo "jenkins ALL=(ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/jenkins`
`sudo systemctl restart jenkins`

This allows Jenkins to copy files into the web directory.

Default web directory:

`/var/www/html/`

# Jenkinsfile Deployment Command

In Jenkins pipeline, deployment step copies files:

`sudo cp -r * /var/www/html/`

This makes the updated website live automatically.

# Run Jenkins Pipeline

In Jenkins dashboard:

`portfolio-pipeline → Build Now`

This pulls the latest code and deploys it.

# How the Full System Works

1.Code is written locally
2.Code is pushed to GitHub
3.Jenkins pulls latest code from GitHub
4.Jenkins checks required files
5.Jenkins deploys files to Nginx folder
6.Nginx serves website on port 80
7.Users access site using EC2 public IP


# All project files are deployed here so that the website becomes publicly accessible using the EC2 public IP.

# Jenkins Pipeline (Automation)

A Jenkinsfile is added to the repository to automate deployment.

The pipeline performs the following steps:

1.Pull latest code from GitHub

2.Verify that index.html exists

3.Copy all website files to the Nginx web directory

This makes deployment automatic and repeatable.

# CI/CD Workflow Demonstration

To verify that the pipeline works correctly, the following flow was tested:

1.Created a new branch

2.Made a visible change in the website

3.Created a Pull Request

4.Merged into the main branch

5.Triggered Jenkins build

6.Website updated automatically on the live server

This confirms that CI/CD is working properly.

# Live Website

The website is hosted on the EC2 server and can be accessed using:

`http://<EC2-Public-IP>`


Anyone with the link can open the portfolio in a browser.

# What I Learned from This Project

This project helped in understanding practical concepts such as:

1.How CI/CD pipelines work in real environments

2.How Jenkins automates build and deployment

3.How EC2 instances host applications

4.Difference between public IP and private IP

5.Role of ports (80 for web, 8080 for Jenkins, 22 for SSH)

6.Linux file permissions and deployment access

# Challenges Faced During Setup

While building this pipeline, I faced several issues:

1.SSH connection errors due to key permission settings

2.Jenkins installation and plugin dependency issues

3.Deployment permission errors while copying files to Nginx directory

4.Public IP change after stopping and restarting EC2

Each issue was resolved by reading logs, understanding errors, and fixing configurations step by step.

# System Architecture (High-Level Flow)

`User Browser
     ↓
EC2 Public IP
     ↓
Nginx (serving website on port 80)
     ↓
Jenkins (running on port 8080)
     ↓
GitHub Repository (source code)`


 This shows how code travels from GitHub to the live website through Jenkins automation.

# Proof of Deployment

A complete screen recording demonstrates:

1.EC2 setup

2.Jenkins pipeline execution

3.Code update via Pull Request

4.Automatic deployment

5.Live website changes

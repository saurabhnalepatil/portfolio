# **Developer Portfolio**
## Are you struggling to create a professional portfolio website? Look no further! You can use the Developer Portfolio template and create your very own personalized portfolio today! My website is designed to be user-friendly and easily customizable, making it perfect for both developers and freelancers.
# **Demo 🎥**
  ![image](https://github.com/saurabhnalepatil/portfolio/assets/95145125/bfb5992d-65af-49f6-92ae-cb6cd9a8f7dc)

# View live preview [here](https://portfolio-tan-beta-56.vercel.app/).
# **Table of Contents 📜**
- **[Sections](#section)**
- **[Demo](#demo)**
- **[Installation](#installation)**
- **[Getting Started](#getting-started)**
- **[Usage](#usage)**
- **[Packages Used](#packages-used)**
# **Sections 🔖**
- **HERO SECTION**
- **ABOUT ME**
- **EXPERIENCE**
- **SKILLS**
- **PROJECTS**
- **EDUCATION**
- **BLOG**
- **CONTACTS**

# **Installation ⬇️**
## You will need to download Git and Node to run this project
- **[Git](https://git-scm.com/downloads)**
- **[Node](https://nodejs.org/en/download/)**
## Make sure you have the latest version of both Git and Node on your computer.

```bash
node --version
git --version
```
# **Getting Started 🎯**
## Fork and Clone the repo
To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands
```bash
git clone https://github.com/<YOUR GITHUB USERNAME>/portfolio.git
cd portfolio
```
## Install packages from the root directory
```bash
npm install
# or
yarn install
```
Then, run the development server:
```bash
npm run dev
# or
yarn dev
```
Open http://localhost:4200 with your browser to see the result.

# **Usage 🕹️**
Goto emailjs.com and create a new account for the mail sending. In free trial you will get 200 mail per month. After setup emailjs account, Please create a new .env file from .env.example file.

Eg:
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID =
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY =
```
## Then, Customize data in the utils/data folder.
Eg:

devUsername Used for fetching blog from dev.to.

# **Packages Used 📦**
# Used Package List

Here is a list of packages used in this project:

| Package             | Description             |
|---------------------|-------------------------|
| next                | Next.js framework       |
| @emailjs/browser    | Email sending library   |
| lottie-react        | Lottie animation library|
| react-fast-marquee | Fast marquee component  |
| react-icons         | Icon library for React  |
| react-toastify      | Notification library    |
| sass                | CSS preprocessor        |
| tailwindcss         | CSS framework           |

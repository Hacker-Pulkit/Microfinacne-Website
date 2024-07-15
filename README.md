# Microfinacne-Website

This is a microfinance website built using Next.js and TypeScript. The website includes a landing page with sections about the organization, the application process, and a FAQ. There is also an application form that users can fill out.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started, clone the repository and install the dependencies:

sh
git clone https://github.com/Hacker-Pulkit/Microfinance-Website.git
cd Microfinance-Website
npm install

## Usage
To run the development server:
 sh : npm run dev

Folder Structure
Here's a brief overview of the folder structure:
my-microfinance-website/
├── components/
│   ├── AboutUs/
│   │          ├── AboutUs.Module.css
│   │          ├──page.tsx
│   ├── ApplicationForm/
│   │                  ├── ApplicationForm.Module.css
│   │                  ├──page.tsx
│   ├── ApplicationProcess/
│   │                     ├── ApplicationProcess.Module.css
│   │                     ├──page.tsx
│   ├── FAQ/
│   │      ├── FAQ.Module.css
│   │      ├──page.tsx
│   ├── Footer/
│   │         ├── Footer.Module.css
│   │         ├──page.tsx
│   ├── Header/
│             ├── Header.css
│             ├──page.tsx
├── pages/
│   ├── _app.tsx
│   ├── index.tsx
├── public/
│   ├── favicon.ico
│   ├── .net.svg
│   ├── .vercel.svg
├── styles/
│   ├── globals.css
│   ├── home.module.css
├── tsconfig.json
├── package.json
└── README.md

## Technologies Used
1.Next.js
2.TypeScript
3.Material-UI
4.React Hook Form
5.Yup

## Features
1.Landing Page: Includes sections like About Us, Application Process, and FAQ.
2.Application Form: A form with validation using React Hook Form and Yup.
3.Responsive Design: Uses Material-UI for a responsive and accessible design.

## License
This project is licensed under the MIT License. See the LICENSE file for details.


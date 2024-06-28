# Job Preview Dashboard

A modern job preview dashboard built with Next.js, TypeScript, and Tailwind CSS, featuring custom-built components without relying on any external component libraries. This project aims for a pixel-perfect implementation of the [original design](https://www.figma.com/design/f65mNkOZUSXdWRiPtZsHuX/Job-preview-dashboard-(Copy)?node-id=0-1&t=KTNQCbRpgMJtW2w4-1).

[`Figma Link`](https://www.figma.com/design/f65mNkOZUSXdWRiPtZsHuX/Job-preview-dashboard-(Copy)?node-id=0-1&t=KTNQCbRpgMJtW2w4-1)
[`Live Link`](https://cladedashboard.vercel.app)

### Screenshot of the deployed page

![implementation](https://github.com/VinayakaHegade/job-dashboard/assets/88454618/11af2dd8-b83e-4754-9252-aec734254ba3)

## [Runing The App Locally](#running-the-app-locally)

## Features

- Pixel-perfect implementation of the [original design](https://www.figma.com/design/f65mNkOZUSXdWRiPtZsHuX/Job-preview-dashboard-(Copy)?node-id=0-1&t=KTNQCbRpgMJtW2w4-1)
- Well-structured and modular codebase
- Utilizes Tailwind CSS for efficient styling
- TypeScript for enhanced type safety and developer experience
- Custom-built components for a lightweight and tailored user interface
- Interactive navigations in header

## Folder Structure
```
job-dashboard/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.tsx
│   │   ├── job/
│   │   │   ├── JobDetails.tsx
│   │   │   ├── JobStats.tsx
│   │   │   └── CompanyInfo.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Tab.tsx
│   │       └── Badge.tsx
│   ├── lib/
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── public/
│   └── images/
│       └── logo.svg
└── tsconfig.json
```
We've chosen this structure for several reasons:

1. **Separation of Concerns**: Components are organized by their function (layout, job-specific, UI elements).
2. **Reusability**: UI components are isolated, making them easy to reuse across the app.
3. **Scalability**: As the app grows, new features can be added in their respective directories without cluttering existing code.
4. **Maintainability**: The clear structure makes it easier for developers to find and update specific components.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Custom Components

One of the key features of this project is that all UI components are custom-built. This approach allows for:

- Complete control over the design and functionality of each component
- A lighter bundle size, as we're not importing unnecessary code from component libraries
- A more tailored user experience that perfectly matches the design specifications

## Running the App Locally

1. Clone the repository: 
```bash
git clone https://github.com/VinayakaHegade/job-dashboard.git
```
2. Navigate to the project directory:
```bash
cd job-dashboard
```
3. Install dependencies:
```bash
pnpm install
```
4. Run the development server:
```bash
pnpm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

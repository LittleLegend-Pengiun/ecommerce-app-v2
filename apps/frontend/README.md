This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Frontend Documentation

## Dark/Light mode

The project support dark/light mode switching, based on variable state `isDarkMode` created and maintained in [AppLayout component](./src/layout/user-layout.tsx)

The file [config.tsx](./src/theme/config.tsx) contains global theme config for Ant Design (`antdConfigGen` function) and Styled Component Global Theme (`styledComponentTheme` object passed into styled-components's [`ThemeProvider`](./src/layout/user-layout.tsx))

Both dark/light will be set for both Ant Design & Styled Component in [AppLayout](./src/layout/user-layout.tsx)
. Ant Design will use the corresponding style set by `antdConfigGen` automatically. But styled components should be defined explicitly in each React components to support global theme retrieved from ThemeProvider. For example, the [AppFooter](./src/layout/footer.tsx) component define a wrapper `StyledFooter` around antd's `Footer` component and choosing correct theme from props.

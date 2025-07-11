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

Check out our app [Merge three sort app](https://pre-interview-primo-world-13.vercel.app/).

## Setup & Usage

1. **Install dependencies**

   ```bash
   npm install --save-dev jest ts-jest @types/jest
   ```

2. **Run unit tests**

   ```bash
   npm test
   or
   npx jest src/test/merge.test.ts
   ```

3. **Using the merge function**

   Import and use the function from `src/merge.ts`:

   ```typescript
   import { merge } from './src/merge';
   const result = merge([1,3,5], [6,4,2], [0,7,8]);
   // result: [0,1,2,3,4,5,6,7,8]
   ```

## Notes
- The `merge` function does **not** use any sort function.
- `collection_1` and `collection_3` must be sorted ascending, `collection_2` descending.

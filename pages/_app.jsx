// Analytics da Vercel
import { Analytics } from "@vercel/analytics/next";

export default function AppHome({ Component, pageProps }) {
  return (
    <>
      <h1>Analytics da Vercel</h1>
      
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
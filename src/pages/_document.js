// src/pages/_document.js (or just /pages/_document.js if not in src/)
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* NowSpark Analytics Script */}
        <script
          src="https://nowspark-api.vercel.app/analytics.prod.js"
          data-site-id="8QDxrD9oD-"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
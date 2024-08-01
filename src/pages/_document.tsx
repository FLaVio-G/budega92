// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
import budega92 from "../../public/images/budega-v1.svg";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <title>Budega 02</title>
        <meta
          name="description"
          content="Descubra o melhor bar da região, especializado em bebidas locais e artesanais. Venha experimentar uma seleção exclusiva de bebidas regionais, desde cervejas e vinhos até destilados únicos. Conheça o ambiente acolhedor e os sabores autênticos da nossa região."
        />
        <link rel="icon" href="/images/budega-v1.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-customBeigeTwo">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

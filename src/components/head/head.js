import React from "react"
import { Helmet } from "react-helmet"

const Head = () => {
  return (
    <Helmet>
      <script
        src="https://kit.fontawesome.com/fe4f036823.js"
        crossorigin="anonymous"
      ></script>
      <meta charSet="utf-8" />
      <base href="/" />
      <title>HELL, FOODY!</title>
      <meta name="Description" content="Гастрономические киоски Hello, Foody" />
      <meta property="og:title" content="HELL, FOODY!" />
      <meta
        property="og:description"
        content="Гастрономические киоски Hello, Foody"
      />
      {/* <meta property="og:image" content="https://something.io/cover.jpeg" /> */}

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicon/hello-foody-icon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicon/hello-foody-icon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicon/hello-foody-icon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicon/hello-foody-icon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicon/hello-foody-icon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicon/hello-foody-icon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicon/hello-foody-icon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicon/hello-foody-icon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/hello-foody-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/hello-foody-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/hello-foody-iconpng"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/hello-foody-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/hello-foody-icon.png"
      />
      {/* <link rel="manifest" href="/favicon/manifest.json"/> */}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/hello-foody-icon.png"
      />
      <meta name="theme-color" content="#ffffff" />
      <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
    </Helmet>
  )
}

export default Head

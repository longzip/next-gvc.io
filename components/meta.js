import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link rel="icon" type="image/png" sizes="128x128" href="icons/favicon-128x128.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
      <link rel="icon" type="image/ico" href="favicon.ico" />
      <link href="css/vendor.f8727ec6.css" rel="stylesheet" />
      <link href="css/app.0e433876.css" rel="stylesheet" />
      <link rel="manifest" href="manifest.json" />
      <link rel="apple-touch-icon" href="icons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="icons/apple-icon-167x167.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180x180.png" />
      <link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#027be3" />
      <meta name="theme-color" content="#027be3" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="GVC Blog" />
      <meta name="msapplication-TileImage" content="icons/ms-icon-144x144.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <link rel="stylesheet" type="text/css" href="css/4.e3093f0d.css" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}

import { renderToString } from 'react-dom/server'

const DEV = process.env.NODE_ENV === 'development'
const assetManifest = JSON.parse(process.env.REACT_APP_ASSET_MANIFEST || '{}')
const bundleUrl = DEV
  ? '/static/js/bundle.js'
  : `/${assetManifest['main.js']}`
const css = DEV
  ? '' // in DEV the css is hot loaded
  : `<link href="/${assetManifest['main.css']}" media="all" rel="stylesheet" />`

export default (component) => `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="theme-color" content="#000000">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
        ${css}
        <link rel="manifest" href="/public/manifest.json">
        <link rel="shortcut icon" href="/public/favicon.ico">
        <title>React App</title>
      </head>
      <body>
        <div id="root">${renderToString(component)}</div>
        <script type="application/javascript" src="${bundleUrl}"></script>
      </body>
  </html>
`

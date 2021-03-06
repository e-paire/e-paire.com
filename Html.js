import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import {ServerStyleSheet} from "styled-components"

const Html = ({App, render}) => {
  const sheet = new ServerStyleSheet()
  const styledApp = sheet.collectStyles(<App />)
  const {Main, State, Script} = render(styledApp)
  const helmet = Helmet.renderStatic()
  return (
    <html {...helmet.htmlAttributes.toComponent()}>
      <head>
        <html lang="fr" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {helmet.meta.toComponent()}
        {helmet.title.toComponent()}
        {helmet.base.toComponent()}
        <link
          href="//fonts.googleapis.com/css?family=Sacramento"
          rel="stylesheet"
        />
        {sheet.getStyleElement()}
        {helmet.link.toComponent()}
        {helmet.style.toComponent()}
        {helmet.script.toComponent()}
        {helmet.noscript.toComponent()}
        <style>
          {`
          * {
            box-sizing: border-box;
          }
          body {
            padding: 0;
            margin: 0;
          }
          `}
        </style>
      </head>
      <body {...helmet.bodyAttributes.toComponent()}>
        <Main />
        <State />
        <Script />
      </body>
    </html>
  )
}

Html.propTypes = {
  App: PropTypes.element.isRequired,
  render: PropTypes.func.isRequired,
}

export default Html

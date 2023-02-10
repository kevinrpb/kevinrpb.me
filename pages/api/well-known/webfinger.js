import React from 'react'
import ReactDOMServer from 'react-dom/server'

import NotFound from '@pages/404'

import webfinger from '@data/webfinger.json'

export default async function handler(req, res) {
  function error() {
    return res.status(404).send(ReactDOMServer.renderToStaticMarkup(<NotFound />))
  }

  const { resource } = req.query
  if (!resource) return error()

  const { resources, responses } = webfinger
  if (!resources[resource]) return error()

  const { response } = resources[resource]
  if (!responses[response]) return error()

  res.status(200).json(responses[response])
}

// Generates the appropriate data inside the <head> and <body> tags.
// 在 <head> 和 <body> 标签内生成适当的数据。

'use strict'
;(() => {
  const head = document.querySelector('head')
  const body = document.querySelector('body')

  const metaCompatible = document.createElement('meta')
  metaCompatible.setAttribute('http-equiv', 'X-UA-Compatible')
  metaCompatible.setAttribute('content', 'IE=edge') // Added content for correctness
  head.appendChild(metaCompatible)

  const metaCsp = document.createElement('meta')
  metaCsp.setAttribute('http-equiv', 'Content-Security-Policy')
  metaCsp.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; object-src 'none'; frame-ancestors 'none';")
  head.appendChild(metaCsp)

  const metaViewport = document.createElement('meta')
  metaViewport.setAttribute('name', 'viewport')
  metaViewport.setAttribute('content', 'viewport-fit=cover,width=device-width,initial-scale=1,maximum-scale=1')
  head.appendChild(metaViewport)

  const linkIcon = document.createElement('link')
  linkIcon.className = 'app-icon'
  linkIcon.setAttribute('rel', 'icon')
  linkIcon.setAttribute('href', '#') // Placeholder
  head.appendChild(linkIcon)

  const style = document.createElement('style')
  style.textContent = `*{box-sizing:border-box;color:#EEEEEE40;font-family:Arial,Helvetica,sans-serif;margin:0;padding:0;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;user-select:none}body{align-items:center;background-color:#000010;display:flex;flex-direction:column;height:100dvh;justify-content:center} canvas{background-color:#EEEEEE;image-rendering:pixelated;}@media(orientation:landscape){canvas{height:100%}}@media(orientation:portrait){canvas{width:100%}}`
  head.appendChild(style)

  const title = document.createElement('title')
  title.textContent = '小鸡迷宫标题徽标'
  head.appendChild(title)

  // -- <body> --
  const canvasEl = document.createElement('canvas')
  canvasEl.setAttribute('width', '320px')
  canvasEl.setAttribute('height', '320px')
  body.insertAdjacentElement('afterbegin', canvasEl)
})()

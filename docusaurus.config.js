module.exports={
  "title": "HamWAN Memphis Metro",
  "tagline": "Mid-South's Experimental Wireless Data Network",
  "url": "https://memhamwan.org",
  "baseUrl": "/",
  "organizationName": "memhamwan",
  "projectName": "memhamwan.github.io",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/favicon.png",
  "customFields": {
    "users": {}
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/memhamwan/memhamwan.github.io/tree/main/",
          "path": "./docs",
          "sidebarPath": "./sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          // "customCss": "../src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "HamWAN Memphis Metro",
      "logo": {
        "src": "img/logo.png"
      },
      "items": [
        {
          "to": "/docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "href": "https://hamwan.org",
          "label": "HamWAN",
          "position": "left"
        },
        {
          "href": "https://github.com/memhamwan/memhamwan.github.io/wiki",
          "label": "Wiki",
          "position": "left"
        },
        {
          "href": "https://discord.gg/5ffNtM4WDw",
          "label": "Chat",
          "position": "left"
        },
        {
          "href": "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8HFSU6MSFLUF8&source=url",
          "label": "Donate",
          "position": "left"
        }
      ]
    },
    "image": "img/docusaurus.png",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2026 HamWAN Memphis Metro",
      "logo": {
        "src": "img/logo.png"
      }
    }
  }
}
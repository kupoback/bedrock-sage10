module.exports = {
  "entry": {
    "app": {
      "import": [
        "@roots/bud-client/lib/hmr/index.cjs?name=bud&bud.overlay=true&bud.indicator=true&path=/__bud/hmr",
        "@roots/bud-client/lib/proxy-click-interceptor.cjs",
        "react-refresh/runtime",
        "@scripts/app",
        "@styles/app"
      ]
    },
    "editor": {
      "import": [
        "@roots/bud-client/lib/hmr/index.cjs?name=bud&bud.overlay=true&bud.indicator=true&path=/__bud/hmr",
        "@roots/bud-client/lib/proxy-click-interceptor.cjs",
        "react-refresh/runtime",
        "@scripts/editor",
        "@styles/editor"
      ]
    },
    "react": {
      "import": [
        "@roots/bud-client/lib/hmr/index.cjs?name=bud&bud.overlay=true&bud.indicator=true&path=/__bud/hmr",
        "@roots/bud-client/lib/proxy-click-interceptor.cjs",
        "react-refresh/runtime",
        "./resources/react/app"
      ]
    }
  },
  "bail": false,
  "cache": {
    "name": "bud.development",
    "type": "filesystem",
    "version": "wmbxx8isbslxnterstcpmjb4cxw_",
    "cacheDirectory": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/.budfiles/cache/webpack",
    "managedPaths": [
      "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules"
    ],
    "buildDependencies": {
      "bud": [
        "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/package.json",
        "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/.editorconfig",
        "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/bud.config.js",
        "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/composer.json",
        "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/jsconfig.json",
        "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/tailwind.config.js",
        "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/theme.json"
      ]
    }
  },
  "context": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage",
  "devtool": "cheap-module-source-map",
  "experiments": {
    "buildHttp": {
      "allowedUris": [
        null,
        "https://gist.githubusercontent.com/",
        "https://raw.githubusercontent.com/",
        "https://unpkg.com/",
        "https://cdn.skypack.dev/"
      ],
      "cacheLocation": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/.budfiles/bud/modules",
      "frozen": false,
      "lockfileLocation": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/.budfiles/bud/bud.lock",
      "upgrade": true
    }
  },
  "externalsType": "var",
  "infrastructureLogging": {
    "level": "none"
  },
  "mode": "development",
  "module": {
    "rules": [
      {
        "test": {},
        "exclude": [
          {}
        ],
        "parser": {
          "requireEnsure": false
        }
      },
      {
        "oneOf": [
          {
            "test": {},
            "include": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources"
            ],
            "use": [
              {
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/style-loader/dist/cjs.js"
              },
              {
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "modules": false,
                  "sourceMap": true
                }
              },
              {
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "sourceMap": true,
                  "postcssOptions": {
                    "plugins": [
                      "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/postcss-import/index.js",
                      "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/tailwindcss/nesting/index.js",
                      "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/tailwindcss/lib/index.js",
                      [
                        "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/postcss-preset-env/dist/index.cjs",
                        {
                          "stage": 1,
                          "features": {
                            "focus-within-pseudo-class": false
                          },
                          "browsers": ">1%"
                        }
                      ]
                    ]
                  }
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources"
            ],
            "use": [
              {
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/style-loader/dist/cjs.js"
              },
              {
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "esModule": true,
                  "importLoaders": 1,
                  "localIdentName": "[name]__[local]___[hash:base64:5]",
                  "modules": true,
                  "sourceMap": true
                }
              },
              {
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "sourceMap": true,
                  "postcssOptions": {
                    "plugins": [
                      "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/postcss-import/index.js",
                      "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/tailwindcss/nesting/index.js",
                      "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/tailwindcss/lib/index.js",
                      [
                        "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/postcss-preset-env/dist/index.cjs",
                        {
                          "stage": 1,
                          "features": {
                            "focus-within-pseudo-class": false
                          },
                          "browsers": ">1%"
                        }
                      ]
                    ]
                  }
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage"
            ],
            "exclude": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/csv-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources"
            ],
            "type": "asset",
            "generator": {
              "filename": "fonts/[name][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage"
            ],
            "exclude": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/html-loader/dist/cjs.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources"
            ],
            "use": [
              {
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/babel-loader/lib/index.js",
                "options": {
                  "presets": [
                    [
                      "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/@babel/preset-env/lib/index.js",
                      {
                        "targets": [
                          ">1%"
                        ]
                      }
                    ],
                    [
                      "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/@babel/preset-react/lib/index.js"
                    ]
                  ],
                  "plugins": [
                    [
                      "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/@babel/plugin-transform-runtime/lib/index.js",
                      {
                        "helpers": false
                      }
                    ],
                    [
                      "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js"
                    ],
                    [
                      "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js"
                    ],
                    [
                      "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/@babel/plugin-proposal-class-properties/lib/index.js"
                    ],
                    [
                      "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/react-refresh/babel.js"
                    ]
                  ],
                  "targets": [
                    ">1%"
                  ]
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage"
            ],
            "exclude": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "include": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage"
            ],
            "exclude": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "include": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage"
            ],
            "exclude": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/xml-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage"
            ],
            "exclude": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/yml-loader/index.js"
              }
            ]
          }
        ]
      }
    ],
    "unsafeCache": false
  },
  "name": "bud",
  "node": false,
  "output": {
    "assetModuleFilename": "[name][ext]",
    "chunkFilename": "js/dynamic/[id].js",
    "filename": "js/[name].js",
    "path": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/public",
    "publicPath": "/"
  },
  "optimization": {
    "emitOnErrors": true,
    "minimize": false,
    "minimizer": [
      "..."
    ]
  },
  "parallelism": 90,
  "performance": {
    "hints": false
  },
  "recordsPath": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/.budfiles/bud/modules.json",
  "stats": {
    "preset": "errors-warnings"
  },
  "target": "web",
  "plugins": [
    {
      "options": {}
    },
    {
      "patterns": [
        {
          "from": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources/images",
          "to": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/public/images/[path][name][ext]",
          "context": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources",
          "noErrorOnMissing": true,
          "toType": "template"
        }
      ],
      "options": {}
    },
    {
      "options": {
        "assetHookStage": null,
        "basePath": "",
        "fileName": "manifest.json",
        "filter": null,
        "map": null,
        "publicPath": "",
        "removeKeyHash": {},
        "sort": null,
        "transformExtensions": {},
        "useEntryKeys": false,
        "useLegacyEmit": false,
        "writeToFileEmit": true
      }
    },
    {
      "options": {
        "emitHtml": false,
        "publicPath": ""
      },
      "plugin": {
        "name": "EntrypointsManifestPlugin",
        "stage": null
      },
      "name": "entrypoints.json"
    },
    {
      "name": "WordPressExternalsWebpackPlugin",
      "stage": null,
      "externals": {
        "type": "window"
      }
    },
    {
      "plugin": {
        "name": "WordPressDependenciesWebpackPlugin",
        "stage": null
      },
      "manifest": {},
      "usedDependencies": {},
      "fileName": "wordpress.json"
    },
    {
      "plugin": {
        "name": "MergedManifestPlugin"
      },
      "file": "entrypoints.json",
      "entrypointsName": "entrypoints.json",
      "wordpressName": "wordpress.json"
    },
    {
      "options": {
        "overlay": false,
        "exclude": {},
        "include": {}
      }
    },
    {
      "resourceRegExp": {}
    },
    {
      "resourceRegExp": {}
    },
    {
      "resourceRegExp": {}
    },
    {
      "resourceRegExp": {}
    }
  ],
  "resolve": {
    "alias": {
      "@src": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources",
      "@dist": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/public",
      "@fonts": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources/fonts",
      "@images": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources/images",
      "@scripts": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources/scripts",
      "@styles": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources/styles"
    },
    "extensions": [
      ".mjs",
      ".cjs",
      ".js",
      ".jsx",
      ".css",
      ".json",
      ".wasm",
      ".yml",
      ".toml"
    ],
    "modules": [
      "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources",
      "node_modules"
    ]
  }
}
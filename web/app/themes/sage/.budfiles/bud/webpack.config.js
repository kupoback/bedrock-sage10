module.exports = {
  "entry": {
    "app": {
      "import": [
        "@scripts/app",
        "@styles/app"
      ]
    },
    "editor": {
      "import": [
        "@scripts/editor",
        "@styles/editor"
      ]
    },
    "react": {
      "import": [
        "./resources/react/app"
      ]
    }
  },
  "bail": true,
  "cache": {
    "name": "bud.production",
    "type": "filesystem",
    "version": "wbh5mtd2ruc_lzhzu2sp7ax9cto_",
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
  "infrastructureLogging": {
    "console": {
      "Console": {}
    },
    "level": "none"
  },
  "mode": "production",
  "module": {
    "noParse": {},
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
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/babel-loader/lib/index.js",
                "options": {
                  "cacheDirectory": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/.budfiles/cache/babel",
                  "presets": [
                    [
                      "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/@babel/preset-env/lib/index.js"
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
                    ]
                  ],
                  "env": {
                    "development": {
                      "compact": false
                    }
                  },
                  "root": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage"
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
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/mini-css-extract-plugin/dist/loader.js"
              },
              {
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "sourceMap": false
                }
              },
              {
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "postcssOptions": {
                    "plugins": [
                      [
                        "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/postcss-import/index.js"
                      ],
                      [
                        null
                      ],
                      [
                        null
                      ],
                      [
                        "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/postcss-preset-env/dist/index.cjs",
                        {
                          "stage": 1,
                          "features": {
                            "focus-within-pseudo-class": false
                          }
                        }
                      ]
                    ]
                  },
                  "sourceMap": true
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
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/mini-css-extract-plugin/dist/loader.js"
              },
              {
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "localIdentName": "[name]__[local]___[hash:base64:5]",
                  "modules": true,
                  "sourceMap": false
                }
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
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources"
            ],
            "type": "asset",
            "generator": {
              "filename": "fonts/[name].[contenthash:6][ext]"
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
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage"
            ],
            "exclude": [
              "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/js-yaml-loader/index.js"
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
                "loader": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/node_modules/html-loader/dist/cjs.js"
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
            "type": "json",
            "parser": {}
          }
        ]
      }
    ],
    "unsafeCache": false
  },
  "name": "bud",
  "node": false,
  "output": {
    "assetModuleFilename": "[name].[contenthash:6][ext]",
    "chunkFilename": "[name].[contenthash:6].js",
    "filename": "[name].[contenthash:6].js",
    "path": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/public",
    "pathinfo": false,
    "publicPath": ""
  },
  "optimization": {
    "emitOnErrors": false,
    "minimize": true,
    "minimizer": [
      "...",
      {
        "options": {
          "test": {},
          "parallel": true,
          "minimizer": {
            "options": {
              "preset": [
                "default",
                {
                  "discardComments": {
                    "removeAll": true
                  }
                }
              ]
            }
          }
        }
      }
    ],
    "runtimeChunk": "single",
    "splitChunks": {
      "cacheGroups": {
        "bud": {
          "chunks": "all",
          "test": {},
          "reuseExistingChunk": true,
          "priority": -10
        },
        "vendor": {
          "chunks": "all",
          "test": {},
          "reuseExistingChunk": true,
          "priority": -20
        }
      }
    }
  },
  "parallelism": 90,
  "performance": {
    "hints": false
  },
  "recordsPath": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/.budfiles/bud/modules.json",
  "stats": {
    "preset": "errors-warnings"
  },
  "target": "browserslist:/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/package.json",
  "plugins": [
    {
      "patterns": [
        {
          "from": "images",
          "to": "[name].[contenthash:6][ext]",
          "context": "/Users/mak/Sites/boilerplate8.1/web/app/themes/sage/resources",
          "noErrorOnMissing": true
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
      "_sortedModulesCache": {},
      "options": {
        "filename": "[name].[contenthash:6].css",
        "ignoreOrder": false,
        "runtime": true,
        "chunkFilename": "[name].[contenthash:6].css"
      },
      "runtimeOptions": {
        "linkType": "text/css"
      }
    },
    {
      "options": {
        "enabled": true,
        "verbose": false,
        "extensions": {},
        "ignore": [],
        "remove": {}
      },
      "enabled": true,
      "verbose": false
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
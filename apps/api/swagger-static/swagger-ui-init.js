
window.onload = function() {
  // Build a system
  let url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  let options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "paths": {
      "/api": {
        "get": {
          "operationId": "AppController_getHello",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          }
        }
      },
      "/api/profile": {
        "get": {
          "operationId": "AppController_getProfile",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          }
        }
      },
      "/api/authentication/login": {
        "post": {
          "operationId": "AuthenticationController_signIn",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "authentication"
          ]
        }
      },
      "/api/authentication/github": {
        "get": {
          "operationId": "AuthenticationController_githubLogin",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "authentication"
          ]
        }
      },
      "/api/authentication/github/callback": {
        "get": {
          "operationId": "AuthenticationController_githubLoginCallback",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "authentication"
          ]
        }
      },
      "/api/authentication/test": {
        "post": {
          "operationId": "AuthenticationController_login",
          "parameters": [],
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "authentication"
          ]
        }
      },
      "/api/users/{id}": {
        "get": {
          "operationId": "UsersController_getUser",
          "summary": "Get a user by his id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "email": {
                        "type": "string"
                      },
                      "displayTop10": {
                        "type": "boolean"
                      },
                      "displayRecentlyWatched": {
                        "type": "boolean"
                      },
                      "displayWatchlist": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "id",
                      "email",
                      "displayTop10",
                      "displayRecentlyWatched",
                      "displayWatchlist"
                    ]
                  },
                  "example": {
                    "id": 1,
                    "email": "john.doe@mail.com",
                    "displayTop10": true,
                    "displayRecentlyWatched": true,
                    "displayWatchlist": true
                  }
                }
              }
            }
          },
          "tags": [
            "users"
          ]
        }
      },
      "/api/users/mail/{mail}": {
        "get": {
          "operationId": "UsersController_getByMail",
          "parameters": [
            {
              "name": "mail",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "users"
          ]
        }
      },
      "/api/users/{id}/watched-movie": {
        "post": {
          "operationId": "UsersController_postWatchedMovie",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "movieId",
              "required": true,
              "in": "query",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "users"
          ]
        }
      },
      "/api/users/{id}/watched-movies": {
        "get": {
          "operationId": "UsersController_getWatchedMovies",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "users"
          ]
        }
      },
      "/api/users/{id}/settings": {
        "patch": {
          "operationId": "UsersController_updateUserSettings",
          "summary": "Update a user settings",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "displayTop10": {
                      "description": "display top 10 movies category",
                      "type": "boolean"
                    },
                    "displayRecentlyWatched": {
                      "description": "display recently watched movies category",
                      "type": "boolean"
                    },
                    "displayWatchlist": {
                      "description": "display the movies watchlist category",
                      "type": "boolean"
                    }
                  }
                },
                "examples": {
                  "Enable all settings": {
                    "value": {
                      "displayTop10": true,
                      "displayRecentlyWatched": true,
                      "displayWatchlist": true
                    }
                  },
                  "Disable all settings": {
                    "value": {
                      "displayTop10": false,
                      "displayRecentlyWatched": false,
                      "displayWatchlist": false
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "204": {
              "description": "The settings were successfully updated."
            }
          },
          "tags": [
            "users"
          ]
        }
      },
      "/api/actors/{id}/filmography": {
        "get": {
          "operationId": "ActorsController_getActorFilmography",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "actors"
          ]
        }
      },
      "/api/actors/{id}": {
        "get": {
          "operationId": "ActorsController_getActor",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "actors"
          ]
        }
      },
      "/api/movies/{id}": {
        "get": {
          "operationId": "MoviesController_getMovie",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "movies"
          ]
        }
      }
    },
    "info": {
      "title": "Cornucopia API",
      "description": "The Cornucopia API description",
      "version": "1.0",
      "contact": {}
    },
    "tags": [],
    "servers": [],
    "components": {
      "schemas": {
        "UpdateSettingsRequestDto": {
          "type": "object",
          "properties": {
            "displayTop10": {
              "description": "display top 10 movies category",
              "type": "boolean"
            },
            "displayRecentlyWatched": {
              "description": "display recently watched movies category",
              "type": "boolean"
            },
            "displayWatchlist": {
              "description": "display the movies watchlist category",
              "type": "boolean"
            }
          }
        }
      }
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  let urls = options.swaggerUrls
  let customOptions = options.customOptions
  let spec1 = options.swaggerDoc
  let swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (let attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  let ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.initOAuth) {
    ui.initOAuth(customOptions.initOAuth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }
  
  window.ui = ui
}

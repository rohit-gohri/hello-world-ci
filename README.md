# Hello CI (frontend)

A hello-world equivalent for different CI providers: all doing a simple task of testing & building a basic CRA app.

> View Related Slides: https://github.com/rohit-smpx/slides

## Pipelines:

### [Github Actions](https://github.com/features/actions)

[View file: nodejs.yml](.github/workflows/nodejs.yml)

[![Github Action Status](https://github.com/rohit-smpx/hello-ci-frontend/workflows/Node%20CI/badge.svg?branch=master)](https://github.com/rohit-smpx/hello-ci-frontend/actions?query=branch%3Amaster)

### [Gitlab CI](https://docs.gitlab.com/ee/ci/)

Gitlab CI integrates with external git repositories (including Github ones) to mirror them and run Gitlab CI pipelines.

[View file: .gitlab-ci.yml](.gitlab-ci.yml)

[![Gitlab Pipeline Status](https://gitlab.com/rohit.gohri/hello-ci-frontend/badges/master/pipeline.svg
)](https://gitlab.com/rohit.gohri/hello-ci-frontend/pipelines)

### [Drone.io](https://zeit.co/)

[View file: .drone.yml](.drone.yml)

[![Drone Build Status](https://cloud.drone.io/api/badges/rohit-smpx/hello-ci-frontend/status.svg)](https://cloud.drone.io/rohit-smpx/hello-ci-frontend)

### [Travis CI](https://travis-ci.com/)

[View file: .travis.yml](.travis.yml)

[![Travis Pipeline Status](https://travis-ci.org/rohit-smpx/hello-ci-frontend.svg?branch=master)](https://travis-ci.org/rohit-smpx/hello-ci-frontend)

## Deployments:

### Using [Zeit.co](https://zeit.co/)

## Docker Images

Some of these pipelines use docker images as the container in which the commands are executed. Images used are:

- [node:12](https://hub.docker.com/r/library/node/tags/)
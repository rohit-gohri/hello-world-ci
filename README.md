# Hello CI (frontend)

A hello-world equivalent for different CI providers: all doing a simple task of testing & building a basic CRA app.

> View Related Slides: https://rohit.page/slides/ci/

## Pipelines:

### [Github Actions](https://github.com/features/actions)

[View file: nodejs.yml](.github/workflows/nodejs.yml)

[![Github Action Status](https://github.com/rohit-gohri/hello-world-ci/workflows/Node%20CI/badge.svg?branch=master)](https://github.com/rohit-gohri/hello-world-ci/actions?query=branch%3Amaster)

### [Gitlab CI](https://docs.gitlab.com/ee/ci/)

Gitlab CI integrates with external git repositories (including Github ones) to mirror them and run Gitlab CI pipelines.

[View file: .gitlab-ci.yml](.gitlab-ci.yml)

[![Gitlab Pipeline Status](https://gitlab.com/rohit-gohri/hello-world-ci/badges/master/pipeline.svg
)](https://gitlab.com/rohit-gohri/hello-world-ci/pipelines)

### [Drone.io](https://zeit.co/)

[View file: .drone.yml](.drone.yml)

[![Drone Build Status](https://cloud.drone.io/api/badges/rohit-gohri/hello-world-ci/status.svg)](https://cloud.drone.io/rohit-gohri/hello-world-ci)

### [Travis CI](https://travis-ci.com/)

[View file: .travis.yml](.travis.yml)

[![Travis Pipeline Status](https://travis-ci.org/rohit-gohri/hello-world-ci.svg?branch=master)](https://travis-ci.org/rohit-gohri/hello-world-ci)

## Deployments:

### Using [ZEIT Now](https://zeit.co/)

View the website at [https://hello-ci-frontend.now.sh/](https://hello-ci-frontend.now.sh/). Deployed using [now-cli](https://zeit.co/docs).

## Docker Images

Some of these pipelines use docker images as the container in which the commands are executed. Images used are:

- [node:12](https://hub.docker.com/r/library/node/tags/)
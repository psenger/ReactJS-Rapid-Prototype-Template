# ReactJS-Rapid-Prototype-Template

This is a simple ReactJS Rapid Prototype Template based on Aik, ReactJS, React Router, Redux, and Twitter Bootstrap.

## Status
[![Build Status](https://travis-ci.org/psenger/ReactJS-Rapid-Prototype-Template.svg?branch=master)](https://travis-ci.org/psenger/ReactJS-Rapid-Prototype-Template)
[![Coverage Status](https://coveralls.io/repos/github/psenger/ReactJS-Rapid-Prototype-Template/badge.svg?branch=master)](https://coveralls.io/github/psenger/ReactJS-Rapid-Prototype-Template?branch=master)
[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/codeclimate/codeclimate)
[![Code Climate](https://codeclimate.com/github/psenger/ReactJS-Rapid-Prototype-Template/badges/gpa.svg)](https://codeclimate.com/github/psenger/ReactJS-Rapid-Prototype-Template)
[![Issue Count](https://codeclimate.com/github/psenger/ReactJS-Rapid-Prototype-Template/badges/issue_count.svg)](https://codeclimate.com/github/psenger/ReactJS-Rapid-Prototype-Template)

## To run the tests

```bash
npm install
npm run tests
```
## To run the stand alone server

```bash
npm install
npm run server
```

## High lights

1. Use of a provider that injects i18n.js functionality into the entire tree.
2. validator framework that could work for you
3. Use of Sagas
4. Use of Accessibility with Twitter Bootstrap React components.
5. Example of Decorator - wip
6. Example of Middleware - wip
7. Example of Many-To-One / drill-into Web Pattern
8. Example of funnel-flow web pattern - wip


## Notes:

### Build tools

I want to use this tool [pmm](https://www.npmjs.com/package/pmm) and this tool [pre-commit](https://www.npmjs.com/package/pre-commit) but one of them put git hooks into the .git directory and I didn't have time to figure out what they do. I saw people using npm scripts like the following ( with exception of github-release which is something Steve Mao wrote)

```javascript
    "github-release": "conventional-github-releaser -p angular",
    "major": "pmm major",
    "minor": "pmm minor",
    "patch": "pmm patch",
```

### immutable

[immutable](https://facebook.github.io/immutable-js/) is a very cool concept but I dont like the idea of redux returing this complicated object back.


### normalizr

normalizr is very cool I like it and should have used it when I did a project with a very complex payload [normalizr](https://github.com/paularmstrong/normalizr) It has a cool way of flattening the data and rebuilding it. this is almost esential if you have a one to many or bidirectional linkage.

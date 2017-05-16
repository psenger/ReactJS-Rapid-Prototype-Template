
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM('<!doctype html><html><head></head><body></body></html>');

global.document = dom;
global.window = dom.window;
global.navigator = dom.window.navigator;

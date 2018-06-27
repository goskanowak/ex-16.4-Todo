Webpack learn repository
=====

### This repository was created to `learn` how to use Webpack.

![webpack](https://cdn-images-1.medium.com/max/300/1*gdoQ1_5OID90wf1eLTFvWw.png "Webpack")

---

What is Webpack?
--------------------

[webpack.js.org](https://webpack.js.org/concepts/)

>At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

---

In this task I add:
------------------
1. Plugins:
   * ```HtmlWebpackPlugin``` - _Easily create HTML files to serve your bundles_
   * ``` OptimizeJsPlugin ``` - _Optimize a JavaScript file for faster initial execution and parsing, by wrapping all immediately-invoked functions or likely-to-be-invoked functions in parentheses._
   * ``` UglifyJSPlugin ``` (**this plugin in version 4 is default added to webpack**) - _Delete indenting, readable variable names, all white characters and insight in the production code_ 
  
---

### A few simple steps:

##### 1. Clone repository:
> <https://github.com/goskanowak/ex-16.3.git>

##### 2. Install all dependencies:

```npm i```

##### 3. To build app:

   * ```npm start``` - build app in development mode
   * ```npm build``` - build app in production mode

---

### Something Missing?
If you have more ideas that should be on this page write or contribute.

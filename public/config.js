System.config({
  "paths": {
    "*": "*.js",
    "jspmcss/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "bootstrap": "github:twbs/bootstrap@3.3.1",
    "github:twbs/bootstrap@3.3.1": {
      "css": "github:systemjs/plugin-css@0.1.0",
      "jquery": "github:components/jquery@2.1.3"
    }
  }
});


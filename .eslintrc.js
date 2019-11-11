module.exports = {
    parser:"babel-eslint",
    parserOptions: {
     ecmaVersion: 6,
     sourceType: "module",
     ecmaFeatures: {
          jsx: true
       }
     },
     extends: [
          "eslint:recommended",
          "plugin:react/recommended",
          "airbnb",
          "prettier"
        ],
     rules:{
          'react/prop-types':1,
          'react/jsx-max-props-per-line':1,
          'no-param-reassign':0,
          'no-use-before-define':0,
          'no-use-before-define':0,
          'react/jsx-closing-tag-location':0,
          'react/self-closing-comp':1,
          'no-unused-vars':1,
          'import/order':1,
          'import/newline-after-import':0,
          'react/jsx-filename-extension':0,
          'react/self-closing-comp':0,
          'react/prefer-stateless-function':0,
          'react/state-in-constructor':0,
          'react/destructuring-assignment':0,
          'react/no-access-state-in-setstate':0,
          'lines-between-class-members':0,
          'class-methods-use-this':0,
          'lines-between-class-members':0,
          'react/jsx-one-expression-per-line':1


     },
     plugins:["prettier"],
     env:{
          "es6":true,
          "browser":true,
          "node":true
     }
}
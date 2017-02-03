[![npm version](https://badge.fury.io/js/angular-mn-number.svg)](https://badge.fury.io/js/angular-mn-number)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/angular-mn-number.svg)](https://gemnasium.com/github.com/minimalist-components/angular-mn-number)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)  

# angular-mn-number

An angular directive to [mn-number](https://github.com/minimalist-components/mn-number)

See the [demo](https://minimalist-components.github.io/mn-number)

[![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-number/master/preview.gif)](https://minimalist-components.github.io/angular-mn-number/)

### Install

```sh
npm install --save angular-mn-number
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/mn-select/tree/master/dist) with your preferred tool.

### Usage

```js
// add dependency in you module
angular.module('app', [
  'mn-number'
])
```

And then, in your html, you can use the tag:

```html
<mn-number placeholder="Amount" ng-model='amount'></mn-number>
```


For more details check [mn-number docs](https://github.com/minimalist-components/mn-number).


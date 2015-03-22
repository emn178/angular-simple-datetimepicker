# angular-simple-datetimepicker
An angular plugin provides datetime picker.

## Download
[Compress](https://raw.github.com/emn178/angular-simple-datetimepicker/master/build/angular-simple-datetimepicker.min.js)  
[Uncompress](https://raw.github.com/emn178/angular-simple-datetimepicker/master/src/angular-simple-datetimepicker.js)

## Demo
[Datetime Picker](http://emn178.github.io/angular-simple-datetimepicker/samples/datetimepicker/)  

## Requirements
* [jQuery](http://jquery.com/)
* [jquery-simple-datetimepicker](https://github.com/mugifly/jquery-simple-datetimepicker)  
* [AngularJS](https://angularjs.org/)  

## Usage
Add the ngDatetimePicker module as a dependency to your application module:
```JavaScript
var myAppModule = angular.module('MyApp', ['ngDatetimePicker'])
```

## ngDatetimePicker
The ngDatetimePicker directive allows you to specify element as a datetime picker.

### Directive Info
This directive executes at priority level 0.

### Usage
as attribute:
```HTML
<input
  ng-datetime-picker="YOUR_OPTIONS">
```
### Arguments
| Param | Type | Details |
|:-----|:-------|-------|
|ngDatetimePicker   |expression     |Expression to specify custom options to datetime picker.    |

### Example
```HTML
<input
  ng-datetime-picker="{closeOnSelected: true}">
```

## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/angular-simple-datetimepicker  
Author: emn178@gmail.com

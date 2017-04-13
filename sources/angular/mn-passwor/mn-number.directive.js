angular
  .module('mn-number')
  .directive('mnNumber', MnNumberDirective)

function MnNumberDirective($compile, $parse) {
  return {
    restrict: 'E',
    link,
    require: 'ngModel',
  }

  function link(scope, element, attributes, ngModel) {
    const dirtyInput = element[0].querySelector('input + input')
    if (dirtyInput) {
      element[0].removeChild(dirtyInput)
    }

    const input = element.find('input')
    const isPercentage = element[0].getAttribute('percentage')
    const value = isPercentage
      ? $parse(attributes.ngModel)(scope) * 100
      : $parse(attributes.ngModel)(scope)

    if (angular.isDefined(value)) {
      element[0].value = value
    }

    input.attr('ng-model', attributes.ngModel)
    $compile(input)(scope)

    const event = document.createEvent('HTMLEvents')
    event.initEvent('change', false, true)
    element[0].querySelector('input').dispatchEvent(event)

    if (isPercentage) {
      ngModel.$formatters.push(formatter)

      function formatter(value) {
        console.log('formatter', value / 100)

        return value / 100
      }
    }

    // input.on('change', () => {
    //   const value = element[0].value
    //   ngModel.$modelValue = value
    //   ngModel.$viewValue = value
    //   ngModel.$render()
    //   console.log(ngModel.$modelValue)
    // })
    // console.log(ngModel.$modelValue)
  }
}

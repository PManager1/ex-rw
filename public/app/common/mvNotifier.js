angular.module('app').value('Toastr', toastr);
angular.module('app').factory('mvNotifier', function (Toastr) {
  return {
    notify: function (msg) {
      Toastr.success(msg);
      console.log(msg);
    },
    error: function (msg) {
      Toastr.error(msg);
      console.log(msg);
    }
  }
})

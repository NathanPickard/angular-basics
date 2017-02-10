webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('todoListApp').controller('mainCtrl', __webpack_require__(4));
angular.module('todoListApp').controller('todoCtrl', __webpack_require__(5));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('todoListApp').directive('todo', __webpack_require__(6));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('todoListApp').service('dataService', __webpack_require__(7));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('todoListApp')
  .controller('mainCtrl', function ($scope, dataService) {    

    dataService.getTodos(function(response) {
      var todos = response.data.todos;
      $scope.todos = todos;
    });

    $scope.addTodo = function () {
      $scope.todos.unshift({name: "This is a new todo.",
                              completed: false});      
    };
  })

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('todoListApp')
  .controller('todoCtrl', function($scope, dataService) {
    $scope.deleteTodo = function(todo, index) {
      $scope.todos.splice(index, 1);
      dataService.deleteTodo(todo);
    };

    $scope.saveTodos = function() {
      var filteredTodos = $scope.todos.filter(function(todo){
        if(todo.edited) {
          return todo
        };
      })
      dataService.saveTodos(filteredTodos);
    };
  });

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('todoListApp')
.directive('todo', function() {
  return {
    templateUrl: 'templates/todo.html',
    replace: true,
    controller: 'todoCtrl'
  }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('todoListApp')
.service('dataService', function($http) {  
  this.getTodos = function(cb){
    $http.get('/api/todos').then(cb);
  };
  
  this.deleteTodo = function(todo) {
    console.log("The " + todo.name + " todo has been deleted!")
  };
  
  this.saveTodos = function(todos) {
    console.log(todos.length + " todos have been saved!");
  };
  
});

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module("todoListApp", []);

__webpack_require__(3);
__webpack_require__(2);
__webpack_require__(1);

/***/ })
],[9]);
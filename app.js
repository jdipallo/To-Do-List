(function() {
	angular.module('myApp', [])
		.controller('myController', myController)
})();

function myController() {
	var myCtrl = this;
	myCtrl.toDoListName = 'Shopping List';
	myCtrl.items = [ {name: 'Eggs', completed: false}, {name: 'Milk', completed: false},
		{name: 'Coffee', completed: false}, {name: 'Bananas', completed: false}, 
		{name: 'Hamburgers', completed: false}, {name: 'Cereal', completed: false}];

	myCtrl.addItemToList = function() {
		if (event.keyCode == 13 && myCtrl.itemToAdd) {
			myCtrl.items.push({name: myCtrl.itemToAdd, completed: false});
			myCtrl.itemToAdd = '';
		}
	};
}



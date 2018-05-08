var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	    index = document.getElementsByTagName('li').length;

	element.innerHTML = 'item' + index;
	list.appendChild(element);
});
<!-- hide from old browsers
// check all checkboxes
// example use: <input type="checkbox" name="fruitSelect" id="fruitSelect" onClick="checkByClass('fruit','fruitSelect')" />
function checkByClass(checkedClass,checkedStatus,node) {
    checkedClass = checkedClass || '*';
    checkedStatus = document.getElementById(checkedStatus);
    node = (node == null)?document:document.getElementById(node);
    var elements = node.getElementsByTagName('input');
    var elementCount = elements.length;
    var pattern = new RegExp('(^|\\s)'+checkedClass+'(\\s|$)');
    for (i = 0, j = 0; i < elementCount; i++) {
         if ( elements[i].type == 'checkbox' && pattern.test(elements[i].className) ) {
            elements[i].checked = checkedStatus.checked;
        }
    }
}
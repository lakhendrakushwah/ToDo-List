let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let inpNewTask = $('#inpNewTask')


function addItem() {
	let listItem = $('<li>', {
		'class': 'list-group-item',
		text: inpNewTask.val()
	})
	listItem.click(function(){
		listItem.toggleClass('done')   //Toggle--> Toggle between adding and removing the "main" class name for all <p> elements:
	})
	ulTasks.append(listItem)
	inpNewTask.val('')

}


function clearDone() {
	 $('#ulTasks .done').remove()
}
function sortTasks(){
	$('#ulTasks .done').appendTo(ulTasks)
}

inpNewTask.keypress( function(e){
	if (e.which == 13 && inpNewTask.val() != '' ) addItem()
})
btnAdd.click(addItem)
btnReset.click(function(){
 inpNewTask.val('')
})
btnCleanup.click(clearDone)
btnSort.click(sortTasks)

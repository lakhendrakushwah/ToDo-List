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

	toggleInputBtn()

}


function clearDone() {
	 $('#ulTasks .done').remove()
	 toggleInputBtn()
}
function sortTasks(){
	$('#ulTasks .done').appendTo(ulTasks)
}



function toggleInputBtn(){
	btnAdd.prop('disabled',inpNewTask.val() == '')
	btnReset.prop('disabled',inpNewTask.val() == '')
	btnCleanup.prop('disabled',ulTasks.children().length <1)
	btnSort.prop('disabled',ulTasks.children().length <1)
}

inpNewTask.keypress( function(e){
	if (e.which == 13 && inpNewTask.val() != '' ) addItem()
})

inpNewTask.on('input', toggleInputBtn)


btnAdd.click(addItem)


btnReset.click(function(){
 inpNewTask.val('')
 toggleInputBtn()
 btnReset.prop('disabled',true)
})
btnCleanup.click(clearDone)
btnSort.click(sortTasks)

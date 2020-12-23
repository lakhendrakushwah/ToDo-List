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

function toggleInputBtn(valIsEmpty){
	if(!valIsEmpty){
		btnReset.prop('disabled',false)
		btnAdd.prop('disabled',false)
	}
	else{
		btnReset.prop('disabled',true)
		btnAdd.prop('disabled',true)	
	}
}

inpNewTask.keypress( function(e){
	if (e.which == 13 && inpNewTask.val() != '' ) addItem()
})
inpNewTask.oninput(function(){
	toggleInputBtn(inpNewTask.val() != '')
})

btnAdd.click(addItem)
btnReset.click(function(){
 inpNewTask.val('')
 toggleInputBtn(false)
})
btnCleanup.click(clearDone)
btnSort.click(sortTasks)

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

	toggleInputBtn(inpNewTask.val())

}


function clearDone() {
	 $('#ulTasks .done').remove()
}
function sortTasks(){
	$('#ulTasks .done').appendTo(ulTasks)
}



function toggleInputBtn(valIsEmpty){
	if(valIsEmpty){
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


inpNewTask.on('input', function(){
	console.log(inpNewTask.val())
	toggleInputBtn(inpNewTask.val())
})
/*
inpNewTask.on('input', function(){
	console.log(inpNewTask.val())
	
	if(inpNewTask.val() != ''){
		btnReset.prop('disabled',false)
		btnAdd.prop('disabled',false)
	}
	else{
		btnReset.prop('disabled',true)
		btnAdd.prop('disabled',true)
	}
})
*/


btnAdd.click(addItem)


btnReset.click(function(){
 inpNewTask.val('')
 btnReset.prop('disabled',true)
})
btnCleanup.click(clearDone)
btnSort.click(sortTasks)

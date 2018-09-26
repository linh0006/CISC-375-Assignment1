var toDoList = [];
var globalValues = [{customAdded: "", nameCustom: "", colorCustom: "", itemLine: 0}];
var addedCustom = false;
var customName = "";
var customColor = "";
var lineItem = 0;

function initialize()
{	
	
	var container2 = document.getElementById("productivityTable");
	
	var retrieved = JSON.parse(localStorage.getItem('toDoList'));
	var retrieved2 = JSON.parse(localStorage.getItem('globalValues'));
	if(retrieved != null && retrieved2 != null){
		toDoList = retrieved;
		globalValues = retrieved2;
		addedCustom = globalValues[0].customAdded;
		customName = globalValues[0].nameCustom;
		customColor = globalValues[0].colorCustom;
		lineItem = globalValues[0].itemLine;
		
		rebuildTable(container2); 
	}
	
		
	var workButton = document.getElementById("workButton");
	var schoolButton = document.getElementById("schoolButton");
	var sportsButton = document.getElementById("sportsButton");
	var miscButton = document.getElementById("miscButton");
	var customButton = document.getElementById("customButton");
	
	var sortCategoryButton = document.getElementById("categoryButton");
	var addDateButton = document.getElementById("addDateButton");
	var dueDateButton = document.getElementById("dueDateButton");
	var changeStatusButton = document.getElementById("changeStatus");
	var sortChangeButton = document.getElementById("sortChangeButton");
	var removeItem = document.getElementById("removeButton");
	
	workButton.addEventListener("click", addToDo, false);
	schoolButton.addEventListener("click", addToDo, false);
	sportsButton.addEventListener("click", addToDo, false);
	miscButton.addEventListener("click", addToDo, false);
	customButton.addEventListener("click", addToDo, false);
	
	sortCategoryButton.addEventListener("click", sortByCategory, false);
	addDateButton.addEventListener("click", sortByAddDate, false);
	dueDateButton.addEventListener("click", sortByDueDate, false);
	changeStatusButton.addEventListener("click", changeStatus, false);
	sortChangeButton.addEventListener("click", sortByStatus, false);
	removeItem.addEventListener("click", remove, false);
	
}

function addToDo(event){
	var testForColor;
	var container2 = document.getElementById("productivityTable");
	var newRow = document.createElement("tr");
	container2.appendChild(newRow);
	
	var eventId = (event.path[0].id);
	
	if (eventId == "workButton"){
		testForColor = workButton(container2);
		
		if(testForColor != ""){
			var color = document.getElementsByTagName("td");
			var i;
			for( i = color.length-6; i < color.length; i++){
				color[i].style.backgroundColor = "#FFB266";
			}
		}
	}
	
	else if (eventId == "schoolButton")
	{
		testForColor = schoolButton(container2);
		
		if(testForColor != ""){	
			var color = document.getElementsByTagName("td");
			var i;
			for( i = color.length-6; i < color.length; i++){
				color[i].style.backgroundColor = "#FF6666";
			}
		}
	}
	
	else if (eventId == "sportsButton")
	{
		testForColor = sportsButton(container2);
		if(testForColor!= ""){
			var color = document.getElementsByTagName("td");
			var i;
			for( i = color.length-6; i < color.length; i++){
				color[i].style.backgroundColor = "#DA70D6";
			}
		}
	}
	
	else if (eventId == "miscButton")
	{
		testForColor = miscButton(container2);
		
		if(testForColor != ""){
			var color = document.getElementsByTagName("td");
			var i;
			for( i = color.length-6; i < color.length; i++){
				color[i].style.backgroundColor = "#99FF99";
			}
		}
	}
	
	else if (eventId == "customButton") 
	{
		if(addedCustom == false){
			customColor = prompt("Please enter the color of your custom category","");
		}
		
		testForColor = customButton(container2);
		
		if(testForColor != ""){
			var color = document.getElementsByTagName("td");
			var i;
			for( i = color.length-6; i < color.length; i++){
				color[i].style.backgroundColor = customColor;
			}
		}
	}
	
	globalValues[0].customAdded = addedCustom;
	globalValues[0].nameCustom = customName;
	globalValues[0].colorCustom = customColor;
	globalValues[0].itemLine = lineItem;
	localStorage.setItem('toDoList', JSON.stringify(toDoList)); 
	localStorage.setItem('globalValues', JSON.stringify(globalValues));
}

	
function addDescription(){
	var textDescription = prompt("Please enter a description of your task", "");
    var newText = document.createElement("td");
	newText.textContent= textDescription;
	return newText;
}

function addDate()
{
	var today = new Date();
	var date = today.getDate();
	var month = today.getMonth()+1;
	var year = today.getFullYear();
	today = month +'/' + date +'/' +year;
	todayString = today.toString();
	
	var newDate = document.createElement("td");
	newDate.textContent= todayString;
	return newDate;
	
	
}

function dueDate()
{
	var dueDateDescription = prompt("Please enter a due date for your task (00/00/0000)", "");
	testDate = new Date(dueDateDescription);
	
	if(testDate == "Invalid Date"){
		alert("Invalid date could not add request");
		return "";
	}
	else{
			var dueDate = document.createElement("td");
			dueDate.textContent= dueDateDescription;
			return dueDate;
	}
}

function incomplete()
{
	var incomplete = document.createElement("td");
	incomplete.textContent= "Incomplete";
	return incomplete;

}

function customButton(table)
{
	var container2 = table; 
	var taskDescription;
	var addedDate; 
	var dateDue; 
	var stateOfTask; 
	var newToDo;
	if(addedCustom == false){
		var customCategory = prompt("Please enter your custom category name", "");
		var newCategory = document.createElement("td");
		newCategory.textContent = customCategory;
		customName = customCategory;
		taskDescription = addDescription();
		addedDate = addDate();
		dateDue = dueDate();
		if(dateDue != ""){
			
			stateOfTask = incomplete();
			newToDo = {category: newCategory.textContent, description: taskDescription.textContent, addDate: addedDate.textContent, 
						dueDate: dateDue.textContent, state: stateOfTask.textContent};
			toDoList.push(newToDo);
		
			lineItem++;
			var lineNumber = document.createElement("td"); 
			lineNumber.textContent = lineItem.toString();
			container2.appendChild(lineNumber);
		
			container2.appendChild(newCategory);
			container2.appendChild(taskDescription);
			container2.appendChild(addedDate);
			container2.appendChild(dateDue);
			container2.appendChild(stateOfTask);
		
			addedCustom = true;
		}
		else{
			return ""
		}
		
	}
	
	else if(addedCustom == true){
		var category1 = document.createElement("td");
		category1.textContent = customName;
		taskDescription = addDescription();
		addedDate = addDate();
		dateDue = dueDate();
		if(dateDue != ""){
			
			stateOfTask = incomplete();
			newToDo = {category: category1.textContent, description: taskDescription.textContent, addDate: addedDate.textContent, 
						dueDate: dateDue.textContent, state: stateOfTask.textContent};
			toDoList.push(newToDo);
		
			lineItem++;
			var lineNumber = document.createElement("td"); 
			lineNumber.textContent = lineItem.toString();
			container2.appendChild(lineNumber);
		
			container2.appendChild(category1);
			container2.appendChild(taskDescription);
			container2.appendChild(addedDate);
			container2.appendChild(dateDue);
			container2.appendChild(stateOfTask);
		}
		else{
			return ""
		}
	}

}

function workButton(table)
{
	var container2 = table;
	var work = document.createElement("td");
	work.textContent= "Work";
	var taskDescription = addDescription();
	var addedDate = addDate();
	var dateDue = dueDate();
	if(dateDue != ""){
		
		var stateOfTask = incomplete();
	
		var newToDo = {category: work.textContent, description: taskDescription.textContent, addDate: addedDate.textContent, 
						dueDate: dateDue.textContent, state: stateOfTask.textContent};
		toDoList.push(newToDo);
	
		lineItem++;
		var lineNumber = document.createElement("td"); 
		lineNumber.textContent = lineItem.toString();
		container2.appendChild(lineNumber);
		
		container2.appendChild(work);
		container2.appendChild(taskDescription);
		container2.appendChild(addedDate);
		container2.appendChild(dateDue);
		container2.appendChild(stateOfTask);
	}
	else{
		return "";
	}
}

function schoolButton(table)
{
	var container2 = table;
	var school = document.createElement("td");
	school.textContent= "School";
	var taskDescription = addDescription();
	var addedDate = addDate();
	var dateDue = dueDate();
	if(dateDue != ""){
		var stateOfTask = incomplete();
	
		var newToDo = {category: school.textContent, description: taskDescription.textContent, addDate: addedDate.textContent, 
						dueDate: dateDue.textContent, state: stateOfTask.textContent};
					
		toDoList.push(newToDo);
	
		lineItem++;
		var lineNumber = document.createElement("td"); 
		lineNumber.textContent = lineItem.toString();
		container2.appendChild(lineNumber);
	
		container2.appendChild(school);
		container2.appendChild(taskDescription);
		container2.appendChild(addedDate);
		container2.appendChild(dateDue);
		container2.appendChild(stateOfTask);
	}
	else{
		return ""
	}
}

function sportsButton(table)
{
	var container2 = table;
	var sports = document.createElement("td");
	sports.textContent= "Sports";
	var taskDescription = addDescription();
	var addedDate = addDate();
	var dateDue = dueDate();
	if(dateDue != ""){
	
		var stateOfTask = incomplete();
	
		var newToDo = {category: sports.textContent, description: taskDescription.textContent, addDate: addedDate.textContent, 
						dueDate: dateDue.textContent, state: stateOfTask.textContent};
		toDoList.push(newToDo);
	
		lineItem++;
		var lineNumber = document.createElement("td"); 
		lineNumber.textContent = lineItem.toString();
		container2.appendChild(lineNumber);
	
		container2.appendChild(sports);
		container2.appendChild(taskDescription);
		container2.appendChild(addedDate);
		container2.appendChild(dateDue);
		container2.appendChild(stateOfTask);
	}
	else{
		return ""
	}
}

function miscButton(table)
{
	var container2 = table;
	var misc = document.createElement("td");
	misc.textContent= "Misc.";
	var taskDescription = addDescription();
	var addedDate = addDate();
	var dateDue = dueDate();
	if(dateDue != ""){

		var stateOfTask = incomplete();
	
		var newToDo = {category: misc.textContent, description: taskDescription.textContent, addDate: addedDate.textContent, 
						dueDate: dateDue.textContent, state: stateOfTask.textContent};
		toDoList.push(newToDo);
	
		lineItem++;
		var lineNumber = document.createElement("td"); 
		lineNumber.textContent = lineItem.toString();
		container2.appendChild(lineNumber);
		
		container2.appendChild(misc);
		container2.appendChild(taskDescription);
		container2.appendChild(addedDate);
		container2.appendChild(dateDue);
		container2.appendChild(stateOfTask);
	}
	else{
		return "";
	}
}

function sortByCategory()
{
	var container2 = document.getElementById("productivityTable");
	
	while(container2.childElementCount > 1 ){
		container2.removeChild(container2.lastChild)
	}
	
	
	toDoList =  toDoList.sort(function(a,b){
		var categoryA = a.category.toLowerCase();
		var categoryB = b.category.toLowerCase();
		var i;
		 if(categoryA < categoryB){
			 return -1
		 }
		 else if(categoryB < categoryA){
			 return 1
		 }
		 else
			 return 0;
		 
	})
	
	rebuildTable(container2);

	
}

function sortByStatus()
{
	var container2 = document.getElementById("productivityTable");
	
	while(container2.childElementCount > 1 ){
		container2.removeChild(container2.lastChild)
	}
	
	
	toDoList =  toDoList.sort(function(a,b){
		var statusA = a.state.toLowerCase();
		var statusB = b.state.toLowerCase();
		var i;
		 if(statusA < statusB){
			 return -1
		 }
		 else if(statusB < statusA){
			 return 1
		 }
		 else
			 return 0;
		 
	})
	
	rebuildTable(container2);
}

function sortByAddDate(){
	var container2 = document.getElementById("productivityTable");
	
	while(container2.childElementCount > 1 ){
		container2.removeChild(container2.lastChild)
	}
	
	
	toDoList = toDoList.sort(function(a, b){
		var dateA= new Date(a.addDate);
		var dateB= new Date(b.addDate);
    
		var dateAYear = dateA.getFullYear();
		var dateBYear = dateB.getFullYear();
		var dateAMonth = dateA.getMonth();
		var dateBMonth = dateB.getMonth();
		var dateADay = dateA.getDate();
		var dateBDay = dateB.getDate();
	
		if(dateAYear < dateBYear){
			return -1;
		}
	
		else if(dateBYear < dateAYear){
			return 1;
		}
	
		else if(dateAYear == dateBYear){
			if(dateAMonth < dateBMonth){
				return -1;
			}
			else if(dateBMonth < dateAMonth){
				return 1;
			}
		
			else if (dateAMonth == dateBMonth){
				if(dateADay < dateBDay){
					return -1;
				}
				else if (dateBDay < dateADay){
					return 1;
				}
			
				else
					return 0;
			}
		}
				
	})

	rebuildTable(container2);
}

function sortByDueDate(container2){
	
	var container2 = document.getElementById("productivityTable");
	
	while(container2.childElementCount > 1 ){
		container2.removeChild(container2.lastChild)
	}
	
	
	toDoList = toDoList.sort(function(a, b){
		var dateA= new Date(a.dueDate);
		var dateB= new Date(b.dueDate);
    
		var dateAYear = dateA.getFullYear();
		var dateBYear = dateB.getFullYear();
		var dateAMonth = dateA.getMonth();
		var dateBMonth = dateB.getMonth();
		var dateADay = dateA.getDate();
		var dateBDay = dateB.getDate();
	
		if(dateAYear < dateBYear){
			return -1;
		}
	
		else if(dateBYear < dateAYear){
			return 1;
		}
	
		else if(dateAYear == dateBYear){
			if(dateAMonth < dateBMonth){
				return -1;
			}
			else if(dateBMonth < dateAMonth){
				return 1;
			}
		
			else if (dateAMonth == dateBMonth){
				if(dateADay < dateBDay){
					return -1;
				}
				else if (dateBDay < dateADay){
					return 1;
				}
			
				else
					return 0;
			}
		}
				
	})

	rebuildTable(container2);
	
}

function changeStatus(){
	var i;
	var changeNumber = "hello";
	
	var container2 = document.getElementById("productivityTable");
	if(toDoList.length >0){
		while(container2.childElementCount > 1 ){
			container2.removeChild(container2.lastChild)
		}
	
		var changeNumber = prompt("Please enter the line item to change", "");
		if(isNaN(changeNumber) == true){
			alert("Line item does not exist");
			rebuildTable(container2);
		}
		
		else if(isNaN(changeNumber) == false){
			if(changeNumber > toDoList.length || changeNumber < 1){
				alert("Line item does not exist");
				rebuildTable(container2);
			}
			
			else{
					changeNumber = parseInt(changeNumber-1);
					if(toDoList[changeNumber].state == "Incomplete"){
						toDoList[changeNumber].state = "Complete";
					}
	
					else if(toDoList[changeNumber].state == "Complete"){
						toDoList[changeNumber].state = "Incomplete";
					}
					
					rebuildTable(container2);
				}
		}
		
	}
}

function remove(){
	
	var container2 = document.getElementById("productivityTable");
	if(toDoList.length > 0){
		if(window.confirm("Are you sure you would like to remove an item?")== true){
			while(container2.childElementCount > 1 ){
				container2.removeChild(container2.lastChild)
			}
			var removeNumber = prompt("Please enter the item number you wish to remove:","");
			if (isNaN(removeNumber) == false){
				if(removeNumber > toDoList.length || removeNumber < 1){
					alert("Line item does not exist");
					rebuildTable(container2);
				}
				else{
						toDoList.splice(removeNumber-1,1);
						lineItem = lineItem-1;
						rebuildTable(container2);
				}
			}
		
			else if(isNaN(removeNumber) == true){
				alert("Line item does not exist");
				rebuildTable(container2);
			}
		
		}
	
	}
}

	

function rebuildTable(container2){
	var i;
	for(i = 0; i < toDoList.length; i++)
	{
		var newRow = document.createElement("tr");
		container2.appendChild(newRow);
		
		var lineNumber = document.createElement("td");
		var lineNum = i+1;
		lineNumber.textContent = lineNum.toString();
		container2.appendChild(lineNumber);
		
		var newCategory = document.createElement("td");
		newCategory.textContent= toDoList[i].category;
		container2.appendChild(newCategory);
		
		var newDescription = document.createElement("td");
		newDescription.textContent= toDoList[i].description;
		container2.appendChild(newDescription);
		
		var newAddDate = document.createElement("td");
		newAddDate.textContent= toDoList[i].addDate;
		container2.appendChild(newAddDate);
		
		var newDueDate = document.createElement("td");
		newDueDate.textContent= toDoList[i].dueDate;
		container2.appendChild(newDueDate);
		
		var newStatus = document.createElement("td");
		newStatus.textContent= toDoList[i].state;
		container2.appendChild(newStatus);
		
		rebuildColor(toDoList[i].category);
		
		globalValues[0].customAdded = addedCustom;
		globalValues[0].nameCustom = customName;
		globalValues[0].colorCustom = customColor;
		globalValues[0].itemLine = lineItem;
		
		localStorage.setItem('toDoList', JSON.stringify(toDoList)); 
		localStorage.setItem('globalValues', JSON.stringify(globalValues));
		
	}
	

}

function rebuildColor(category){
	if(category == "Work"){
		var color = document.getElementsByTagName("td");
		var i;
		for( i = color.length-6; i < color.length; i++){
				color[i].style.backgroundColor = "#FFB266";
		}
		
	}
		
	else if (category == "School"){
		var color = document.getElementsByTagName("td");
		var i;
		for( i = color.length-6; i < color.length; i++){
				color[i].style.backgroundColor = "#FF6666";
		}
		
	}
		
	else if (category == "Sports"){
		var color = document.getElementsByTagName("td");
		var i;
		for(i = color.length-6; i < color.length; i++){
				color[i].style.backgroundColor = "#DA70D6";
		}
		
	}
		
	else if (category == "Misc."){
		var color = document.getElementsByTagName("td");
		var i;
		for( i = color.length-6; i < color.length; i++){
				color[i].style.backgroundColor = "#99FF99";
		}
		
	}
	
	else if (category == customName){
		var color = document.getElementsByTagName("td");
		var i;
		for( i = color.length-6; i < color.length; i++){
				color[i].style.backgroundColor = customColor;
		}
		
	}
	
	
	
}
	

function initialize()
{
	var todos = [{category: "work", description: "PreferredOne", date: "10/9/2018"},{description: "CISC", date: "9/1/20"}];
	console.log(todos[1]);
	var newTodo = {category: "sports", description: "baseball"};
	todos.push(newTodo);
	console.log(todos[2]);
	console.log(todos[0].category);
	
	//var button = document.getElementsByClassName("buttons");
	var buttons = document.getElementById("workButton");
	//var container2 = document.getElementById("productivityTable");
	//console.log(button[0]);
	/*var i;
	for(i=0; i < buttons.length; i++)
	{
		var newRow = document.createElement("tr");
		container2.appendChild(newRow);
		
		if(i == 0){
			var newCategory = document.createElement("td");
			newCategory.textContent= "Work";
		}
		else if (i == 1){
			var newCategory = document.createElement("td");
			newCategory.textContent= "School";
		}
		else if (i == 2){
			var newCategory = document.createElement("td");
			newCategory.textContent= "Sports";
		}
		else if (i == 3){
			var newCategory = document.createElement("td");
			newCategory.textContent= "Misc.";
		}
		
		buttons[i].addEventListener("click", workCategory, false);
	}*/
	buttons.addEventListener("click", workCategory, false);
}

function workCategory(event){
	
	var container2 = document.getElementById("productivityTable");
	var newRow = document.createElement("tr");
	container2.appendChild(newRow);
	
	var newCategory = document.createElement("td");
	newCategory.textContent= "Work";
	
	container2.appendChild(newCategory);
	
	container2.appendChild(addDescription(container2));
	
	container2.appendChild(addDate(container2));
	
	container2.appendChild(dueDate(container2));
	
	container2.appendChild(incomplete(container2));

}

	
function addDescription(table){
	var textDescription = prompt("Please enter a description of your task", "");
    var newText = document.createElement("td");
	newText.textContent= textDescription;
	return newText;
}

function addDate(table)
{
	var dateDescription = prompt("Please enter the date this task was added (00/00/0000)", "");
	var newDate = document.createElement("td");
	newDate.textContent= dateDescription;
	return newDate;
}

function dueDate(table)
{
	var dueDateDescription = prompt("Please enter a due date for your task (00/00/0000)", "");
	var dueDate = document.createElement("td");
	dueDate.textContent= dueDateDescription;
	return dueDate;
}

function incomplete(table)
{
	var incomplete = document.createElement("td");
	incomplete.textContent= "Incomplete";
	return incomplete;

}

	
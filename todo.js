var list = document.getElementById('list');
var btn = document.getElementById('submit');
var foodBtn = document.getElementById('foodBtn');
var clothesBtn = document.getElementById('clothesBtn');
var food = [];
var clothing = [];
var item = document.getElementById('item');

	 //Create List Function  
var createList = function(){
    	//Create list item element
		var entry = document.createElement('li');

		if(isNaN(item.value)){
			entry.textContent = item.value;
		      //Apply list item element to list
			list.appendChild(entry);
		      //Clear text from the input
			item.value = "";
			}else{
				item.value = "";
			}
	};

function addItem(){


	
	    if(foodBtn.checked && clothesBtn.checked === true){
	    	alert("Please select one Category");
	    	return false;
	    }
	    else if(foodBtn.checked === true && isNaN(item.value)){
	      //Push item to food array
		food.push(item.value);
	    createList();
	    console.log( "Food: " + food);
	    }
	    else if(clothesBtn.checked === true && isNaN(item.value)){
	      //Push item to clothes array
	    clothing.push(item.value);
	    createList();
	    console.log("Clothes: " + clothing);
	    }
	    else{
	    	createList();
	    }
   
}


btn.addEventListener('click', addItem);
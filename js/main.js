//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{ 
			city: 'Delhi',
			population: 29399141
		},
		{
			city: 'Tokyo',
			population: 37468302
		},
		{
			city: 'Windsor',
			population: 333483
		},
		{
			city: 'Verona',
			population: 10619 
		}
	];

	//append the table element to the div
	  $("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");
	
	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    addColumns(cityPop); // calling fuctions addColumns and addEvents
    addEvents();
};

function addColumns(cityPop){  // Defining function addColumns which takes cityPop as argument
    
    $('tr').each(function(i){  

    	if (i == 0){

    		$(this).append('<th>City Size</th>'); // using the above function we will first check if there is any coloumn with, if not we will add City Size in the header
    	} else {   // if header is already present, we will populate the citysize coloumn by defining the whether it is small medium or large
					// using population as a condition to define the size 
    		var citySize;

    		if (cityPop[i-1].population < 100000){ // if population is less than 100000, size= small
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){ // if population is less than 500000, size= Medium
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large'; // else if the population does not fit in the above parameters; size= Large
    		};

    		$(this).append('<td>' + citySize + '</td>'); // adding City size to the table
    	};
    });
};

function addEvents(){  // defining function addEvents

    $('table').mouseover(function(){  // will call this function whenever the mouse is over the table
		
		var color= "rgb(";  // defining variable color

		for (var i=0; i<3; i++){   // for generating random values we are using for loop, since we need 3 values i<3

			var random = Math.floor(Math.random() * 256); // the value generated is stored in random variable

			color += random;  // value of random variable is added to color variable

			if (i<2){
				color += ",";  // if the values are more than two, they wiil be seperated by ","
			
			} else {
				color += ")"; // finally the when 3 values are generated we add closing bracket
		};
	
		$(this).css('color', color); // using css, we will add above generated style element to the table
	};
	});
	function clickme(){

		alert('Hey, you clicked me!');  // if table is clicked it will generate an alert
	};

	$('table').on('click', clickme);
};
//call the initialize function when the document has loaded
$(document).ready(function(){  
    initialize();
});
/**
 * http://usejsdoc.org/
 */
/*	console.log("Hello jquery client");

	$.get("/order-online", function(response){
		console.log("Hello jquery client"+response);
		 $.ajax({url: "/", success: function(result){
		      $("#div1").html(result);
		    }});	
		//populateData(response);
	})	

	
	*/
alert("hello");
	
	
	
function populateData(row)
{
	
	if(row.itemCategory==0)
	{
		var startersDiv = document.getElementById("startersDiv");
		var listElement = document.createElement("li");
		listElement.textContent=row.itemname;
		starterDiv.appendChild(listElement);
	}
	else if(row.itemCategory==1)
	{
		console.log("I came here to meet you in paner cate main course");
		var mainCourseDiv = document.getElementById("mainCourseDiv");
		var listElement = document.createElement("li");
		listElement.textContent=row.itemname;
		starterDiv.appendChild(listElement);
	}
	else 
	{
		var dessertsDiv = document.getElementById("dessertsDiv");
		var listElement = document.createElement("li");
		listElement.textContent=row.itemname;
		starterDiv.appendChild(listElement);

	}
/*			//----------------------------------
		var strs = [ "String 1", "String 2", "String 3" ];
		var list = document.createElement("ul");
		for (var i in strs) {
		  var anchor = document.createElement("a");
		  anchor.href = "#";
		  anchor.innerText = strs[i];

		  var elem = document.createElement("li");
		  elem.appendChild(anchor);
		  list.appendChild(elem);
		}			
*/		
}
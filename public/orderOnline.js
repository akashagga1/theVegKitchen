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
	
$( document ).ready(function() {
	var cart;
    var data = {"popData":"true"};
    $.ajax({
    type: "GET",
    url: "/orderData",
    data: JSON.stringify(data),
    success: function(data) {    	
    	myNewPopulateData(data);
    },
    error: function(jqXHR, textStatus, err) {
        alert('text status '+textStatus+', err '+err)
    }
    });
    
});	
var totalCartValue=0;
	function addToCart(row){		
		//Quantity decider
		//alert(document.getElementById(row.itemId).innerHTML);
		var curElement = document.getElementById(row.itemId);
		var quantity=curElement.getAttribute("value");
		quantity = isNaN(quantity) ? 0: quantity;
		quantity++;
		
		curElement.setAttribute("value",quantity);
		document.getElementById(row.itemId).innerHTML=quantity;
		/*var removeItem = document.getElementById("sub"+row.itemId);
		alert(removeItem);
		removeItem.disabled=false;*/ 
		var myCart = document.getElementById("myCartId");
		if(quantity==1)
			{
			var listElement = document.createElement("li");
			var nameDiv= document.createElement("div");
			nameDiv.setAttribute("align","left");
			nameDiv.innerHTML=row.itemname;
			//listElement.textContent=row.itemname;
			listElement.classList.add("list-group-item");
			listElement.id=row.itemId+"myCart";
			var qBadge1= document.createElement("span");
			var qBadge2= document.createElement("span");
			var inCartValue = document.createElement("span");
			inCartValue.setAttribute("value",quantity);
			inCartValue.innerHTML=quantity;
			inCartValue.id="cart"+row.itemId;
			qBadge1.classList.add("badge");
			qBadge1.id = "addOfCart"+row.itemId;
			qBadge1.onclick = function() {addToCart(row)};
			qBadge1.textContent = "+";
			qBadge1.classList.add("style","border");
			qBadge2.classList.add("style","border");
			qBadge2.id ="subOfCart"+row.itemId;
			qBadge2.onclick = function() {removeFromCart(row)};
			qBadge2.classList.add("badge");
			qBadge2.textContent = "-";
			var containerDiv= document.createElement("div");
			containerDiv.setAttribute("align","right");
			var priceDiv = document.createElement("div");
			priceDiv.setAttribute("align","up");
			var itemPrice= document.createElement("span");
			itemPrice.setAttribute("value",row.itemPrice);
			itemPrice.innerHTML=row.itemPrice;
			totalCartValue=totalCartValue+row.itemPrice;
			var cartValue= document.getElementById("totalCartValue");
			cartValue.innerHTML="Total: "+totalCartValue;
			itemPrice.id="inCartPrice"+row.itemId;
			priceDiv.appendChild(itemPrice);
			
			var badgeDiv = document.createElement("div");

			badgeDiv.setAttribute("align","bottom");
			   
			badgeDiv.appendChild(qBadge1);
			badgeDiv.appendChild(inCartValue);
			badgeDiv.appendChild(qBadge2);
			containerDiv.appendChild(priceDiv);
			containerDiv.appendChild(badgeDiv);
			listElement.appendChild(nameDiv);
			listElement.appendChild(containerDiv);
			
			myCart.appendChild(listElement); 
			}
		else{
			var item= document.getElementById("cart"+row.itemId);
			item.setAttribute("value", quantity);
			item.innerHTML=quantity;
			var itemPrice= document.getElementById("inCartPrice"+row.itemId);
			itemPrice.setAttribute("value",quantity*row.itemPrice);
			itemPrice.innerHTML=quantity*row.itemPrice;
			totalCartValue=totalCartValue+row.itemPrice;
			var cartValue= document.getElementById("totalCartValue");
			cartValue.innerHTML="Total: "+totalCartValue;
		}
		
	}  
	function removeFromCart(row){
		//alert(document.getElementById(row.itemId).innerHTML);
		
		var curElement = document.getElementById(row.itemId);
		var quantity=curElement.getAttribute("value");
		quantity = isNaN(quantity) ? 0: quantity;
		
		if(quantity!=0)
			{
			quantity--;
			curElement.setAttribute("value",quantity);
			document.getElementById(row.itemId).innerHTML=quantity;
			if(quantity==0){
				var item = document.getElementById(row.itemId+"myCart");
				item.parentNode.removeChild(item);
				//var itemPrice = document.getElementById("inCartPrice"+row.itemId);
				//itemPrice.parentNode.removeChild(itemPrice);
				totalCartValue=totalCartValue-row.itemPrice;
				var cartValue= document.getElementById("totalCartValue");
				cartValue.innerHTML="Total: "+totalCartValue;
				//var removeItem = document.getElementById("sub"+row.itemId);
				//removeItem.diabled=true;
			}
			else
				{
				var item=document.getElementById("cart"+row.itemId);
				item.setAttribute("value",quantity);
				item.innerHTML=quantity;
				var itemPrice=document.getElementById("inCartPrice"+row.itemId);
				itemPrice.setAttribute("value",quantity*row.itemPrice);
				itemPrice.innerHTML=quantity*row.itemPrice;
				totalCartValue=totalCartValue-row.itemPrice;
				var cartValue= document.getElementById("totalCartValue");
				cartValue.innerHTML="Total: "+totalCartValue;
				}
			}
		
		
		}
	function myNewPopulateData(rows)
	{
		createAccordian(rows);
		rows.forEach( (row) => {
			//row.itemCategory=row.itemCategory.replace(/\s/g, "");
			var categoryDiv= document.getElementById(row.itemCategory);
			var listElement = document.createElement("li");
			var nameDiv= document.createElement("div");
			nameDiv.setAttribute("align","left");
			nameDiv.innerHTML=row.itemname;
			var qBadge1= document.createElement("span");
			var qBadge2= document.createElement("span");
			//qBadge2.disabled=true;
			var priceDiv = document.createElement("div");
			var priceAndBadgeDiv = document.createElement("div");
			priceAndBadgeDiv.setAttribute("align","right");
			
			priceDiv.setAttribute("align","up");
			
			var itemPrice= document.createElement("span");
			itemPrice.setAttribute("value",row.itemPrice);
			itemPrice.innerHTML=row.itemPrice;
			itemPrice.id="inMenuPrice"+row.itemId;
			priceDiv.appendChild(itemPrice);
			
			var inCartValue = document.createElement("span");
			inCartValue.setAttribute("value",0);
			inCartValue.innerHTML=0;
			inCartValue.id=row.itemId;
			qBadge1.classList.add("badge");
			qBadge1.id = "add"+row.itemId;
			qBadge1.onclick = function() {addToCart(row)};
			qBadge1.textContent = "+";
			qBadge1.classList.add("style","border");
			qBadge2.classList.add("style","border");
   
			qBadge2.id ="sub"+row.itemId;
			qBadge2.onclick = function() {removeFromCart(row)};
			var badgeDiv = document.createElement("div");
			badgeDiv.setAttribute("align","down");
			badgeDiv.appendChild(qBadge1);
			badgeDiv.appendChild(inCartValue);
			badgeDiv.appendChild(qBadge2);
			qBadge2.classList.add("badge");
			qBadge2.textContent = "-";
			priceAndBadgeDiv.appendChild(priceDiv);
			priceAndBadgeDiv.appendChild(badgeDiv);
			listElement.classList.add("list-group-item");			
			listElement.appendChild(nameDiv);
			listElement.appendChild(priceAndBadgeDiv);
			categoryDiv.appendChild(listElement);
		});
		

	}
function populateData(rows)
{
  	rows.forEach( (row) => 
  	{
		if(row.itemCategory==0)
		{
			//add button with item
			var startersDiv = document.getElementById("startersDiv");
			var listElement = document.createElement("li");
			var nameDiv= document.createElement("div");
			nameDiv.setAttribute("align","left");
			nameDiv.innerHTML=row.itemname;
			var qBadge1= document.createElement("span");
			var qBadge2= document.createElement("span");
			var priceDiv = document.createElement("div");
			var priceAndBadgeDiv = document.createElement("div");
			priceAndBadgeDiv.setAttribute("align","right");
			
			priceDiv.setAttribute("align","up");
			
			var itemPrice= document.createElement("span");
			itemPrice.setAttribute("value",row.itemPrice);
			itemPrice.innerHTML=row.itemPrice;
			itemPrice.id="inMenuPrice"+row.itemId;
			priceDiv.appendChild(itemPrice);
			
			var inCartValue = document.createElement("span");
			inCartValue.setAttribute("value",0);
			inCartValue.innerHTML=0;
			inCartValue.id=row.itemId;
			qBadge1.classList.add("badge");
			qBadge1.id = "add"+row.itemId;
			qBadge1.onclick = function() {addToCart(row)};
			qBadge1.textContent = "+";
			qBadge1.classList.add("style","border");
			qBadge2.classList.add("style","border");
   
			qBadge2.id ="sub"+row.itemId;
			qBadge2.onclick = function() {removeFromCart(row)};
			var badgeDiv = document.createElement("div");
			badgeDiv.setAttribute("align","down");
			badgeDiv.appendChild(qBadge1);
			badgeDiv.appendChild(inCartValue);
			badgeDiv.appendChild(qBadge2);
			qBadge2.classList.add("badge");
			qBadge2.textContent = "-";
			priceAndBadgeDiv.appendChild(priceDiv);
			priceAndBadgeDiv.appendChild(badgeDiv);
			listElement.classList.add("list-group-item");			
			listElement.appendChild(nameDiv);
			listElement.appendChild(priceAndBadgeDiv);
			startersDiv.appendChild(listElement);
		}
		else if(row.itemCategory==1)
		{
			//add button with item
			var mainCourseDiv = document.getElementById("mainCourseDiv");
			var listElement = document.createElement("li");
			var qBadge1= document.createElement("span");
			var qBadge2= document.createElement("span");
			var inCartValue = document.createElement("span");
			inCartValue.setAttribute("value",0);
			inCartValue.innerHTML=0;
			inCartValue.id=row.itemId;
			qBadge1.classList.add("badge");
			qBadge1.id = "add"+row.itemId;
			qBadge1.onclick = function() {addToCart(row)};
			qBadge1.textContent = "+";
			qBadge2.id ="sub"+row.itemId;
			qBadge2.onclick = function() {removeFromCart(row)};
			qBadge1.classList.add("style","border");
			qBadge2.classList.add("style","border");   
			var div = document.createElement("div");
			div.setAttribute("align","right");
			div.appendChild(qBadge1);
			div.appendChild(inCartValue);
			div.appendChild(qBadge2);
			qBadge2.classList.add("badge");
			qBadge2.textContent = "-";
			listElement.textContent=row.itemname;
			listElement.classList.add("list-group-item");
			listElement.appendChild(div);
			mainCourseDiv.appendChild(listElement);
		}
		else 
		{
			//add button with item
			var dessertsDiv = document.getElementById("dessertsDiv");
			var listElement = document.createElement("li");
			var qBadge1= document.createElement("span");
			var qBadge2= document.createElement("span");
			var inCartValue = document.createElement("span");
			inCartValue.setAttribute("value",0);
			inCartValue.innerHTML=0;
			inCartValue.id=row.itemId;
			qBadge1.classList.add("badge");
			qBadge1.id = "add"+row.itemId;
			qBadge1.onclick = function() {addToCart(row)};
			qBadge1.textContent = "+";
			
			qBadge2.id ="sub"+row.itemId;
			qBadge2.onclick = function() {removeFromCart(row)};
			qBadge1.classList.add("style","border");
			qBadge2.classList.add("style","border");
   
			var div = document.createElement("div");
			div.setAttribute("align","right");
			div.appendChild(qBadge1);
			div.appendChild(inCartValue);
			div.appendChild(qBadge2);
			qBadge2.classList.add("badge");
			qBadge2.textContent = "-";
			listElement.textContent=row.itemname;
			listElement.classList.add("list-group-item");
			
			listElement.appendChild(div);

			dessertsDiv.appendChild(listElement);

		}
		

	});
}
/*<div class="card">
	<div class="card-header" id="headingOne">
		<h2 class="mb-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
			<button class="btn btn-link" type="button" >Starters</button> 
		</h2>
  	</div>
	<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
		<div class="card-body" >
			<ul class="list-group" id="startersDiv"></ul>
		</div>
	</div>
</div>/ */

function createAccordian(rows)
{
	var categorySet = new Set();
	var accordianMenu = document.getElementById("accordionMenu");
	rows.forEach((row)=> categorySet.add(row.itemCategory));		
	categorySet.forEach((itemValue)=>
	{
		var cardDiv = document.createElement("div");
		cardDiv.setAttribute("class","card");
		
		var cardInnerDiv = document.createElement("div");
		cardInnerDiv.setAttribute("class","card-header");
		cardInnerDiv.id="headingOne"+itemValue;

		var h2= document.createElement("h2");
		h2.setAttribute("class","mb-0");
		h2.setAttribute("data-toggle","collapse");
		h2.setAttribute("data-target","#collapse"+itemValue);
		h2.setAttribute("aria-expanded","true");
		h2.setAttribute("aria-controls","collapse"+itemValue);
		
		var button= document.createElement("button");
		button.setAttribute("class","btn btn-link");
		button.setAttribute("type","button");
		button.innerHTML= itemValue;
		
		h2.appendChild(button);

		cardInnerDiv.appendChild(h2);

		cardDiv.appendChild(cardInnerDiv);
		
		var cardCollapseDiv = document.createElement("div");
		cardCollapseDiv.id="collapse"+itemValue;
		cardCollapseDiv.setAttribute("class","collapse show");
		cardCollapseDiv.setAttribute("aria-labelledby","headingOne"+itemValue);
		cardCollapseDiv.setAttribute("data-parent","#accordionMenu");
		
		var collapseInnerDiv = document.createElement("div");
		collapseInnerDiv.setAttribute("class","card-body");
		
		var itemList = document.createElement("ul");
		itemList.setAttribute("class","list-group");
		itemList.id=itemValue;	
		
		collapseInnerDiv.appendChild(itemList);

		cardCollapseDiv.appendChild(collapseInnerDiv);

		cardDiv.appendChild(cardCollapseDiv);
		accordianMenu.appendChild(cardDiv);


	});
	
	}
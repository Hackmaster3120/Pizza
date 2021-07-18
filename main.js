var Menu_array = ["Veg-Margherita","Chicken","Pepperoni","Veggie-Master","Non-veggie-master"];
function getmenu(){
    Menu_array.sort;
    var html_data="";
    for(var i=0;i<Menu_array.length;i++){
        html_data=html_data+"<br>"+Menu_array[i];
    }
    document.getElementById("display_menu").innerHTML=html_data;
}
function addAPizza(){
   var New_pizzzzzzzza=document.getElementById("add_item").value;
   console.log(New_pizzzzzzzza);
   Menu_array.push(New_pizzzzzzzza);
   console.log(Menu_array);
   ShowAllPizzas();
   getmenu();
}
function ShowAllPizzas(){
    Menu_array.sort;
    var html_data="<section class='pizza'>"
    for(var j=0;j<Menu_array.length;j++){
        html_data=html_data+"<br>"+"<div class='pizzas'><img src='images/pizzaImg.png'>"+Menu_array[j]+"</div>";
    }
    html_data=html_data+"</section>";
    document.getElementById("display_addedmenu").innerHTML=html_data;
}
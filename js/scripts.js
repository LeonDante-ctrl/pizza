var pizzasizeprice, crustprice, total;
$(document).ready(function(){
    $("#myprice").click(function(event){
        $(".show-total").show();
        var size = $("#flavor option:selected").val();
        var crust = $("#crust option:selected").val();
        var quantity = parseInt($("#quantity").val());
        var topping =[];
        $.each($('input[name="topping"]:checked'),function(){
            topping.push($(this).val());
        });
    if (crust == "none"){
        crustprice=0;
      }
 else if (crust == "Pan-crust"){
 crustprice = 1 ;
 }else if (crust == "Original Thin Crust"){
     crustprice =1.50;
 }else if (crust == "Gluten Free"){
     crustprice =2.00;
 }else {
     crustprice=2.00;
 }


 if(size =="regular"){
     pizzasizeprice = 5;
 } else if (size == "medium") {
     pizzasizeprice=7;
 }  else if(size == "mega"){
     pizzasizeprice = 10;
 }else{
     pizzasizeprice=0;
 }

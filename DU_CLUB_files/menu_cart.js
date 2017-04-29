$(document).ready(function() {
    $('#tho').html('');

    $.ajax({
        type: "POST",
        url: "menu.php",
        success: function (response) {

            if (response != null) {


                //console.log(response);
                var obj = JSON.parse(response);


                $.each(obj, function (index, row) {
                    var item_no = row['No'];
                    var item_name = row['Item'];
                    var cost = row['Cost'];
                    var qty = 'qty'+item_no;
                    console.log(qty);
                    $('#tbo').append('<tr><td>'+item_no+'</td><td>'+item_name+'</td><td>'+cost+'</td><td><input type="submit" onclick = "add_to_cart('+item_no+',\''+item_name+'\','+cost+')" name="button1" value="Add to Cart"></td><td><input type="hidden" name="qty" id="qty" value="qty" </td></tr>');
                });
            }
        }
    });
});

if (window.name == "reloader") {
    window.name = "";
    location.reload();
}

window.onbeforeunload = function() {
    window.name = "reloader";
}
var email1;
var res;
var pro_id;
var pro_name;
var pro_price;
var count=0;
var arr = [];
var total=0;
var delivery=0;
var total_bill = 0;

var name_val;
var weight;
var r_id;



function load() {

 //alert("");
 var dd="";

 //alert(delivery);
 //delivery=parseInt(delivery);
 var g=0;

 if(dd.length!=0)
 {


 var split=dd.split(',');
 var tt=0;
 for(tt=0;tt<split.length;tt=tt+8)
 {
 if(split[tt]!=-1)
 {
 //alert("ciiii");
 g=1;
 var arr1=[];
 arr1[0]=split[tt];
 arr1[1]=split[tt+1];
 arr1[2]=split[tt+2];
 arr1[3]=split[tt+3];
 arr1[4]=split[tt+4];
 arr1[5]=split[tt+5];
 arr1[6]=split[tt+6];
 arr1[7]=split[tt+7];

 total=Number(total)+Number(arr1[4]);
 arr[count]=arr1;
 count=count+1;
 }
 }


 delivery=calculate_delivery();
 //alert("load "+delivery);
 var s="";

 //alert("ssss");

 var ajaxDisplay4 = document.getElementById('cart');




 s=s+'<div id = "heading"><h2 align="center" style="color:white; font-size: 20px;">Products on Your Shopping Cart</h2></div>';




 s=s+'<table id="table" border="1" cellpadding="5px" cellspacing="1px"><tr id= "main_heading"><td style="text-align:center">Serial</td><td style="text-align:center">Name</td><td style="text-align:center">Price</td><td style="text-align:center">Qty</td><td style="text-align:center">Amount</td><td style="text-align:center">Cancel Product</td></tr>';

 var j;
 for(j=0;j<count;j++)
 {
 if(arr[j][0]!=-1)
 {
 s=s+'<tr><td style="text-align:center">'+(j+1)+'</td><td style="text-align:center">'+arr[j][1]+'</td><td style="text-align:center">'+arr[j][2]+'</td><td style="text-align:center"><input type="button" value="-" onClick="but_decrease('+j+')" />&nbsp;&nbsp;&nbsp;'+arr[j][3]+'&nbsp;&nbsp;&nbsp;<input type="button" value="+" onClick="but_increase('+j+')" /></td><td style="text-align:center">'+arr[j][4]+'</td><td style="text-align:center">'+'<img src="http://mojadar.com/images/cart_cross.jpg" width="25px" height="20px" onClick="remove_cart('+ j +')" >'+'</td></tr>';
 }
 }


 s=s+'<tr><td style="text-align:center"><b>Total: '+total+'Tk &nbsp;&nbsp;&nbsp;Delivery Charge:'+delivery+'Tk<br><span style="color:green;">Total Bill:'+Number(Number(total)+Number(delivery))+'TK</span></b></td>';


 s=s+'<td colspan="10" align="right"><input type="button" class ="fg-button teal" style="margin-right:5px;" value="Clear Cart" onclick="clear_cart()"><input type="button" id="place_order" class ="fg-button teal" value="Place Order" onClick="load_modal()" ></td></tr></table>';

 if(g==0) s="";
 ajaxDisplay4.innerHTML =s ;

 //alert(delivery+"bb");
 //document.body.scrollTop = document.documentElement.scrollTop = 0;

 }
 else
 {
 count=0;
 total=0;
 delivery=0;
 }


 }
 window.onload = load;

var in_val;
var in_c=0;

function but_increase(in_val)
{
    var ajaxRequest;  // The variable that makes Ajax possible!

    try{
        // Opera 8.0+, Firefox, Safari
        ajaxRequest = new XMLHttpRequest();
    } catch (e){
        // Internet Explorer Browsers
        try{
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try{
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e){
                // Something went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }



    arr[in_val][3]=Number(arr[in_val][3])+Number(1);
    arr[in_val][4]=Number(arr[in_val][4])+Number(arr[in_val][2]);
    total=Number(total)+Number(arr[in_val][2]);






    delivery=calculate_delivery();
    //alert(delivery);

    var s="";

    //alert("ssss");

    var ajaxDisplay4 = document.getElementById('cart');




    s=s+'<div id = "heading"><h2 align="center" style="color:white; font-size: 20px;">Products on Your Shopping Cart</h2></div>';




    s=s+'<table id="table" border="1" cellpadding="5px" cellspacing="1px"><tr id= "main_heading"><td style="text-align:center">Serial</td><td style="text-align:center">Name</td><td style="text-align:center">Price</td><td style="text-align:center">Qty</td><td style="text-align:center">Amount</td><td style="text-align:center">Cancel Product</td></tr>';

    var j;


    for(j=0;j<arr.length;j++)
    {
        if(arr[j][0]!=-1)
        {

            s=s+'<tr><td style="text-align:center">'+(j+1)+'</td><td style="text-align:center">'+arr[j][1]+'</td><td style="text-align:center">'+arr[j][2]+'</td><td style="text-align:center"><input type="button" value="-" onClick="but_decrease('+j+')" />&nbsp;&nbsp;&nbsp;'+arr[j][3]+'&nbsp;&nbsp;&nbsp;<input type="button" value="+" onClick="but_increase('+j+')" /></td><td style="text-align:center">'+arr[j][4]+'</td><td style="text-align:center">'+'<img src="http://mojadar.com/images/cart_cross.jpg" width="25px" height="20px" onClick="remove_cart('+ j +')" >'+'</td></tr>';
        }
    }


    s=s+'<tr><td style="text-align:center"><b>Total: '+total+'Tk &nbsp;&nbsp;&nbsp;Delivery Charge:'+delivery+'Tk<br><span style="color:green;">Total Bill:'+Number(Number(total)+Number(delivery))+'TK</span></b></td>';


    s=s+'<td colspan="10" align="right"><input type="button" class ="fg-button teal" style="margin-right:5px;" value="Clear Cart" onclick="clear_cart()"><input type="button" id="place_order" class ="fg-button teal" value="Place Order" onClick="load_modal()" ></td></tr></table>';


    ajaxDisplay4.innerHTML =s ;

    //document.body.scrollTop = document.documentElement.scrollTop = 0;

    var queryString = "?data="+arr;

    ajaxRequest.open("GET", "http://mojadar.com/index.php/login/set_data"+queryString, true);
    ajaxRequest.send(null);



}






function but_decrease(in_val)
{
    var ajaxRequest;  // The variable that makes Ajax possible!

    try{
        // Opera 8.0+, Firefox, Safari
        ajaxRequest = new XMLHttpRequest();
    } catch (e){
        // Internet Explorer Browsers
        try{
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try{
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e){
                // Something went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }


    //alert(in_val);
    if((Number(arr[in_val][3])-Number(1))>=0)
    {

        arr[in_val][3]=Number(arr[in_val][3])-Number(1);
        arr[in_val][4]=Number(arr[in_val][4])-Number(arr[in_val][2]);
        total=Number(total)-Number(arr[in_val][2]);

        delivery=calculate_delivery();

        var s="";

        //alert("ssss");

        var ajaxDisplay4 = document.getElementById('cart');




        s=s+'<div id = "heading"><h2 align="center" style="color:white; font-size: 20px;">Products on Your Shopping Cart</h2></div>';




        s=s+'<table id="table" border="1" cellpadding="5px" cellspacing="1px"><tr id= "main_heading"><td style="text-align:center">Serial</td><td style="text-align:center">Name</td><td style="text-align:center">Price</td><td style="text-align:center">Qty</td><td style="text-align:center">Amount</td><td style="text-align:center">Cancel Product</td></tr>';

        var j;
        for(j=0;j<arr.length;j++)
        {
            if(arr[j][0]!=-1)
            {
                s=s+'<tr><td style="text-align:center">'+(j+1)+'</td><td style="text-align:center">'+arr[j][1]+'</td><td style="text-align:center">'+arr[j][2]+'</td><td style="text-align:center"><input type="button" value="-" onClick="but_decrease('+j+')" />&nbsp;&nbsp;&nbsp;'+arr[j][3]+'&nbsp;&nbsp;&nbsp;<input type="button" value="+" onClick="but_increase('+j+')" /></td><td style="text-align:center">'+arr[j][4]+'</td><td style="text-align:center">'+'<img src="http://mojadar.com/images/cart_cross.jpg" width="25px" height="20px" onClick="remove_cart('+ j +')" >'+'</td></tr>';
            }
        }


        s=s+'<tr><td style="text-align:center"><b>Total: '+total+'Tk &nbsp;&nbsp;&nbsp;Delivery Charge:'+delivery+'Tk<br><span style="color:green;">Total Bill:'+Number(Number(total)+Number(delivery))+'TK</span></b></td>';


        s=s+'<td colspan="10" align="right"><input type="button" class ="fg-button teal" style="margin-right:5px;" value="Clear Cart" onclick="clear_cart()"><input type="button" id="place_order" class ="fg-button teal" value="Place Order" onClick="load_modal()" ></td></tr></table>';


        ajaxDisplay4.innerHTML =s ;

        //document.body.scrollTop = document.documentElement.scrollTop = 0;

        var queryString = "?data="+arr;

        ajaxRequest.open("GET", "http://mojadar.com/index.php/login/set_data"+queryString, true);
        ajaxRequest.send(null);

    }

}



function calculate_delivery()
{
    var ccc=[];
    var mm=0;

    for(mm=0;mm<count;mm++)
    {
        if(arr[mm][0]!=-1) ccc[mm]=0;
    }

    var nn=0;
    var deli=0;

    for(mm=0;mm<count;mm++)
    {
        if(arr[mm][0]!=-1 && ccc[mm]==0)
        {

            var ss_val=arr[mm][6];
            var t_weight=0;
            var d_charge=arr[mm][7];

            for(nn=0;nn<count;nn++)
            {
                if(arr[nn][6]==ss_val && ccc[nn]==0)
                {
                    //alert("mm "+arr[mm][0]+" "+d_charge+" "+count+" "+deli+" "+Number(t_weight)+" "+Number(arr[nn][3])+" "+Number(arr[nn][5])+" "+ Number(t_weight)+Number(Number(arr[nn][3])*Number(arr[nn][5])));

                    t_weight=Number(t_weight)+Number(Number(arr[nn][3])*Number(arr[nn][5]));
                    ccc[nn]=1;
                }

            }
            //alert("we "+t_weight);

            if(t_weight>500) deli=Number(deli)+Number(2*Number(d_charge));
            else if(t_weight>0) deli=Number(deli)+Number(d_charge);

        }

    }

    return deli;

}



var c=0;
function add_to_cart(item_no,item_name,item_cost)
{
    var pro_id = item_no;
    var pro_price = item_cost;
    var pro_name = item_name;

    var x = document.getElementById("snackbar");
    document.getElementById("snackbar").innerHTML = pro_name+" অর্ডারে সংযুক্ত করা হয়েছে";
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);


    //console.log(pro_id+" "+pro_name+" "+pro_price);
    var ajaxRequest;  // The variable that makes Ajax possible!

    try{
        // Opera 8.0+, Firefox, Safari
        ajaxRequest = new XMLHttpRequest();
    } catch (e){
        // Internet Explorer Browsers
        try{
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try{
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e){
                // Something went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }

    //alert("pp");

    var qty = document.getElementById('qty').value;
    if(qty==null || qty=="") qty=1;
    if(isNaN(qty)==true) qty=1;
    //alert(qty);

    var found=0;
    var f_val=0;

    var charge='10';
    charge=parseInt(charge);

    var k=0;
    for(k=0;k<count;k++)
    {
        if(arr[k][0]==pro_id)
        {
            found=1;
            f_val=k;
            break;
        }
    }
    if(found==0)
    {
        var arr1=[];
        arr1[0]=pro_id;
        arr1[1]=pro_name;
        arr1[2]=pro_price;
        arr1[3]=qty;
        arr1[4]=qty*pro_price;
        arr1[5]=1;
        arr1[6]=r_id;
        arr1[7]=charge;
        total=total+qty*pro_price;
        arr[count]=arr1;
        count=count+1;
    }
    else if(found==1)
    {
        arr[f_val][3]=Number(Number(arr[f_val][3])+Number(qty));
        //alert(arr[f_val][3]);
        arr[f_val][4]=Number(arr[f_val][4])+Number(Number(qty)*Number(pro_price));
        total=Number(total)+Number(qty)*Number(pro_price);
    }

    var s="";

    //alert("ssss");

    var ajaxDisplay4 = document.getElementById('cart');


    delivery=calculate_delivery();
    //alert(delivery);


    s=s+'<div id = "heading"><h2 align="center" style="color:white; font-size: 20px;">Products on Your Shopping Cart</h2></div>';




    s=s+'<table id="table" border="1" cellpadding="5px" cellspacing="1px"><tr id= "main_heading"><td style="text-align:center">Serial</td><td style="text-align:center">Name</td><td style="text-align:center">Price</td><td style="text-align:center">Qty</td><td style="text-align:center">Amount</td><td style="text-align:center">Cancel Product</td></tr>';

    var j;
    for(j=0;j<count;j++)
    {
        if(arr[j][0]!=-1)
        {
            s=s+'<tr><td style="text-align:center">'+(j+1)+'</td><td style="text-align:center">'+arr[j][1]+'</td><td style="text-align:center">'+arr[j][2]+'</td><td style="text-align:center"><input type="button" value="-" onClick="but_decrease('+j+')" />&nbsp;&nbsp;&nbsp;'+arr[j][3]+'&nbsp;&nbsp;&nbsp;<input type="button" value="+" onClick="but_increase('+j+')" /></td><td style="text-align:center">'+arr[j][4]+'</td><td style="text-align:center">'+'<img src="http://mojadar.com/images/cart_cross.jpg" width="25px" height="20px" onClick="remove_cart('+ j +')" >'+'</td></tr>';
        }
    }


    s=s+'<tr><td style="text-align:center"><b>Total: '+total+'Tk &nbsp;&nbsp;&nbsp;Delivery Charge:'+delivery+'Tk<br><span style="color:green;">Total Bill:'+Number(Number(total)+Number(delivery))+'TK</span></b></td>';


    s=s+'<td colspan="10" align="right"><input type="button" class ="fg-button teal" style="margin-right:5px;" value="Clear Cart" onclick="clear_cart()"><input type="button" id="place_order" class ="fg-button teal" value="Place Order" onClick="load_modal()" ></td></tr></table>';


    ajaxDisplay4.innerHTML =s ;

    //document.body.scrollTop = document.documentElement.scrollTop = 0;

    /*var queryString = "?data="+arr+"&delivery="+delivery;



     ajaxRequest.open("GET", "./billing.php"+queryString, true);
     ajaxRequest.send(null);
     return false;*/
}



var re_val;
function remove_cart(re_val)
{

    var ajaxRequest;  // The variable that makes Ajax possible!

    try{
        // Opera 8.0+, Firefox, Safari
        ajaxRequest = new XMLHttpRequest();
    } catch (e){
        // Internet Explorer Browsers
        try{
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try{
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e){
                // Something went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }



    arr[re_val][0]=-1;

    total=Number(total)-Number(arr[re_val][4]);

    var f=0;

    var s="";


    delivery=calculate_delivery();


    var ajaxDisplay4 = document.getElementById('cart');




    s=s+'<div id = "heading"><h2 align="center" style="color:white; font-size: 20px;">Products on Your Shopping Cart</h2></div>';




    s=s+'<table id="table" border="1" cellpadding="5px" cellspacing="1px"><tr id= "main_heading"><td style="text-align:center">Serial</td><td style="text-align:center">Name</td><td style="text-align:center">Price</td><td style="text-align:center">Qty</td><td style="text-align:center">Amount</td><td style="text-align:center">Cancel Product</td></tr>';

    var j;
    for(j=0;j<count;j++)
    {
        if(arr[j][0]!=-1)
        {
            s=s+'<tr><td style="text-align:center">'+(j+1)+'</td><td style="text-align:center">'+arr[j][1]+'</td><td style="text-align:center">'+arr[j][2]+'</td><td style="text-align:center"><input type="button" value="-" onClick="but_decrease('+j+')" />&nbsp;&nbsp;&nbsp;'+arr[j][3]+'&nbsp;&nbsp;&nbsp;<input type="button" value="+" onClick="but_increase('+j+')" /></td><td style="text-align:center">'+arr[j][4]+'</td><td style="text-align:center">'+'<img src="http://mojadar.com/images/cart_cross.jpg" width="25px" height="20px" onClick="remove_cart('+ j +')" >'+'</td></tr>';
            f=1;
        }
    }


    s=s+'<tr><td style="text-align:center"><b>Total: '+total+'Tk &nbsp;&nbsp;&nbsp;Delivery Charge:'+delivery+'Tk<br><span style="color:green;">Total Bill:'+Number(Number(total)+Number(delivery))+'TK</span></b></td>';

    s=s+'<td colspan="10" align="right"><input type="button" class ="fg-button teal" style="margin-right:5px;" value="Clear Cart" onclick="clear_cart()"><input type="button" id="place_order" class ="fg-button teal" value="Place Order" onClick="load_modal()" ></td></tr></table>';


    if(f==1) ajaxDisplay4.innerHTML =s ;
    else
    {
        ajaxDisplay4.innerHTML ='<div id = "heading"><h2 align="center" style="color:white; font-size: 20px;">Products on Your Shopping Cart</h2></div><div id="text"><center>To add products to your shopping cart click on "Add to Cart" Button</center></div>';
        arr=[];
        count=0;
        total=0;
    }


    /*var queryString = "?data="+arr+"&delivery="+delivery;



    ajaxRequest.open("GET", "./billing.php"+queryString, true);
    ajaxRequest.send(null);*/

}


function clear_cart()
{
    var ajaxRequest;  // The variable that makes Ajax possible!

    try{
        // Opera 8.0+, Firefox, Safari
        ajaxRequest = new XMLHttpRequest();
    } catch (e){
        // Internet Explorer Browsers
        try{
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try{
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e){
                // Something went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }


    arr=[];
    count=0;
    total=0;
    var ajaxDisplay4 = document.getElementById('cart');
    ajaxDisplay4.innerHTML ='<div id = "heading"><h2 align="center" style="color:white; font-size: 20px;">Products on Your Shopping Cart</h2></div><div id="text"><center>To add products to your shopping cart click on "Add to Cart" Button</center></div>';

   /* var queryString = "?data="+arr+"&delivery="+delivery;
    ajaxRequest.open("GET", "./billing.php"+queryString, true);
    ajaxRequest.send(null);*/

}



function load_modal() {

// Get the modal
    var modal = document.getElementById('myModal');



    var s="";

    //alert("ssss");

    var ajaxDisplay4 = document.getElementById('modal_body');

    console.log(ajaxDisplay4);
    delivery=calculate_delivery();
    //alert(delivery);


    s=s+'<div id = "heading"><h2 align="center" style="color:white; font-size: 20px;">Products on Your Shopping Cart</h2></div>';




    s=s+'<table id="table" border="1" cellpadding="5px" cellspacing="1px"><tr id= "main_heading"><td style="text-align:center">Serial</td><td style="text-align:center">Name</td><td style="text-align:center">Price</td><td style="text-align:center">Qty</td><td style="text-align:center">Amount</td></tr>';

    var j;
    for(j=0;j<count;j++)
    {
        if(arr[j][0]!=-1)
        {
            s=s+'<tr><td style="text-align:center">'+(j+1)+'</td><td style="text-align:center">'+arr[j][1]+'</td><td style="text-align:center">'+arr[j][2]+'</td><td style="text-align:center">&nbsp;&nbsp;&nbsp;'+arr[j][3]+'&nbsp;&nbsp;&nbsp;</td><td style="text-align:center">'+arr[j][4]+'</td></tr>';
        }
    }


    s=s+'<tr><b>Total: '+total+'Tk &nbsp;&nbsp;&nbsp;Delivery Charge:'+delivery+'Tk<br><span style="color:green;">Total Bill:'+Number(Number(total)+Number(delivery))+'TK</span></b></tr></table>';
    //s=s+'<td colspan="10" align="right"><input type="button" class ="fg-button teal" style="margin-right:5px;" value="Clear Cart" onclick="clear_cart()"><input type="button" id="place_order" class ="fg-button teal" value="Place Order" onClick="load_modal()" ></td>;


    ajaxDisplay4.innerHTML =s ;


    var p = 0;
    // Get the button that opens the modal
    var btn = document.getElementById("place_order");

    console.log(btn);
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var btn_cancel = document.getElementById("Cancel");
    var btn_confirm = document.getElementById("Confirm");
    btn_cancel.onclick = function() {
        modal.style.display = "none";
    }

    btn_confirm.onclick = function () {

        var j;
        var cart = [];


        for(j=0;j<count;j++)
        {
            var object = [];
            if(arr[j][0]!=-1)
            {
                var item_no = arr[j][0];
                var item_name = arr[j][1];
                var item_cost = arr[j][2];
                var item_qty = arr[j][3];
                var item_amount = arr[j][4];
                var de_charge = arr[j][6];

                var name = "ob"+j;

                console.log(name);

                object[j] = {item_no:item_no ,item_name:item_name ,item_cost:item_cost,item_qty:item_qty,amount: item_amount,charge: de_charge};
                cart.push(object[j]);
                console.log(object[j]);
                console.log(cart);

            }
        }
        total_bill = Number(Number(total)+Number(delivery));
        var ajaxRequest;  // The variable that makes Ajax possible!

        try{
            // Opera 8.0+, Firefox, Safari
            ajaxRequest = new XMLHttpRequest();
        } catch (e){
            // Internet Explorer Browsers
            try{
                ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try{
                    ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e){
                    // Something went wrong
                    alert("Your browser broke!");
                    return false;
                }
            }
        }
       /* var cartt = JSON.stringify(cart);
        ajaxRequest.open("POST", "billing.php", true);
        ajaxRequest.setRequestHeader('Content-type','application/json; charset=utf-8');
        ajaxRequest.send("arr="+cartt);
        //window.location = "billing_view.html";
        //window.location = "billing.php?arr="+cartt;*/

        $.ajax({
            type: "POST",
            url: "billing.php",
            data: {arr: JSON.stringify(cart),total: total_bill},
            success: function (response) {
                //alert(response);

            }
        });
        modal.style.display = "none";
        var x = document.getElementById("snackbar");
        document.getElementById("snackbar").innerHTML = "Order Confirmed";
        x.className = "show";

        setTimeout(function(){
            window.location = "billing_view.html"
        }, 1000);

        //window.location = "billing_view.html";


    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}






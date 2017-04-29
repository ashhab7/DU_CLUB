$(document).ready(function() {
    $('#tho').html('');

    $.ajax({
        type: "POST",
        url: "retrieve_menu.php",
        success: function (response) {

            if (response != null) {


                //console.log(response);
                var obj = JSON.parse(response);

                $.each(obj, function (index, row) {

                    var Account_number = row["Account_Number"];
                    var Order_No = row['Order_No'];
                    var Date = row['Date'];
                    var total = row['Total'];
                    var Bill = row['Bill'];

                    $('#tbo1').append('<tr><td>'+Account_number+'</td><td>'+Order_No+'</td><td>'+Date+'</td><td>'+total+'</td></tr>');




                    var nested_obj = JSON.parse(Bill);
                    $.each(nested_obj, function (index, row){
                       var item_no = row['item_no'];
                       var item_name = row['item_name'];
                       var item_cost = row['item_cost'];
                       var item_qty = row['item_qty'];
                       var amount = row['amount'];

                       $('#tbo').append('<tr><td>'+item_no+'</td><td>'+item_name+'</td><td>'+item_cost+'</td><td>'+item_qty+'</td><td>'+amount+'</td></tr>');

                    });

                    //$('#tbo').append('<tr><td>'+item_no+'</td><td>'+item_name+'</td><td>'+cost+'</td><td><input type="submit" onclick = "add_to_cart('+item_no+',\''+item_name+'\','+cost+')" name="button1" value="Add to Cart"></td><td><input type="hidden" name="qty" id="qty" value="qty" </td></tr>');
                });
            }
        }
    });
});


function printDiv(divName) {

    var printContents = document.getElementById(divName).innerHTML;
    w=window.open();
    w.document.write(printContents);
    w.print();
    w.close();
}




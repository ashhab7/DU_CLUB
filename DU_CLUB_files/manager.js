$(document).ready(function() {
    $('#tho').html('');

    $.ajax({
        type: "POST",
        url: "manager.php",
        success: function (response) {

            if (response != null) {


               // console.log(response);
                var obj = JSON.parse(response);

                $.each(obj, function (index, row) {

                    var Account_number = row["Account_Number"];
                    var Order_No = row['Order_No'];
                    var Date = row['Date'];
                    var total = row['Total'];
                    //var Bill = row['Bill'];

                    $('#tbo1').append('<tr><td>'+Account_number+'</td><td>'+Order_No+'</td><td>'+Date+'</td><td>'+total+'</td><td><input type="button" value="See Detail Info" onClick="redirect_to_details('+Order_No+')"></td></tr>');

                });
            }
        }
    });
});



function redirect_to_details(order_no){
    $.ajax({
        type: "POST",
        url: "set_session_variable.php",
        data: {order_no: order_no},
        success: function (response) {
            if (response != null) {
                window.location = "details_pending_info.html";
            }
        }
    });
}

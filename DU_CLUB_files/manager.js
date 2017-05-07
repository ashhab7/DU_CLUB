$(document).ready(function() {
    $('#acinfo').html('');

    $.ajax({
        type: "POST",
        url: "find_loggedin_user.php",
        success: function (response) {

            if (response != null) {


                console.log("aise");
                var obj = JSON.parse(response);


                $.each(obj, function (index, row) {
                    var user_name = row['User_Name'];
                    var Status = row['Status'];
                    //console.log(Status);
                    if(Status == 1)
                        var str = "Admin";
                    else if(Status == 0)
                        var str = "Faculty";
                    else if(Status == 2)
                        var str = "Manager";
                    $('#acinfo').append('<tr> <td>'+user_name+'</td></tr><tr><td>'+str+'</td></tr><tr><td><input type="button" value="Change Password" id="change_password"' +
                        'onclick="change_password()" style="width: 100%"></td></tr><tr><td><input type="button" value="LOG OUT" id="logout"' +
                        'onclick="log_out()" style="width: 100%"></td></tr>');
                });
            }
        }
    });
});


load_def();

function log_out(){
    $.ajax({
        type: "POST",
        url: "clear_session_variable.php",
        success: function (response) {
            if (response != null) {
                console.log(response);
                if(response.match("1"))
                    window.location = "./index.php";
            }
        }
    });
}




function load_def(){

    $(document).ready(function() {
        $('#dynamic').html('');
        $.ajax({
            type: "POST",
            url: "manager.php",
            success: function (response) {

                if (response != null) {

                    console.log(response);
                    var obj = JSON.parse(response);

                    if(obj.length == 0)
                    {
                        $('#para').html('No Order');
                        $('#table_main').html('');
                    }
                    else
                    {
                        $.each(obj, function (index, row) {

                            var Account_number = row["Account_Number"];
                            var Order_No = row['Order_No'];
                            var Date = row['Date'];
                            var total = row['Total'];
                            //var Bill = row['Bill'];

                            $('#tbo1').append('<tr><td>'+Account_number+'</td><td>'+Order_No+'</td><td>'+Date+'</td><td>'+total+'</td><td><input type="button" style="width: 100%" class="button" value="See Detail Info" onClick="redirect_to_details('+Order_No+')"></td></tr>');

                        });
                    }


                }
            }
        });
    });
}





function redirect_to_details(order_no) {

    $.ajax({
        type: "POST",
        url: "set_session_variable.php",
        data: {order_no: order_no},
        success: function (response) {
            if (response != null) {
                console.log(response);
                //window.location = "details_pending_info.html";
            }
        }
    });




// Get the modal
    var modal = document.getElementById('myModal');
    var modal_body = document.getElementById('modal_body');

    $(document).ready(function() {
        $('#tbo2').html('');
        $('#tbo').html('');
        $.ajax({
            type: "POST",
            url: "order_details.php",
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

                        $('#tbo2').append('<tr><td>'+Account_number+'</td><td>'+Order_No+'</td><td>'+Date+'</td><td>'+total+'</td></tr>');




                        var nested_obj = JSON.parse(Bill);
                        $.each(nested_obj, function (index, row){
                            var item_no = row['item_no'];
                            var item_name = row['item_name'];
                            var item_cost = row['item_cost'];
                            var item_qty = row['item_qty'];
                            var amount = row['amount'];

                            $('#tbo').append('<tr><td>'+item_no+'</td><td>'+item_name+'</td><td>'+item_cost+'</td><td>'+item_qty+'</td><td>'+amount+'</td></tr>');

                        });

                    });
                }
            }
        });
    });



    modal.style.display = "block";

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];


    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var btn_dispatch = document.getElementById("Dispatch");

    btn_dispatch.onclick = function () {
        $.ajax({
            type: "POST",
            url: "dispatch_order.php",
            data: {order_no: order_no},
            success: function (response) {
                if (response != null) {
                    console.log(response);

                }
            }
        });
        modal.style.display = "none";
        var x = document.getElementById("snackbar");
        document.getElementById("snackbar").innerHTML ="Order "+order_no+" has been dispatched ";
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

        reload();
    }

}

function reload() {
    $(document).ready(function() {
        $('#tho').html('');
        $('#tbo1').html('');
        $.ajax({
            type: "POST",
            url: "manager.php",
            success: function (response) {

                if (response != null) {


                    // console.log(response);
                    var obj = JSON.parse(response);
                    if(obj.length == 0)
                    {
                        $('#para').html('No Order');
                        $('#table_main').html('');
                    }
                    else
                    {
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
            }
        });
    });
}



function change_password() {
    var pass_modal = document.getElementById('myModal_pass');
    pass_modal.style.display = "block";
// Get the button that opens the modal
    var btn_confirm = document.getElementById("pass_confirm");
    var btn_cancel = document.getElementById("pass_cancel");
// Get the <span> element that closes the modal
    var cl_span = document.getElementById("close");

// When the user clicks the button, open the modal
    btn_cancel.onclick = function () {
        pass_modal.style.display = "none";
        document.getElementById("modal_form_pass").reset();
    }

// When the user clicks on <span> (x), close the modal
    cl_span.onclick = function () {
        document.getElementById("modal_form_pass").reset();
        pass_modal.style.display = "none";
    }

    btn_confirm.onclick = function () {

        var old_pass = document.getElementById("old_pass");
        var new_pass = document.getElementById("new_pass");
        var con_pass = document.getElementById("con_pass");

        console.log(old_pass.value);
        console.log(new_pass.value);
        console.log(con_pass.value);

        $.ajax({
            type: "POST",
            url: "change_pass.php",
            data: {old_pass: old_pass.value,new_pass: new_pass.value,con_pass: con_pass.value},
            success: function (response) {
                console.log(response);
                if(response.match("1"))
                {
                    pass_modal.style.display = "none";
                    var x = document.getElementById("snackbar");
                    document.getElementById("snackbar").innerHTML = "Password Updated";
                    x.className = "show";

                    setTimeout(function(){
                        window.location = "./index.php";
                    }, 1000);


                }
                else {
                    var x = document.getElementById("snackbar");
                    document.getElementById("snackbar").innerHTML = response;
                    x.className = "show";

                    setTimeout(function () {
                        x.className = x.className.replace("show", "");
                    }, 1000);
                    pass_modal.style.display = "none";
                    document.getElementById("modal_form_pass").reset();
                    change_password();
                }

            }
        });

    }


}


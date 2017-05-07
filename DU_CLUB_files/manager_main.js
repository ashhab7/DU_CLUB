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


function log_out() {
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


function show_pending_orders() {
    console.log("aise");
    window.location = "show_pending_orders.html";
    //window.location="manager.php"
}

function change_menu() {
    window.location = "change_menu.html";
}

function add_item(){

    var add_item_modal = document.getElementById('myModal_add_item');
    add_item_modal.style.display = "block";
// Get the button that opens the modal
    var btn_confirm = document.getElementById("add_confirm");
    var btn_cancel = document.getElementById("add_cancel");
// Get the <span> element that closes the modal
    var cl_span = document.getElementById("add_item_close");

// When the user clicks the button, open the modal
    btn_cancel.onclick = function () {
        add_item_modal.style.display = "none";
        document.getElementById("modal_form_add_item").reset();
    }

// When the user clicks on <span> (x), close the modal
    cl_span.onclick = function () {
        add_item_modal.style.display = "none";
        document.getElementById("modal_form_add_item").reset();
    }

    btn_confirm.onclick = function () {

        var item_name = document.getElementById("add_item_name");
        var item_cost = document.getElementById("add_cost");


        console.log(item_name.value);
        console.log(item_cost.value);

        $.ajax({
            type: "POST",
            url: "add_item.php",
            data: {item_name: item_name.value, cost: item_cost.value},
            success: function (response) {
                console.log(response);
                if(response.match("success"))
                {
                    add_item_modal.style.display = "none";
                    var x = document.getElementById("snackbar");
                    document.getElementById("snackbar").innerHTML = item_name.value+" is added to Menu";
                    x.className = "show";

                    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);


                }
                else {
                    var x = document.getElementById("snackbar");
                    document.getElementById("snackbar").innerHTML = response;
                    x.className = "show";

                    setTimeout(function () {
                        x.className = x.className.replace("show", "");
                    }, 1000);
                    add_item_modal.style.display = "none";
                    document.getElementById("modal_form_add_item").reset();
                    add_item();
                }

            }
        });

    }



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
        document.getElementById("modal_form_pass").reset();
        pass_modal.style.display = "none";
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
                    var y = document.getElementById("snackbar");
                    document.getElementById("snackbar").innerHTML="Password Updated";
                    y.className = "show";

                    setTimeout(function(){
                        window.location = "./index.php";
                    }, 1000);


                }
                else {
                    var y = document.getElementById("snackbar");
                    document.getElementById("snackbar").innerHTML = response;
                    y.className = "show";

                    setTimeout(function () {
                        y.className = x.className.replace("show", "");
                    }, 1000);
                    pass_modal.style.display = "none";
                    document.getElementById("modal_form_pass").reset();
                    change_password();
                }

            }
        });

    }


}

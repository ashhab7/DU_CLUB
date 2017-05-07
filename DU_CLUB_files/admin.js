/**
 * Created by DELL on 5/6/2017.
 */

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



function load_def() {
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

}




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
        pass_modal.style.display = "none";
        document.getElementById("modal_form_pass").reset();
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

function add_faculty() {
    var add_faculty_modal = document.getElementById('myModal_add_faculty');
    add_faculty_modal.style.display = "block";
// Get the button that opens the modal
    var btn_add_confirm = document.getElementById("add_confirm");
    var btn_add_cancel = document.getElementById("add_cancel");
// Get the <span> element that closes the modal
    var cl_span = document.getElementById("add_faculty_close");

// When the user clicks the button, open the modal
    btn_add_cancel.onclick = function () {
        add_faculty_modal.style.display = "none";
    }

// When the user clicks on <span> (x), close the modal
    cl_span.onclick = function () {
        add_faculty_modal.style.display = "none";
    }

    btn_add_confirm.onclick = function () {

        var user_name = document.getElementById("user_name").value;
        var add_email = document.getElementById("add_email").value;
        var add_pass = document.getElementById("add_pass").value;
        var phone_number = document.getElementById("phone_number").value;
        var account_number = document.getElementById("account_number").value;
        var address = document.getElementById("address").value;
        $.ajax({
            type: "POST",
            url: "admin.php",
            data: {user_name: user_name,add_email:add_email,add_pass:add_pass,phone_number:phone_number,account_number:account_number,address:address},
            success: function (response) {
                if (response != null) {
                    console.log(response);
                    load_def();
                }
            }
        });

        add_faculty_modal.style.display = "none";
        var x = document.getElementById("snackbar");
        document.getElementById("snackbar").innerHTML ="Faculty "+user_name+" has been added ";
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

        document.getElementById("modal_form").reset();
    }
}


function rem_faculty() {

}
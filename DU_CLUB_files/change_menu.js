$(document).ready(function() {
    $('#acinfo').html('');

    $.ajax({
        type: "POST",
        url: "find_loggedin_user.php",
        success: function (response) {

            if (response != null) {


                console.log(response);
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


load_menu();

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





function load_menu() {
    $(document).ready(function() {
        $('#tho').html('');

        $.ajax({
            type: "POST",
            url: "change_menu.php",
            success: function (response) {

                if (response != null) {


                    console.log(response);
                    var obj = JSON.parse(response);


                    $.each(obj, function (index, row) {
                        var item_no = row['No'];
                        var item_name = row['Item'];
                        var cost = row['Cost'];
                        var Status = row['Status'];
                        //console.log(Status);
                        if(Status == 1)
                            var str = "Available"
                        else
                            var str = "Not Available";
                        $('#tbo').append('<tr><td>'+item_no+'</td><td>'+item_name+'</td><td>'+cost+'</td><td><input class="button" type="submit" onclick ="find_item('+item_no+')" value="'+str+'" ></td></tr>');
                    });
                }
            }
        });
    });

}


function find_item(item_no) {

//    window.location = "change_status.php?item_no="+item_no;

    $.ajax({
        type: "POST",
        url: "find_item.php",
        data: {item_no: item_no},
        success: function (response) {
            //alert(response);

            var obj = JSON.parse(response);


            $.each(obj, function (index, row) {
                var item_no = row['No'];

                var Status = row['Status'];

                if(Status == 1)
                {
                    Status = 0;
                    var str = "Available";
                }
                else if(Status == 0)
                {
                    Status = 1;
                    var str = "Not Available";
                }

                change_status(item_no,Status);

            });

        }
    });


}



function change_status(item_no,Status) {
        $.ajax({
        type: "POST",
        url: "change_status.php",
        data: {item_no:item_no,Status: Status},
        success: function (response) {
            //alert(response);
            if(response == 1)
                reload(item_no);
        }
    });
}



function reload(item_no){
    console.log("aise");
    var x = document.getElementById("snackbar");
    document.getElementById("snackbar").innerHTML ="Status of item no "+item_no+" has been changed ";
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    $('#tho').html('');
    $('#tbo').html('');
    //alert("kjhjhk");
    $.ajax({
        type: "POST",
        url: "change_menu.php",
        success: function (response) {

            if (response != null) {


                //console.log(response);
                var obj = JSON.parse(response);


                $.each(obj, function (index, row) {
                    var item_no = row['No'];
                    var item_name = row['Item'];
                    var cost = row['Cost'];
                    var Status = row['Status'];
                    if(Status == 1)
                        var str = "Available"
                    else
                        var str = "Not Available";
                    $('#tbo').append('<tr><td>'+item_no+'</td><td>'+item_name+'</td><td>'+cost+'</td><td><input class="button" style="width: 40%" type="submit" onclick ="find_item('+item_no+')" value="'+str+'" ></td></tr>');
                });
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





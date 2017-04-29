$(document).ready(function() {
    $('#tho').html('');

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
                    //console.log(Status);
                    if(Status == 1)
                        var str = "Available"
                    else
                        var str = "Not Available";
                    $('#tbo').append('<tr><td>'+item_no+'</td><td>'+item_name+'</td><td>'+cost+'</td><td><input style="width: 40%" type="submit" onclick ="find_item('+item_no+')" value="'+str+'" ></td></tr>');
                });
            }
        }
    });
});



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
    //console.log("aise");
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
                    $('#tbo').append('<tr><td>'+item_no+'</td><td>'+item_name+'</td><td>'+cost+'</td><td><input style="width: 40%" type="submit" onclick ="find_item('+item_no+')" value="'+str+'" ></td></tr>');
                });
            }
        }
    });
}
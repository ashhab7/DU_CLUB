<html>
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


    <title>Du Club Menu</title>

    <style>
        /* The Modal (background) */
        .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            padding-top: 100px; /* Location of the box */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        }

        /* Modal Content */
        .modal-content {
            position: relative;
            background-color: #fefefe;
            margin: auto;
            padding: 0;
            border: 1px solid #888;
            width: 80%;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
            -webkit-animation-name: animatetop;
            -webkit-animation-duration: 0.4s;
            animation-name: animatetop;
            animation-duration: 0.4s
        }

        /* Add Animation */
        @-webkit-keyframes animatetop {
            from {top:-300px; opacity:0}
            to {top:0; opacity:1}
        }

        @keyframes animatetop {
            from {top:-300px; opacity:0}
            to {top:0; opacity:1}
        }

        /* The Close Button */
        .close {
            color: white;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
        }

        .modal-header {
            padding: 2px 16px;
            background-color: #5cb85c;
            color: white;
        }

        .modal-body {padding: 2px 16px;}

        .modal-footer {
            padding: 2px 16px;
            background-color: #5cb85c;
            color: black;
        }
    </style>




    <script type="text/javascript" src="./DU_CLUB_files/jquery.js.download"></script>

    <script src="./DU_CLUB_files/bootstrap.js.download"></script>

    <link rel="stylesheet" type="text/css" href="./DU_CLUB_files/style_new.css">
    <link rel="stylesheet" type="text/css" href="./DU_CLUB_files/styledropdown_new.css">

    <script src="./DU_CLUB_files/menu_cart.js"></script>
</head>
<body>


<div id="acci_info">
    <center>
<div class="dropdown" style="float:right;" id="account_info">
    <button class="dropbtn">Account_Info</button>
    <div class="dropdown-content">
        <table class="table">

            <tbody id="acinfo">

            </tbody>
        </table>
    </div>
</div>
    <div id="heading"><h2 align="center" style="color:white; font-size: 20px;">Products on Your Shopping Cart</h2></div>
    </center>
</div>

<div>

<div id="cart"><div id="text"><center>To add products to your shopping cart click on "Add to Cart" Button</center></div></div>

<div align="center">

    <table class="table">
        <thead>
            <tr>
                <th>Item Number</th>
                <th>Item Name</th>
                <th>Cost</th>
                <th>Add Item</th>
            </tr>

        </thead>
        <tbody id="tbo">

        </tbody>
    </table>

    <div id="snackbar" align="center">...asmdnjsandsandjsand...</div>
</div>

<!-- Trigger/Open The Modal -->
<!-- The Modal -->
<div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <div class="modal-header">
            <span class="close">&times;</span>
            <h2>Order Confirmation</h2>
        </div>
        <div class="modal-body" id="modal_body">
            <p>Want to confirm you order???</p>

        </div>
        <div class="modal-footer">
            <h3><input type="submit" id="Confirm" value="Confirm">
                <input type="submit"  id="Cancel" value="Cancel">
            </h3>
        </div>
    </div>

</div>




    <div id="myModal_pass" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <div class="modal-header">
                <span class="close" id="close">&times;</span>
                <h2>Change Password</h2>
            </div>
            <div class="modal-body" id="modal_body">
                <p>You sure u wantt to change your password???</p>
                <form id="modal_form_pass">
                    Current Password:.<br>
                    <input type="password" id="old_pass" required><br>

                    New Password:<br>
                    <input type="password" id="new_pass" required><br>

                    Confirm Password:<br>
                    <input type="password" id="con_pass" required><br>

                </form>
            </div>
            <div class="modal-footer">
                <h3><input type="submit" id="pass_confirm" value="Confirm">
                    <input type="submit"  id="pass_cancel" value="Cancel">
                </h3>
            </div>
        </div>

    </div>

<p id="para"></p>

    <div id="myModal_order" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <div class="modal-header">
                <span class="close" id="order_close">&times;</span>
                <h2>Orders</h2>
            </div>
            <div class="modal-body">
                <table class="table" id="table_orders">
                    <thead>
                    <tr>
                        <th>Account Number</th>
                        <th>Order No</th>
                        <th>Date</th>
                        <th>Total</th>
                    </tr>
                    <tbody id="tbo_orders">

                    </tbody>
                </table>

            </div>

        </div>

    </div>


</div>

<div id="myModal_order_details" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <div class="modal-header">
            <span class="close" id="order_details_nested_close">&times;</span>
            <h2>Detailed Menu</h2>
        </div>
        <div class="modal-body" id="modal_body">

            <table class="table">
                <thead>
                <tr>
                    <th>Account Number</th>
                    <th>Order No</th>
                    <th>Date</th>
                    <th>Total</th>
                </tr>

                <tbody id="tbo2_order">

                </tbody>


                <table class="table">
                    <thead>
                    <tr>
                        <th>Item Number</th>
                        <th>Item Name</th>
                        <th>Cost</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>

                    </thead>
                    <tbody id="tbo_order">

                    </tbody>
                </table>
            </table>

        </div>
    </div>

</div>


</body>


</html>
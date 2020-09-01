<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
    <title>NosBasar Calc</title>
</head>
<body>

    <header>
        <img id="banner" src="img/banner.png" alt="">
        <img id="logo" src="img/logo.png" alt="">
        <h2 id="heading">Taler Trader</h2>
    </header>


    <input id="Talerpreis" type="text" placeholder="Preis pro Taler (in k)" autofocus>
    <input id="Update" type="submit" value="Update">

 
    <form action="update.php" id="updatedb" style="width:100%">

    
    <table class="display" style="width:100%" id="maintable">
        <thead>
            <tr>
                <th style="display:none"></th>
                <th class="min-desktop">
                    Name
                </th>
                <th class="min-desktop">
                    Taler
                </th>
                <th class="min-desktop">
                    Talerwert
                </th>
                <th class="min-desktop">
                    Basarwert
                </th>
                <th class="min-desktop">
                    Kaufen
                </th>
                <th class="min-desktop">
                    Differenz
                </th>
                <th class="min-desktop">
                    DiffPercent
                </th>
            </tr>
        </thead>
        <tbody>
        <?php
            // Create connection
            $pdo = new PDO('mysql:host=localhost;dbname=nosbasar', 'root', '');
            $sql = "SELECT * FROM `items`";
        
            foreach ($pdo->query($sql) as $row) {
                echo "<tr>";
                echo "<td style='display:none' class='id'>".$row['id']."</td>";
                echo "<td>".$row['Name']."</td>";
                echo "<td class='Taler'>".$row['Taler']."</td>";
                echo "<td class='Talerwert'>".$row['Talerwert']."</td>";
                echo "<td class='Basarwert'><input type='text' value='".$row['Basarwert']."'></td>";
                echo "<td class='Kaufen'></td>";
                echo "<td class='Diff'></td>";
                echo "<td class='DiffPercent'></td>";
                echo "</tr>";
             }
        ?>
        </tbody>
       
    </table>

    <input type="submit" value="Update DB">
    </form>
    <br><br>
    <form action="create.php" id="create" method="POST">
        <table>
            <tr>
                <td><input type="text" name="Name" placeholder="Name" required></td>
                <td><input type="text" name="Taler" placeholder="Taler" required></td>
            </tr>
            <tr>
                <td><input type="text" name="Basarwert" placeholder="Basarwert"></td>
                <td><input type="submit"></td>
            </tr>
        </table>
    </form>
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.2.5/js/dataTables.responsive.min.js"></script>
    <script src="calc.js"></script>
</body>
</html>
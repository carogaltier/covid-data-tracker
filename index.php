<!DOCTYPE html>
<html lang="en">
<head>
    <title>COVID-19 Dashboard - Worldwide Latest Data Visualization</title>
    <meta name="description" content="Up-to-date and historical world COVID-19 data, including cases, deaths, recovered, tests and vaccination status. Maps and charts for each country and continent.">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="latest COVID-19 data, coronavirus global trends, COVID data tracker, pandemic statistics">
    <meta name="author" content="Maria Carolina Gonzalez Galtier">
    <link rel="canonical" href="https://www.covidrealtimedata.com/" />

    <!-- ---------- DEFINING THE MAIN IMAGE OF THE WEBSITE ------- -->
    <meta property="og:image" content="img/light-mode-covid-real-time-data-logo.svg">
    <link rel="image_src" href="img/light-mode-covid-real-time-data-logo.svg">


    <!-- ---------------- FONTS ----------------- -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Nunito:wght@400;500&display=swap" rel="stylesheet">

    <!-- ---------------- NORMALIZE CSS ----------------- -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">

    <!-- ------------- CSS STYLES ------------ -->
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/grid.css">
    <link rel="stylesheet" href="css/aside.css">
    <link rel="stylesheet" href="css/lightMode.css">
    <link rel="stylesheet" href="css/scroll.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/btnTimeSelector.css">
    <link rel="stylesheet" href="css/card.css">
    <link rel="stylesheet" href="css/worldSummary.css">
    <link rel="stylesheet" href="css/charts.css">
    <link rel="stylesheet" href="css/table.css">
    <link rel="stylesheet" href="css/aboutMe.css">
    <link rel="stylesheet" href="css/credits.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/mediaQueries.css">

</head>

<body>

    <main class="grandparent-container">
        <?php require_once("aside.php");?>
        <div class="parent-container">
            <?php require_once("header.php");?>
            <?php require_once("worldSummary.php");?>
            <?php require_once("worldCasesLineChart.php");?>
            <?php require_once("worldDeathsLineChart.php");?>
            <?php require_once("worldMap1.php");?>
            <?php require_once("worldMap2.php");?>
            <?php require_once("worldVaccines.php");?>
            <?php require_once("continentSummary.php");?>
            <?php require_once("countrySummary.php");?>
            <?php require_once("aboutMe.php");?>
            <?php require_once("credits.php");?> 
            <div class="foot-text">
                <p>COVID-19 Real Time Data © 2022. <span class="foot-text1">Created by </span><a class="link" href="https://www.carolinagonzalezgaltier.com/">Carolina González Galtier </a></p>
            </div>
        </div>
    </main>

    <!-- ---------------------- LIBRARIES --------------------- -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.6.2/dist/chart.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0"></script>
    <script src="https://www.gstatic.com/charts/loader.js"></script>
   
    <!-- ---------------------- SCRIPTS -------------------------- -->
    <script src="js/index.js"></script>
    <script src="js/aside.js"></script>
    <script src="js/lightMode.js"></script>
    <script src="js/btnTimeSelector.js"></script>
    <script src="js/apiRequest.js"></script>
    <script src="js/worldLatest.js"></script>
    <script src="js/lineChart.js"></script>
    <script src="js/table.js"></script>
    <script src="js/worldMap.js"></script>
    <script src="js/worldVaccines.js"></script>
    <script src="js/continentLatest.js"></script>
    <script src="js/countryLatest.js"></script>
    <script src="js/functions.js"></script>
    <script src="js/language.js"></script>
    <script src="js/observer.js"></script>
</body>
</html>
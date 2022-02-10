// -------------- SHOWING DATA WHEN OPENING THE WEBSITE ---------------

async function firstLoad(){
    await populatecountrySelect();
    countryDataAdd(countrySelect);
};

window.onresize = function(){ location.reload(); }

function runCharts(){
    cardDataAdd();

    if(id("btnWeekly1").disabled == true) { 
        lineChartCases(dataWeekly, lineChart1, lineChart2, titleTextWeek);
    } if (id("btnMonthly1").disabled == true) {
        lineChartCases(dataMonthly, lineChart1, lineChart2, titleTextMonth);
    } if(id("btnAll1").disabled == true) {
        lineChartCases(dataAll, lineChart1, lineChart2, "");
    };

    if(id("btnWeekly2").disabled == true) { 
        lineChartDeaths(dataWeekly, lineChart3, lineChart4, titleTextWeek);
    } if (id("btnMonthly2").disabled == true) {
        lineChartDeaths(dataMonthly, lineChart3, lineChart4, titleTextMonth);
    } if(id("btnAll2").disabled == true) {
        lineChartDeaths(dataAll, lineChart3, lineChart4, "");
    };

    if(id("btnMapCases1").disabled == true) { 
        worldCasesMillion();
    } else { 
        worldDeathsMillion();
    }
    if(id("btnMapCases2").disabled == true) { 
        worldCases();
    } else { 
        worldDeaths();
    }

    if(id("btnWeekly3").disabled == true) { 
        lineChartVaccines(dataWeekly, lineChart5, lineChart6, titleTextWeek);
    } if (id("btnMonthly3").disabled == true) {
        lineChartVaccines(dataMonthly, lineChart5, lineChart6, titleTextMonth);
    } if(id("btnAll3").disabled == true) {
        lineChartVaccines(dataAll, lineChart5, lineChart6, "");
    };
    firstLoad();
    vaccineDataAdd();
    continentDataAdd(continentSelect);
  
    
};

runCharts();
// -------------- BUTTON EVENT LISTENERS -----------------------

id('btnToday1').addEventListener('click', () => { 
    cardDataAdd(); 
    id('btnToday1').disabled = true;
    id('btnYesterday1').disabled = false;
    id('btnTwoDaysAgo1').disabled = false;
});

id('btnYesterday1').addEventListener('click', () => { 
    cardDataAdd(true); 
    id('btnToday1').disabled = false;
    id('btnYesterday1').disabled = true;
    id('btnTwoDaysAgo1').disabled = false;
});

id('btnTwoDaysAgo1').addEventListener('click', () => { 
    cardDataAdd(false, true); 
    id('btnToday1').disabled = false;
    id('btnYesterday1').disabled = false;
    id('btnTwoDaysAgo1').disabled = true;
});

id('btnToday2').addEventListener('click', () => { 
    continentDataAdd(continentSelect); 
    id('btnToday2').disabled = true;
    id('btnYesterday2').disabled = false;
    id('btnTwoDaysAgo2').disabled = false;
});

id('btnYesterday2').addEventListener('click', () => { 
    continentDataAdd(continentSelect, true ); 
    id('btnToday2').disabled = false;
    id('btnYesterday2').disabled = true;
    id('btnTwoDaysAgo2').disabled = false;
});

id('btnTwoDaysAgo2').addEventListener('click', () => { 
    continentDataAdd(continentSelect, false, true ); 
    id('btnToday2').disabled = false;
    id('btnYesterday2').disabled = false;
    id('btnTwoDaysAgo2').disabled = true;
});

id('btnToday3').addEventListener('click', () => { 
    countryDataAdd(countrySelect); 
    id('btnToday3').disabled = true;
    id('btnYesterday3').disabled = false;
    id('btnTwoDaysAgo3').disabled = false;
});

id('btnYesterday3').addEventListener('click', () => { 
    countryDataAdd(countrySelect, true ); 
    id('btnToday3').disabled = false;
    id('btnYesterday3').disabled = true;
    id('btnTwoDaysAgo3').disabled = false;
});

id('btnTwoDaysAgo3').addEventListener('click', () => { 
    countryDataAdd(countrySelect, false, true ); 
    id('btnToday3').disabled = false;
    id('btnYesterday3').disabled = false;
    id('btnTwoDaysAgo3').disabled = true;
});

id('btnWeekly1').addEventListener('click', () => { 
    lineChartCases(dataWeekly, lineChart1, lineChart2, titleTextWeek);
    id('btnWeekly1').disabled = true;
    id('btnMonthly1').disabled = false;
    id('btnAll1').disabled = false;
 });
 
 id('btnMonthly1').addEventListener('click', () => { 
    lineChartCases(dataMonthly, lineChart1, lineChart2, titleTextMonth);
    id('btnWeekly1').disabled = false;
    id('btnMonthly1').disabled = true;
    id('btnAll1').disabled = false;
});

id('btnAll1').addEventListener('click', () => { 
    lineChartCases(dataAll, lineChart1, lineChart2, "");
    id('btnWeekly1').disabled = false;
    id('btnMonthly1').disabled = false;
    id('btnAll1').disabled = true;
});

id('btnWeekly2').addEventListener('click', () => { 
    lineChartDeaths(dataWeekly, lineChart3, lineChart4, titleTextWeek);
    id('btnWeekly2').disabled = true;
    id('btnMonthly2').disabled = false;
    id('btnAll2').disabled = false;
 });
 
 id('btnMonthly2').addEventListener('click', () => { 
    lineChartDeaths(dataMonthly, lineChart3, lineChart4, titleTextMonth);
    id('btnWeekly2').disabled = false;
    id('btnMonthly2').disabled = true;
    id('btnAll2').disabled = false;
});

id('btnAll2').addEventListener('click', () => { 
    lineChartDeaths(dataAll, lineChart3, lineChart4, "");
    id('btnWeekly2').disabled = false;
    id('btnMonthly2').disabled = false;
    id('btnAll2').disabled = true;
});

id('btnWeekly3').addEventListener('click', () => { 
    lineChartVaccines(dataWeekly, lineChart5, lineChart6, titleTextWeek);
    id('btnWeekly3').disabled = true;
    id('btnMonthly3').disabled = false;
    id('btnAll3').disabled = false;
 });
 
 id('btnMonthly3').addEventListener('click', () => { 
    lineChartVaccines(dataMonthly, lineChart5, lineChart6, titleTextMonth);
    id('btnWeekly3').disabled = false;
    id('btnMonthly3').disabled = true;
    id('btnAll3').disabled = false;
});

id('btnAll3').addEventListener('click', () => { 
    lineChartVaccines(dataAll, lineChart5, lineChart6, "");
    id('btnWeekly3').disabled = false;
    id('btnMonthly3').disabled = false;
    id('btnAll3').disabled = true;
});

id('btnMapCases1').addEventListener('click', () => { 
    worldCasesMillion();
    id('btnMapCases1').disabled = true;
    id('btnMapDeaths1').disabled = false;

 });
 
 id('btnMapDeaths1').addEventListener('click', () => { 
    worldDeathsMillion();
    id('btnMapCases1').disabled = false;
    id('btnMapDeaths1').disabled = true;
});

id('btnMapCases2').addEventListener('click', () => { 
    worldCases();
    id('btnMapCases2').disabled = true;
    id('btnMapDeaths2').disabled = false;

 });
 
 id('btnMapDeaths2').addEventListener('click', () => { 
    worldDeaths();
    id('btnMapCases2').disabled = false;
    id('btnMapDeaths2').disabled = true;
});
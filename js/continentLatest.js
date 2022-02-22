// -------- CONTINENT LATEST COVID STATS AND PIE CHART FUNCTION ---------------
let continentSelect = id("continentSelect");


function continentDataAdd(object=continentSelect, yest, twoDays) {
    btnToday2.disabled = true;
    btnYesterday2.disabled = false;
    btnTwoDaysAgo2.disabled = false;
    
    let continentValue = object.value;
    let continentText = object.options[object.selectedIndex].text;
    id("continentName").textContent = continentText;

    latestContinentData(continent=continentValue, yest, twoDays).then(response => {
        let date = new Date(response.updated).toLocaleString(lang, {
            day: 'numeric', 
            year: 'numeric', 
            month: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric',
            timeZoneName: 'short'  
        });
        
        id("continentDate").textContent = date;
        idContent("totalCases2", response.cases, lang);
        idContent("totalDeaths2", response.deaths, lang);
        idContent("totalRecovered2", response.recovered, lang);
        idContent("totalTests2", response.tests, lang);
        testPeople = (response.tests / response.population).toFixed(2);
        idContent("testsPerPeople2", testPeople, lang);
        idContent("todayCases2", response.todayCases, lang);
        idContent("todayDeaths2", response.todayDeaths, lang);
        idContent("todayRecovered2", response.todayRecovered, lang);
        idContent("casesMillion2", response.casesPerOneMillion, lang);
        idContent("deathsMillion2", response.deathsPerOneMillion, lang);
        idContent("recoveredMillion2", response.recoveredPerOneMillion, lang);
        idContent("criticalMillion2", response.criticalPerOneMillion, lang);
        idContent("activeMillion2", response.activePerOneMillion, lang);
        idContent("testsMillion2", response.testsPerOneMillion, lang);

        // ------------ CHECKING IF THE CANVAS IS ALREADY USED -------------------
        if(nameCanvas7 !== undefined){ nameCanvas7.destroy(); } 
        if(nameCanvas8 !== undefined){ nameCanvas8.destroy(); } 


        // ------------ PIE CHART CASES DISTRIBUTION -----------------
        nameCanvas7 = new Chart(pieCasesDist2, {
            type: 'doughnut',    
            data: {
                labels: pieLabels.pieLabel1,
                datasets: [{
                data: [response.recovered, response.active, response.deaths],
                backgroundColor: [green, yellow, red],
                borderColor: "transparent"
                }]
            },
            options: {
                locale: lang,
                responsive: "true",
                maintainAspectRatio: "false",
                color: middleGrey,
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'start',
                        labels: { 
                            boxWidth: 20,
                            boxHeight: 20,
                            font: { 
                                size: fontSize,
                                family: fontNunito,
                                weight: '400'
                            }
                        }
                    }, 
   
                    datalabels: { 
                        formatter: (value, pieCasesDist2) => {
                            const datapoints = pieCasesDist2.chart.data.datasets[0].data
                            const total = datapoints.reduce((total, datapoint) => total + datapoint, 0)
                            const percentage = value / total * 100
                            return percentage.toFixed(0) + "%";
                        },
                        anchor: 'center',
                        align: 'center',
                        color: '#000000',                   
                        labels: {            
                            title: {
                                padding: 0,
                                font: { 
                                    size: fontSize,
                                    weight: '300' 
                                },
                            },
                        }
                    },
                },
            }
        });

        
        // ------- PIE CHART WORLD'S POPULATION INFECTED  ------------
        nameCanvas8 = new Chart(pieCasesPop2, {
            type: 'doughnut',    
            data: {
                labels: pieLabels.pieLabel2,
                datasets: [{
                data: [(response.population - response.cases), response.cases],
                backgroundColor: [green, red],
                borderColor: "transparent"
                }]
            },
            options: { 
                locale: lang,
                responsive: "true",
                maintainAspectRatio: "false",
                color: middleGrey,    
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'start',
                        labels: { 
                            boxWidth: 20,
                            boxHeight: 20,                    
                            font: { 
                                size: fontSize,
                                family: fontNunito,
                                weight: '400'
                            }
                        }
                    },  
                    datalabels: {
                        formatter: (value, pieCasesPop2) => {
                            const datapoints = pieCasesPop2.chart.data.datasets[0].data
                            const total = datapoints.reduce((total, datapoint) => total + datapoint, 0)
                            const percentage = value / total * 100
                            return percentage.toFixed(0) + "%";
                        },
                        anchor: 'center',
                        align: 'center',
                        color: '#000',                   
                        labels: {            
                            title: {
                                padding: 0,
                                font: { size: fontSize,
                                        weight: '300' 
                                },
                            },
                        },
                    },
                },
            },
        });
    });  
}


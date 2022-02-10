// -------- LATEST COVID STATS AND PIE CHART FUNCTION ---------------
function cardDataAdd(yest, twoDays){
    latestData(yest, twoDays).then(response => {
        let todayDateAPI = new Date(response.updated).toLocaleString(lang, {
            day: 'numeric', 
            year: 'numeric', 
            month: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric',
            timeZoneName: 'short' 
        });
        
        classes("todayDate", todayDateAPI);
        idContent("totalCases", response.cases, lang);
        idContent("totalDeaths", response.deaths, lang);
        idContent("totalRecovered", response.recovered, lang);
        idContent("totalTests", response.tests, lang);
        testPeople = (response.tests / response.population).toFixed(2);
        idContent("testsPerPeople", testPeople, lang);
        idContent("todayCases", response.todayCases, lang);
        idContent("todayDeaths", response.todayDeaths, lang);
        idContent("todayRecovered", response.todayRecovered, lang);
        idContent("casesMillion", response.casesPerOneMillion, lang);
        idContent("deathsMillion", response.deathsPerOneMillion, lang);
        idContent("recoveredMillion", response.recoveredPerOneMillion, lang);
        idContent("criticalMillion", response.criticalPerOneMillion, lang);
        idContent("activeMillion", response.activePerOneMillion, lang);
        idContent("testsMillion", response.testsPerOneMillion, lang);


        // ------------ CHECKING IF THE CANVAS IS ALREADY USED -------------------
        if(nameCanvas11 !== undefined){ nameCanvas11.destroy(); } 
        if(nameCanvas12 !== undefined){ nameCanvas12.destroy(); } 


        // ------------ PIE CHART CASES DISTRIBUTION -----------------
        nameCanvas11 = new Chart(pieCasesDist1, {
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
                color: "#aaaaaa",
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'start',
                        labels: { 
                            boxWidth: 20,
                            boxHeight: 20,
                            font: { 
                                size: fontSize,
                                family: 'Montserrat',
                                weight: '400'
                            }
                        }
                    }, 
   
                    datalabels: { 
                        formatter: (value, pieCasesDist1) => {
                            const datapoints = pieCasesDist1.chart.data.datasets[0].data
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
        nameCanvas12 = new Chart(pieCasesPop1, {
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
                color: "#aaaaaa",     
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'start',
                        labels: { 
                            boxWidth: 20,
                            boxHeight: 20,                    
                            font: { 
                                size: fontSize,
                                family: 'Montserrat',
                                weight: '400'
                            }
                        }
                    },  
                    datalabels: {
                        formatter: (value, pieCasesPop1) => {
                            const datapoints = pieCasesPop1.chart.data.datasets[0].data
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
                                font: { 
                                    size: fontSize,
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




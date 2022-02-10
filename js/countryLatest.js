let countrySelect = id("countrySelect");
let countryChosen;

async function populatecountrySelect(){
    countrySelect.length = 0;
    await getMapLabels().then((response) => {  
        countryLabels = new Array();
        response.forEach(function(item){ 
            
            if(item.countryInfo.iso2 !== null){
                if(lang == "es") {
                countryName = regionNamesInSpanish.of(item.countryInfo.iso2);
                } else {
                countryName = regionNamesInEnglish.of(item.countryInfo.iso2);
                }; 

                countryLabels.push({val: item.countryInfo.iso2, text: countryName});
            } ; 
        });
        countryLabels = countryLabels.sort((a, b) => {
            return a.text.localeCompare(b.text)
          });

        for(let i = 0; i < countryLabels.length; i++){
            option = document.createElement('option');
            option.setAttribute('value', countryLabels[i].val);
            option.appendChild(document.createTextNode(countryLabels[i].text));
            countrySelect.appendChild(option);
        };       
        if(countryChosen != undefined) {
            countrySelect.value = countryChosen;
        };
        
    }); 
};



// -------- CONTINENT LATEST COVID STATS AND PIE CHART FUNCTION ---------------
function countryDataAdd(object=countrySelect, yest, twoDays) {
    countryChosen = object.value;
    btnToday3.disabled = true;
    btnYesterday3.disabled = false;
    btnTwoDaysAgo3.disabled = false;
    let countryValue = object.value;
    let countryText = object.options[object.selectedIndex].text;
    id("countryName").textContent = countryText;

    latestCountryData(country = countryValue, yest, twoDays).then(response => {
        let date = new Date(response.updated).toLocaleString(lang, {
            day: 'numeric', 
            year: 'numeric', 
            month: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric',
            timeZoneName: 'short'  
        });


        id("countryDate").textContent = date;
        idContent("totalCases3", response.cases, lang);
        idContent("totalDeaths3", response.deaths, lang);
        idContent("totalRecovered3", response.recovered, lang);
        idContent("totalTests3", response.tests, lang);
        testPeople = (response.tests / response.population).toFixed(2);
        idContent("testsPerPeople3", testPeople, lang);
        idContent("todayCases3", response.todayCases, lang);
        idContent("todayDeaths3", response.todayDeaths, lang);
        idContent("todayRecovered3", response.todayRecovered, lang);
        idContent("casesMillion3", response.casesPerOneMillion, lang);
        idContent("deathsMillion3", response.deathsPerOneMillion, lang);
        idContent("recoveredMillion3", response.recoveredPerOneMillion, lang);
        idContent("criticalMillion3", response.criticalPerOneMillion, lang);
        idContent("activeMillion3", response.activePerOneMillion, lang);
        idContent("testsMillion3", response.testsPerOneMillion, lang);

        // ------------ CHECKING IF THE CANVAS IS ALREADY USED -------------------
        if(nameCanvas9 !== undefined){ nameCanvas9.destroy(); } 
        if(nameCanvas10 !== undefined){ nameCanvas10.destroy(); } 


        // ------------ PIE CHART COUNTRY CASES DISTRIBUTION -----------------
        nameCanvas9 = new Chart(pieCasesDist3, {
            type: 'doughnut',    
            data: {
                labels: pieLabels.pieLabel1,
                datasets: [{
                data: [response.recovered, response.active, response.deaths],
                backgroundColor: ["#4bc0c0", "#ffcd56", "#ff6384"],
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
                        formatter: (value, pieCasesDist3) => {
                            const datapoints = pieCasesDist3.chart.data.datasets[0].data
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

        
        // ------- PIE CHART COUNTRY POPULATION INFECTED  ------------
        nameCanvas10 = new Chart(pieCasesPop3, {
            type: 'doughnut',    
            data: {
                labels: pieLabels.pieLabel2,
                datasets: [{
                data: [(response.population - response.cases), response.cases],
                backgroundColor: ["#4bc0c0", "#ff6384"],
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
                        formatter: (value, pieCasesPop3) => {
                            const datapoints = pieCasesPop3.chart.data.datasets[0].data
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


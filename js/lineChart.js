//  ---------------- LINE CHART CASES FUNCTION ---------------------------
function lineChartCases(param= dataWeekly, canvasID1= lineChart1, canvasID2= lineChart2, titleText= titleTextWeek) {
    
    // --------- CUSTOMIZING LINE BORDER WHEN ALL DATA IS SHOWED -----------
    let lineRadius;
    if (param == 'all') { lineRadius = 0; } 
    else { lineRadius = 3; }
    
    // ------------- API DATA REQUEST --------------
    historicalData(param).then(response => {
        // -------------------------- DECLARING VARIABLES ------------------------
        let casesKeys = Object.keys(response.cases);
        casesKeys.shift();
        let casesKeysArray = new Array();
        for(let i = 0; i < casesKeys.length; i++) {
           casesKeysItem = new Date(casesKeys[i]).toLocaleString(lang, {
                day: 'numeric', 
                year: 'numeric', 
                month: 'numeric' 
            });
            casesKeysArray.push(casesKeysItem);
        };    

        let casesVal = Object.values(response.cases); 
        
        let casesArray = new Array();
        for(let i = 1; i < (casesVal.length); i++) {
                casesValNew = casesVal[i] - casesVal[i-1];
            casesArray.push(casesValNew);
        };
        
        let casesValCu = casesVal;
        casesValCu.shift();
         
        lineChartTitle1.textContent = titleText;     
        lineChartTitle2.textContent = titleText;     

        // ------------ CHECKING IF THE CANVAS IS ALREADY USED -------------------
        if(nameCanvas1 !== undefined){ nameCanvas1.destroy(); } 
        if(nameCanvas2 !== undefined){ nameCanvas2.destroy(); } 

        let dataCasesCu = {
            label: lineChartContent[0],
            data: casesValCu,
            backgroundColor:"#ffa04069",
            borderWidth: 2,
            radius: lineRadius,
            fill: true,
            borderColor: '#ff9f40',
            tension: 0.1,
            datalabels: {
                labels: { display: false }
            }
        };   

        let dataCases = {
            label: lineChartContent[0],
            data: casesArray,
            backgroundColor:"#ffa04069",
            borderWidth: 2,
            radius: lineRadius,
            fill: true,
            borderColor: '#ff9f40',
            tension: 0.1,
            datalabels: {
                labels: { display: false }
            }
        };       

        // --------------------- SHOWING CASES LINE CHART -------------------------
        nameCanvas1 = new Chart(canvasID1, {
            type: 'line',
            data: {
                labels: casesKeysArray,
                datasets: [dataCasesCu],
            },
            options: {    
                locale: lang,
                responsive: true,
                aspectRatio: aspectRatio1, 
                mantainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { 
                            boxWidth: 20,
                            boxHeight: 20,  
                            color: "#aaaaaa", 
                            font: { 
                                size: fontSize,
                                family: 'Montserrat',
                                weight: '400' 
                            },
                        },                
                    },
                },
                scales: {
                    x: {
                        grid: {
                            color: "#aaaaaa16",
                        },
                        title: {
                            display: true,
                            text: lineChartContent[1],
                            color: '#aaaaaa',
                            font: {
                            family: 'Montserrat',
                            size: fontSize,
                            weight: '400',                         
                            },
                        },
                        ticks: {
                            padding: 8,
                            color: "#aaaaaa",
                            font: {
                                family: 'Montserrat',
                                size: fontSize,
                                weight: '300',                      
                            },
                        },
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: "#aaaaaa45",
                        },
                        title: {
                        display: true,
                        text: lineChartContent[2],
                        color: '#aaaaaa',
                        font: {
                          family: 'Montserrat',
                          size: fontSize,
                          weight: '400',                         
                        },
                      },
                        ticks: {
                            padding: 8,
                            color: "#aaaaaa",
                            font: {
                                family: 'Montserrat',
                                size: fontSize,
                                weight: '300',                      
                            },
                        },
                    },
                },
            },
        });  


        // --------------------- SHOWING CASES LINE CHART -------------------------
        nameCanvas2 = new Chart(canvasID2, {
            type: 'line',
            data: {
                labels: casesKeysArray,
                datasets: [dataCases]
            },
            options: {    
                locale: lang,
                responsive: true,
                aspectRatio: aspectRatio1, 
                mantainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { 
                            boxWidth: 20,
                            boxHeight: 20,  
                            color: "#aaaaaa", 
                            font: { 
                                size: fontSize,
                                family: 'Montserrat',
                                weight: '400' 
                            },
                        },                
                    },
                },
                scales: {
                    x: {
                        grid: {
                            color: "#aaaaaa16",
                        },
                        title: {
                            display: true,
                            text: lineChartContent[1],
                            color: '#aaaaaa',
                            font: {
                            family: 'Montserrat',
                            size: fontSize,
                            weight: '400',                         
                            },
                        },
                        ticks: {
                            padding: 8,
                            color: "#aaaaaa",
                            font: {
                                family: 'Montserrat',
                                size: fontSize,
                                weight: '300',                      
                            },
                        },
                        
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: "#aaaaaa45",
                        },
                        title: {
                        display: true,
                        text: lineChartContent[2],
                        color: '#aaaaaa',
                        font: {
                          family: 'Montserrat',
                          size: fontSize,
                          weight: '400',                         
                        },
                      },
                        ticks: {
                            padding: 8,
                            color: "#aaaaaa",
                            font: {
                                family: 'Montserrat',
                                size: fontSize,
                                weight: '300',                      
                            },
                        },
                    },
                },
            },
        });  
    });  
};


//  ---------------- LINE CHART DEATHS FUNCTION ---------------------------
function lineChartDeaths(param= dataWeekly, canvasID3= lineChart3, canvasID4= lineChart4, titleText= titleTextWeek) {
    let lineRadius;
    // --------- CUSTOMIZING LINE BORDER WHEN ALL DATA IS SHOWED -----------
    if (param == 'all') { lineRadius = 0; } 
    else { lineRadius = 3; }
    
    // ------------- API DATA REQUEST --------------
    historicalData(param).then(response => {
        
        // -------------------------- DECLARING VARIABLES ------------------------

        let deathsKeys = Object.keys(response.deaths);
        deathsKeys.shift();


        let deathsKeysArray = new Array();
        for(let i = 0; i < deathsKeys.length; i++) {
           deathsKeysItem = new Date(deathsKeys[i]).toLocaleString(lang, {
                day: 'numeric', 
                year: 'numeric', 
                month: 'numeric' 
            });
            deathsKeysArray.push(deathsKeysItem);
        };  


        let deathsVal = Object.values(response.deaths); 
        
        let deathsArray = new Array();
        for(let i = 1; i < (deathsVal.length); i++) {
                deathsValNew = deathsVal[i] - deathsVal[i-1];
                deathsArray.push(deathsValNew);
        };
        
        let deathsValCu = deathsVal;
        deathsValCu.shift();
        
        lineChartTitle3.textContent = titleText;     
        lineChartTitle4.textContent = titleText;     

        // ------------ CHECKING IF THE CANVAS IS ALREADY USED -------------------
        if(nameCanvas3 !== undefined){ nameCanvas3.destroy(); } 
        if(nameCanvas4 !== undefined){ nameCanvas4.destroy(); } 

        let dataDeathsCu = {
            label: lineChartContent[3],
            data: deathsValCu,
            backgroundColor:"#ff638469",
            borderWidth: 2,
            radius: lineRadius,
            fill: true,
            borderColor: '#ff6384',
            tension: 0.1,
            datalabels: {
                labels: { display: false }
            }
        };   

        let dataDeaths = {
            label: lineChartContent[3],
            data: deathsArray,
            backgroundColor:"#ff638469",
            borderWidth: 2,
            radius: lineRadius,
            fill: true,
            borderColor: '#ff6384',
            tension: 0.1,
            datalabels: {
                labels: { display: false }
            }
        };       

        // --------------------- SHOWING CASES LINE CHART -------------------------
        nameCanvas3 = new Chart(canvasID3, {
            type: 'line',
            data: {
                labels: deathsKeysArray,
                datasets: [dataDeathsCu],
            },
            options: {   
                locale: lang, 
                responsive: true,
                aspectRatio: aspectRatio1, 
                mantainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { 
                            boxWidth: 20,
                            boxHeight: 20,  
                            color: "#aaaaaa", 
                            font: { 
                                size: fontSize,
                                family: 'Montserrat',
                                weight: '400' 
                            },
                        },                
                    },
                },
                scales: {
                    x: {
                        grid: {
                            color: "#aaaaaa16",
                        },
                        title: {
                            display: true,
                            text: lineChartContent[1],
                            color: '#aaaaaa',
                            font: {
                            family: 'Montserrat',
                            size: fontSize,
                            weight: '400',                         
                            },
                        },
                        ticks: {
                            padding: 8,
                            color: "#aaaaaa",
                            font: {
                                family: 'Montserrat',
                                size: fontSize,
                                weight: '300',                      
                            },
                        },
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: "#aaaaaa45",
                        },
                        title: {
                        display: true,
                        text: lineChartContent[4],
                        color: '#aaaaaa',
                        font: {
                          family: 'Montserrat',
                          size: fontSize,
                          weight: '400',                         
                        },
                      },
                        ticks: {
                            padding: 8,
                            color: "#aaaaaa",
                            font: {
                                family: 'Montserrat',
                                size: fontSize,
                                weight: '300',                      
                            },
                        },
                    },
                },
            },
        });  


        // --------------------- SHOWING CASES LINE CHART -------------------------
        nameCanvas4 = new Chart(canvasID4, {
            type: 'line',
            data: {
                labels: deathsKeysArray,
                datasets: [dataDeaths]
            },
            options: {    
                locale: lang,
                responsive: true,
                aspectRatio: aspectRatio1, 
                mantainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { 
                            boxWidth: 20,
                            boxHeight: 20,  
                            color: "#aaaaaa", 
                            font: { 
                                size: fontSize,
                                family: 'Montserrat',
                                weight: '400' 
                            },
                        },                
                    },
                },
                scales: {
                    x: {
                        grid: {
                            color: "#aaaaaa16",
                        },
                        title: {
                            display: true,
                            text: lineChartContent[1],
                            color: '#aaaaaa',
                            font: {
                            family: 'Montserrat',
                            size: fontSize,
                            weight: '400',                         
                            },
                        },
                        ticks: {
                            padding: 8,
                            color: "#aaaaaa",
                            font: {
                                family: 'Montserrat',
                                size: fontSize,
                                weight: '300',                      
                            },
                        },
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: "#aaaaaa45",
                        },
                        title: {
                        display: true,
                        text: lineChartContent[4],
                        color: '#aaaaaa',
                        font: {
                          family: 'Montserrat',
                          size: fontSize,
                          weight: '400',                         
                        },
                      },
                        ticks: {
                            padding: 8,
                            color: "#aaaaaa",
                            font: {
                                family: 'Montserrat',
                                size: fontSize,
                                weight: '300',                      
                            },
                        },
                    },
                },
            },
        });  
    });  
};


//  ---------------- LINE CHART VACCINES FUNCTION ---------------------------
function lineChartVaccines(param= dataWeekly, canvasID5= lineChart5, canvasID6= lineChart6, titleText= titleTextWeek) {
    let lineRadius;
    // --------- CUSTOMIZING LINE BORDER WHEN ALL DATA IS SHOWED -----------
    if (param == 'all') { lineRadius = 0; } 
    else { lineRadius = 3; }
    
    vaccineData(param).then(function(response) {
        let vaccineData = response;
        vaccineData.pop();

        vaccineDateArray = new Array();
        vaccineTotalArray = new Array();
        vaccineDailyArray = new Array();

        for(let i = 0; i < (vaccineData.length); i++) {

            date = new Date(vaccineData[i].date).toLocaleString(lang, {
                day: 'numeric', 
                year: 'numeric', 
                month: 'numeric' 
            });
            vaccineDateVal = date;
            vaccineTotalVal = vaccineData[i].total;
            vaccineDailyVal = vaccineData[i].daily;
            vaccineDateArray.push(vaccineDateVal);
            vaccineTotalArray.push(vaccineTotalVal);
            vaccineDailyArray.push(vaccineDailyVal);
        };

        
        lineChartTitle5.textContent = titleText;     
        lineChartTitle6.textContent = titleText;    

        // ------------ CHECKING IF THE CANVAS IS ALREADY USED -------------------
        if(nameCanvas5 !== undefined){ nameCanvas5.destroy(); } 
        if(nameCanvas6 !== undefined){ nameCanvas6.destroy(); } 

        let dataVaccineCu = {
            label: lineChartVac[0],
            data: vaccineTotalArray,
            backgroundColor:"#36a2eb69",
            borderWidth: 2,
            radius: lineRadius,
            fill: true,
            borderColor: '#36a2eb',
            tension: 0.1,
            datalabels: {
                labels: { display: false }
            }
        };   

        let dataDailyVaccine = {
            label: lineChartVac[1],
            data: vaccineDailyArray,
            backgroundColor:"#87e4a369",
            borderWidth: 2,
            radius: lineRadius,
            fill: true,
            borderColor: '#87e4a3',
            tension: 0.1,
            datalabels: {
                labels: { display: false }
            }
        };       

        // --------------------- SHOWING CASES LINE CHART -------------------------
        nameCanvas5 = new Chart(canvasID5, {
            type: 'line',
            data: {
                labels: vaccineDateArray,
                datasets: [dataVaccineCu],
            },
            options: {    
                locale: lang,
                responsive: true,
                aspectRatio: aspectRatio2, 
                mantainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { 
                            boxWidth: 20,
                            boxHeight: 20,  
                            color: "#aaaaaa", 
                            font: { 
                                size: fontSize,
                                family: 'Montserrat',
                                weight: '400' 
                            },
                        },                
                    },
                },
                scales: {
                    x: {
                        grid: {
                            color: "#aaaaaa16",
                        },
                        title: {
                            display: true,
                            text: lineChartVac[2],
                            color: '#aaaaaa',
                            font: {
                            family: 'Montserrat',
                            size: fontSize,
                            weight: '400',                         
                            },
                        },
                        ticks: {
                            padding: 8,
                            color: "#aaaaaa",
                            font: {
                                family: 'Montserrat',
                                size: fontSize,
                                weight: '300',                      
                            },
                        },
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: "#aaaaaa45",
                        },
                        title: {
                        display: true,
                        text: lineChartVac[3],
                        color: '#aaaaaa',
                        font: {
                          family: 'Montserrat',
                          size: fontSize,
                          weight: '400',                         
                        },
                      },
                        ticks: {
                            padding: 8,
                            color: "#aaaaaa",
                            font: {
                                family: 'Montserrat',
                                size: fontSize,
                                weight: '300',                      
                            },
                        },
                    },
                },
            },
        });  


        // --------------------- SHOWING CASES LINE CHART -------------------------
        nameCanvas6 = new Chart(canvasID6, {
            type: 'line',
            data: {
                labels: vaccineDateArray,
                datasets: [dataDailyVaccine]
            },
            options: {    
                locale: lang,
                responsive: true,
                aspectRatio: aspectRatio2, 
                mantainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { 
                            boxWidth: 20,
                            boxHeight: 20,  
                            color: "#aaaaaa", 
                            font: { 
                                size: fontSize,
                                family: 'Montserrat',
                                weight: '400' 
                            },
                        },                
                    },
                },
                scales: {
                    x: {
                        grid: {
                            color: "#aaaaaa16",
                        },
                        title: {
                            display: true,
                            text: lineChartVac[2],
                            color: '#aaaaaa',
                            font: {
                            family: 'Montserrat',
                            size: fontSize,
                            weight: '400',                         
                            },
                        },
                        ticks: {
                            padding: 8,
                            color: "#aaaaaa",
                            font: {
                                family: 'Montserrat',
                                size: fontSize,
                                weight: '300',                      
                            },
                        },
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: "#aaaaaa45",
                        },
                        title: {
                        display: true,
                        text: lineChartVac[3],
                        color: '#aaaaaa',
                        font: {
                          family: 'Montserrat',
                          size: fontSize,
                          weight: '400',                         
                        },
                      },
                        ticks: {
                            padding: 8,
                            color: "#aaaaaa",
                            font: {
                                family: 'Montserrat',
                                size: fontSize,
                                weight: '300',                      
                            },
                        },
                    },
                },
            },
        });  
    });  
};






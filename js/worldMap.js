// ------------------ WORLD MAP FUNCTION ---------------------------
function googleChart(labelsData, colorArray, mapID ) {
    google.charts.load('current', {
        'packages':['geochart'],
        'mapsApiKey': 'your-API-key-here'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);
      function drawRegionsMap() {
        let data = google.visualization.arrayToDataTable(labelsData);
        let options = {
            legend: 'none',
            maintainAspectRatio: false, 
            colorAxis: {
                colors: colorArray
              },
              backgroundColor: 'none',
        };
        let chart = new google.visualization.GeoChart(mapID);
        chart.draw(data, options);
      }
};


// ------------ WORLD CASES PER MILLION --------------------
async function worldCasesMillion(){
   await getMapLabels().then((response) => {   
    let table = document.getElementById("table1");
    table.textContent = "";

      mapLabels = [mapLabelsContent1];
      let tableArray = [];
       
      response.forEach(function(item){ 
            
      if(item.countryInfo.iso2 !== null){
        if(lang == "es") {
          countryName = regionNamesInSpanish.of(item.countryInfo.iso2);
        } else {
          countryName = regionNamesInEnglish.of(item.countryInfo.iso2);
        }  
      };
      
      mapLabels.push([{v: item.countryInfo.iso2, f: countryName}, item.casesPerOneMillion]);
      tableArray.push( {[mapLabelsContent1[0]]: countryName, [mapLabelsContent1[1]]: item.casesPerOneMillion } );
      });

      tableArray = tableArray.sort((a, b) => b[mapLabelsContent1[1]] - a[mapLabelsContent1[1]]).slice(0,10);

      for(let i = 0; i < tableArray.length; i++){
        tableArray[i][mapLabelsContent1[1]] = new Intl.NumberFormat(lang).format(tableArray[i][mapLabelsContent1[1]]);
      };
      
      let data = Object.keys(tableArray[0]);
  
      generateTable(table, tableArray); 
      generateTableHead(table, data); 
      return mapLabels;
  });
  googleChart(mapLabels, colorCases, worldMap1);    

  if(lang == "es") {
    id('relativeTitle').textContent = "Casos por millón de COVID-19 en el mundo";
    id('tableCases1').textContent = "Top 10 de paises con el mayor número de casos por millón";
    id('mapCases1').textContent = "Distribución de casos por millón en el mundo";
  } else {
    id('relativeTitle').textContent = "Global COVID-19 total cases per million";
    id('tableCases1').textContent = "Top 10 countries with the highest total cases per million";
    id('mapCases1').textContent = "World COVID-19 total cases per million distribution";
  };

};


// ------------ WORLD DEATHS PER MILLION --------------------
async function worldDeathsMillion(){
    await getMapLabels().then((response) => {   
        let table = document.getElementById("table1");
        table.textContent = "";
        mapLabels = [mapLabelsContent2];
        let tableArray = [];

        response.forEach(function(item){  
          
        if(item.countryInfo.iso2 !== null){
          if(lang == "es") {
            countryName = regionNamesInSpanish.of(item.countryInfo.iso2);
          } else {
            countryName = regionNamesInEnglish.of(item.countryInfo.iso2);
          }  
        }; 

        mapLabels.push([{v: item.countryInfo.iso2, f: countryName}, item.deathsPerOneMillion]);
        tableArray.push( {[mapLabelsContent2[0]]: countryName, [mapLabelsContent2[1]]: item.deathsPerOneMillion } );
        });

        tableArray = tableArray.sort((a, b) => b[mapLabelsContent2[1]] - a[mapLabelsContent2[1]]).slice(0,10);
        
        for(let i = 0; i < tableArray.length; i++){
          tableArray[i][mapLabelsContent2[1]] = new Intl.NumberFormat(lang).format(tableArray[i][mapLabelsContent2[1]]);
        };
        
        let data = Object.keys(tableArray[0]);

        generateTable(table, tableArray); 
        generateTableHead(table, data); 
        return mapLabels;
     });
     googleChart(mapLabels, colorDeaths, worldMap1);  

     if(lang == "es") {
        id('relativeTitle').textContent = "Muertes por millón de COVID-19 en el mundo";
        id('tableCases1').textContent = "Top 10 de paises con el mayor número de muertes por millón";
        id('mapCases1').textContent = "Distribución de muertes por millón en el mundo";
     } else {
        id('relativeTitle').textContent = "Global COVID-19 total deaths per million";
        id('tableCases1').textContent = "Top 10 countries with the highest total deaths per million";
        id('mapCases1').textContent = "World COVID-19 total deaths per million distribution";
     };

};

// ------------ WORLD TOTAL CASES --------------------
async function worldCases(){
  await getMapLabels().then((response) => {   
   let table = document.getElementById("table2");
   table.textContent = "";

     mapLabels = [mapLabelsContent3];
     let tableArray = [];
      
     response.forEach(function(item){     
       
      if(item.countryInfo.iso2 !== null){
        if(lang == "es") {
          countryName = regionNamesInSpanish.of(item.countryInfo.iso2);
        } else {
          countryName = regionNamesInEnglish.of(item.countryInfo.iso2);
        }  
      } else {
          countryName == null;
      }; 

     mapLabels.push([{v: item.countryInfo.iso2, f: countryName}, item.cases]);
     tableArray.push( {[mapLabelsContent3[0]]: countryName, [mapLabelsContent3[1]]: item.cases} );
     });

     tableArray = tableArray.sort((a, b) => b[mapLabelsContent3[1]] - a[mapLabelsContent3[1]]).slice(0,10);

    for(let i = 0; i < tableArray.length; i++){
      tableArray[i][mapLabelsContent3[1]] = new Intl.NumberFormat(lang).format(tableArray[i][mapLabelsContent3[1]]);
     };


     let data = Object.keys(tableArray[0]);
 
     generateTable(table, tableArray); 
     generateTableHead(table, data); 
     return mapLabels;
 });
 googleChart(mapLabels, colorCases, worldMap2);    

  if(lang == "es") {
    id('absoluteTitle').textContent = "Casos totales de COVID-19 en el mundo";
    id('tableCases2').textContent = "Top 10 de paises con el mayor número de casos";
    id('mapCases2').textContent = "Distribución de casos de COVID-19 en el mundo";
  } else {
    id('absoluteTitle').textContent = "Global COVID-19 total cases";
    id('tableCases2').textContent = "Top 10 countries with the highest total cases";
    id('mapCases2').textContent = "World COVID-19 total cases distribution"; 
  };

};

// ------------ WORLD TOTAL DEATHS --------------------
async function worldDeaths(){
   await getMapLabels().then((response) => {   
       let table = document.getElementById("table2");
       table.textContent = "";
       mapLabels = [mapLabelsContent4];
       let tableArray = [];

       response.forEach(function(item){      
         
        if(item.countryInfo.iso2 !== null){
          if(lang == "es") {
            countryName = regionNamesInSpanish.of(item.countryInfo.iso2);
          } else {
            countryName = regionNamesInEnglish.of(item.countryInfo.iso2);
          }  
        } else {
            countryName == null;
        }; 

       mapLabels.push([{v: item.countryInfo.iso2, f: countryName}, item.deaths]);
       tableArray.push( {[mapLabelsContent4[0]]: countryName, [mapLabelsContent4[1]]: item.deaths } );
       });

       tableArray = tableArray.sort((a, b) => b[mapLabelsContent4[1]] - a[mapLabelsContent4[1]]).slice(0,10);

       for(let i = 0; i < tableArray.length; i++){
        tableArray[i][mapLabelsContent4[1]] = new Intl.NumberFormat(lang).format(tableArray[i][mapLabelsContent4[1]]);
       };
       
       let data = Object.keys(tableArray[0]);

       generateTable(table, tableArray); 
       generateTableHead(table, data); 
       return mapLabels;
    });
    googleChart(mapLabels, colorDeaths, worldMap2);  

    if(lang == "es") {
      id('absoluteTitle').textContent = "Muertes totales de COVID-19 en el mundo";
      id('tableCases2').textContent = "Top 10 de paises con el mayor número de muertes por COVID-19";
      id('mapCases2').textContent = "Distribución de muertes por COVID-19 en el mundo";
    } else {
      id('absoluteTitle').textContent = "Global COVID-19 total deaths";
      id('tableCases2').textContent = "Top 10 countries with the highest total deaths";
      id('mapCases2').textContent = "World COVID-19 total deaths distribution"; 
    };
};



function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
};

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
};



function TotalTable(){
  getMapLabels().then((response) => {   
    tableArray1 = [];
    tableArray2 = [];

    response.forEach(function(item){            
    tableArray1.push( {Country: item.country, ["Total cases"]: new Intl.NumberFormat('en-US').format(item.cases) } );
    tableArray2.push( {Country: item.country, ["Total cases per million"]: new Intl.NumberFormat('en-US').format(item.casesPerOneMillion) } );
    });

    tableArray1 = tableArray1.sort((a, b) => b["Total cases"] - a["Total cases"]).slice(0,10);
    tableArray2 = tableArray2.sort((a, b) => b["Total cases per million"] - a["Total cases per million"]).slice(0,10);

    let table1 = document.getElementById("table1");
    let table2 = document.getElementById("table2");

    let data1 = Object.keys(tableArray1[0]);
    let data2 = Object.keys(tableArray2[0]);

    generateTable(table1, tableArray1); 
    generateTableHead(table1, data1); 
 
    generateTable(table2, tableArray2); 
    generateTableHead(table2, data2); 
  })
};







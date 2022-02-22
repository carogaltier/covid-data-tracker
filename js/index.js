// ------------------- CAHRT.JS CONFIG --------------------------
Chart.register(ChartDataLabels);
let lang = "en";


//  --------- DEFINING VARIABLES AND CONSTANTS ------------------
function id(text) {
    text = document.getElementById(text);
    return text;
};

function classes(text, content) {
    text = Array.from(document.querySelectorAll("." + text));
    for(let i = 0; i < text.length; i++) {
        text[i].textContent = content;
    };
};

function idContent(ID, content, lang) {
    id(ID).textContent = new Intl.NumberFormat(lang).format(content);
};

// ----------- FONT VARIABLES ------------------
let fontSize = getComputedStyle(document.body).getPropertyValue('font-size');
let fontNunito = getComputedStyle(document.documentElement).getPropertyValue('--font-nunito');

// ----------- COLOR VARIABLES ------------------
let red = getComputedStyle(document.documentElement).getPropertyValue('--color-red');
let orange = getComputedStyle(document.documentElement).getPropertyValue('--color-orange');
let yellow = getComputedStyle(document.documentElement).getPropertyValue('--color-yellow');
let lightGreen = getComputedStyle(document.documentElement).getPropertyValue('--color-light-green');
let blue = getComputedStyle(document.documentElement).getPropertyValue('--color-blue');
let green = getComputedStyle(document.documentElement).getPropertyValue('--color-green');
let middleGrey = getComputedStyle(document.documentElement).getPropertyValue('--middle-grey');


// -------------- WORLD LATEST VARIABLES -----------------------
const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
const regionNamesInSpanish = new Intl.DisplayNames(['es'], { type: 'region' });

// ------------ PIE CHART CONSTANTS AND VARIABLES  --------------------
let pieCasesDist1 = id('pieCasesDist1');
let pieCasesPop1 = id('pieCasesPop1');
let pieCasesDist2 = id('pieCasesDist2');
let pieCasesPop2 = id('pieCasesPop2');
let pieCasesDist3 = id('pieCasesDist3');
let pieCasesPop3 = id('pieCasesPop3');

// ------------ LINE CHART CONSTANTS AND VARIABLES  --------------------
const dataWeekly = 8;
const dataMonthly = 31;
const dataAll = 'all';
const yesterday = 2;
let titleTextWeek = 'in the last week';
let titleTextMonth = 'in the last month';

let lastDay = 'last day information';

let lineChart1 = id("lineChart1");
let lineChart2 = id("lineChart2");
let lineChart3 = id("lineChart3");
let lineChart4 = id("lineChart4");
let lineChart5 = id("lineChart5");
let lineChart6 = id("lineChart6");

let lineChartTitle1 = id("lineChartTitle1");
let lineChartTitle2 = id("lineChartTitle2");
let lineChartTitle3 = id("lineChartTitle3");
let lineChartTitle4 = id("lineChartTitle4");
let lineChartTitle5 = id("lineChartTitle5");
let lineChartTitle6 = id("lineChartTitle6");

let nameCanvas1;
let nameCanvas2;
let nameCanvas3;
let nameCanvas4;
let nameCanvas5;
let nameCanvas6;
let nameCanvas7;
let nameCanvas8;
let nameCanvas9;
let nameCanvas10;
let nameCanvas11;
let nameCanvas12;

let pieLabels = {
    pieLabel1: ['Recovered', 'Actives', 'Deaths'],
    pieLabel2: ['Non-Infected', 'Infected']
};

let mapLabelsContent1 = ['Country', 'Total cases per million'];
let mapLabelsContent2 = ['Country', 'Total deaths per million'];
let mapLabelsContent3 = ['Country', 'Total cases'];
let mapLabelsContent4 = ['Country', 'Total Deaths'];

let lineChartContent = ["Cases", "Time", "Number of cases", "Deaths", "Number of deaths"];
let lineChartVac = ["Total vaccines", "Daily Vaccines", "Time", "Number of vaccines"];

// ------------------- WORLD MAP -------------------------------
let worldMap1 = id('worldMap1');
let worldMap2 = id('worldMap2');
colorCases = [ '#E97808'];
colorDeaths = [ '#c96379'];




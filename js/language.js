let langList = ['en', 'es'];

let init = (data) => {

    // ------------------- ASIDE -----------------------
    id('asideHome').textContent = data["asideHome"];
    id('asideWorld').textContent = data["asideWorld"];
    id('asideOverview').textContent = data["asideOverview"];
    id('asideCases').textContent = data["asideCases"];
    id('asideDeaths').textContent = data["asideDeaths"];
    id('asideRelative').textContent = data["asideRelative"];
    id('asideAbsolute').textContent = data["asideAbsolute"];
    id('asideVaccine').textContent = data["asideVaccine"];
    id('asideContinents').textContent = data["asideContinents"];
    id('asideCountries').textContent = data["asideCountries"];
    classes('asideAbout', data["asideAbout"]);
    classes('asideCredits', data["asideCredits"]);
    id('asideLang').textContent = data["asideLang"];
    id('asideMode').textContent = data["asideMode"];

    // ------------------- HEADER -----------------------
    id('mainTitle1').textContent = data["mainTitle1"];
    id('mainTitle2').textContent = data["mainTitle2"];
    id('mainTitle3').textContent = data["mainTitle3"];
    id('mainTitle4').textContent = data["mainTitle4"];
    id('mainSubtitle1').textContent = data["mainSubtitle1"];
    id('mainSubtitle2').textContent = data["mainSubtitle2"];
    id('mainSubtitle3').textContent = data["mainSubtitle3"];

    // ------------------- BUTTONS -----------------------
    classes('today', data["today"]);
    classes('yesterday', data["yesterday"]);
    classes('twoDaysAgo', data["twoDaysAgo"]);
    classes('weekly', data["weekly"]);
    classes('monthly', data["monthly"]);
    classes('all', data["all"]);
    classes('btnCases', data["btnCases"]);
    classes('btnDeaths', data["btnDeaths"]);
    classes('updated', data["updated"]);
 
    // --------------- TITLES ---------------------------
    classes('worldName', data["worldName"]);
    classes('overviewTitle1', data["overviewTitle1"]);
    classes('overviewTitle2', data["overviewTitle2"]);
    classes('statsMillion', data["statsMillion"]);
    classes('casesTitle1', data["casesTitle1"]);
    classes('casesTitle2', data["casesTitle2"]);
    classes('deathsTitle1', data["deathsTitle1"]);
    classes('deathsTitle2', data["deathsTitle2"]);
    
    id("lineChartCum1").textContent = data["lineChartCum1"];
    id("lineChartNew1").textContent = data["lineChartNew1"];
    id("lineChartCum2").textContent = data["lineChartCum2"];
    id("lineChartNew2").textContent = data["lineChartNew2"];
    id("vaccineCum").textContent = data["vaccineCum"];
    id("vaccineDaily").textContent = data["vaccineDaily"];
 

    // ----------- PIE CHART TITLES --------------
    classes('pieChartTitle1', data["pieChartTitle1"]);
    classes('pieChartTitle2', data["pieChartTitle2"]);

    // -------------- CARD'S TEXTS -------------
    classes('totalCases', data["totalCases"]);
    classes('newCases', data["newCases"]);
    classes('totalDeaths', data["totalDeaths"]);
    classes('newDeaths', data["newDeaths"]);
    classes('totalRecovered', data["totalRecovered"]);
    classes('newRecovered', data["newRecovered"]);
    classes('totalTests', data["totalTests"]);
    classes('testPerPeople', data["testPerPeople"]);
    classes('casesMillion', data["casesMillion"]);
    classes('deathsMillion', data["deathsMillion"]);
    classes('recoveredMillion', data["recoveredMillion"]);
    classes('activesMillion', data["activesMillion"]);
    classes('criticalMillion', data["criticalMillion"]);
    classes('testMillion', data["testMillion"]);
    id('totalVaccine').textContent = data["totalVaccine"];
    id('totalVaccineHundred').textContent = data["totalVaccineHundred"];
    id('dailyVaccine').textContent = data["dailyVaccine"];
    id('dailyVaccineMillion').textContent = data["dailyVaccineMillion"];

    pieLabels = {
        pieLabel1: data["pieLabel1"],
        pieLabel2: data["pieLabel2"]
    };

    titleTextWeek = data["titleTextWeek"];
    titleTextMonth = data["titleTextMonth"];

    mapLabelsContent1 = data["mapLabelsContent1"];
    mapLabelsContent2 = data["mapLabelsContent2"];
    mapLabelsContent3 = data["mapLabelsContent3"];
    mapLabelsContent4 = data["mapLabelsContent4"];

    lineChartContent = data["lineChartContent"];
    lineChartVac = data["lineChartVac"];

    // -------------- CONTINENT NAMES -------------
    id('Africa').textContent = data["Africa"];
    id('Asia').textContent = data["Asia"];
    id('Australia').textContent = data["Australia"];
    id('Europe').textContent = data["Europe"];
    id('North').textContent = data["North"];
    id('South').textContent = data["South"];

    // -------------- ABOUT ME ------------------
    classes('about-title', data["about-title"]);
    classes('about-subtitle', data["about-subtitle"]);
    classes('about-text1', data["about-text1"]);
    classes('about-text2', data["about-text2"]);
    classes('about-text3', data["about-text3"]);
    classes('myWebsite', data["myWebsite"]);

    // -------------- CREDITS ------------------
    classes('credits-subtitle1', data["credits-subtitle1"]);
    classes('credits-subtitle2', data["credits-subtitle2"]);
    classes('credits-subtitle3', data["credits-subtitle3"]);
    classes('credits-text1', data["credits-text1"]);
    classes('credits-text2', data["credits-text2"]);
    classes('credits-text3', data["credits-text3"]);
    classes('API-link', data["API-link"]);
    classes('foot-text1', data["foot-text1"]);

    return runCharts();
}


function selectLang(lang) {
    fetch( `language/${lang}.json`)
    .then(e => e.json())
    .then(data => init(data));
}


id('langEn').addEventListener('click', () => {
    lang = "en"; 
    id('langEn').disabled = true;
    id('langEs').disabled = false;
    selectLang(lang);  


});

id('langEs').addEventListener('click', () => {
    lang = "es"; 
    id('langEn').disabled = false;
    id('langEs').disabled = true;
    selectLang(lang);

});


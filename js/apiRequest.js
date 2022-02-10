//  ------------ LATEST GLOBAL DATA API REQUEST -------------------
async function latestData(yest, twoDays) {
    try {
        let response = await axios({
            url: 'https://disease.sh/v3/covid-19/all',
            params: { 'yesterday': `${yest}`,
                      'twoDaysAgo': `${twoDays}` }
        })
        if(response.status == 200){return response.data}  
    } catch (err) {console.error(err);}
}

//  ---------- HISTORICAL GLOBAL DATA API REQUEST ------------------
async function historicalData(param) {
    try {
        let response = await axios({
            url: 'https://disease.sh/v3/covid-19/historical/all',
            params: {'lastdays': `${param}` }
        })
        if(response.status == 200){return response.data}  
    } catch (err) {console.error(err);}
}


//  ------------ LATEST GLOBAL DATA API REQUEST -------------------
async function getMapLabels(param) {
    try {
        let response = await axios({
            url: 'https://disease.sh/v3/covid-19/countries',
            params: {'lastdays': `${param}` }
        })
        if(response.status == 200){return response.data}  
    } catch (err) {console.error(err);}
}

//  ---------- HISTORICAL VACCINATION DATA API REQUEST ------------------
async function vaccineData(param) {
    try {
        let response = await axios({
            url: 'https://disease.sh/v3/covid-19/vaccine/coverage',
            params: {'lastdays': `${param}`,
                     'fullData': true }
        })
        if(response.status == 200){return response.data; }  
    } catch (err) {console.error(err);}
}

//  ------------ LATEST CONTINENT DATA API REQUEST -------------------
async function latestContinentData(continent, yest, twoDays) {
    try {
        let response = await axios({
            url:'https://disease.sh/v3/covid-19/continents/' + continent,
            params: { 'yesterday': `${yest}`,
                      'twoDaysAgo': `${twoDays}` }
        })
        if(response.status == 200){return response.data}  
    } catch (err) {console.error(err);}
}

//  ------------ LATEST COUNTRY DATA API REQUEST -------------------
async function latestCountryData(country, yest, twoDays) {
    try {
        let response = await axios({
            url:'https://disease.sh/v3/covid-19/countries/' + country,
            params: { 'yesterday': `${yest}`,
                      'twoDaysAgo': `${twoDays}` }
        })
        if(response.status == 200){return response.data;}  
    } catch (err) {console.error(err);}
}


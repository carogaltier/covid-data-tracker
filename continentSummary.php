<section class="container container7" id="covid-continent-summary">
    <div class="content summary-content">

        <div class="summary-title">
            <h2 class="title">
                <span class="overviewTitle1"></span>
                <span id="continentName"></span>
                <span class="overviewTitle2">latest COVID-19 data</span>
            </h2>
            
            <h5 class="subtitle">
                <span class="updated">Last updated on:</span>
                <span class="highlight" id="continentDate"></span>
            </h5>
            <div class="wrapper">
                
                <div class="select">
                    <select id="continentSelect" onchange="continentDataAdd(this)">
                        <option id="Africa" value="Africa">Africa</option>
                        <option id="Asia" value="Asia">Asia</option>
                        <option id="Australia" value="Australia-Oceania">Australia-Oceania</option>
                        <option id="Europe" value="Europe">Europe</option>
                        <option id="North" value="North America">North America</option>
                        <option id="South" value="South America">South America</option>
                    </select>
                </div>

                <div class="selector">
                    <div class="day-btn">
                        <button class="today" id="btnToday2" disabled>Today</button>
                        <button class="yesterday" id="btnYesterday2">Yesterday</button>
                        <button class="twoDaysAgo" id="btnTwoDaysAgo2">2 days ago</button>
                    </div>
                </div>
            </div>
        </div>
     

        <div class="cases card">
            <div class="flex border-bottom">
                <div class="left">
                    <h4 class="totalCases">Total cases</h4>
                    <p class="card-text text-orange" id="totalCases2"></p>
                </div>
            </div> 
            <div class="flex">
                <div class="left">
                    <h4 class="newCases">New cases</h4>
                    <p class="card-subtext text-orange" id="todayCases2"></p>
                </div> 
                <div class="right">
                    <i class="fa-solid fa-head-side-cough text-orange"></i>
                </div>
            </div>   
        </div>

        <div class="deaths card">
            <div class="flex border-bottom">
                <div class="left">
                    <h4 class="totalDeaths">Total deaths</h4>
                    <p class="card-text text-red" id="totalDeaths2"></p>
                </div>
            </div>
            <div class="flex">
                <div class="left">
                    <h4 class="newDeaths">New deaths</h4>
                    <p class="card-subtext text-red" id="todayDeaths2"></p>            
                </div> 
                <div class="right">
                    <i class="fa-solid fa-heart-crack text-red"></i>
                </div>
            </div>
        </div>

        <div class="recovered card">
            <div class="flex border-bottom">
                <div class="left">
                    <h4 class="totalRecovered">Total recovered</h4>
                    <p class="card-text text-green" id="totalRecovered2"></p>
                </div>   
            </div>

            <div class="flex">
                <div class="left">
                    <h4 class="newRecovered">New recovered</h4>
                    <p class="card-subtext text-green" id="todayRecovered2"></p>
                </div> 
                <div class="right">
                    <i class="fa-solid fa-heart-pulse text-green"></i>
                </div>
            </div>
        </div>

        <div class="test card">
            <div class="flex border-bottom">
                <div class="left">
                    <h4 class="totalTests">Total tests</h4>
                    <p class="card-text text-blue" id="totalTests2"></p>
                </div>
            </div>

            <div class="flex">
                <div class="left">
                    <h4 class="testPerPeople">Tests per people</h4>
                    <p class="card-subtext text-blue" id="testsPerPeople2"></p>
                </div> 
                <div class="right">
                    <i class="fa-solid fa-microscope text-blue"></i>
                </div>
            </div>
        </div>

        <div class="card piechart">
            <div class="chart1">                
                <h3 class="pieChartTitle1 subtitle text-center">COVID-19 total cases distribution</h3>
                <div class="canvas">
                    <canvas id="pieCasesDist2"></canvas>
                </div>
            </div>
            
            <div class="chart2">
                <h3 class="pieChartTitle2 subtitle text-center">Population infected by COVID-19</h3>
                <div class="canvas">
                    <canvas id="pieCasesPop2" ></canvas>
                </div>
            </div>
        </div>

        <div class="stats card">
            <div class="stats-subtitle">
                <h3 class="statsMillion">COVID-19 stats per one million</h3>
            </div>
            
            <div class="stats-chart flex">    
                <div class="chart-child flex ">
                    <div class="left">
                        <h4 class="card-title casesMillion">Cases</h4>
                        <p class="card-subtext text-orange" id="casesMillion2"></p>
                    </div>
                </div>
                
                <div class="chart-child flex ">
                    <div class="left">
                        <h4 class="card-title deathsMillion">Deaths</h4>
                        <p class="card-subtext text-red" id="deathsMillion2"></p>
                    </div>
                </div>

                <div class="chart-child flex ">
                    <div class="left">
                        <h4 class="card-title recoveredMillion">Recovered</h4>
                        <p class="card-subtext text-green" id="recoveredMillion2"></p>
                    </div>
                </div>

                <div class="chart-child flex">
                    <div class="left">
                        <h4 class="card-title activesMillion">Actives</h4>
                        <p class="card-subtext text-light-green" id="activeMillion2"></p>
                    </div>
                </div>

                <div class="chart-child flex">
                    <div class="left">
                        <h4 class="card-title criticalMillion">Critical</h4>
                        <p class="card-subtext text-yellow" id="criticalMillion2"></p>            
                    </div> 
                </div>

                <div class="chart-child flex">
                    <div class="left">
                        <h4 class="card-title testMillion">Tests</h4>
                        <p class="card-subtext text-blue" id="testsMillion2"></p>            
                    </div> 
                </div>
            </div>   
        </div>

    </div>

    <div class="footer">
        <div class="scroll-footer">
            <div class="arrow-scroll">
                <div class="arrow-scroll__wrap">
                    <a href="#covid-vaccination-status"><i class="fa-solid fa-angle-up border-bottom"></i></a>
                    <a href="#covid-country-summary"><i class="fa-solid fa-angle-down"></i></a>
                </div>
            </div> 
        </div>
    </div>
</section>



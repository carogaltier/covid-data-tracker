<section class="container container1" id="covid-world-summary">
    <div class="content summary-content">

        <div class="summary-title">
            <h2 class="title">
                <span class="overviewTitle1"></span>
                <span class="worldName">Global</span>
                <span class="overviewTitle2">latest COVID-19 data</span>
            </h2>
            <h5 class="subtitle">
                <span class="updated">Last updated on:</span>
                <span class="todayDate highlight"></span>
            </h5>

            <div class="selector">
                <div class="day-btn">
                    <button class="today" id="btnToday1" disabled>Today</button>
                    <button class="yesterday" id="btnYesterday1">Yesterday</button>
                    <button class="twoDaysAgo" id="btnTwoDaysAgo1">2 days ago</button>
                </div>
            </div>
        </div>

        <div class="cases card">
            <div class="flex border-bottom">
                <div class="left">
                    <h4 class="totalCases">Total cases</h4>
                    <p class="card-text text-orange" id="totalCases"></p>
                </div>
            </div>
            <div class="flex">
                <div class="left">
                    <h4 class="newCases">New cases</h4>
                    <p class="card-subtext text-orange" id="todayCases"></p>
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
                    <p class="card-text text-red" id="totalDeaths"></p>
                </div>
            </div>
            <div class="flex">
                <div class="left">
                    <h4 class="newDeaths">New deaths</h4>
                    <p class="card-subtext text-red" id="todayDeaths"></p>
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
                    <p class="card-text text-green" id="totalRecovered"></p>
                </div>
            </div>

            <div class="flex">
                <div class="left">
                    <h4 class="newRecovered">New recovered</h4>
                    <p class="card-subtext text-green" id="todayRecovered"></p>
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
                    <p class="card-text text-blue" id="totalTests"></p>
                </div>
            </div>

            <div class="flex">
                <div class="left">
                    <h4 class="testPerPeople">Tests per people</h4>
                    <p class="card-subtext text-blue" id="testsPerPeople"></p>
                </div>
                <div class="right">
                    <i class="fa-solid fa-microscope text-blue"></i>
                </div>
            </div>
        </div>

        <div class="piechart card">
            <div class="chart1">
                <h3 class="pieChartTitle1 subtitle text-center">COVID-19 total cases distribution</h3>
                <div class="canvas">
                    <canvas id="pieCasesDist1"></canvas>
                </div>
            </div>

            <div class="chart2 chart-container">
                <h3 class="pieChartTitle2 subtitle text-center">Population infected by COVID-19</h3>
                <div class="canvas">
                    <canvas id="pieCasesPop1"></canvas>
                </div>
            </div>
        </div>

        <div class="stats card">
            <div class="stats-subtitle">
                <h3 class="statsMillion">COVID-19 stats per one million</h3>
            </div>

            <div class="stats-chart flex">
                <div class="chart-child flex">
                    <div class="left">
                        <h4 class="card-title casesMillion">Cases</h4>
                        <p class="card-subtext text-orange" id="casesMillion"></p>
                    </div>
                </div>

                <div class="chart-child flex">
                    <div class="left">
                        <h4 class="card-title deathsMillion">Deaths</h4>
                        <p class="card-subtext text-red" id="deathsMillion"></p>
                    </div>
                </div>

                <div class="chart-child flex">
                    <div class="left">
                        <h4 class="card-title recoveredMillion">Recovered</h4>
                        <p class="card-subtext text-green" id="recoveredMillion"></p>
                    </div>
                </div>

                <div class="chart-child flex">
                    <div class="left">
                        <h4 class="card-title activesMillion">Actives</h4>
                        <p class="card-subtext text-light-green" id="activeMillion"></p>
                    </div>
                </div>

                <div class="chart-child flex">
                    <div class="left">
                        <h4 class="card-title criticalMillion">Critical</h4>
                        <p class="card-subtext text-yellow" id="criticalMillion"></p>
                    </div>
                </div>

                <div class="chart-child flex">
                    <div class="left">
                        <h4 class="card-title testMillion">Tests</h4>
                        <p class="card-subtext text-blue" id="testsMillion"></p>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="footer">
        <div class="scroll-footer">
            <div class="arrow-scroll">
                <div class="arrow-scroll__wrap">
                    <a href="#home"><i class="fa-solid fa-angle-up border-bottom"></i></a>
                    <a href="#covid-cases-progression-line-chart"><i class="fa-solid fa-angle-down"></i></a>
                </div>
            </div>  
        </div>
    </div>
</section>
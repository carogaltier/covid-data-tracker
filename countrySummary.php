<section class="container" id="covid-country-summary">

    <div class="container-title">
        <h2 class="title">
            <span class="overviewTitle1"></span>
            <span id="countryName"></span>
            <span class="overviewTitle2">latest COVID-19 data</span>
        </h2>
        <h5 class="subtitle">
            <span class="updated">Last updated on:</span>
            <span class="highlight" id="countryDate"></span>
        </h5>
        <div class="wrapper">
            <div class="select">
                <select class="js-example-basic-single" id="countrySelect" onchange="countryDataAdd(this)">
                    <option value="Afghanistan">Afghanistan</option>
                </select>
            </div>

            <div class="selector">           
                <div class="day-btn">
                    <button class="today" id="btnToday3" disabled>Today</button>
                    <button class="yesterday" id="btnYesterday3">Yesterday</button>
                    <button class="twoDaysAgo" id="btnTwoDaysAgo3">2 days ago</button>
                </div>
            </div>
            
        </div>
    </div>
    
    <div class="content summary-content">

        <div class="cases card summary-card">
            <h4 class="card-title totalCases">Total cases</h4>
            <p class="card-text text-orange border-bottom" id="totalCases3"></p>
            <h4 class="card-subtitle newCases">New cases</h4>
            <p class="card-subtext text-orange" id="todayCases3"></p>
            <i class="card-icon fa-solid fa-head-side-cough text-orange"></i>
        </div>

        <div class="deaths card summary-card">
            <h4 class="card-title totalDeaths">Total deaths</h4>
            <p class="card-text text-red border-bottom" id="totalDeaths3"></p>
            <h4 class="card-subtitle newDeaths">New deaths</h4>
            <p class="card-subtext text-red" id="todayDeaths3"></p>
            <i class="card-icon fa-solid fa-heart-crack text-red"></i>
        </div>

        <div class="recovered card summary-card">        
            <h4 class="card-title card-title totalRecovered">Total recovered</h4>
            <p class="card-text text-green border-bottom" id="totalRecovered3"></p>
            <h4 class="card-subtitle newRecovered">New recovered</h4>
            <p class="card-subtext text-green" id="todayRecovered3"></p>
            <i class="card-icon fa-solid fa-heart-pulse text-green"></i>
        </div>

        <div class="test card summary-card">
            <h4 class="card-title totalTests">Total tests</h4>
            <p class="card-text text-blue border-bottom" id="totalTests3"></p>
            <h4 class="card-subtitle testPerPeople">Tests per people</h4>
            <p class="card-subtext text-blue" id="testsPerPeople3"></p>
            <i class="card-icon fa-solid fa-microscope text-blue"></i>
        </div>

        <div class="card piechart">
            <div class="chart1">                
                <h3 class="pieChartTitle1 subtitle text-center">COVID-19 total cases distribution</h3>
                <div class="canvas chart-container">
                    <canvas id="pieCasesDist3"></canvas>
                </div>
            </div>
            
            <div class="chart2">
                <h3 class="pieChartTitle2 subtitle text-center">Population infected by COVID-19</h3>
                <div class="canvas chart-container">
                    <canvas id="pieCasesPop3" ></canvas>
                </div>
            </div>
        </div>

        <div class="stats card">
            <div class="stats-chart">
                <div class="chart-child">
                    <h4 class="card-title casesMillion">Cases per million</h4>
                    <p class="card-subtext text-orange" id="casesMillion3"></p>
                </div>

                <div class="chart-child">
                    <h4 class="card-title deathsMillion">Deaths per million</h4>
                    <p class="card-subtext text-red" id="deathsMillion3"></p>
                </div>

                <div class="chart-child">
                    <h4 class="card-title recoveredMillion">Recovered per million</h4>
                    <p class="card-subtext text-green" id="recoveredMillion3"></p>
                </div>

                <div class="chart-child">
                    <h4 class="card-title activesMillion">Actives per million</h4>
                    <p class="card-subtext text-light-green" id="activeMillion3"></p>
                </div>

                <div class="chart-child">
                    <h4 class="card-title criticalMillion">Critical per million</h4>
                    <p class="card-subtext text-yellow" id="criticalMillion3"></p>
                </div>

                <div class="chart-child">
                    <h4 class="card-title testMillion">Tests per million</h4>
                    <p class="card-subtext text-blue" id="testsMillion3"></p>
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="scroll-footer">
            <div class="arrow-scroll">
                <div class="arrow-scroll__wrap">
                    <a href="#covid-continent-summary"><i class="fa-solid fa-angle-up border-bottom"></i></a>
                    <a href="#about-me"><i class="fa-solid fa-angle-down"></i></a>
                </div>
            </div>   
        </div>
    </div>
</section>



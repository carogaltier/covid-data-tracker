<section class="container3 container" id="covid-deaths-progression-line-chart">
    <div class="lineChart-content content">

        <div class="lineChart-title">
            <h2 class="title">
                <span class="deathsTitle1"></span>
                <span class="worldName">Global</span>
                <span class="deathsTitle2">COVID-19 deaths progression</span>
            </h2>
            <h5 class="subtitle">
                <span class="updated">Last updated on:</span>
                <span class="todayDate highlight"></span>
            </h5>

            <div class="selector3 selector">
                <div class="day-btn">
                    <button class="weekly" id="btnWeekly2" disabled>Weekly</button>
                    <button class="monthly" id="btnMonthly2">Monthly</button>
                    <button class="all" id="btnAll2">All</button>
                </div>
            </div>
        </div>

        <div class="card linechart lineChart1">
            <h3 class="subtitle text-center">
                <span id="lineChartCum2">Cumulative COVID-19 deaths</span> 
                <span id="lineChartTitle3"></span>
            </h3>
            <div id="chartDiv3">
                <canvas class="chart-container" id="lineChart3"></canvas>
            </div>
        </div>

        <div class="card linechart lineChart2">
            <h3 class="subtitle text-center">
                <span id="lineChartNew2">New COVID-19 deaths</span>
                <span id="lineChartTitle4"></span>
            </h3>
            <div class="chart-container" id="chartDiv4">
                <canvas id="lineChart4"></canvas>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <div class="scroll-footer">
            <div class="arrow-scroll">
                <div class="arrow-scroll__wrap">
                    <a href="#covid-cases-progression-line-chart"><i class="fa-solid fa-angle-up border-bottom"></i></a>
                    <a href="#covid-relative-distribution-map"><i class="fa-solid fa-angle-down"></i></a>
                </div>
            </div>    
        </div>
    </div>
</section>

<section class="container2 container" id="covid-cases-progression-line-chart">
    <div class="lineChart-content content">

    <div class="lineChart-title">
            <h2 class="title">
                <span class="casesTitle1"></span>
                <span class="worldName">Global</span>
                <span class="casesTitle2">COVID-19 cases progression</span>
            </h2>
            <h5 class="subtitle">
                <span class="updated">Last updated on:</span>
                <span class="todayDate highlight"></span>
            </h5>
            <div class="selector">
                <div class="day-btn">
                    <button class="weekly" id="btnWeekly1" disabled>Weekly</button>
                    <button class="monthly" id="btnMonthly1">Monthly</button>
                    <button class="all" id="btnAll1">All</button>
                </div>
            </div>
        </div>

        <div class="card linechart lineChart1">
            <h3 class="subtitle text-center">
                <span id="lineChartCum1">Cumulative COVID-19 cases</span> 
                <span id="lineChartTitle1"></span>
            </h3>
            <div class="chart-container" id="chartDiv1">
                <canvas id="lineChart1"></canvas>
            </div>
        </div>

        <div class="card linechart lineChart2">
            <h3 class="subtitle text-center">
            <span id="lineChartNew1">New COVID-19 cases</span>
            <span id="lineChartTitle2"></span></h3>
            
            <div class="chart-container" id="chartDiv2">
                <canvas id="lineChart2"></canvas>
            </div>
        </div>


    </div>

    <div class="footer">
        <div class="scroll-footer">
            <div class="arrow-scroll">
                <div class="arrow-scroll__wrap">
                    <a href="#covid-world-summary"><i class="fa-solid fa-angle-up border-bottom"></i></a>
                    <a href="#covid-deaths-progression-line-chart"><i class="fa-solid fa-angle-down"></i></a>
                </div>
            </div>   
        </div>
    </div>
</section>

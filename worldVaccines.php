<section class="container" id="covid-vaccination-status">
    <div class="container-title">
        <h3 class="title">Global COVID-19 vaccination status</h3>

        <h5 class="subtitle">
            <span class="updated">Last updated on:</span>
            <span class="highlight" id="yesterdayDate"></span>
        </h5>

        <div class="selector">
            <div class="day-btn">
                <button class="weekly" id="btnWeekly3" disabled>Weekly</button>
                <button class="monthly" id="btnMonthly3">Monthly</button>
                <button class="all" id="btnAll3">All</button>
            </div>
        </div>
    </div>

    <div class="vaccine-content content">
        <div class="card linechart lineChart1">
            <h3 class="subtitle text-center">
                <span id="vaccineCum">Cumulative COVID-19 vaccination</span>
                <span id="lineChartTitle5"></span>
            </h3>
            <div class="chart-container" id="chartDiv5">
                <canvas id="lineChart5"></canvas>
            </div>
        </div>

        <div class="card linechart lineChart2">
            <h3 class="subtitle text-center">
                <span id="vaccineDaily">Daily COVID-19 vaccination</span>
                <span id="lineChartTitle6"></span>
            </h3>
            <div class="chart-container" id="chartDiv6">
                <canvas id="lineChart6"></canvas>
            </div>
        </div>


        <div class="totalVac card">
            <div class="chart-child">
                <h4 class="card-title" id="totalVaccine">Total vaccination</h4>
                <p class="card-subtext text-blue" id="totalVac"></p>
            </div>
            <div class="chart-child">
                <h4 class="card-title" id="totalVaccineHundred">Vaccines per hundred</h4>
                <p class="card-subtext text-blue" id="hundredVac"></p>
            </div>
        </div>
        
        <div class="dailyVac card">
            <div class="chart-child">
                <h4 class="card-title" id="dailyVaccine">Daily vaccination</h4>
                <p class="card-subtext text-green" id="dailyVac"></p>
            </div> 
            <div class="chart-child">
                <h4 class="card-title" id="dailyVaccineMillion">Daily vaccines per million</h4>
                <p class="card-subtext text-green" id="mIllionVac"></p>
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="scroll-footer">
            <div class="arrow-scroll">
                <div class="arrow-scroll__wrap">
                    <a href="#covid-absolute-distribution-map"><i class="fa-solid fa-angle-up border-bottom"></i></a>
                    <a href="#covid-continent-summary"><i class="fa-solid fa-angle-down"></i></a>
                </div>
            </div>      
        </div>
    </div>
</section>

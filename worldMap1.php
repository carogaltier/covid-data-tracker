<section class="container" id="covid-relative-distribution-map">
    <div class="container-title">
        <h2 class="title">
            <span id="relativeTitle">Global COVID-19 total cases per million</span>
        </h2>
        <h5 class="subtitle">
            <span class="updated">Last updated on:</span>
            <span class="todayDate highlight"></span>
        </h5>

        <div class="selector">
            <div class="day-btn">
                <button class="btnCases" id="btnMapCases1" disabled>Cases</button>
                <button class="btnDeaths" id="btnMapDeaths1">Deaths</button>
            </div>
        </div>
    </div>
    
    <div class="map-content content">
        <div class="card mapText scroll">
            <h3 class="subtitle text-center" id="tableCases1">Top 10 countries with the highest total cases per million</h3>
            <div class="table1">
                <table id="table1"></table>
            </div>    
        </div>

        <div class="card worldMap">
            <h3 class="subtitle text-center"id="mapCases1">World COVID-19 total cases per million distribution</h3>
            <div class="worldMapContainer">
                <div id="worldMap1">
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="scroll-footer">
            <div class="arrow-scroll">
                <div class="arrow-scroll__wrap">
                    <a href="#covid-deaths-progression-line-chart"><i class="fa-solid fa-angle-up border-bottom"></i></a>
                    <a href="#covid-absolute-distribution-map"><i class="fa-solid fa-angle-down"></i></a>
                </div>
            </div>      
        </div>
    </div>
</section>


<section class="container" id="covid-absolute-distribution-map">
    <div class="container-title">
        <h2 class="title">
            <span id="absoluteTitle">Global COVID-19 total cases</span>
        </h2>
        <h5 class="subtitle">
            <span class="updated">Last updated on:</span>
            <span class="todayDate highlight"></span>
        </h5>

        <div class="selector">
            <div class="day-btn">
                <button class="btnCases" id="btnMapCases2" disabled>Cases</button>
                <button class="btnDeaths" id="btnMapDeaths2">Deaths</button>
            </div>
        </div>
    </div>
    
    <div class="map-content content">
        <div class="card mapText scroll">
            <h3 class="subtitle text-center" id="tableCases2">Top 10 countries with the highest total cases</h3>
            <div class="table2">
                <table id="table2"></table>
            </div>    
        </div>

        <div class="card worldMap">
            <h3 class="subtitle text-center"id="mapCases2">World COVID-19 total cases distribution</h3>
            <div class="worldMapContainer">
                <div id="worldMap2">
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="scroll-footer">
            <div class="arrow-scroll">
                <div class="arrow-scroll__wrap">
                    <a href="#covid-relative-distribution-map"><i class="fa-solid fa-angle-up border-bottom"></i></a>
                    <a href="#covid-vaccination-status"><i class="fa-solid fa-angle-down"></i></a>
                </div>
            </div>     
        </div> 
    </div>
</section>


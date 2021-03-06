<aside class="aside">
    <div class="title-container">
        <img id="logoImg" class="logo" src="img/light-mode-covid-real-time-data-logo.svg" title="COVID-19 real time data logo" alt="COVID-19 Real Time Data website logo"> 
        <i id="menuBar" class="menu-bar fa-solid fa-bars"></i>  
    </div>
    
    <div id="asideContainer" class="aside-container">
        <div id="aside-content" class="aside-content">
            <nav class="aside-nav">
                <ul class= "list">
                    <li class="list-item list-active">
                        <a class="list-link list-active" href="#home" title="homepage">
                            <i class="fa-solid fa-home"></i><p id="asideHome">Home</p> 
                        </a>
                    </li>
                    <li class="list-item dropdown">
                        <a class="list-link" title="Covid-19 World Summary">
                            <i class="fa-solid fa-earth-americas"></i>
                            <p id="asideWorld">World</p> 
                            <span><i class="fa-solid fa-caret-down"></i></span>
                        </a>                    
                        <ul class="sub-list">
                            <li><a href="#covid-world-summary" id="asideOverview" title="Covid-19 World Summary">World Summary</a></li>
                            <li><a href="#covid-cases-progression-line-chart" id="asideCases" title="Covid-19 Cases progression line chart">Cases progression</a></li>
                            <li><a href="#covid-deaths-progression-line-chart" id="asideDeaths" title="Covid-19 Deaths progression line chart">Deaths progression</a></li>
                            <li><a href="#covid-relative-distribution-map" id="asideRelative" title="Covid-19 Relative distribution map">Relative distribution</a></li>
                            <li><a href="#covid-absolute-distribution-map" id="asideAbsolute" title="Covid-19 Absolute distribution map">Absolute distribution</a></li>
                            <li><a href="#covid-vaccination-status" id="asideVaccine" title="Covid-19 Vaccination Status">Vaccination Status</a></li>
                        </ul>
                    </li>
                    <li class="list-item">
                        <a class="list-link" href="#covid-continent-summary" title="Covid-19 continent summary">
                            <i class="fa-solid fa-map-location-dot"></i><p id="asideContinents">Continents</p>
                        </a>
                    </li>

                    <li class="list-item">
                        <a class="list-link" href="#covid-country-summary" title="Covid-19 country summary">
                            <i class="fa-solid fa-location-dot"></i><p id="asideCountries">Countries</p> 
                        </a>
                    </li>
        
                </ul>
            </nav>
        </div>

        <div id="aside-footer" class="aside-footer">
            <ul class= "list">
                <li class="list-item">
                    <a class="list-link" href="#about-me" title="about me">
                        <i class="fa-solid fa-address-book"></i>
                        <p class="asideAbout">About me</p>
                    </a>
                </li>
                <li class="list-item">
                    <a class="list-link" href="#credits" title="credits">
                        <i class="fa-solid fa-handshake-angle"></i>
                        <p class="asideCredits">Credits</p>
                    </a>
                </li>
                <li class="list-item dropdown border-bottom">
                    <a class="list-link" title="language switch">
                        <i class="fa-solid fa-globe"></i>
                        <p id="asideLang">Language</p>
                        <span><i class="fa-solid fa-caret-down"></i></span>
                    </a>                      
                    <ul class="sub-list">
                        <li><button class="span" id="langEn" disabled>English</button></li>
                        <li><button class="span" id="langEs">Espa??ol</button></li>
                    </ul>
                </li>
                <li class="dark" id="btnSwitch">
                    <span><i class="fa-solid fa-moon moon"></i></span>
                    <span><i class="fa-solid fa-sun sun"></i></span>   
                    <a class="mode-text" id="asideMode" title="Dark-light mode switch">Mode</a>                   
                </li>
            </ul>
        </div>
    </div>
</aside>
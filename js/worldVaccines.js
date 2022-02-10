function vaccineDataAdd(){
    vaccineData('2').then(function(response) {
        response.pop();
        let yestDate = new Date(response[(response.length - 1)].date).toLocaleString(lang, {
            day: 'numeric', 
            year: 'numeric', 
            month: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric',
            timeZoneName: 'short'  
        });

        id("yesterdayDate").textContent = yestDate;
        idContent("totalVac", response[(response.length - 1)].total, lang);
        idContent("dailyVac", response[(response.length - 1)].daily, lang);
        idContent("hundredVac", response[(response.length - 1)].totalPerHundred, lang);
        idContent("mIllionVac", response[(response.length - 1)].dailyPerMillion, lang);

    });
}

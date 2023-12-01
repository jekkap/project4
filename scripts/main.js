
//CSGO API
window.addEventListener("load", (e) => {
    fetch('https://bymykel.github.io/CSGO-API/api/en/crates/cases.json')
    .then(response => response.json())
    .then((data) => {
        const caseData = data;
        console.log(caseData);

        //Adds Bravo case image to webpage
        const bravoCase = document.getElementById("bravo");
        const bravoImage = document.createElement("IMG");
        bravoImage.src = caseData[2].image;
        bravoCase.append(bravoImage);

        //Adds Phoenix case image to webpage
        const phoenixCase = document.getElementById("phoenix");
        const phoenixImage = document.createElement("IMG");
        phoenixImage.src = caseData[7].image;
        phoenixCase.append(phoenixImage);

        //Adds Huntsman case image to webpage
        const huntsmanCase = document.getElementById("huntsman");
        const huntsmanImage = document.createElement("IMG");
        huntsmanImage.src = caseData[8].image;
        huntsmanCase.append(huntsmanImage);

        //Adds Breakout case image to webpage
        const breakoutCase = document.getElementById("breakout");
        const breakoutImage = document.createElement("IMG");
        breakoutImage.src = caseData[9].image;
        breakoutCase.append(breakoutImage);

        //Adds Hydra case image to webpage
        const hydraCase = document.getElementById("hydra");
        const hydraImage = document.createElement("IMG");
        hydraImage.src = caseData[23].image;
        hydraCase.append(hydraImage);

        //Adds CS20 case image to webpage
        const cs20Case = document.getElementById("cs20");
        const cs20Image = document.createElement("IMG");
        cs20Image.src = caseData[30].image;
        cs20Case.append(cs20Image);


    })
    .catch((err) => console.log("Error Loading CSGO API", err));
})

    

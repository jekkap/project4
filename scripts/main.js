
if (document.URL.includes("cases.html")) {
    sessionStorage.caseNum = 0;
    const bravoCase = document.getElementById("bravoCase");
    const phoenixCase = document.getElementById("phoenixCase");
    const huntsmanCase = document.getElementById("huntsmanCase");
    const breakoutCase = document.getElementById("breakoutCase");
    const hydraCase = document.getElementById("hydraCase");
    const cs20Case = document.getElementById("cs20Case")

    bravoCase.addEventListener("click", (e) => {
        sessionStorage.caseNum = 2;
        sessionStorage.caseItemNum = 15;
        sessionStorage.randKnifeNum = 64
    });
    
    phoenixCase.addEventListener("click", (e) => {
        sessionStorage.caseNum = 7;
        sessionStorage.caseItemNum = 13;
        sessionStorage.randKnifeNum = 64;
    });

    huntsmanCase.addEventListener("click", (e) => {
        sessionStorage.caseNum = 8;
        sessionStorage.caseItemNum = 15;
        sessionStorage.randKnifeNum = 13;
    });

    breakoutCase.addEventListener("click", (e) => {
        sessionStorage.caseNum = 9;
        sessionStorage.caseItemNum = 14;
        sessionStorage.randKnifeNum = 13;
    })

    hydraCase.addEventListener("click", (e) => {
        sessionStorage.caseNum = 23;
        sessionStorage.caseItemNum = 17;
        sessionStorage.randKnifeNum = 24;
    })

    cs20Case.addEventListener("click", (e) => {
        sessionStorage.caseNum = 30;
        sessionStorage.caseItemNum = 17;
        sessionStorage.randKnifeNum = 13;
    })
}

//CSGO API
if (document.URL.includes("caseopening.html")) {
    window.addEventListener("load", (e) => {
        fetch('https://bymykel.github.io/CSGO-API/api/en/crates/cases.json')
        .then(response => response.json())
        .then((data) => {
            const caseData = data;
            console.log(caseData);

            caseNum = sessionStorage.caseNum;
            caseItemNum = sessionStorage.caseItemNum
            randKnifeNum = sessionStorage.randKnifeNum;

            const caseWin = document.getElementById("caseWin");
            caseWin.src = caseData[caseNum].image;
            
            //Populates case items on case page
            for(i = 0; i < caseItemNum; i++) {
                const weaponSkin = document.getElementById("weaponSkinLoad");
                const weaponSkinDiv = document.createElement("DIV");
                const weaponSkinImg = document.createElement("IMG");
                weaponSkinImg.classList.add("itemsize");
                weaponSkinImg.src = caseData[caseNum].contains[i].image;
                weaponSkin.append(weaponSkinDiv);
                weaponSkinDiv.append(weaponSkinImg);
            }
            //Populate knife image on case page
            const weaponSkin = document.getElementById("weaponSkinLoad");
            const weaponSkinDiv = document.createElement("DIV");
            const weaponSkinImg = document.createElement("IMG");
            weaponSkinImg.classList.add("itemsize");
            weaponSkinImg.src = caseData[caseNum].contains_rare[0].image;
            weaponSkin.append(weaponSkinDiv);
            weaponSkinDiv.append(weaponSkinImg);

            //Adds case open functionality
            const caseOpen = document.getElementById("openBtn");
            caseOpen.addEventListener("click", (e) => {

            //Item rarity and variables
            let randItem = Math.floor(Math.random() * caseItemNum);
            let randKnife = Math.floor(Math.random() * randKnifeNum);
            let randKnifeChance = Math.floor(Math.random() * 50);
            const caseWin = document.getElementById("caseWin");
            const itemDesc = document.getElementById("itemDesc");

            caseOpen.disabled = true;
            caseOpen.classList.add("btndisabled");

            //Rarity Check
            console.log(randItem);
            console.log(randKnifeChance);
            
            //Rolls for a number between 0-49 and if number is 49 the user unboxes a knife
            //otherwise the user gets a weapon skin
            if (randKnifeChance === 49) {
                caseWin.src = caseData[caseNum].contains_rare[randKnife].image;
                itemDesc.innerText = caseData[caseNum].contains_rare[randKnife].name;
            } else {
                caseWin.classList.add("casefadeout");
                caseWin.src = caseData[caseNum].contains[randItem].image;
                itemDesc.innerText = caseData[caseNum].contains[randItem].name;
            }

            //Resets open case to closed case
            setTimeout(function () {
                caseOpen.disabled = false;
                caseWin.classList.add("casefadein");
                caseWin.src = caseData[caseNum].image;
                itemDesc.innerText = "Item description will appear here!";
                caseWin.classList.remove("casefadeout");
                caseOpen.classList.remove("btndisabled");
            }, 3000)

            caseWin.classList.remove("casefadein");
        })

        })
        .catch((err) => console.log("Error Loading CSGO API", err));
    })
}


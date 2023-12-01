
//CSGO API
window.addEventListener("load", (e) => {
    fetch('https://bymykel.github.io/CSGO-API/api/en/crates/cases.json')
    .then(response => response.json())
    .then((data) => {
        const caseData = data;
        console.log(caseData);
        const caseWin = document.getElementById("caseWin");
        caseWin.src = 'images/bravocase.png';
        
        //Populates case items on case page
        for(i = 0; i < 15; i++) {
            const weaponSkin = document.getElementById("weaponSkinLoad");
            const weaponSkinDiv = document.createElement("DIV");
            const weaponSkinImg = document.createElement("IMG");
            weaponSkinImg.classList.add("itemsize");
            weaponSkinImg.src = caseData[2].contains[i].image;
            weaponSkin.append(weaponSkinDiv);
            weaponSkinDiv.append(weaponSkinImg);
        }
        //Populate knife image on case page
        const weaponSkin = document.getElementById("weaponSkinLoad");
        const weaponSkinDiv = document.createElement("DIV");
        const weaponSkinImg = document.createElement("IMG");
        weaponSkinImg.classList.add("itemsize");
        weaponSkinImg.src = caseData[2].contains_rare[0].image;
        weaponSkin.append(weaponSkinDiv);
        weaponSkinDiv.append(weaponSkinImg);

        //Adds case open functionality
        const caseOpen = document.getElementById("openBtn");
        caseOpen.addEventListener("click", (e) => {

        //Item rarity and variables
        let randItem = Math.floor(Math.random() * 15);
        let randKnife = Math.floor(Math.random() * 64);
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
            caseWin.src = caseData[2].contains_rare[randKnife].image;
            itemDesc.innerText = caseData[2].contains_rare[randKnife].name;
        } else {
            caseWin.classList.add("casefadeout");
            caseWin.src = caseData[2].contains[randItem].image;
            itemDesc.innerText = caseData[2].contains[randItem].name;
        }

        //Resets open case to closed case
        setTimeout(function () {
            caseOpen.disabled = false;
            caseWin.classList.add("casefadein");
            caseWin.src = 'images/bravocase.png';;
            itemDesc.innerText = "Item description will appear here!";
            caseWin.classList.remove("casefadeout");
            caseOpen.classList.remove("btndisabled");
        }, 3000)

        caseWin.classList.remove("casefadein");
    })

    })
    .catch((err) => console.log("Error Loading CSGO API", err));
})
function getSaaSData() {
    document.addEventListener("click", function () {
        let names = "";
        let adj = ["Crazy", "Amazing", "Fire"];
        let shopNames = ["Engine", "Foods", "Garments"];
        let anotherWords = ["Bros", "Limited", "Hub"];

        for (let a of adj) {
            for (let b of shopNames) {
                for (let c of anotherWords) {
                    names += `${a}${b}${c}\n`;
                }
            }
        }

        console.log(names); // Log the names to the console
    });
}

getSaaSData();



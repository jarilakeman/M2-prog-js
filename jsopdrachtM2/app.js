class App
{
    runApplication()
    {
        console.log("Hello world");
        let appNaam = "Jari"
        let versienummer = "1.18.2"
        let versiedatum = "21-11-2022"
        let auteur = "Jari Lakeman"
        let copyright = "Jari Lakeman BV"
        let distritibeur = "Paul Lakeman"
        let darkmode = true

        console.log(appNaam); 
        console.log(versienummer); 
        console.log(versiedatum); 
        console.log(auteur); 
        console.log(copyright); 
        console.log(distritibeur); 
        console.log(darkmode); 
    }
}
console.log()
let app = new App()
app.runApplication()

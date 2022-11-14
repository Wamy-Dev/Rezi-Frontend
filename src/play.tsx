import {Helmet} from "react-helmet";

function Play() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    var core = params.get('type');
    var link = params.get('link');
    var bios = params.get('bios');
    var title = params.get('title');
    // const targetScript = document.getElementById("play");
    let scriptplay = 
    `
    EJS_player = "#game";
    EJS_core = "${core}";
    EJS_pathtodata = "https://raw.githack.com/EmulatorJS/EmulatorJS/main/data/";
    EJS_gameUrl = "https://play.rezi.one/${link}";
    EJS_biosUrl = "${bios}";
    `
    return (
        <div>
            <Helmet>
                <title>{`Now playing - ${title}`}</title>
                <script src="https://raw.githack.com/EmulatorJS/EmulatorJS/main/data/loader.js"></script>
                <script>
                    {scriptplay}
                </script>
            </Helmet>
            <center style={{width: "640px", height: "480px", maxWidth:"100%"}}>
                <div id="game"></div>
            </center>
        </div>
    )
}
export default Play;
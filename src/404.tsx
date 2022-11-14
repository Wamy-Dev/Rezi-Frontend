import Girl from "./404girl.png"
function Error() {
    return (
        <div style={{ overflow:"hidden" }}>
            <center>
                <a href="/">
                    <img src={Girl} alt="404" style={{width: "90vw", overflow: "hidden"}}/>
                </a>
            </center>
        </div>
    );
}
export default Error;
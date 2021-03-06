(function () {
    let wrapper = document.getElementById("wrapper");
    let converter = new showdown.Converter();
    let markdownFormat = "There is no markdown file";

    window.onresize = function () {
        if(window.innerWidth < 600){
            wrapper.setAttribute("class", "mobile");
        }else{
            wrapper.removeAttribute("class");
        }
    };

    readTextFile("content/Appendix.md");
    let html = converter.makeHtml(markdownFormat);
    wrapper.innerHTML = html;
    function readTextFile(file) {
        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    markdownFormat = rawFile.responseText;
                }
            }
        };
        rawFile.send(null);
    }
})();
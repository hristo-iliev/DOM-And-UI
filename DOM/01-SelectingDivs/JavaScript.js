function my() {
    var divsStaticList = document.querySelectorAll("div > div");
    console.log(divsStaticList);

    var divsLiveList = document.getElementsByTagName('div');
    var insideDivs = [];
    
    for (var i = 0; i < divsLiveList.length; i++) {
        var x = divsLiveList[i].parentNode;
        x = HTMLDivElement;

        if (divsLiveList[i].parentNode.nodeName == "DIV") {
            insideDivs.push(divsLiveList[i]);
        }
        
    }
    console.log(insideDivs);
}
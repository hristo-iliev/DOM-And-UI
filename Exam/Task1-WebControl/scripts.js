function createCalendar(selector, events) {
    var rowDiv = document.createElement('div');
    var colDiv = document.createElement('div');
    colDiv.style.display = "inline-block";
    colDiv.style.border = "1px solid black";    
    colDiv.style.width = "160px";
    colDiv.style.height = "150px";
    colDiv.style.cssFloat = "left";
    colDiv.setAttribute("onmouseover", "darker(this)");
    colDiv.setAttribute("onmouseout", "normal(this)");
    colDiv.setAttribute("onclick", "white(this)");
    //onmouseover="bigImg(this)" onmouseout="normalImg(this)"

    var head = document.createElement('h3');
    head.style.backgroundColor = "#CCCCCC";
    head.style.borderBottom = "1px solid black";
    head.style.margin = "0";
    var docFrag = document.createDocumentFragment();
    //colDiv.appendChild(head);
    var days = [
        "Sun",
        "Mon",
        "Tue",
        "Sat",
        "Thu",
        "Fri",
        "Sat"
    ];
    
    var arr = events.sort(function (a, b) { return parseInt(a.date) - parseInt(b.date); });
    var dateIndex = 0;
    var span = document.createElement('span');
    var span2 = "";
    var isEvent = false;

    for (var i = 1; i <= 30;) {        
        var rowDiv2 = rowDiv.cloneNode(true);
        for (var j = 0; j < 7; j++) {
            var col2Div = colDiv.cloneNode(true);
            //colDiv.removeChild(HTMLHeadElement);
            var head2 = head.cloneNode(true);
            
            if (dateIndex < arr.length && i == arr[dateIndex].date) {
                span2 = span.cloneNode(true);
                span2.innerText = arr[dateIndex].hour + " " + arr[dateIndex].title;
                isEvent = true;
                dateIndex++;
            }
            head2.innerHTML = days[j] + " " + (i++) + " June 2014";
            col2Div.appendChild(head2);
            if (isEvent) {
                col2Div.appendChild(span2);
                isEvent = false;
            }
            rowDiv2.appendChild(col2Div);
            if (i > 30) {

                break;
            }
        }
        
        docFrag.appendChild(rowDiv2);
    }

    document.querySelector(selector).appendChild(docFrag);
    
}

function darker(x) {
    if (x.firstChild.style.backgroundColor != "white") {
        x.firstChild.style.backgroundColor = "#999999";
    }    
}

function normal(x) {
    if (x.firstChild.style.backgroundColor != "white") {
        x.firstChild.style.backgroundColor = "#CCCCCC";
    }
    
}

function white(x) {
    
    var arr = document.querySelectorAll("h3");
        
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            continue;
        }
        arr[i].style.backgroundColor = "#CCCCCC";
    }
    x.firstChild.style.backgroundColor = "white";
}
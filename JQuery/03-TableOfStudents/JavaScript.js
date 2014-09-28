/// <reference path="D:\ПРОГРАМИСТ\DOM and UI\JQuery\03-TableOfStudents\Libs/jquery-2.1.1.min.js" />
function main() {
    var students = [
        { fname: "Gosho", lname: "Cekov", grade: 6 },
        { fname: "Mimi", lname: "Rachkova", grade: 2 },
        { fname: "Stefan", lname: "Purmov", grade: 3 },
        { fname: "Lidiq", lname: "Ivanova", grade: 4 },
        { fname: "Pisho", lname: "Driskov", grade: 2 },
        { fname: "Lila", lname: "Cekova", grade: 4 },
        { fname: "Misho", lname: "Prasov", grade: 5 },
        { fname: "Rumen", lname: "Hristov", grade: 3 }
    ];

    generateTable(students);
}

function generateTable(arr) {
    var $table = $('<table>');
    $table.css('border', '1px solid black');    
    $table.append('<tr><th>' + 'First Name' + '</th>' + '<th>' + 'Last Name' + '</th>' + '<th>' + 'Grade' + '</th>' + '</tr>');
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        $table.append('<tr><td>' + arr[i].fname + '</td>' + '<td>' + arr[i].lname + '</td>' + '<td>' + arr[i].grade + '</tr>');
    }
    
    $('body').append($table);   
    $("th, td").css('border', '1px solid black');
    $("table").attr('cellspacing', '0');
    $("table").attr('cellpadding', '5');
}
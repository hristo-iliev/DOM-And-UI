/// <reference path="D:\ПРОГРАМИСТ\DOM and UI\Handlebars\01-GridTable\Libs/handlebars-v1.3.0.js" />
(function () {
    var templateString = document.getElementById("table").innerHTML;
    var template = Handlebars.compile(templateString);

    var courses = [
        { number: '0', title: "Course Introduction", date1: "Wed 18:00, 28-May-2014", date2: "Thu 14:00, 29-May-2014" },
        { number: '1', title: "Document Object Model", date1: "Wed 18:00, 28-May-2014", date2: "Thu 14:00, 29-May-2014" },
        { number: '2', title: "HTML5 Canvas", date1: "Thu 18:00, 29-May-2014", date2: "Fri 14:00, 30-May-2014" },
        { number: 3, title: "KineticJS Overview", date1: "Thu 18:00, 29-May-2014", date2: "Fri 14:00, 30-May-2014" },
        { number: 4, title: "SVG & RaphaelJS", date1: "Wed 18:00, 04-June-2014", date2: "Thu 14:00, 05-June-2014" },
        { number: 5, title: "Animations With Canvas And SVG", date1: "Wed 18:00, 04-June-2014", date2: "Thu 14:00, 05-June-2014" },
        { number: 6, title: "DOM Operations", date1: "Thu 18:00, 05-June-2014", date2: "Fri 14:00, 06-June-2014" },
        { number: 7, title: "Event Model", date1: "Thu 18:00, 05-June-2014", date2: "Fri 14:00, 06-June-2014" },
        { number: 8, title: "jQuery Overview", date1: "Wed 18:00, 11-June-2014", date2: "Thu 14:00, 12-June-2014" },
        { number: 9, title: "HTML Templates", date1: "Wed 18:00, 11-June-2014", date2: "Thu 14:00, 12-June-2014" },
        { number: 10, title: "Exam Preparation", date1: "Thu 18:00, 12-June-2014", date2: "Fri 14:00, 13-June-2014" },
        { number: 11, title: "Exam", date1: "Tue 10:00, 17-June-2014", date2: "Tue 16:30, 17-June-2014" },
        { number: 12, title: "Teamwork Defense", date1: "Thu 10:00, 19-June-2014", date2: "Thu 10:00, 19-June-2014" }
    ];

    document.body.innerHTML = template({courses: courses});
})();
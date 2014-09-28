﻿function my() {
    var can = document.getElementById('canvas');
    var cxt = can.getContext('2d');

    cxt.beginPath();
    cxt.arc(100, 600, 50, 0, 2 * Math.PI);
    cxt.fillStyle = "#95CDD9";
    cxt.strokeStyle = "#3A8697";
    cxt.lineWidth = 2;
    cxt.stroke();
    cxt.fill();
    cxt.moveTo(100, 600);
    cxt.lineTo(170, 520);
    cxt.moveTo(100, 600);
    cxt.lineTo(210, 600);
    cxt.lineTo(155, 490);
    cxt.moveTo(140, 490);
    cxt.lineTo(170, 490);
    cxt.moveTo(210, 600);
    cxt.stroke();
    cxt.beginPath();
    cxt.arc(210, 600, 15, 0, 2 * Math.PI);
    cxt.moveTo(190, 580);
    cxt.lineTo(200, 590);
    cxt.moveTo(220, 610);
    cxt.lineTo(230, 620);
    cxt.moveTo(210, 600);
    cxt.lineTo(310, 520);
    cxt.lineTo(170, 520);
    cxt.moveTo(320, 600);
    cxt.stroke();
    cxt.beginPath();
    cxt.arc(320, 600, 50, 0, 2 * Math.PI);
    cxt.fillStyle = "#95CDD9";
    cxt.strokeStyle = "#3A8697";
    cxt.lineWidth = 2;
    cxt.stroke();
    cxt.fill();
    cxt.moveTo(320, 600);
    cxt.lineTo(305, 470);
    cxt.lineTo(345, 440);
    cxt.moveTo(305, 470);
    cxt.lineTo(260, 480);
    cxt.stroke();
    // Human
    cxt.beginPath();
    cxt.arc(300, 280, 70, 0, 2 * Math.PI);
    cxt.fillStyle = "#95CDD9";
    cxt.strokeStyle = "#3A8697";
    cxt.lineWidth = 2;
    cxt.stroke();
    cxt.fill();
    cxt.moveTo(290, 290);
    cxt.lineTo(275, 290);
    cxt.lineTo(290, 260);
    cxt.stroke();
    cxt.beginPath();
    cxt.lineWidth = 2;
    cxt.save();
    cxt.rotate(10 * Math.PI / 180);
    cxt.scale(1.6, 0.4);
    cxt.arc(215, 645, 20, 0, 2 * Math.PI);
    cxt.stroke();
    cxt.beginPath();
    cxt.restore();
    cxt.lineWidth = 2;
    cxt.scale(1.6, 0.8);
    cxt.arc(165, 310, 10, 0, 2 * Math.PI);
    cxt.stroke();
    cxt.beginPath();
    cxt.lineWidth = 2;
    cxt.arc(200, 310, 10, 0, 2 * Math.PI);
    cxt.stroke();
    cxt.beginPath();
    cxt.lineWidth = 2;
    cxt.scale(0.4, 1.6);
    cxt.arc(410, 195, 5, 0, 2 * Math.PI);
    cxt.fillStyle = "#275A65";
    cxt.fill();
    cxt.beginPath();
    cxt.lineWidth = 2;
    //cxt.scale(0.4, 1.6);
    cxt.arc(500, 195, 5, 0, 2 * Math.PI);
    //cxt.fillStyle = "#275A65";
    cxt.fill();
    cxt.beginPath();
    cxt.fillStyle = "#3F6C98";
    cxt.strokeStyle = "#2B2B2B";
    cxt.lineWidth = 2;
    cxt.scale(2.6, 0.3);
    cxt.arc(180, 560, 50, 0, 2 * Math.PI);
    cxt.stroke();
    cxt.fill();
    cxt.beginPath();
    cxt.fillStyle = "#3F6C98";
    cxt.strokeStyle = "#2B2B2B";
    cxt.lineWidth = 4;
    cxt.scale(0.3, 0.6);
    cxt.arc(610, 560, 90, 0, 2 * Math.PI);
    cxt.stroke();
    cxt.fill();
    moveTo(610, 600);
    cxt.lineTo(700, 940);
    cxt.quadraticCurveTo(600, 1040, 520, 940);
    cxt.lineTo(520, 580);
    cxt.stroke();
    cxt.fill();
    cxt.stroke();
    cxt.beginPath();
    cxt.fillStyle = "#9C6161";
    cxt.strokeStyle = "#2B2B2B";
    cxt.lineWidth = 6;
    cxt.moveTo(1200, 1000);
    cxt.lineTo(1800, 1000);
    cxt.lineTo(1500, 500);
    cxt.closePath();
    cxt.stroke();
    cxt.fill();
    cxt.moveTo(1600, 800);
    cxt.lineTo(1600, 550);
    cxt.lineTo(1650, 550);
    cxt.lineTo(1650, 800);
    cxt.fill();
    cxt.stroke();
    cxt.beginPath();
    cxt.fillRect(1603, 553, 44, 200);
    cxt.beginPath();
    cxt.lineWidth = 5;
    cxt.scale(0.6, 0.6);
    cxt.arc(2708, 900, 45, 0, 2 * Math.PI);
    cxt.fill();
    cxt.stroke();
    cxt.beginPath();
    cxt.lineWidth = 5;
    cxt.moveTo(3000, 1670);
    cxt.lineTo(2000, 1670);
    cxt.lineTo(2000, 3200);
    cxt.lineTo(3000, 3200);
    cxt.closePath();
    cxt.fill();
    cxt.stroke();
    cxt.beginPath();
    cxt.fillStyle = "#000000";
    cxt.fillRect(2050, 1800, 400, 500);
    cxt.beginPath();
    cxt.fillRect(2550, 1800, 400, 500);
    cxt.beginPath();
    cxt.fillRect(2550, 2400, 400, 500);
    cxt.beginPath();
    cxt.lineWidth = 10;
    cxt.moveTo(2100, 3200);  
    cxt.bezierCurveTo(2050, 2300, 2450, 2300, 2400, 3200);
    cxt.stroke();
    cxt.moveTo(2250, 3200);
    cxt.lineTo(2250, 2525);
    cxt.stroke();
    cxt.beginPath();
    cxt.scale(0.5, 1);
    cxt.lineWidth = 10;
    cxt.arc(4400, 2900, 40, 0, 2 * Math.PI);
    cxt.stroke();
    cxt.beginPath();
    //cxt.scale(0.5, 1);
    cxt.lineWidth = 10;
    cxt.arc(4600, 2900, 40, 0, 2 * Math.PI);
    cxt.stroke();
    cxt.beginPath();
    cxt.lineWidth = 10;
    cxt.strokeStyle = "#9C6161";
    cxt.moveTo(4050, 2050);
    cxt.lineTo(4950, 2050);
    cxt.stroke();
    cxt.moveTo(5050, 2050);
    cxt.lineTo(5950, 2050);
    cxt.stroke();
    cxt.moveTo(5050, 2650);
    cxt.lineTo(5950, 2650);
    cxt.stroke();
    cxt.moveTo(4500, 1750);
    cxt.lineTo(4500, 2350);
    cxt.stroke();
    cxt.moveTo(5500, 1750);
    cxt.lineTo(5500, 2950);
    cxt.stroke();
}
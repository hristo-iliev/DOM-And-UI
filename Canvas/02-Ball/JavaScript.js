function my() {
    var can = document.getElementById('canvas');
    var cxt = can.getContext('2d');
    var x = 300;
    var y = 280;

    var fps = 70;
    var ul = true;
    var ur = false;
    var dl = false;
    var dr = false;
    function pin() {
        setTimeout(function () {
            requestAnimationFrame(pin);

            cxt.clearRect(0, 0, 1000, 800);
            cxt.beginPath();
            cxt.lineWidth = 10;
            cxt.arc(x, y, 10, 0, 2 * Math.PI);
            cxt.fill();

            if (ul) {
                if (x > 5 && y > 5) {
                    x--;
                    y--;
                } else if (y < 6 && x < 6) {
                    ul = false;
                    dr = true;
                } else if (y < 6) {
                    ul = false;
                    dl = true;
                } else {
                    ul = false;
                    ur = true;
                }
            } else if (ur) {
                if (y > 5 && x < 995) {
                    y--;
                    x++;
                } else if (y < 6 && x > 994) {
                    ur = false;
                    dl = true;
                } else if (y < 6) {
                    ur = false;
                    dr = true;
                } else {
                    ur = false;
                    ul = true;
                }
            } else if (dl) {
                if (y < 800 && x > 5) {
                    y++;
                    x--;
                } else if (y > 800 && x < 6) {
                    dl = false;
                    ur = true;
                } else if (y > 800) {
                    dl = false;
                    ul = true;
                } else {
                    dl = false;
                    dr = true;
                }
            } else if (dr) {
                if (y < 795 && x < 995) {
                    y++;
                    x++;
                } else if (y > 794 && x > 994) {
                    dr = false;
                    ul = true;
                } else if (y > 794) {
                    dr = false;
                    ur = true;
                } else {
                    dr = false;
                    dl = true;
                }
            }

        }, 1000 / fps);
        
        
        //requestAnimationFrame(pin);
    }

    pin();
}
/*
Days-of-week highlight control

Usage:
Dow.setDow({});

Example:
// Highlight Sunday and Monday
Dow.setDow({
    "target": document.getElementById("dow"),
    "dow": [1,2],
    "names": {
        1: "S",
        2: "M",
        3: "T",
        4: "W",
        5: "T",
        6: "F",
        7: "S"
    }
});

If you want to use this, please send me a message: admin@caffinc.com

Disclaimer:
Don't hold me responsible for anything untoward caused by this code.
*/

var Dow = {
    setDow: function(options) {
        var target = null;
        if ("target" in options) {
            target = options["target"];
        } else {
            target = document.createElement("div");
            document.body.appendChild(target);
        }
        var dow = [];
        if ("dow" in options) {
            dow = options["dow"];
        }
        var dowMap = {
            1: "S",
            2: "M",
            3: "T",
            4: "W",
            5: "T",
            6: "F",
            7: "S"
        };
        if ("names" in options) {
            dowMap = options["names"];
        }
        function contains(a, obj) {
            for (var i = 0; i < a.length; i++) {
                if (a[i] === obj) {
                    return true;
                }
            }
            return false;
        };

        var dowStr = '<div class="dow">';
        [1,2,3,4,5,6,7].forEach(function(d){
            if (contains(dow, d)) {
                dowStr = dowStr + '<div class="dow-highlight dow-unit"><span>' + dowMap[d] + '</span></div>';
            }
            else {
                dowStr = dowStr + '<div class="dow-normal dow-unit"><span>' + dowMap[d] + '</span></div>';
            }
        });
        dowStr = dowStr + "</div>";
        target.innerHTML = dowStr;
    }
};
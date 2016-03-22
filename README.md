# DaysOfWeekControl

Simple JavaScript/CSS Days of Week control

### Usage

	Dow.setDow({
	    "target": document.getElementById("dow"),
	    "dow": [1,2],
	    "names": {
	        1: "SUN",
	        2: "MON",
	        3: "TUE",
	        4: "WED",
	        5: "THU",
	        6: "FRI",
	        7: "SAT"
	    }
	});

The `target` field `dow` must be a `div`. The `dow` field is an array indicating days to highlight (1-7). The `names` field is the text to display against each day. All fields are optional. Not setting `target` will cause the control to be appended to the `body`, not setting `dow` will highlight nothing. Not setting `names` will default to SMTWTFS.

### How it looks

<img src="https://caffinc.github.io/images/dow.png" style="width: 100px;"/>

### Help

Send me a message at admin@caffinc.com if there's something you want fixed.
function sortAscendingNames(){
	currentTableList.sort((a, b) => {
		if (a[0] < b[0]) {
			return -1;
		} else if (a[0] > b[0]) {
			return 1;
		} else {
			return 0;
		}
	});
}
function sortDescendingNames(){
	currentTableList.sort((a, b) => {
		if (a[0] > b[0]) {
			return -1;
		} else if (a[0] < b[0]) {
			return 1;
		} else {
			return 0;
		}
	});
}

function sortAscendingTimes(){
 	currentTableList.sort((a, b) => {
    	const timeA = moment(`${a[4]} ${a[3]}`, "DD/MM hh:mm A");
    	const timeB = moment(`${b[4]} ${b[3]}`, "DD/MM hh:mm A");

    	return timeA.diff(timeB);
  	});
}
function sortDescendingTimes(){
 	currentTableList.sort((a, b) => {
    	const timeA = moment(`${a[4]} ${a[3]}`, "DD/MM hh:mm A");
    	const timeB = moment(`${b[4]} ${b[3]}`, "DD/MM hh:mm A");

    	return timeB.diff(timeA);
  	});
}

function sortAscendingDates(){
	currentTableList.sort((a, b) => {
		if (a[4] < b[4]) {
			return -1;
		} else if (a[4] > b[4]) {
			return 1;
		} else {
			return 0;
		}
	});
}
function sortDescendingDates(){
	currentTableList.sort((a, b) => {
		if (a[4] > b[4]) {
			return -1;
		} else if (a[4] < b[4]) {
			return 1;
		} else {
			return 0;
		}
	});
}
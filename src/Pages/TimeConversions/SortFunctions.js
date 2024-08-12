function sortAscendingNames(){
	currentTableList.sort((a, b) => {
		if (a[tableColumns.country] < b[tableColumns.country]) {
			return -1;
		} else if (a[tableColumns.country] > b[tableColumns.country]) {
			return 1;
		} else {
			return 0;
		}
	});
}
function sortDescendingNames(){
	currentTableList.sort((a, b) => {
		if (a[tableColumns.country] > b[tableColumns.country]) {
			return -1;
		} else if (a[tableColumns.country] < b[tableColumns.country]) {
			return 1;
		} else {
			return 0;
		}
	});
}

function sortAscendingTimes(){
 	currentTableList.sort((a, b) => {
    	const timeA = moment(`${a[tableColumns.date]} ${a[tableColumns.time]}`, "DD/MM hh:mm A");
    	const timeB = moment(`${b[tableColumns.date]} ${b[tableColumns.time]}`, "DD/MM hh:mm A");

    	return timeA.diff(timeB);
  	});
}
function sortDescendingTimes(){
 	currentTableList.sort((a, b) => {
    	const timeA = moment(`${a[tableColumns.date]} ${a[tableColumns.time]}`, "DD/MM hh:mm A");
    	const timeB = moment(`${b[tableColumns.date]} ${b[tableColumns.time]}`, "DD/MM hh:mm A");

    	return timeB.diff(timeA);
  	});
}

function sortAscendingDates(){
	currentTableList.sort((a, b) => {
		if (a[tableColumns.date] < b[tableColumns.date]) {
			return -1;
		} else if (a[tableColumns.date] > b[tableColumns.date]) {
			return 1;
		} else {
			return 0;
		}
	});
}
function sortDescendingDates(){
	currentTableList.sort((a, b) => {
		if (a[tableColumns.date] > b[tableColumns.date]) {
			return -1;
		} else if (a[tableColumns.date] < b[tableColumns.date]) {
			return 1;
		} else {
			return 0;
		}
	});
}
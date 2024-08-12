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
function sortAscendingUnits(){
	currentTableList.sort((a, b) => {
		if (a[3] < b[3]) {
			return -1;
		} else if (a[3] > b[3]) {
			return 1;
		} else {
			return 0;
		}
	});
}

function sortDescendingUnits(){
	currentTableList.sort((a, b) => {
		if (a[3] > b[3]) {
			return -1;
		} else if (a[3] < b[3]) {
			return 1;
		} else {
			return 0;
		}
	});
}

function sortAscendingCodes(){
	currentTableList.sort((a, b) => {
		if (a[5] < b[5]) {
			return -1;
		} else if (a[5] > b[5]) {
			return 1;
		} else {
			return 0;
		}
	});
}
function sortDescendingCodes(){
	currentTableList.sort((a, b) => {
		if (a[5] > b[5]) {
			return -1;
		} else if (a[5] < b[5]) {
			return 1;
		} else {
			return 0;
		}
	});
}
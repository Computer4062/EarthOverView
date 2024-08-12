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
function sortAscendingUnits(){
	currentTableList.sort((a, b) => {
		if (a[tableColumns.unit] < b[tableColumns.unit]) {
			return -1;
		} else if (a[tableColumns.unit] > b[tableColumns.unit]) {
			return 1;
		} else {
			return 0;
		}
	});
}

function sortDescendingUnits(){
	currentTableList.sort((a, b) => {
		if (a[tableColumns.unit] > b[tableColumns.unit]) {
			return -1;
		} else if (a[tableColumns.unit] < b[tableColumns.unit]) {
			return 1;
		} else {
			return 0;
		}
	});
}

function sortAscendingCodes(){
	currentTableList.sort((a, b) => {
		if (a[tableColumns.code] < b[tableColumns.code]) {
			return -1;
		} else if (a[tableColumns.code] > b[tableColumns.code]) {
			return 1;
		} else {
			return 0;
		}
	});
}
function sortDescendingCodes(){
	currentTableList.sort((a, b) => {
		if (a[tableColumns.code] > b[tableColumns.code]) {
			return -1;
		} else if (a[tableColumns.code] < b[tableColumns.code]) {
			return 1;
		} else {
			return 0;
		}
	});
}
function sortAscendingCountryNames(){
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
function sortDescendingCountryNames(){
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

function sortAscendingCityNames(){
	currentTableList.sort((a, b) => {
		if (a[tableColumns.city] < b[tableColumns.city]) {
			return -1;
		} else if (a[tableColumns.city] > b[tableColumns.city]) {
			return 1;
		} else {
			return 0;
		}
	});
}

function sortDescendingCityNames(){
	currentTableList.sort((a, b) => {
		if (a[tableColumns.city] > b[tableColumns.city]) {
			return -1;
		} else if (a[tableColumns.city] < b[tableColumns.city]) {
			return 1;
		} else {
			return 0;
		}
	});
}

function sortAscendingLatitudes(){
	currentTableList.sort((a, b) => {
		if (a[tableColumns.lat] < b[tableColumns.lat]) {
			return -1;
		} else if (a[tableColumns.lat] > b[tableColumns.lat]) {
			return 1;
		} else {
			return 0;
		}
	});
}
function sortDescendingLatitudes(){
	currentTableList.sort((a, b) => {
		if (a[tableColumns.lat] > b[tableColumns.lat]) {
			return -1;
		} else if (a[tableColumns.lat] < b[tableColumns.lat]) {
			return 1;
		} else {
			return 0;
		}
	});
}

function sortAscendingLongitudes(){
	currentTableList.sort((a, b) => {
		if (a[tableColumns.lng] < b[tableColumns.lng]) {
			return -1;
		} else if (a[tableColumns.lng] > b[tableColumns.lng]) {
			return 1;
		} else {
			return 0;
		}
	});
}
function sortDescendingLongitudes(){
	currentTableList.sort((a, b) => {
		if (a[tableColumns.lng] > b[tableColumns.lng]) {
			return -1;
		} else if (a[tableColumns.lng] < b[tableColumns.lng]) {
			return 1;
		} else {
			return 0;
		}
	});
}

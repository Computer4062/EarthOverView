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
function sortAscendingDemonyms(){
	currentTableList.sort((a, b) => {
		if (a[tableColumns.demonyms] < b[tableColumns.demonyms]) {
			return -1;
		} else if (a[tableColumns.demonyms] > b[tableColumns.demonyms]) {
			return 1;
		} else {
			return 0;
		}
	});
}

function sortDescendingDemonyms(){
	currentTableList.sort((a, b) => {
		if (a[tableColumns.demonyms] > b[tableColumns.demonyms]) {
			return -1;
		} else if (a[tableColumns.demonyms] < b[tableColumns.demonyms]) {
			return 1;
		} else {
			return 0;
		}
	});
}
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
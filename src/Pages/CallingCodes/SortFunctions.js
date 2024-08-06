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

function sortAscendingCodes(){
	currentTableList.sort((a, b) => {
		if (a[2] < b[2]) {
			return -1;
		} else if (a[2] > b[2]) {
			return 1;
		} else {
			return 0;
		}
	});
}

function sortDescendingCodes(){
	currentTableList.sort((a, b) => {
		if (a[2] > b[2]) {
			return -1;
		} else if (a[2] < b[2]) {
			return 1;
		} else {
			return 0;
		}
	});
}
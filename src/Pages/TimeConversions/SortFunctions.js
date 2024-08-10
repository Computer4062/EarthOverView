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
  		const timeA = a[3].replace(/\s+/g, '');
    	const timeB = b[3].replace(/\s+/g, '');

    	const [hoursA, minutesA] = timeA.split(':');
    	const [hoursB, minutesB] = timeB.split(':');

    	const isAMa = timeA.includes('AM');
    	const isAMb = timeB.includes('AM');

    	// Convert hours to 24-hour format
    	const adjustedHoursA = isAMa ? parseInt(hoursA, 10) : (hoursA === '12' ? 0 : parseInt(hoursA, 10) + 12);
    	const adjustedHoursB = isAMb ? parseInt(hoursB, 10) : (hoursB === '12' ? 0 : parseInt(hoursB, 10) + 12);

    	const totalMinutesA = adjustedHoursA * 60 + parseInt(minutesA, 10);
    	const totalMinutesB = adjustedHoursB * 60 + parseInt(minutesB, 10);

    	return totalMinutesA - totalMinutesB;
	});
}
function sortDescendingTimes(){
	currentTableList.sort((a, b) => {
  		const timeA = a[3].replace(/\s+/g, '');
    	const timeB = b[3].replace(/\s+/g, '');

    	const [hoursA, minutesA] = timeA.split(':');
    	const [hoursB, minutesB] = timeB.split(':');

    	const isAMa = timeA.includes('AM');
    	const isAMb = timeB.includes('AM');

    	// Convert hours to 24-hour format
    	const adjustedHoursA = isAMa ? parseInt(hoursA, 10) : (hoursA === '12' ? 0 : parseInt(hoursA, 10) + 12);
    	const adjustedHoursB = isAMb ? parseInt(hoursB, 10) : (hoursB === '12' ? 0 : parseInt(hoursB, 10) + 12);

    	const totalMinutesA = adjustedHoursA * 60 + parseInt(minutesA, 10);
    	const totalMinutesB = adjustedHoursB * 60 + parseInt(minutesB, 10);

    	return totalMinutesB - totalMinutesA;
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
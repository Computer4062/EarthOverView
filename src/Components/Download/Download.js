function downloadJson(jsonContent, fileName) {
  const blob = new Blob([jsonContent], { type: 'application/json' });
  const href = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(href);

}

// Example usage:
let yourJsonObject = [];

currentTableList.forEach(item => {
	yourJsonObject.push(
		{"country": item[0], "calling code": item[1], "continent": item[2]}
	);
});

const jsonContent = JSON.stringify(yourJsonObject);

function CallDownloader(){
	downloadJson(jsonContent, 'data.json');
}
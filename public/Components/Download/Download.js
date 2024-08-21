function convertToCSV(data, fileName) {
  // Create a CSV string
  let csvContent = data.map(row => row.join(',')).join('\n');;

  console.log(csvContent);

  // Create a Blob object
  const blob = new Blob([csvContent], { type: 'text/csv' });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);

  // Download the blob
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName + ".csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Open download page
  URL.revokeObjectURL(url);
}

function CallDownloader(fileName){
  convertToCSV(downloadsList, fileName);
}
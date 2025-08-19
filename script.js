document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#data-table tbody');

    // URL to the Esri GeoPlatform REST API endpoint
    const url = 'https://services.arcgis.com/your-service-url/FeatureServer/0/query?where=1%3D1&outFields=*&f=json';

    // Fetch data from the Esri GeoPlatform
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const features = data.features;

            features.forEach(feature => {
                const attributes = feature.attributes;
                const row = document.createElement('tr');

                // Create table cells for each attribute
                const cell1 = document.createElement('td');
                cell1.textContent = attributes.Field1; // Replace 'Field1' with actual field name
                row.appendChild(cell1);

                const cell2 = document.createElement('td');
                cell2.textContent = attributes.Field2; // Replace 'Field2' with actual field name
                row.appendChild(cell2);

                const cell3 = document.createElement('td');
                cell3.textContent = attributes.Field3; // Replace 'Field3' with actual field name
                row.appendChild(cell3);

                // Append the row to the table body
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#data-table tbody');

    // URL to the Esri GeoPlatform REST API endpoint
    const url = 'https://services.arcgis.com/cJ9YHowT8TU7DUyn/arcgis/rest/services/Funding_sources_feature_services_for_RSG/FeatureServer/1/query?where=objectid+%3E+-1&outFields=*&returnGeometry=false&f=json';

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
                cell1.textContent = attributes.Title; // Replace 'Field1' with actual field name
                row.appendChild(cell1);

                const cell2 = document.createElement('td');
                cell2.textContent = attributes.Description; // Replace 'Field2' with actual field name
                row.appendChild(cell2);

                const cell3 = document.createElement('td');
                cell3.textContent = attributes.Website; // Replace 'Field3' with actual field name
                row.appendChild(cell3);

                // Append the row to the table body
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
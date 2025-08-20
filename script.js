document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#data-table tbody');

    // URL to the Esri GeoPlatform REST API endpoint
    const url = 'https://services.arcgis.com/cJ9YHowT8TU7DUyn/arcgis/rest/services/Funding_sources_feature_services_for_RSG/FeatureServer/0/query?f=json&where=1%3D1&outFields=Title,Description,Website&returnGeometry=false';

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
                // Create a hyperlink for the URL field
                const link = document.createElement('a');
                link.href = attributes.Website; // Replace 'URLField' with the actual field name containing the URL
                link.textContent = attributes.Website; // Display the URL text
                link.target = '_blank'; // Open link in new tab
                cell3.appendChild(link);
                // cell3.textContent = attributes.Website; // Replace 'Field3' with actual field name
                row.appendChild(cell3);

                // Append the row to the table body
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
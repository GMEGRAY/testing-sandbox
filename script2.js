$(document).ready(function() {
    const tableBody = $('#data-table tbody');

    // URL to the Esri GeoPlatform REST API endpoint
    const url = 'https://services.arcgis.com/cJ9YHowT8TU7DUyn/arcgis/rest/services/Funding_sources_feature_services_for_RSG/FeatureServer/0/query?f=json&where=1%3D1&outFields=Title,ShortDescription,Website&returnGeometry=false';

    // Fetch data from the Esri GeoPlatform
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const features = data.features;

            features.forEach(feature => {
                const attributes = feature.attributes;
                const row = $('<tr></tr>');

                // Create table cells for each attribute
                const cell1 = $('<td></td>');
                // Create a hyperlink with text from one field and URL from another
                const link = $('<a></a>').attr('href', attributes.Website) // Replace 'URLField' with the actual field name containing the URL
                                          .text(attributes.Title); // Replace 'TextField' with the actual field name containing the text
                cell1.append(link);
                row.append(cell1);

                const cell2 = $('<td></td>').text(attributes.ShortDescription); // Replace 'Field2' with actual field name
                row.append(cell2);

                // Append the row to the table body
                tableBody.append(row);
            });

            // Initialize DataTables on the populated table
            $('#data-table').DataTable();
        })
        .catch(error => console.error('Error fetching data:', error));
});
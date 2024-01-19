const apiUrl = `http://localhost:3000/brands ${selectedBrand}`;


function fetchBrandImage() {
    const selectedBrand = document.getElementById('cylinderBrand').value;
    const brandImageContainer = document.getElementById('brandImageContainer');

    // Replace the URL with the actual API endpoint for fetching brand images

    // Fetch the brand image
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Assuming the API returns an object with an 'imageUrl' property
            const imageUrl = data.imageUrl;

            // Display the image in the brandImageContainer
            brandImageContainer.innerHTML = `<img src="${imageUrl}" alt="${selectedBrand} Brand">`;
        })
        .catch(error => {
            console.error('Error fetching brand image:', error);
            brandImageContainer.innerHTML = '<p>Failed to fetch brand image.</p>';
        });

    // Prevent the form from submitting (let the image load first)
    return false;
}

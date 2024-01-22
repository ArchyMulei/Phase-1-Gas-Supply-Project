document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('orderForm');
    orderForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission to handle it asynchronously

        const selectedBrand = document.getElementById('cylinderBrand').value;
        const apiUrl = `http://localhost:3000/brands/${selectedBrand}`;
        const brandImageContainer = document.getElementById('brandImageContainer');

        // Fetch the brand image
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const imageUrl = data.imageUrl;
                brandImageContainer.innerHTML = `<img src="${imageUrl}" alt="${selectedBrand} Brand">`;
            })
            .catch(error => {
                console.error('Error fetching brand image:', error);
                brandImageContainer.innerHTML = '<p>Failed to fetch brand image.</p>';
            });
    });
});

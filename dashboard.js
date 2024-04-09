document.addEventListener('DOMContentLoaded', function() {
    displaySubscriptions();
});

function displaySubscriptions() {
    var subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    var tbody = document.querySelector('#subscriptionsTable tbody');
    tbody.innerHTML = ''; // Clear previous content

    subscriptions.forEach(function(email) {
        var row = document.createElement('tr');
        var cell = document.createElement('td');
        cell.textContent = email;
        row.appendChild(cell);
        tbody.appendChild(row);
    });


}

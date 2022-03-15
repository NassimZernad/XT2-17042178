/*hier customize ik de chart met de data die benodigd is binnen het schip om de g force hoogtepunten te meten. onderverdeeld in maanden en de snelheid*/ 
var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Speed Measured',
            data: [2150, 1800, 2200, 2750, 1400, 2150, 2600, 2700, 2250, 1650, 2500, 2950],
            backgroundColor: [
                'rgba(90,90,90, 1)'

            ],
            borderColor: 'rgb(90,90,90, 1)',

            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
/*hier customize ik de data die benodigd is voor de voedselvoorraden om binnen het schip live te kunnen zien wat de koelkast nog bevat*/
var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Water (L)', 'Vegetables (KG)', 'Diners (Pieces)', 'Others'],

        datasets: [{
            label: 'Food Supply',
            data: [42, 12, 8, 6],
            backgroundColor: [
                'rgba(55, 164, 240, 1)',
                'rgba(40, 155, 99, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139,1)'

            ],
            borderColor: [
                'rgba(48, 160, 100, 1)',
                'rgba(58, 160, 225, 1)',
                'rgba(250, 202, 80, 1)',
                'rgba(130, 42, 140,1)'

            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});


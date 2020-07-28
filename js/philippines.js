var ctx = document.getElementById('bar').getContext('2d');

var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['授業費', '生活費'],
        datasets: [
            {
                type: 'bar',
                label: '（万円）',
                data: [11, 1.5],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",],
                borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",],
                "borderWidth":1
            }
        ]    
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}});
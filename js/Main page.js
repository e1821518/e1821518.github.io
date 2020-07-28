var ctx = document.getElementById('bar').getContext('2d');

var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['シンガポール', 'フィリピン', 'カナダ'],
        datasets: [
            {
                type: 'bar',
                label: '（万円）',
                data: [51.8, 12.5, 39.5],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",],
                borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",],
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
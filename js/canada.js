var ctx = document.getElementById('bar').getContext('2d');

var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['授業費', '飛行機代', '生活費','旅行代'],
        datasets: [
            {
                type: 'bar',
                label: '（万円）',
                data: [34, 11.3, 3.5, 3],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",],
                borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",],
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


/*

new Chart(document.getElementById("chartjs-1"),{"type":"bar","data":{"labels":["January","February","March","April","May","June","July"],"datasets":[{"label":"My First Dataset",
"data":[65,59,80,81,56,55,40],
"fill":false,
"backgroundColor":[
"rgba(255, 99, 132, 0.2)",
"rgba(255, 159, 64, 0.2)",
"rgba(255, 205, 86, 0.2)",
"rgba(75, 192, 192, 0.2)",
"rgba(54, 162, 235, 0.2)",
"rgba(153, 102, 255, 0.2)",
"rgba(201, 203, 207, 0.2)"],
"borderColor":[
"rgb(255, 99, 132)",
"rgb(255, 159, 64)",
"rgb(255, 205, 86)",
"rgb(75, 192, 192)",
"rgb(54, 162, 235)",
"rgb(153, 102, 255)",
"rgb(201, 203, 207)"],
"borderWidth":1}]},
"options":{"scales":{"yAxes":[{"ticks":{"beginAtZero":true}}]}}});

*/
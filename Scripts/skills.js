$(function() {
    var ctx = document.getElementById('code-language').getContext('2d');
    var chart = new Chart(ctx, {    
        type: 'line',    
        data: {
            labels: ["CSS", "HTML", "JS", "C#", "SQL"],
            datasets: [{
                backgroundColor: 'rgb(52,168,83, 0.65)',
                borderColor: 'rgb(255,255,255)',
                data: [100, 200, 300, 900, 250],
            }]
        },
    
        options: {
            legend:{
                display:false,
            },
            layout: {
                padding: {
                    left: 50,
                    right: 50,
                    top: 50,
                    bottom: 50
                }
            },
            scales: {
                yAxes: [{
                    ticks:{
                        labelString: 'godziny',
                        min: 0,
                        fontColor: '#fff',
                        fontFamily: 'Khand',
                        fontStyle: 'normal'
                    }
                }],
                xAxes: [{
                    gridLines:{
                        display: false
                    },
                    ticks:{
                        fontColor: '#fff',
                        fontFamily: 'Khand',
                        fontSize: 18
                    }
                }]
            }
        }
    });
});
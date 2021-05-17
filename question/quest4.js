//그래프
let ctx4 = document.querySelector('canvas#graph4').getContext('2d');
let lineGraph4;
function draw3(){
    if(!click2){
        lineGraph3 = new Chart(ctx3, {
            type: 'line',
            data: {
                labels: xaxes2,
                datasets: [{
                    label: '위상 속도',
                    data: arrC,
                    borderColor: "blue",
                    fill:false,
                    borderWidth: 1
                },{
                    label: '군 속도',
                    data: shallowC,
                    borderColor: "red",
                    fill:false,
                    borderWidth: 1
                }]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: '깊이 (m)'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: '속도 (m/s)'
                        }
                    }]
                }
            }
        });
    }else{
        console.log(lineGraph3)
        lineGraph3.data.datasets[0].data = arrC;
        lineGraph3.update();
    }
}
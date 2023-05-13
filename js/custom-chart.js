// Bar Chart

const DISPLAY = true;
const BORDER = true;
const CHART_AREA = true;
const TICKS = true;

const ctx = document.querySelectorAll(".bar-chart");

ctx.forEach(item =>{
  new Chart(item, {
    type: "bar",
    data: {
      labels: [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      datasets: [{
        label: "My First Dataset",
        barThickness: 10,
        data: [
          50, 30, 35, 47, 25, 30,
        ],
        backgroundColor: ["#666EED"],
        borderColor: ["#666EED"],
        borderWidth: 0,
        borderSkipped: false,
      }, ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          border: {
            display: false,
          },
          grid: {
            display: false,
            drawOnChartArea: false,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
        y: {
          border: {
            display: false,
          },
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
      },
      elements: {
        bar: {
          borderRadius: 0,
        },
      },
    },
  });
})



// Area Chart

const ctx2 = document.querySelectorAll(".area-chart");

ctx2.forEach(item =>{

  let itemContext = item.getContext("2d")

  new Chart(itemContext, {
    type: "line",
    data: {
      labels: ["", "", "", "", "", "", "", "", ""],
      datasets: [{
        label: "Dataset",
        data: [50, 60, 40, 50, 100, 110, 30, 40, 50],
        borderColor: "#666EED",
        borderWidth: 2,
        backgroundColor: "transparent",
        fill: true,
        pointStyle: "false",
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
      }, ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          border: {
            display: false,
          },
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
        y: {
          border: {
            display: false,
          },
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      },
      tension: 0.4,
    },
  });

})



// Resize Chart

window.addEventListener('beforeprint', () => {
  // myChart.resize(600, 600);
});

window.onbeforeprint = (event) => {
  console.log('Before print');
};

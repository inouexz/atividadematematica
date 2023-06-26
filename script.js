const ctx = document.getElementById('lineChart').getContext('2d');

const anos = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
const acidentes = [5566, 5547, 7261, 7017, 9463, 11464, 12513, 15107, 18829, 21711, 30707];

new Chart(ctx, {
  type: 'line',
  data: {
    labels: anos,
    datasets: [{
      label: 'Número de Acidentes',
      data: acidentes,
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 0, 255, 0.2)',
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Ano'
        }
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Número de Acidentes'
        },
        ticks: {
          beginAtZero: true
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Número de Acidentes por Ano'
      },
      legend: {
        display: true,
        position: 'top'
      }
    }
  }
});
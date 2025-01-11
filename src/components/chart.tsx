import { Chart, ChartTypeRegistry, registerables, ChartData } from 'chart.js';

// Registrar los elementos y escalas necesarios
Chart.register(...registerables);

interface ChartConfig {
    type: keyof ChartTypeRegistry;
    data: ChartData;
}

const translations = {
    en: {
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    es: {
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    }
};

const chartConfigs: Record<string, ChartConfig> = {
    salesChart: {
        type: 'line',
        data: {
            labels: translations.en.months,
            datasets: [{
                label: 'Sales 2024',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [12000, 19000, 3000, 5000, 2000, 3000, 4000, 6000, 7000, 8000, 9000, 10000],
                fill: false
            }]
        }
    },
    purchaseChart: {
        type: 'bar',
        data: {
            labels: translations.en.months,
            datasets: [{
                label: 'Purchases 2024',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                data: [8000, 15000, 5000, 7000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
            }]
        }
    },
    distributionChart: {
        type: 'pie',
        data: {
            labels: ['Sales', 'Purchases', 'Profit'],
            datasets: [{
                data: [300, 150, 150],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }
    },
    chart4: {
        type: 'line',
        data: {
            labels: translations.en.months,
            datasets: [{
                label: 'Chart 4 dataset',
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgb(54, 162, 235)',
                data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
                fill: false
            }]
        }
    },
    chart5: {
        type: 'bar',
        data: {
            labels: translations.en.months,
            datasets: [{
                label: 'Chart 5 dataset',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
            }]
        }
    },
    chart6: {
        type: 'pie',
        data: {
            labels: ['Category 1', 'Category 2', 'Category 3'],
            datasets: [{
                data: [100, 200, 300],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        }
    },
    chart7: {
        type: 'line',
        data: {
            labels: translations.en.months,
            datasets: [{
                label: 'Chart 7 dataset',
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgb(75, 192, 192)',
                data: [15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125],
                fill: false
            }]
        }
    },
    chart8: {
        type: 'bar',
        data: {
            labels: translations.en.months,
            datasets: [{
                label: 'Chart 8 dataset',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]
            }]
        }
    },
    chart9: {
        type: 'pie',
        data: {
            labels: ['Category A', 'Category B', 'Category C'],
            datasets: [{
                data: [150, 250, 350],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        }
    }
};

function renderChart(canvasId: string, language: string) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }
    const chart = Chart.getChart(canvas);
    if (chart) {
        chart.destroy();
    }

    const config = chartConfigs[canvasId];
    if (!config) {
        console.error('Chart configuration not found');
        return;
    }

    const data = {
        ...config.data,
        labels: translations[language].months,
        datasets: config.data.datasets
    };

    new Chart(canvas, {
        type: config.type,
        data,
        options: {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: document.documentElement.classList.contains('dark') ? '#FFD700' : '#000'
                    }
                }
            },
            scales: {
                y: {
                    ticks: {
                        color: document.documentElement.classList.contains('dark') ? '#FFD700' : '#000'
                    }
                },
                x: {
                    ticks: {
                        color: document.documentElement.classList.contains('dark') ? '#FFD700' : '#000'
                    }
                }
            }
        }
    });
}

export { renderChart };

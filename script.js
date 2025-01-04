// Chart configuration and data
document.addEventListener('DOMContentLoaded', function() {
    // Monthly Usage Trend Chart
    const usageCtx = document.getElementById('usageChart').getContext('2d');
    const usageChart = new Chart(usageCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Water Usage (Liters)',
                data: [7200, 6800, 7500, 7300, 7600, 7500],
                borderColor: '#0077b6',
                backgroundColor: 'rgba(0, 119, 182, 0.1)',
                tension: 0.1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            }
        }
    });

    // Usage by Category Chart
    const categoryCtx = document.getElementById('categoryChart').getContext('2d');
    const categoryChart = new Chart(categoryCtx, {
        type: 'doughnut',
        data: {
            labels: ['Kitchen', 'Bathroom', 'Laundry', 'Garden'],
            datasets: [{
                data: [30, 40, 20, 10],
                backgroundColor: [
                    '#0077b6',
                    '#00b4d8',
                    '#90e0ef',
                    '#caf0f8'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            cutout: '70%'
        }
    });

    // Add data update functionality (simulated)
    setInterval(updateData, 5000);
});

// Function to update chart data (simulated real-time updates)
function updateData() {
    const randomValue = Math.floor(Math.random() * 100) + 200;
    document.querySelector('.metric-value').textContent = randomValue;
} 
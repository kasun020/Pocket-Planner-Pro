// scripts.js

// Sample data for demonstration purposes
const incomeData = [2000, 2500, 3000, 3500, 4000];
const expensesData = [1500, 1700, 2000, 2200, 2500];
const budgetData = [80, 75, 90, 85, 95];
const activitiesData = [10, 20, 15, 25, 30];
const expenseCategories = ['Housing', 'Transportation', 'Food', 'Utilities', 'Entertainment'];
const expenseAmounts = [25, 20, 15, 10, 30]; 

// Create income vs expenses chart
var incomeVsExpensesChart = new Chart(document.getElementById('incomeVsExpensesChart'), {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Income',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: incomeData
      },
      {
        label: 'Expenses',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: expensesData
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


var budgetAdherenceChart = new Chart(document.getElementById('budgetAdherenceChart'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Budget Adherence (%)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        data: budgetData
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});


var financialActivitiesChart = new Chart(document.getElementById('financialActivitiesChart'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Financial Activities',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        data: activitiesData
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});




var expenseDistributionChart = new Chart(document.getElementById('expenseDistributionChart'), {
  type: 'pie',
  data: {
    labels: expenseCategories,
    datasets: [{
      label: 'Expense Distribution',
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1,
      data: expenseAmounts
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Expense Distribution'
      }
    }
  }
});

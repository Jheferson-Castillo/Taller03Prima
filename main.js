function calculatePension() {
    // Obtención de valores 
    const age = parseInt(document.getElementById('age').value);
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
    const currentBalance = parseFloat(document.getElementById('currentBalance').value);
    const replacementRate = 0.60;
    // Verificar 
    if (isNaN(age) || isNaN(monthlyIncome) || isNaN(currentBalance)) {
        alert("Por favor, completa todos los campos con valores válidos.");
        return;
    }
    //pensión estimada
    const pensionWithoutDivision = monthlyIncome * age * replacementRate;
    const estimatedPension = pensionWithoutDivision / 12;
    //fondo estimado
    const fundWithoutBalance = age * monthlyIncome;
    const estimatedFund = fundWithoutBalance + currentBalance;
    //resultados
    document.getElementById('estimatedPension').textContent = estimatedPension.toFixed(2);
    document.getElementById('estimatedFund').textContent = estimatedFund.toFixed(2);
    document.getElementById('currentFundBalance').textContent = currentBalance.toFixed(2);
}

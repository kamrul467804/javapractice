document.getElementById('calculate').addEventListener('click', function () {
    const incomeInput = document.getElementById('income')
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);

    const foodInput = document.getElementById('food')
    const foodAmountText = foodInput.value;
    const foodAmount = parseFloat(foodAmountText);

    const rentInput = document.getElementById('rent')
    const rentAmountText = rentInput.value;
    const rentAmount = parseFloat(rentAmountText);

    const clothesInput = document.getElementById('clothes')
    const clothesAmountText = clothesInput.value;
    const clothesAmount = parseFloat(clothesAmountText);

    const totalExpenses = document.getElementById('totalexpenses');
    const totalExpensesText = totalExpenses.innerText;
    const totalExpensesAmount = parseFloat(totalExpensesText)
    totalExpenses.innerText = foodAmount + rentAmount + clothesAmount;

    const totalBalance = document.getElementById('balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    totalBalance.innerText = incomeAmount - totalExpenses.innerText;

});





document.getElementById('savebutton').addEventListener('click', function () {
    const savingamountInput = document.getElementById('savingamount')
    const savingamountText = savingamountInput.innerText;
    const savingamountAmount = parseFloat(savingamountText)

    const incomeInput = document.getElementById('income')
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);

    savingamountInput.innerText = incomeAmount / 5;

});






document.getElementById('savebutton').addEventListener('click', function () {

    const incomeInput = document.getElementById('income')
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);

    const foodInput = document.getElementById('food')
    const foodAmountText = foodInput.value;
    const foodAmount = parseFloat(foodAmountText);

    const rentInput = document.getElementById('rent')
    const rentAmountText = rentInput.value;
    const rentAmount = parseFloat(rentAmountText);

    const clothesInput = document.getElementById('clothes')
    const clothesAmountText = clothesInput.value;
    const clothesAmount = parseFloat(clothesAmountText);

    const totalExpenses = document.getElementById('totalexpenses');
    const totalExpensesText = totalExpenses.innerText;
    const totalExpensesAmount = parseFloat(totalExpensesText)
    totalExpenses.innerText = foodAmount + rentAmount + clothesAmount;



    const savingamountInput = document.getElementById('savingamount')
    const savingamountText = savingamountInput.innerText;
    const savingamountAmount = parseFloat(savingamountText)



    savingamountInput.innerText = incomeAmount / 5;








    const totalBalance = document.getElementById('balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    totalBalance.innerText = incomeAmount - totalExpenses.innerText;










    const totalRemainingBalanceInput = document.getElementById('remainingbalance');
    const totalRemainingBalanceText = totalRemainingBalanceInput.innerText;
    const totalRemainingBalanceAmount = parseFloat(totalRemainingBalanceText);
    totalRemainingBalanceInput.innerText = totalBalance.innerText - savingamountInput.innerText;

});

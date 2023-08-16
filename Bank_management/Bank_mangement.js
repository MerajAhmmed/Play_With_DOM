//  prothome e button take dorte hobe 

document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositeField = document.getElementById('deposite-field')
    const newDepositeAmountString = depositeField.value
    const newDepositeAmount = parseFloat(newDepositeAmountString)

    // then clear the input field
    depositeField.value =''

    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositeTotalString = depositTotalElement.innerText
    const previousDepositeTotal = parseFloat(previousDepositeTotalString)

    const newDepositeTotal = previousDepositeTotal + newDepositeAmount
    depositTotalElement.innerText = newDepositeTotal

    const balance = document.getElementById('balance-total')
    const PriviousBalanceElemenString = balance.innerText
    const PriviousBalanceTotal = parseFloat(PriviousBalanceElemenString)
    
    const NewBalance = PriviousBalanceTotal + newDepositeAmount
    balance.innerText = NewBalance

})
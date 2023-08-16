document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field')
    const withdrawFieldString = withdrawField.value
    const withdrawInputAmmount = parseFloat(withdrawFieldString)

    withdrawField.value = ''

    const withdrawPrevious = document.getElementById('withdraw-total')
    const WithdrawElementString = withdrawPrevious.innerText
    const WithdrawElementAmmount = parseFloat(WithdrawElementString)

    const NeWithdrawTotal = withdrawInputAmmount + WithdrawElementAmmount
    withdrawPrevious.innerText = NeWithdrawTotal

    const balance = document.getElementById('balance-total')
    const PriviousBalanceElemenString = balance.innerText
    const PriviousBalanceTotal = parseFloat(PriviousBalanceElemenString)
    
    const NewBalance = PriviousBalanceTotal - withdrawInputAmmount
    balance.innerText = NewBalance

})
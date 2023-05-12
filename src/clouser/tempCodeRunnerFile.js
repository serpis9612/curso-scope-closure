function moneyBox(){
    let saveCoins = 0;
    function sumaCoins (coins){
        saveCoins += coins;
        console.log(`MyAlcancia: $${saveCoins}`)
    }
    return sumaCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const myMoneyBoxSergio = moneyBox();
myMoneyBoxSergio(100);
myMoneyBoxSergio(1000);
myMoneyBoxSergio(1000000);
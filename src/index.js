// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let coins = {"H":50,"Q":25,"D":10,"N":5,"P":1}, result = {};
    if(currency > 10000) {
        result['error'] = "You are rich, my friend! We don't have so much coins for exchange";
    } else {
        for(let money of Object.keys(coins)) {
            if(currency >= coins[money]) {
                let count = Math.floor(currency / coins[money]);
                result[money] = count;
                currency = currency - count * coins[money];
            }
        }
    }
    return result;
};


const cart = ['kurta', 'shoes', 'pants'];

function createOrder(cart) {
    let pr = new Promise(function (resolve, reject) {

        if (!validateCart(cart)) {
            let err = new Error("Cart is not valid");
            reject(err);
        }

        let orderId = "12345";
        if (orderId) {
            resolve(orderId);
        }
    });
    return pr;
}

function validateCart(cart) {
    return true;
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        if (orderId) {
            resolve("Successful")
        }
        else {
            reject("UnSuccessful")
        }
    })
}

function showOrderSummary(paymentInfo) {
    return new Promise((resolve, reject) => {
        if (paymentInfo == "Successful") {
            resolve(cart.length);
        } else {
            reject(0);
        }
    })
}

function updateWallet(balance) {
    return new Promise((resolve, reject) => {

        let walletBalance = 100; //some API here to fetch the walletBalance, but we are bypasssing it
        //we are assuming that the walletbalance was 100$ before the transaction happened.
        // and now it is 70$

        if (walletBalance > 0) {
            resolve("Your balance is $0 as you have used it all in your purchase")
        } else {
            reject("You still have $100 left in your wallet")
        }
    })
}

createOrder(cart)
    .then((orderId) => {
        console.log(orderId);
        return orderId; // returning this as it will be used in proceedToPayment()
    }, (err) => {
        console.log(err.message);
    })
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => {
        console.log(paymentInfo + " Payment");
        return paymentInfo; // returning this as it will be used in showOrderSummary()
    }, (error) => {
        console.log(error + " Payment");
    })
    .then(paymentInfo => showOrderSummary(paymentInfo))
    .then(
        (countOfItems) => {
            console.log(countOfItems + " items ordered: " + cart);
            return countOfItems; // returning this as it will be used in updateWallet()
        },
        (err) => {
            console.log(err + " items ordered");
        }
    )
    .then(countOfItems => updateWallet(countOfItems))
    .then(
        (balance) => {
            console.log(balance); //no return statement here, as no further promises to be executed, and there is no use of "balance" as well.
        },
        (err) => {
            console.log(err);
        }
    )


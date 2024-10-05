
const cart = [
    {
        itemName: "Jeans",
        itemPrice: 4000
    },
    {
        itemName: "Shoes",
        itemPrice: 8000
    },
    {
        itemName: "Socks",
        itemPrice: 400
    },
    {
        itemName: "Purse",
        itemPrice: 1500
    }
];

let balance = 20000;

createOrder(cart)
    .then(function (orderID) {
        return orderID;
    })
    .then(function (orderID) {
        return proceedToPayment(orderID);
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function (balance) {
        return updateWallet(balance);
    })
    .then(function (resBalance) {
        console.log(resBalance.balance);
    })
    .catch(function err() {
        console.log(err.message);
    })

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart) {
            const err = new Error("Card is not valid");
            reject(err);
        }

        const orderID = "897650";
        if (orderID) {
            setTimeout(function () {
                resolve(orderID);
            }, 5000);
        }
    });

    return pr;
}

function proceedToPayment(orderID) {
    return new Promise(function (resolve, reject) {
        if (orderID) {
            resolve({
                paymentStatus: true,
                message: "Payment Successful!"
            });
        }
        else {
            reject(new Error("Payment failed!"));
        }
    })
}

function showOrderSummary(paymentInfo) {
    return new Promise(function (resolve, reject) {
        if (paymentInfo.paymentStatus) {
            resolve({
                status: "success",
                order: "cart"
            })
        }
        else {
            reject(new Error("Something went wrong!"));
        }
    })
}

function updateWallet(history) {
    return new Promise(function (resolve, reject) {
        if (history) {
            if (history.status == "success") {
                let amount = 5000;
                balance = balance - amount;
                resolve({
                    balance: balance,
                    message: "Updated Balance"
                });
            }
        }
        else {
            reject(new Error("Wallet not updated!"));
        }
    })
}

function validateCart(cart) {
    return true;
}
const cart = [ books, bags, clothes];

const promiseRef = createOrder(cart);

promiseRef.then(function (){
    proceedToPayment(orderId);
});

const promise1 = new Promise((resolve) => setTimeout(resolve, 6000, 'First'));
const promise2 = new Promise((resolve) =>setTimeout(resolve, 4000, 'Second'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 2000, 'Third'));

Promise.all([promise1, promise2, promise3])
.then((results) => { 
    console.log(results);
})
.catch((error) => console.error(error));

const case1 = new Promise((resolve, reject) => setTimeout(resolve, 5000, 'First'));
const case2 = new Promise((resolve, reject) => setTimeout(reject, 3000, 'Rejected'));

Promise.all([case1, case2])
    .then((results) => console.log(results))
    .catch((error) => console.error(error));
    //Second One Rejected

    // Promise.allSettled()
    const p1 = new Promise((resolve, reject) => setTimeout(resolve,  5000, 'First'));
    const p2 = new Promise((resolve, reject) => setTimeout(resolve,  3000, 'Second'));
    const p3 = new Promise((resolve, reject) => setTimeout(reject,  2000, 'Third Reject'));

    Promise.allSettled([p1, p2, p3])
        .then((reults) => {
            console.log(results);
        });

        //Promise.any()

        const Promise1 = new Promise((resolve, reject => setTimeout(resolve, 5000, 'FirstOne')));
        const Promise2 = new Promise((resolve, reject => setTimeout(reject, 3000, 'Second Rejected')));
        const Promise3 = new Promise((resolve, reject => setTimeout(resolve, 2000, 'ThirdOne')));

        Promise.any([Promise1, Promise2, Promise3])
            .then((results) => {
                console.log(results);
            })
            .catch((error) => {
                console.error(error);
            });


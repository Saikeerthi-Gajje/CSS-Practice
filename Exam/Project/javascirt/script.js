/*const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise fullfilled after 2 seconds');
    }, 2000);
});

myPromise
    .then(message => {         
        console.log(message + ' Resolved');
    })
    .catch(error => {
        console.log(error + 'rejected');
    }); */

    const promise1 = new Promise((resolve) => setTimeout(resolve, 3000, 'First'));
    const promise2 = new Promise((resolve) => setTimeout(resolve, 4000, 'second'));
    const promise3 = new Promise((resolve) => setTimeout(resolve, 5000, 'Third'));

    Promise.all([promise1, promise2, promise3]){
      .then(results => console.log(results+ ' Resolved')); 
    }

    
    
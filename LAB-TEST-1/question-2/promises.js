const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // I chose the same output as shown in the document.
            let success = {'message': 'delayed success!'};
            resolve(success);
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((reject) => {
        setTimeout(() => {
            // I chose the same output as shown in the document.
            reject({ 'error': 'delayed exception!' });
        }, 500);
    });
};


resolvedPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });


rejectedPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

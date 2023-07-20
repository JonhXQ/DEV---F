let prepararIngredientes = new Promise((resolve, reject) => {
    let estadoPromesa = true;
    setTimeout(() => {
        if (estadoPromesa) {
            resolve();
        } else {
            reject();
        }
    }, 2000);
});
/* prepararIngredientes.then((a) => {
    console.log(`${a}`);
}); */
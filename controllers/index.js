const awesomeFunction = ('/',(req, res, next) => {
    res.json('Sarah Birch');
});

const returnAnotherPerson = ('/',(req, res, next) => {
    res.json('Super Awesome Person');
});
module.exports= {awesomeFunction, returnAnotherPerson};
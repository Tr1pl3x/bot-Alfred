const printTime = () => {
    return new Date(Date.now()).toLocaleTimeString();
};

const printDate = () => {
    return new Date(Date.now()).toLocaleDateString();
}
 
module.exports = printTime, printDate;
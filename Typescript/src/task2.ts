interface paysys {
    amount: number;
    mode: "cash"|"card"|"upi"|"check";
}
let paymode:paysys = {
    amount:10000,
    mode:"cash"
};
console.log(paymode.mode);

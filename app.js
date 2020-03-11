//Listen for submit
document.getElementById("loan-form").addEventListener('submit', calculateReults);

//Calculate Results

function calculateReults(e) {
    console.log("Calculating...");

    //UI Vars
    const amount = document.getElementById("amount");
    const intrest = document.getElementById("intrest");
    const years = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalIntrest = document.getElementById("total-intrest");



    e.preventDefault();
}
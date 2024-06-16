//Define constants that are used for dynamic slider, validation and calculations
const carType = document.getElementById("carTypeOption");
const leasePeriod = document.getElementById("carLeasePeriod");
const carValue = document.getElementById("carValue");
const downPaymentPercent = document.getElementById("downPaymentPercent");

const carValueSlider = document.getElementById("carValueSlider");
const downPaymentPercentSlider = document.getElementById("downPaymentSlider");

const interestRateDisplay = document.getElementById("interestRateDisplay");
const leasingCostDisplay = document.getElementById("leasingCostDisplay");
const monthlyInstallmentDisplay = document.getElementById(
  "monthlyInstallmentDisplay"
);
const downPaymentDisplay = document.getElementById("downPaymentDisplay");

//Dynamic Sliders:

//There Event Listeners make the range sliders dynamic so if the user changes the input value to change the range slider value as well and via versa
carValueSlider.addEventListener("input", () => {
  carValue.value = carValueSlider.value;
});

carValue.addEventListener("input", () => {
  carValueSlider.value = carValue.value;
});

downPaymentPercentSlider.addEventListener("input", () => {
  downPaymentPercent.value = downPaymentPercentSlider.value;
});

downPaymentPercent.addEventListener("input", () => {
  downPaymentPercentSlider.value = downPaymentPercent.value;
});


//Validation of Input:

//On change of Car value and Down Payment Percent the form is checked again if the data is valid
//Only Car Value and Down Payment Percent are validated because only there user can enter invalid input
//If user enters input lower than the minimum it returns an alert message and sets the value to the minimum
//If the user enters input higher than the maximum it returns and alert message and sets the valye to the maximum

carValue.addEventListener("change", validateForm);
downPaymentPercent.addEventListener("change", validateForm);

function validateForm(){
    validateCarValue()
    validateDownPayment()
}

function validateCarValue(){
    if(isNaN(carValue.value) || carValue.value === ""){
        carValue.value = 120000;
        carValueSlider.value = 120000;
    }
    if(carValue.value < 10000){
        alert("Car value should not be lower than 10,000!")
        carValue.value = 10000;
        carValueSlider.value = 10000;
    }
    if(carValue.value > 200000){
        alert("Car value should not be higher than 200,000!")
        carValue.value = 200000;
        carValueSlider.value = 200000;
    }
}

function validateDownPayment(){
    if(isNaN(downPaymentPercent.value) || downPaymentPercent.value === ""){
        downPaymentPercent.value = 10;
        downPaymentPercentSlider.value = 10;    
    }
    if(downPaymentPercent.value < 10){
        alert("Down payment value should not be lower than 10!")
        downPaymentPercent.value = 10;
        downPaymentPercentSlider.value = 10;
    }
    else if(downPaymentPercent.value > 50){
        alert("Down payment value should not be higher than 50!")
        downPaymentPercent.value = 50;
        downPaymentPercentSlider.value = 50;
    }
}


//Leasing Details Calculations
//The Calculations logic is divided in 5 different functions
//Each of the Leasing Details outputs is calculated in a different method
//That way the logic is easier to read and mantain
//The function 'updateLeasingDetails' combines all of the functions by calling them

let interestRate;
let downPayment;
let monthlyInstallment;
let totalLeasingCost;

updateLeasingDetails();

carType.addEventListener("change", updateLeasingDetails);
leasePeriod.addEventListener("change", updateLeasingDetails);
carValue.addEventListener("input", updateLeasingDetails);
downPaymentPercent.addEventListener("input", updateLeasingDetails);
carValueSlider.addEventListener("change", updateLeasingDetails);
downPaymentPercentSlider.addEventListener("change", updateLeasingDetails);

function updateLeasingDetails() {
    const carValueNumber = parseFloat(carValue.value) || 0;
    const downPaymentPercentNumber = parseFloat(downPaymentPercent.value) || 0;

    updateInterestRate();
    updateDownPayment(carValueNumber, downPaymentPercentNumber);
    updateMonthlyInstallment(carValueNumber);
    updateTotalLeasingCost();
   
}

//Method to update Interest Rate
function updateInterestRate() {
    if (carType.value === "BrandNew") {
        interestRate = 2.99;
    } else if (carType.value === "Used") {
        interestRate = 3.7;
    } 

    interestRateDisplay.innerText = `Interest Rate: €${interestRate}%`;
}


//Method to calculate Down Payment
function updateDownPayment(carValueNumber, downPaymentPercentNumber) {
    if (downPaymentPercentNumber && carValueNumber) {
        
        downPayment = carValueNumber * (downPaymentPercentNumber / 100);
        downPaymentDisplay.innerText = `Down Payment: €${downPayment.toFixed(2)}`;
    }
}

//Method to calculate Monthly Installment
function updateMonthlyInstallment(carValueNumber) {
        if (interestRate && leasePeriod) {

        let financedAmount = carValueNumber - downPayment;
        let monthlyInterestRate = interestRate / (100 *12); 

        let totalLoanWithInterest = monthlyInterestRate * Math.pow((1 + monthlyInterestRate),leasePeriod.value);
        let discountFactor = Math.pow((1 + monthlyInterestRate),leasePeriod.value) - 1;

        monthlyInstallment = financedAmount * (totalLoanWithInterest / discountFactor);
        monthlyInstallmentDisplay.innerText = `Monthly Installment: €${monthlyInstallment.toFixed(2)}`;
    }
}

//Method to calculate Total Leasing Cost
function updateTotalLeasingCost() {
    if (monthlyInstallment && downPayment) {
      
        let totalLoanPayments = monthlyInstallment * leasePeriod.value;
        let totalCostToOwn = totalLoanPayments + downPayment;

        leasingCostDisplay.innerText = `Total Leasing Cost: €${totalCostToOwn.toFixed(2)}`;
    }
}

"use strict";

// // // // // // // // // // // // // // // // // // // // // //
var workNumber = document.querySelector('.work-number');
var select = document.querySelector('.services-needed');
var staffNumber = document.querySelector('.staff-number');
var clientsNumber = document.querySelector('.clients-number');
var removalsNumber = document.querySelector('.removals-number'); // // // // // // // // // // // // // // // // // // // // // //

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(count, 1000);
});
select.addEventListener('change', showRelevantInputs); // // // // // // // // // // // // // // // // // // // // // //

function counter(element, start, end, duration) {
  var obj = element,
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(function () {
    current += increment;
    obj.textContent = current;

    if (current == end) {
      clearInterval(timer);
    }
  }, step);
}

function count() {
  counter(workNumber, 0, 18, 3000);
  counter(staffNumber, 0, 9, 2500);
  counter(clientsNumber, 0, 35, 3000);
  counter(removalsNumber, 0, 33, 3000);
}

function showRelevantInputs() {
  var selectedIndex = select.options.selectedIndex;
  var customInputs = document.querySelector('.custom-inputs');
  customInputs.innerHTML = '';
  console.log(select.options[0].value);

  if (selectedIndex == 1) {
    customInputs.innerHTML = "\n                                        <div class=\"row\">\n                                             <label for=\"currently-employed\">\n                                                  <span>Are you currently employed?</span>\n                                                  <input type=\"text\" name=\"currently-employed\">\n                                             </label>\n                                             <label for=\"emplyer-name\">\n                                                  <span>Who is your employer</span>\n                                                  <input type=\"text\" name=\"emplyer-name\">\n                                             </label>\n                                             <label for=\"employment-period\">\n                                                  <span>How long have you been employed?</span>\n                                                  <input type=\"text\" name=\"employment-period\">\n                                             </label>\n                                        </div>\n                                        <div class=\"row\">\n                                             <label for=\"income-before-deductions\">\n                                                  <span>Income before Deductions</span>\n                                                  <input type=\"text\" name=\"income-before-deductions\">\n                                             </label>\n                                             <label for=\"income-after-deductions\">\n                                                  <span>Income after Deductions</span>\n                                                  <input type=\"text\" name=\"income-after-deductions\">\n                                             </label>\n                                             <label for=\"monthly-obligation\">\n                                                  <span>How much are your monthly credit obligations?</span>\n                                                  <input type=\"text\" name=\"monthly-obligation\">\n                                             </label>\n                                        </div>\n                                        <div class=\"row\">\n                                             <label for=\"debt-review\">\n                                                  <span>Are/Were you under debt review?</span>\n                                                  <input type=\"text\" name=\"debt-review\">\n                                             </label>\n                                             <label for=\"admin-sequestration\">\n                                                  <span>Are/were you under administration sequestration or do you have a judgement against you?</span>\n                                                  <input type=\"text\" name=\"admin-sequestration\">\n                                             </label>\n                                        </div>\n                                   ";
  } else if (selectedIndex == 2) {
    console.log(select.options[1].value);
    customInputs.innerHTML = '';
    customInputs.innerHTML = "\n                                        <div class=\"row\">\n                                             <label for=\"permanently-employed\">\n                                                  <span>Are you permanently employed?</span>\n                                                  <input type=\"text\" name=\"permanently-employed\">\n                                             </label>\n                                             <label for=\"income-after-deductions\">\n                                                  <span>Income after Deductions</span>\n                                                  <input type=\"text\" name=\"income-after-deductions\">\n                                             </label>\n                                             <label for=\"monthly-obligation\">\n                                                  <span>How much are your monthly credit obligations?</span>\n                                                  <input type=\"text\" name=\"monthly-obligation\">\n                                             </label>\n                                        </div>\n                                        <div class=\"row\">\n                                             <label for=\"living-expenses\">\n                                                  <span>How much do you pay for monthly living expenses?</span>\n                                                  <input type=\"text\" name=\"living-expenses\">\n                                             </label>\n                                             </label>\n                                        </div>\n                                   ";
  } else if (selectedIndex == 2) {
    console.log(select.options[2].value);
    customInputs.innerHTML = '';
    customInputs.innerHTML = "\n                                        <div class=\"row\">\n                                             <label for=\"currently-employed\">\n                                                  <span>Are you currently employed?</span>\n                                                  <input type=\"text\" name=\"currently-employed\">\n                                             </label>\n                                             <label for=\"emplyer-name\">\n                                                  <span>Who is your employer</span>\n                                                  <input type=\"text\" name=\"emplyer-name\">\n                                             </label>\n                                             <label for=\"employment-period\">\n                                                  <span>How long have you been employed?</span>\n                                                  <input type=\"text\" name=\"employment-period\">\n                                             </label>\n                                        </div>\n                                        <div class=\"row\">\n                                             <label for=\"income-before-deductions\">\n                                                  <span>Income before Deductions</span>\n                                                  <input type=\"text\" name=\"income-before-deductions\">\n                                             </label>\n                                             <label for=\"income-after-deductions\">\n                                                  <span>Income after Deductions</span>\n                                                  <input type=\"text\" name=\"income-after-deductions\">\n                                             </label>\n                                             <label for=\"monthly-obligation\">\n                                                  <span>How much are your monthly credit obligations?</span>\n                                                  <input type=\"text\" name=\"monthly-obligation\">\n                                             </label>\n                                        </div>\n                                        <div class=\"row\">\n                                             <label for=\"debt-review\">\n                                                  <span>Are/Were you under debt review?</span>\n                                                  <input type=\"text\" name=\"debt-review\">\n                                             </label>\n                                             <label for=\"admin-sequestration\">\n                                                  <span>Are/were you under administration sequestration or do you have a judgement against you?</span>\n                                                  <input type=\"text\" name=\"admin-sequestration\">\n                                             </label>\n                                        </div>\n                                   ";
  } else if (selectedIndex == 3) {
    console.log(select.options[3].value);
    customInputs.innerHTML = '';
    customInputs.innerHTML = "\n                                        <div class=\"row\">\n                                             <label for=\"debt-review\">\n                                                  <span>Are you under debt review administration or sequestration?</span>\n                                                  <input type=\"text\" name=\"debt-review\">\n                                             </label>\n                                             <label for=\"signup-date\">\n                                                  <span>When did you sign up?</span>\n                                                  <input type=\"text\" name=\"signup-date\">\n                                             </label>\n                                             <label for=\"advisor\">\n                                                  <span>Who was your advisor/counsellor?</span>\n                                                  <input type=\"text\" name=\"advisor\">\n                                             </label>\n                                        </div>\n                                        <div class=\"row\">\n                                             <label for=\"payment-months\">\n                                                  <span>How many months did you pay then?</span>\n                                                  <input type=\"text\" name=\"payment-months\">\n                                             </label>\n                                             <label for=\"last -payment\">\n                                                  <span>When last did you pay them?</span>\n                                                  <input type=\"text\" name=\"last -payment\">\n                                             </label>\n                                             <label for=\"reversed-payment\">\n                                                  <span>Did you ever reverse a payment to them?</span>\n                                                  <input type=\"text\" name=\"reversed-payment\">\n                                             </label>\n                                        </div>\n                                   ";
  } else if (selectedIndex == 4) {
    console.log(select.options[4].value);
    customInputs.innerHTML = '';
    customInputs.innerHTML = "\n                                        <div class=\"row\">\n                                             <label for=\"dispute-reason\">\n                                                  <span>What would the dispute be for?</span>\n                                                  <input type=\"text\" name=\"dispute-reason\">\n                                             </label>\n                                             <label for=\"account-writeoffs\">\n                                                  <span>Do you have accounts that you believe should be written off?</span>\n                                                  <input type=\"text\" name=\"account-writeoffs\">\n                                             </label>\n                                             <label for=\"indescrepancy-date\">\n                                                  <span>When did you notice the indescrepancy?</span>\n                                                  <input type=\"text\" name=\"indescrepancy-date\">\n                                             </label>\n                                        </div>\n                                        <div class=\"row\">\n                                             <label for=\"proof\">\n                                                  <span>Do you have any proof?</span>\n                                                  <input type=\"text\" name=\"proof\">\n                                             </label>\n                                        </div>\n                                   ";
  } else if (selectedIndex == 5) {
    customInputs.innerHTML = '';
    customInputs.innerHTML = "\n                                        <div class=\"row\">\n                                             <label for=\"scammer\">\n                                                  <span>Who scammed you?</span>\n                                                  <input type=\"text\" name=\"scammer\">\n                                             </label>\n                                             <label for=\"scam-details\">\n                                                  <span>How did they scam you?</span>\n                                                  <input type=\"text\" name=\"scam-details\">\n                                             </label>\n                                             <label for=\"case-made\">\n                                                  <span>Did you make a case?</span>\n                                                  <input type=\"text\" name=\"case-made\">\n                                             </label>\n                                        </div>\n                                        <div class=\"row\">\n                                             <label for=\"case-number\">\n                                                  <span>If yes, what is the case number?</span>\n                                                  <input type=\"text\" name=\"case-number\">\n                                             </label>\n                                             <label for=\"scammer-meet\">\n                                                  <span>Did you ever meet this party?</span>\n                                                  <input type=\"text\" name=\"scammer-meet\">\n                                             </label>\n                                        </div>\n                                   ";
  } else if (selectedIndex == 6) {
    customInputs.innerHTML = '';
    customInputs.innerHTML = "\n                                        <div class=\"row\">\n                                             <label for=\"cv\">\n                                                  <span>Please upload your cv</span>\n                                                  <input type=\"file\" name=\"cv\">\n                                             </label>\n                                        </div>\n                                   ";
  } else if (selectedIndex == 7) {
    customInputs.innerHTML = '';
    customInputs.innerHTML = "\n                                        <div class=\"row\">\n                                             <label for=\"agents\">\n                                                  <span>Want to chat to one of our agents</span>\n                                                  <input type=\"text\" name=\"agents\">\n                                             </label>\n                                        </div>\n                                   ";
  }
}
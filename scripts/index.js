// // // // // // // // // // // // // // // // // // // // // //
const workNumber = document.querySelector('.work-number');
const select = document.querySelector('.services-needed');
const staffNumber = document.querySelector('.staff-number');
const clientsNumber = document.querySelector('.clients-number');
const removalsNumber = document.querySelector('.removals-number');






// // // // // // // // // // // // // // // // // // // // // //
document.addEventListener("DOMContentLoaded", () => {
     setTimeout(count, 1000);
});
select.addEventListener('change', showRelevantInputs)






// // // // // // // // // // // // // // // // // // // // // //
function counter(element, start, end, duration) {
     let obj = element,
     current = start,
     range = end - start,
     increment = end > start ? 1 : -1,
     step = Math.abs(Math.floor(duration/range)),

     timer = setInterval(() => {
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
     let selectedIndex = select.options.selectedIndex;
     let customInputs = document.querySelector('.custom-inputs');
     customInputs.innerHTML = '';          console.log(select.options[0].value);

     if(selectedIndex == 1) {
          customInputs.innerHTML = `
                                        <div class="row">
                                             <label for="currently-employed">
                                                  <span>Are you currently employed?</span>
                                                  <input type="text" name="currently-employed">
                                             </label>
                                             <label for="emplyer-name">
                                                  <span>Who is your employer</span>
                                                  <input type="text" name="emplyer-name">
                                             </label>
                                             <label for="employment-period">
                                                  <span>How long have you been employed?</span>
                                                  <input type="text" name="employment-period">
                                             </label>
                                        </div>
                                        <div class="row">
                                             <label for="income-before-deductions">
                                                  <span>Income before Deductions</span>
                                                  <input type="text" name="income-before-deductions">
                                             </label>
                                             <label for="income-after-deductions">
                                                  <span>Income after Deductions</span>
                                                  <input type="text" name="income-after-deductions">
                                             </label>
                                             <label for="monthly-obligation">
                                                  <span>How much are your monthly credit obligations?</span>
                                                  <input type="text" name="monthly-obligation">
                                             </label>
                                        </div>
                                        <div class="row">
                                             <label for="debt-review">
                                                  <span>Are/Were you under debt review?</span>
                                                  <input type="text" name="debt-review">
                                             </label>
                                             <label for="admin-sequestration">
                                                  <span>Are/were you under administration sequestration or do you have a judgement against you?</span>
                                                  <input type="text" name="admin-sequestration">
                                             </label>
                                        </div>
                                   `
       

     } else if(selectedIndex == 2) {
          console.log(select.options[1].value);
          customInputs.innerHTML = '';
          customInputs.innerHTML = `
                                        <div class="row">
                                             <label for="permanently-employed">
                                                  <span>Are you permanently employed?</span>
                                                  <input type="text" name="permanently-employed">
                                             </label>
                                             <label for="income-after-deductions">
                                                  <span>Income after Deductions</span>
                                                  <input type="text" name="income-after-deductions">
                                             </label>
                                             <label for="monthly-obligation">
                                                  <span>How much are your monthly credit obligations?</span>
                                                  <input type="text" name="monthly-obligation">
                                             </label>
                                        </div>
                                        <div class="row">
                                             <label for="living-expenses">
                                                  <span>How much do you pay for monthly living expenses?</span>
                                                  <input type="text" name="living-expenses">
                                             </label>
                                             </label>
                                        </div>
                                   `
          
     } else if(selectedIndex == 2) {
          console.log(select.options[2].value);
          customInputs.innerHTML = '';
          customInputs.innerHTML = `
                                        <div class="row">
                                             <label for="currently-employed">
                                                  <span>Are you currently employed?</span>
                                                  <input type="text" name="currently-employed">
                                             </label>
                                             <label for="emplyer-name">
                                                  <span>Who is your employer</span>
                                                  <input type="text" name="emplyer-name">
                                             </label>
                                             <label for="employment-period">
                                                  <span>How long have you been employed?</span>
                                                  <input type="text" name="employment-period">
                                             </label>
                                        </div>
                                        <div class="row">
                                             <label for="income-before-deductions">
                                                  <span>Income before Deductions</span>
                                                  <input type="text" name="income-before-deductions">
                                             </label>
                                             <label for="income-after-deductions">
                                                  <span>Income after Deductions</span>
                                                  <input type="text" name="income-after-deductions">
                                             </label>
                                             <label for="monthly-obligation">
                                                  <span>How much are your monthly credit obligations?</span>
                                                  <input type="text" name="monthly-obligation">
                                             </label>
                                        </div>
                                        <div class="row">
                                             <label for="debt-review">
                                                  <span>Are/Were you under debt review?</span>
                                                  <input type="text" name="debt-review">
                                             </label>
                                             <label for="admin-sequestration">
                                                  <span>Are/were you under administration sequestration or do you have a judgement against you?</span>
                                                  <input type="text" name="admin-sequestration">
                                             </label>
                                        </div>
                                   `
          
     } else if(selectedIndex == 3) {
          console.log(select.options[3].value);
          customInputs.innerHTML = '';
          customInputs.innerHTML = `
                                        <div class="row">
                                             <label for="debt-review">
                                                  <span>Are you under debt review administration or sequestration?</span>
                                                  <input type="text" name="debt-review">
                                             </label>
                                             <label for="signup-date">
                                                  <span>When did you sign up?</span>
                                                  <input type="text" name="signup-date">
                                             </label>
                                             <label for="advisor">
                                                  <span>Who was your advisor/counsellor?</span>
                                                  <input type="text" name="advisor">
                                             </label>
                                        </div>
                                        <div class="row">
                                             <label for="payment-months">
                                                  <span>How many months did you pay then?</span>
                                                  <input type="text" name="payment-months">
                                             </label>
                                             <label for="last -payment">
                                                  <span>When last did you pay them?</span>
                                                  <input type="text" name="last -payment">
                                             </label>
                                             <label for="reversed-payment">
                                                  <span>Did you ever reverse a payment to them?</span>
                                                  <input type="text" name="reversed-payment">
                                             </label>
                                        </div>
                                   `
          
     } else if(selectedIndex == 4) {
          console.log(select.options[4].value);
          customInputs.innerHTML = '';
          customInputs.innerHTML = `
                                        <div class="row">
                                             <label for="dispute-reason">
                                                  <span>What would the dispute be for?</span>
                                                  <input type="text" name="dispute-reason">
                                             </label>
                                             <label for="account-writeoffs">
                                                  <span>Do you have accounts that you believe should be written off?</span>
                                                  <input type="text" name="account-writeoffs">
                                             </label>
                                             <label for="indescrepancy-date">
                                                  <span>When did you notice the indescrepancy?</span>
                                                  <input type="text" name="indescrepancy-date">
                                             </label>
                                        </div>
                                        <div class="row">
                                             <label for="proof">
                                                  <span>Do you have any proof?</span>
                                                  <input type="text" name="proof">
                                             </label>
                                        </div>
                                   `
     } else if(selectedIndex == 5) {
          customInputs.innerHTML = '';
          customInputs.innerHTML = `
                                        <div class="row">
                                             <label for="scammer">
                                                  <span>Who scammed you?</span>
                                                  <input type="text" name="scammer">
                                             </label>
                                             <label for="scam-details">
                                                  <span>How did they scam you?</span>
                                                  <input type="text" name="scam-details">
                                             </label>
                                             <label for="case-made">
                                                  <span>Did you make a case?</span>
                                                  <input type="text" name="case-made">
                                             </label>
                                        </div>
                                        <div class="row">
                                             <label for="case-number">
                                                  <span>If yes, what is the case number?</span>
                                                  <input type="text" name="case-number">
                                             </label>
                                             <label for="scammer-meet">
                                                  <span>Did you ever meet this party?</span>
                                                  <input type="text" name="scammer-meet">
                                             </label>
                                        </div>
                                   `
     } else if(selectedIndex == 6) {
          customInputs.innerHTML = '';
          customInputs.innerHTML = `
                                        <div class="row">
                                             <label for="cv">
                                                  <span>Please upload your cv</span>
                                                  <input type="file" name="cv">
                                             </label>
                                        </div>
                                   `
     } else if(selectedIndex == 7) {
          customInputs.innerHTML = '';
          customInputs.innerHTML = `
                                        <div class="row">
                                             <label for="agents">
                                                  <span>Want to chat to one of our agents</span>
                                                  <input type="text" name="agents">
                                             </label>
                                        </div>
                                   `
     }
}

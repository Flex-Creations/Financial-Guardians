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
     step = Math.abs(Math.floor(duration / range)),

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

     if(selectedIndex == 0) {
          customInputs.innerHTML = '';          console.log(select.options[0].value);
          customInputs.innerHTML = `
                                        <div class="row">
                                             <label for="income-after-payment">
                                                  <span>Income after Deductions 0</span>
                                                  <input type="text" name="income-after-payment">
                                             </label>
                                             <label for="3-payments">
                                                  <span>DID client make more than 3 payments to DC 0</span>
                                                  <input type="text" name="3-payments">
                                             </label>
                                             <label for="3-payments">
                                                  <span>DID client make more than 3 payments to DC 0</span>
                                                  <input type="text" name="3-payments">
                                             </label>
                                        </div>
                                   `

     } else if(selectedIndex == 1) {
          console.log(select.options[1].value);
          customInputs.innerHTML = '';
          customInputs.innerHTML = `
                                        <div class="row">
                                             <label for="income-after-payment">
                                                  <span>Income after Deductions 1</span>
                                                  <input type="text" name="income-after-payment">
                                             </label>
                                             <label for="3-payments">
                                                  <span>DID client make more than 3 payments to DC 1</span>
                                                  <input type="text" name="3-payments">
                                             </label>
                                             <label for="3-payments">
                                                  <span>DID client make more than 3 payments to DC 1</span>
                                                  <input type="text" name="3-payments">
                                             </label>
                                        </div>
                                   `
          
     } else if(selectedIndex == 2) {
          console.log(select.options[2].value);
          customInputs.innerHTML = '';
          customInputs.innerHTML = `
                                        <div class="row">
                                             <label for="income-after-payment">
                                                  <span>Income after Deductions 2</span>
                                                  <input type="text" name="income-after-payment">
                                             </label>
                                             <label for="3-payments">
                                                  <span>DID client make more than 3 payments to DC 2</span>
                                                  <input type="text" name="3-payments">
                                             </label>
                                             <label for="3-payments">
                                                  <span>DID client make more than 3 payments to DC 2</span>
                                                  <input type="text" name="3-payments">
                                             </label>
                                        </div>
                                   `
          
     } else if(selectedIndex == 3) {
          console.log(select.options[3].value);
          customInputs.innerHTML = '';
          customInputs.innerHTML = `
                                        <div class="row">
                                             <label for="income-after-payment">
                                                  <span>Income after Deductions 3</span>
                                                  <input type="text" name="income-after-payment">
                                             </label>
                                             <label for="3-payments">
                                                  <span>DID client make more than 3 payments to DC 3</span>
                                                  <input type="text" name="3-payments">
                                             </label>
                                             <label for="3-payments">
                                                  <span>DID client make more than 3 payments to DC 3</span>
                                                  <input type="text" name="3-payments">
                                             </label>
                                        </div>
                                   `
          
     } else if(selectedIndex == 4) {
          console.log(select.options[4].value);
          customInputs.innerHTML = '';
          customInputs.innerHTML = `
                                        <div class="row">
                                             <label for="income-after-payment">
                                                  <span>Income after Deductions 4</span>
                                                  <input type="text" name="income-after-payment">
                                             </label>
                                             <label for="3-payments">
                                                  <span>DID client make more than 3 payments to DC 4</span>
                                                  <input type="text" name="3-payments">
                                             </label>
                                             <label for="3-payments">
                                                  <span>DID client make more than 3 payments to DC 4</span>
                                                  <input type="text" name="3-payments">
                                             </label>
                                        </div>
                                   `
     }

}

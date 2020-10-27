const workNumber = document.querySelector('.work-number');
const staffNumber = document.querySelector('.staff-number');
const clientsNumber = document.querySelector('.clients-number');
const removalsNumber = document.querySelector('.removals-number');



document.addEventListener("DOMContentLoaded", () => {

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

     setTimeout(count, 1000);
     
     function count() {
          counter(workNumber, 0, 18, 3000);
          counter(staffNumber, 0, 9, 2500);
          counter(clientsNumber, 0, 35, 3000);
          counter(removalsNumber, 0, 33, 3000);
     }
});
    
import swal from 'sweetalert';

const initSweetalert = (selector, options = {}, callback = () => {}) => {
  const swalButton = document.querySelector(selector);
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', () => {
      swal(options).then(callback); // <-- add the `.then(callback)`
    });
  }
};

export { initSweetalert };

// const initSweetalert = (selector, options = {}, callback = () => {}) => {
//   const swalButtons = document.querySelectorAll(selector);
//   if (swalButtons.length > 0) {
//     swalButtons.forEach((swalButton) => {
//       swalButton.addEventListener('click', () => {
//         swal(options).then(callback(swalButton));
//       });
//     })
//   }
// };

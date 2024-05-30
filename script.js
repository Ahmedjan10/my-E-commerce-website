// const imgs = document.getElementById('imgs')

// const images = {
//     image1: { src: './images/1 (1).png', alt: 'Placeholder Image 1' },
//     image2: { src: './images/1 (2).png', alt: 'Placeholder Image 2' },
//     image3: { src: './images/1 (3).png', alt: 'Placeholder Image 3' }
// };

// // Step 3: Iterate over the object and create image elements
// for (const key in images) { 
//     //for (const i=0;i<iamges.length;i++)
//     if (images.hasOwnProperty(key)) {
//         // Create an img element
//         const img = document.createElement('img');
//         // Set the src and alt attributes from the object
//         img.src = images[key].src;
//         img.alt = images[key].alt;

//         // Step 4: Append the img element to the container
//         imgs.appendChild(img);
//     }
// }

// console.log("helo");
function ShowNavbar() {
    var navbar = document.querySelector('#navbar ul');
    navbar.classList.toggle('show');
  }
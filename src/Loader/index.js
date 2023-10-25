// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import { Route } from 'react-router-dom'; // Utilisation du composant Route

// import '../Loader/loader.scss';

// const Loader = () => {
//   // Vérifiez si le chargement a déjà été effectué
//   const isLoaded = localStorage.getItem('isLoaded');

//   return (
//     <Route
//       render={({ history }) => {
//         if (!isLoaded) {
//           // Le chargement n'a pas encore été effectué, activez le loader
//           const updateCounter = (currentValue, element) => {
//             if (currentValue === 100) {
//               // Une fois le chargement terminé, enregistrez l'état dans le localStorage
//               localStorage.setItem('isLoaded', 'true');
//               // Redirigez vers la page Home une fois le chargement terminé
//               setTimeout(() => {
//                 history.push('/home');
//               }, 500);
//               return;
//             }

//             currentValue += Math.floor(Math.random() * 10) + 1;

//             if (currentValue > 100) {
//               currentValue = 100;
//             }

//             element.textContent = currentValue;

//             let delay = Math.floor(Math.random() * 200) + 50;
//             setTimeout(() => updateCounter(currentValue, element), delay);
//           };

//           const startLoader = () => {
//             const counterElement = document.querySelector('.counter');
//             if (counterElement) {
//               updateCounter(0, counterElement);
//             }
//           };

//           startLoader();
//         }

//         gsap.to('.counter', 0.25, {
//           delay: 3.5,
//           opacity: 0,
//         });
//         gsap.to('.bar', 1.5, {
//           delay: 3.5,
//           height: 0,
//           stagger: {
//             amount: 0.5,
//           },
//           ease: 'power4.inOut',
//         });

//         return (
//           <>
//             <div className="overlay">
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <div className="bar"></div>
//             </div>
//           </>
//         );
//       }}
//     />
//   );
// };

// export default Loader;

let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".wrapper-2",
      }
    });
    tl.from(".wrapper-2 img",{
        x:200,
        opacity: 0,
        duration:1.5
    }).from(".wrapper-2 p",{
        x:-400,
        opacity: 0,
        duration:2
    })
 

    let trigger=document.querySelectorAll(".modal-trigger");
       trigger.forEach((e)=>{
           e.addEventListener('click',()=>{
            let modal=document.getElementById("modal");    
           modal.classList.toggle('flex');
        })
       })  
       /**<script type="module">

  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyBJMUE8vnHMTZb4pKllbvG3qZxJSOsn2Fs",

    authDomain: "artportfolio-93892.firebaseapp.com",

    projectId: "artportfolio-93892",

    storageBucket: "artportfolio-93892.appspot.com",

    messagingSenderId: "257410501419",

    appId: "1:257410501419:web:7a34b7572a944a65a3136e",

    measurementId: "G-ZY2DF0QH9R"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

</script> */
       
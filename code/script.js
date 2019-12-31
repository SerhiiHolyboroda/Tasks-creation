let a = document.querySelector(".m");
let aa = document.querySelector(".m1");
let b = document.querySelector(".register-form");
let c = document.querySelector(".login-form");
let butreg = document.querySelector(".but-reg");
let butlog = document.querySelector(".but-log");
let reglog = document.querySelector(".reg-log");
let regpass = document.querySelector(".reg-pass"); 
let loglog = document.querySelector(".log-log");
let logpass = document.querySelector(".log-pass");
//b.style.visibility = 'hidden';
 
a.addEventListener('click', function(){
 
b.style.display  = 'block' ;
//b.classList.toggle('hidden'); 
    c.style.display  = 'none' ;
 })
 aa.addEventListener('click', function(){
 c.style.display  = 'block' ;
 
//b.classList.toggle('hidden'); 
  b.style.display  = 'none' ;
 })
 


//register.addEventListener('click', function(
//button.animate(height:"toggle", opacity: "toggle"}, "slow)")
//                          })
 butreg.addEventListener('click', function(){
     if(reglog.value != '' && regpass.value != ''   )
        alert('Successfully registered!')
      localStorage.setItem('username', reglog.value );
    localStorage.setItem('password', regpass.value);
     console.log(localStorage.getItem('username'))
     console.log(localStorage.getItem('password'))
     })

    butlog .addEventListener('click', function(){
        console.log(localStorage.getItem('username'))
     if ((loglog.value == localStorage.getItem('username')) && (logpass.value == localStorage.getItem('password'))) {
//     document.getElementById('welcomeMessage').innerHTML = "Welcome " + localStorage.getItem('username') + "!";
//        let opened = window.open("");
//opened.document.write(` <html><head><title> ${localStorage.getItem('username')} </title></head><body>test</body></html> `);
      window.location.replace(" pages/tasks.html"  );
      } else {
     document.getElementById('welcomeMessage').innerHTML = "Invalid Log-in!";
    }
     })
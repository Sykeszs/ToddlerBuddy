function sendMail() {
    var a = {
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_xdf5f9j";
    const templateID = "template_nxzcv58";
  
      emailjs.send(serviceID, templateID, a)
      .then(res=>{
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  }


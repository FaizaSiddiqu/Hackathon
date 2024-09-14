
document.getElementById("resume-Form")?.addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get references to form elements
    const profilePhoto = document.getElementById("photo") as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;

    //
    const cvNameElement = document.getElementById("cvname") as HTMLInputElement;
  


    // check if all form elements are present
    if (profilePhoto && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && cvNameElement) {
  
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;

      const cvName = cvNameElement.value;
      const uniquePath = `resumes/${cvName.replace(/\s+/g, '_')}_resume.html`
  
      // Handle the photo file
      const profilePhotoFile = profilePhoto.files?.[0];
      const profilePhotoURL = profilePhotoFile ? URL.createObjectURL(profilePhotoFile) : '';
  
      // Debugging: Log the photo URL to the console
      console.log("Profile Photo URL: ", profilePhotoURL);
  
      // Create Resume Output
      const resumeOutput = `
      <h2>Resume</h2>
      ${profilePhotoURL ? `<img src="${profilePhotoURL}" alt="profile photo" class="photo">` : ""}
      <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span></p>
      <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span></p>
      <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable"> ${phone} </span></p>
  
      <h3>Education</h3>
      <p id="edit-education" class="editable">${education}</p>
  
      <h3>Experience</h3>
      <p id="edit-experience" class="editable">${experience}</p>
  
      <h3>Skills</h3>
      <p id="edit-skills" class="editable">${skills}</p>
      `;

      const downloadLink = document.createElement("a")
      downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput)
      downloadLink.download = uniquePath;
      downloadLink.textContent = "Download your Resume";

  
      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        
        resumeOutputElement.appendChild(downloadLink)

        resumeOutputElement.style.display = "block";
     
    } 
  }else {
      console.error("One or more output elements are missing");
    }
  });
  
  function makeEditable2() {
    const editableElement = document.querySelectorAll(".editable");
    editableElement.forEach(element => {
      // Check if the element already has a listener
      if (!(element as HTMLElement).hasAttribute("data-editable")) {
        element.addEventListener("click", function () {
          const currentElement = element as HTMLElement;
          const currentValue = currentElement.textContent || "";
  
          if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
            const input = document.createElement("input");
            input.type = "text";
            input.value = currentValue;
            input.classList.add("editing-input");
  
            input.addEventListener("blur", function () {
              currentElement.textContent = input.value;
              currentElement.style.display = "inline";
              input.remove();
            });
  
            currentElement.style.display = "none";
            currentElement.parentNode?.insertBefore(input, currentElement);
            input.focus();
          }
        });
  
        // Set an attribute to mark this element as having a listener
        (element as HTMLElement).setAttribute("data-editable", "true");
      }
    });
  }
  



document.getElementById("resume-Form")?.addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get references to form elements
    const profilePhoto = document.getElementById("photo") as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;

    //
    const cvNameElement = document.getElementById("cvname") as HTMLInputElement;
  


    // check if all form elements are present
    if (profilePhoto && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && cvNameElement) {
  
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;

      const cvName = cvNameElement.value;
      const uniquePath = `resumes/${cvName.replace(/\s+/g, '_')}_resume.html`
  
      // Handle the photo file
      const profilePhotoFile = profilePhoto.files?.[0];
      const profilePhotoURL = profilePhotoFile ? URL.createObjectURL(profilePhotoFile) : '';
  
      // Debugging: Log the photo URL to the console
      console.log("Profile Photo URL: ", profilePhotoURL);
  
      // Create Resume Output
      const resumeOutput = `
      <h2>Resume</h2>
      ${profilePhotoURL ? `<img src="${profilePhotoURL}" alt="profile photo" class="photo">` : ""}
      <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span></p>
      <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span></p>
      <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable"> ${phone} </span></p>
  
      <h3>Education</h3>
      <p id="edit-education" class="editable">${education}</p>
  
      <h3>Experience</h3>
      <p id="edit-experience" class="editable">${experience}</p>
  
      <h3>Skills</h3>
      <p id="edit-skills" class="editable">${skills}</p>
      `;

      const downloadLink = document.createElement("a")
      downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput)
      downloadLink.download = uniquePath;
      downloadLink.textContent = "Download your Resume";

  
      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        
        resumeOutputElement.appendChild(downloadLink)

        resumeOutputElement.style.display = "block";
     
    } 
  }else {
      console.error("One or more output elements are missing");
    }
  });
  
  function makeEditable() {
    const editableElement = document.querySelectorAll(".editable");
    editableElement.forEach(element => {
      // Check if the element already has a listener
      if (!(element as HTMLElement).hasAttribute("data-editable")) {
        element.addEventListener("click", function () {
          const currentElement = element as HTMLElement;
          const currentValue = currentElement.textContent || "";
  
          if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
            const input = document.createElement("input");
            input.type = "text";
            input.value = currentValue;
            input.classList.add("editing-input");
  
            input.addEventListener("blur", function () {
              currentElement.textContent = input.value;
              currentElement.style.display = "inline";
              input.remove();
            });
  
            currentElement.style.display = "none";
            currentElement.parentNode?.insertBefore(input, currentElement);
            input.focus();
          }
        });
  
        // Set an attribute to mark this element as having a listener
        (element as HTMLElement).setAttribute("data-editable", "true");
      }
    });
  }
  




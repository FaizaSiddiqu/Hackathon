

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
    const cvNameElement = document.getElementById("cvname") as HTMLInputElement;
  
    // Check if all form elements are present
    if (profilePhoto && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && cvNameElement) {
  
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
      const cvName = cvNameElement.value;
      const uniquePath = `resumes/${cvName.replace(/\s+/g, '_')}_resume.html`;
  
      // Handle the photo file
      const profilePhotoFile = profilePhoto.files?.[0];
      if (profilePhotoFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
          const profilePhotoURL = event.target?.result as string;
  
          // Debugging: Log the photo URL to the console
          console.log("Profile Photo URL: ", profilePhotoURL);
  
          // Create and display resume output
          const resumeOutput = `
            <h2>Resume</h2>
            ${profilePhotoURL ? `<img src="${profilePhotoURL}" alt="profile photo" class="photo">` : ""}
            <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span></p>
            <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span></p>
            <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable"> ${phone} </span></p>
            <h3>Education :</h3>
            <p id="edit-education" class="editable">${education}</p>
            <h3>Experience :</h3>
            <p id="edit-experience" class="editable">${experience}</p>
            <h3>Skills :</h3>
            <p id="edit-skills" class="editable">${skills}</p>
          `;
  
          // Set up download link
          const downloadLink = document.createElement("a");
          downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
          downloadLink.download = uniquePath;
          downloadLink.textContent = "Download your Resume";
  
          // Insert the resume output into the page
          const resumeOutputElement = document.getElementById("resumeOutput");
          if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = "block";
          }
        };
  
        reader.readAsDataURL(profilePhotoFile);
      }
    } else {
      console.error("One or more output elements are missing");
    }
  });
  
  // Make fields editable on click
  function makeEditable1() {
    const editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(element => {
      if (!(element as HTMLElement).hasAttribute("data-editable")) {
        element.addEventListener("click", function() {
          const currentElement = element as HTMLElement;
          const currentValue = currentElement.textContent || "";
  
          if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
            const input = document.createElement("input");
            input.type = "text";
            input.value = currentValue;
            input.classList.add("editing-input");
  
            input.addEventListener("blur", function() {
              currentElement.textContent = input.value;
              currentElement.style.display = "inline";
              input.remove();
            });
  
            currentElement.style.display = "none";
            currentElement.parentNode?.insertBefore(input, currentElement);
            input.focus();
          }
        });
        // Mark element as having a listener
        (element as HTMLElement).setAttribute("data-editable", "true");
      }
    });
  }
  


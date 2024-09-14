var _a, _b;
(_a = document.getElementById("resume-Form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Get references to form elements
    var profilePhoto = document.getElementById("photo");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    //
    var cvNameElement = document.getElementById("cvname");
    // check if all form elements are present
    if (profilePhoto && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && cvNameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var cvName = cvNameElement.value;
        var uniquePath = "resumes/".concat(cvName.replace(/\s+/g, '_'), "_resume.html");
        // Handle the photo file
        var profilePhotoFile = (_a = profilePhoto.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePhotoURL = profilePhotoFile ? URL.createObjectURL(profilePhotoFile) : '';
        // Debugging: Log the photo URL to the console
        console.log("Profile Photo URL: ", profilePhotoURL);
        // Create Resume Output
        var resumeOutput = "\n      <h2>Resume</h2>\n      ".concat(profilePhotoURL ? "<img src=\"".concat(profilePhotoURL, "\" alt=\"profile photo\" class=\"photo\">") : "", "\n      <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span></p>\n      <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span></p>\n      <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span></p>\n  \n      <h3>Education</h3>\n      <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n  \n      <h3>Experience</h3>\n      <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n  \n      <h3>Skills</h3>\n      <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n      ");
        var downloadLink = document.createElement("a");
        downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download your Resume";
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = "block";
        }
    }
    else {
        console.error("One or more output elements are missing");
    }
});
function makeEditable2() {
    var editableElement = document.querySelectorAll(".editable");
    editableElement.forEach(function (element) {
        // Check if the element already has a listener
        if (!element.hasAttribute("data-editable")) {
            element.addEventListener("click", function () {
                var _a;
                var currentElement = element;
                var currentValue = currentElement.textContent || "";
                if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                    var input_1 = document.createElement("input");
                    input_1.type = "text";
                    input_1.value = currentValue;
                    input_1.classList.add("editing-input");
                    input_1.addEventListener("blur", function () {
                        currentElement.textContent = input_1.value;
                        currentElement.style.display = "inline";
                        input_1.remove();
                    });
                    currentElement.style.display = "none";
                    (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                    input_1.focus();
                }
            });
            // Set an attribute to mark this element as having a listener
            element.setAttribute("data-editable", "true");
        }
    });
}
(_b = document.getElementById("resume-Form")) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Get references to form elements
    var profilePhoto = document.getElementById("photo");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    //
    var cvNameElement = document.getElementById("cvname");
    // check if all form elements are present
    if (profilePhoto && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && cvNameElement) {
        var name_2 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var cvName = cvNameElement.value;
        var uniquePath = "resumes/".concat(cvName.replace(/\s+/g, '_'), "_resume.html");
        // Handle the photo file
        var profilePhotoFile = (_a = profilePhoto.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePhotoURL = profilePhotoFile ? URL.createObjectURL(profilePhotoFile) : '';
        // Debugging: Log the photo URL to the console
        console.log("Profile Photo URL: ", profilePhotoURL);
        // Create Resume Output
        var resumeOutput = "\n      <h2>Resume</h2>\n      ".concat(profilePhotoURL ? "<img src=\"".concat(profilePhotoURL, "\" alt=\"profile photo\" class=\"photo\">") : "", "\n      <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_2, " </span></p>\n      <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span></p>\n      <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span></p>\n  \n      <h3>Education</h3>\n      <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n  \n      <h3>Experience</h3>\n      <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n  \n      <h3>Skills</h3>\n      <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n      ");
        var downloadLink = document.createElement("a");
        downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download your Resume";
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = "block";
        }
    }
    else {
        console.error("One or more output elements are missing");
    }
});
function makeEditable() {
    var editableElement = document.querySelectorAll(".editable");
    editableElement.forEach(function (element) {
        // Check if the element already has a listener
        if (!element.hasAttribute("data-editable")) {
            element.addEventListener("click", function () {
                var _a;
                var currentElement = element;
                var currentValue = currentElement.textContent || "";
                if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                    var input_2 = document.createElement("input");
                    input_2.type = "text";
                    input_2.value = currentValue;
                    input_2.classList.add("editing-input");
                    input_2.addEventListener("blur", function () {
                        currentElement.textContent = input_2.value;
                        currentElement.style.display = "inline";
                        input_2.remove();
                    });
                    currentElement.style.display = "none";
                    (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_2, currentElement);
                    input_2.focus();
                }
            });
            // Set an attribute to mark this element as having a listener
            element.setAttribute("data-editable", "true");
        }
    });
}

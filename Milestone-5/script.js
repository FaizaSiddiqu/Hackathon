var _a;
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
    var cvNameElement = document.getElementById("cvname");
    // Check if all form elements are present
    if (profilePhoto && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && cvNameElement) {
        var name_1 = nameElement.value;
        var email_1 = emailElement.value;
        var phone_1 = phoneElement.value;
        var education_1 = educationElement.value;
        var experience_1 = experienceElement.value;
        var skills_1 = skillsElement.value;
        var cvName = cvNameElement.value;
        var uniquePath_1 = "resumes/".concat(cvName.replace(/\s+/g, '_'), "_resume.html");
        // Handle the photo file
        var profilePhotoFile = (_a = profilePhoto.files) === null || _a === void 0 ? void 0 : _a[0];
        if (profilePhotoFile) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var _a;
                var profilePhotoURL = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                // Debugging: Log the photo URL to the console
                console.log("Profile Photo URL: ", profilePhotoURL);
                // Create and display resume output
                var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePhotoURL ? "<img src=\"".concat(profilePhotoURL, "\" alt=\"profile photo\" class=\"photo\">") : "", "\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span></p>\n            <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email_1, " </span></p>\n            <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone_1, " </span></p>\n            <h3>Education :</h3>\n            <p id=\"edit-education\" class=\"editable\">").concat(education_1, "</p>\n            <h3>Experience :</h3>\n            <p id=\"edit-experience\" class=\"editable\">").concat(experience_1, "</p>\n            <h3>Skills :</h3>\n            <p id=\"edit-skills\" class=\"editable\">").concat(skills_1, "</p>\n          ");
                // Set up download link
                var downloadLink = document.createElement("a");
                downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
                downloadLink.download = uniquePath_1;
                downloadLink.textContent = "Download your Resume";
                // Insert the resume output into the page
                var resumeOutputElement = document.getElementById("resumeOutput");
                if (resumeOutputElement) {
                    resumeOutputElement.innerHTML = resumeOutput;
                    resumeOutputElement.appendChild(downloadLink);
                    resumeOutputElement.style.display = "block";
                }
            };
            reader.readAsDataURL(profilePhotoFile);
        }
    }
    else {
        console.error("One or more output elements are missing");
    }
});
// Make fields editable on click
function makeEditable1() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
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
            // Mark element as having a listener
            element.setAttribute("data-editable", "true");
        }
    });
}

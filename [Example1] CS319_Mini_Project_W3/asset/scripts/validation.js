function showAlertModal(message) {
    const modal = document.getElementById('alert-modal');
    const messageEl = document.getElementById('alert-message');
    messageEl.textContent = message;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    if (modalId === 'success-modal') {
        window.location.href = 'index.html';
    }
}

// Function to handle form submission and validation
function username_validation(uname) {
    const letters = /^[0-9a-zA-Z]+$/;
    if (uname.value.length >= 5 && uname.value.length <= 12 && uname.value.match(letters)) {
        return true;
    } else {
        showMessage('ชื่อผู้ใช้ต้องมีความยาว 5-12 ตัวอักษรและไม่มีอักขระพิเศษ');
        uname.focus();
        return false;
    }
}

// Function to validate that a field contains only letters.
function allLetter(input) {
    const letters = /^[a-zA-Zก-๙\s]+$/;
    if (input.value.match(letters)) {
        return true;
    } else {
        const labelText = document.querySelector(`label[for="${input.id}"]`).textContent;
        showMessage(`${labelText} กรุณากรอกเฉพาะตัวอักษรเท่านั้น`);
        input.focus();
        return false;
    }
}

// Function to validate the email format.
function ValidateEmail(uemail) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    } else {
        showMessage('กรุณากรอกที่อยู่อีเมลที่ถูกต้อง');
        uemail.focus();
        return false;
    }
}

// Function to validate the phone number format.
function validatePhone(uphone) {
    const phoneformat = /^\d{10}$/;
    if (uphone.value.match(phoneformat)) {
        return true;
    } else {
        showMessage('เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลัก');
        uphone.focus();
        return false;
    }
}

// Function to validate the address field for letters and numbers.
function validateAddress(uaddress) {
    const letterNumber = /^[0-9a-zA-Zก-๙\s]+$/;
    if (uaddress.value.match(letterNumber)) {
        return true;
    } else {
        showMessage('ที่อยู่ต้องมีตัวอักษรและตัวเลขเท่านั้น');
        uaddress.focus();
        return false;
    }
}

// Function to validate that a country has been selected.
function validateCountry(ucountry) {
    if (ucountry.value === "") {
        showMessage('กรุณาเลือกประเทศ');
        ucountry.focus();
        return false;
    }
    return true;
}

// Function to validate the zip code format.
function validateZip(uzip) {
    const zipformat = /^\d{5}$/;
    if (uzip.value.match(zipformat)) {
        return true;
    } else {
        showMessage('รหัสไปรษณีย์ต้องเป็นตัวเลข 5 หลัก');
        uzip.focus();
        return false;
    }
}

// Function to validate the gender selection.
function validateSex(usex) {
    if (usex.value === "") {
        showMessage('กรุณาเลือกเพศ');
        usex.focus();
        return false;
    }
    return true;
}

// Function to show the custom alert modal.
function showMessage(message) {
    const modal = document.getElementById('alert-modal');
    document.getElementById('alert-message').textContent = message;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

// Function to close any modal.
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        // Redirect to the index page only if the success modal is closed
        if (modalId === 'success-modal') {
            window.location.href = 'index.html';
        }
    }
}

// Function to show the success modal.
function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

// Event listener for when the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('application-form-data');
    const genderSelect = document.getElementById('sex');

    // Listener for the form submission.
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission.

        // Get all form elements
        const uname = document.getElementById("username");
        const fname = document.getElementById("fname");
        const lname = document.getElementById("lname");
        const uemail = document.getElementById("email");
        const phone = document.getElementById("phone");
        const uaddress = document.getElementById("address");
        const ucountry = document.getElementById("country");
        const uzip = document.getElementById("zip");
        const usex = document.getElementById("sex");

        // Perform validations in a sequence.
        if (
            username_validation(uname) &&
            allLetter(fname) &&
            allLetter(lname) &&
            ValidateEmail(uemail) &&
            validatePhone(phone) &&
            validateAddress(uaddress) &&
            validateCountry(ucountry) &&
            validateZip(uzip) &&
            validateSex(usex)
        ) {
            // If all validations pass, show the success modal.
            showSuccessModal();
        }
    });
});

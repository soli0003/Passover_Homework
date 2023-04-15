///Login Script
function loginFunction() {
    debugger
    let loginOk = true
    let usrLen = floatingInput.value.length
    let msg = ""


    if (usrLen < 5 || usrLen > 10) {
        loginOk = false
        msg = `user name is wrong`
    }


    if (floatingPassword.value !== "123") {
        loginOk = false
        msg += " +" + "wrong password"
    }

    if (usrLen < 5 || usrLen > 10 && floatingPassword.value !== "123") {
        loginOk = false
        msg = "user name and password is wrong"
    }


    if (loginOk) {
        let goodMsg = "Correct username and password entered"
        display.innerHTML = goodMsg
        display.className = "alert alert-success"
        console.log(goodMsg)
        localStorage.setItem("userNameToLocal", floatingInput.value)
        localStorage.setItem("passwordToLocal", floatingPassword.value)
        setTimeout(function () {
            window.location.href = "homepage.html";
        }, 1000);
    } else {
        display.innerHTML = msg
        display.className = "alert alert-danger"
        console.log(msg);
    }
}
//// calc Script
// function writeToCalc(buttonText) {
//     myInput.value += buttonText
// }


function writeToCalc(buttonText) {
    const lastChar = myInput.value.slice(-1);
    if (/[\+\-\*\/]/.test(lastChar) && /[\+\-\*\/]/.test(buttonText)) {
        myInput.value = myInput.value.slice(0, -1) + buttonText;
    } else {
        myInput.value += buttonText;
    }
}


function clearCalc() {
    myInput.value = ''
}

function del1Number() {
    myInput.value = myInput.value.slice(0, -1);

}

function calculate() {
    let input = myInput.value;
    let result = eval(input);
    myInput.value = result;

}


/////Form Script
function retriveUserNameForm() {
    let x = localStorage.getItem("userNameToLocal")
    userNameForm.value = x
}

function retrivePasswordForm() {
    let x = localStorage.getItem("passwordToLocal")
    passwordForm.value = x
}
function chkAgeForm() {
    setTimeout(function () {
        if (ageChkForm.value > 100 || ageChkForm.value < 18) {
            ageResult.className = "alert alert-danger"
            ageResult.innerHTML = `Age criteria not met!`

        }

    }, 1500);
}
function charactersMax() {
    if (commentsForm.value.length < 12) {
        commentsResult.className = "alert alert-danger"
        commentsResult.innerHTML = `${commentsForm.value.length} letters were entered, Comments must have at least 12 letters!`
    } if (commentsForm.value.length > 100) {
        commentsResult.className = "alert alert-danger"
        commentsResult.innerHTML = `${commentsForm.value.length} letters were entered, Comments must have 100 letters top!`

    }
}


/////Notepad Script
// function notepadFunc() {
//     console.log(noBadLang.value);
//     let len = noBadLang.value.length - 1
//     let content = noBadLang.value
//     if (content[len - 1] > 4 ) {
//         alert("Cannot contain words with more then 4 char")

//     }
// }

function activateNotepadFunc(event) {
    if (event.keyCode === 32 || event.keyCode === 13 ) {
        console.log("test");
        notepadFunc();
    }
}

function notepadFunc() {
    let str = noBadLang.value.split(" ");
    let len = str.length - 2;
    if (str[len].length > 4) {
        str = str.slice(0, len);
        noBadLang.value = str.join(" ");
        notepadErrorDiv.className = "alert alert-danger"
        notepadErrorDiv.innerHTML = "Cannot contain words with more than 4 characters!"
    } if (noBadLang.value.includes("@") || noBadLang.value.includes("=")) {
        noBadLang.value = noBadLang.value.replace("@", "").replace("=", "");
        notepadErrorDiv.className = "alert alert-danger"
        notepadErrorDiv.innerHTML = "Special characters  like @ and = are forbidden!"

    }
}
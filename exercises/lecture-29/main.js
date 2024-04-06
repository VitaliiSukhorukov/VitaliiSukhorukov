
class AuthException extends Error {
    constructor(code, message) {
        super(message); // Виклик конструктора Error
        this.code = code;
        this.message = message || code;
    }

    toString() {
        return this.message;
    }

}
let checkAuth = document.querySelector('.check-auth')
checkAuth.addEventListener('click',() => {
    try {
        if (isAuth) {
            window.open('success.html')
        } else {
            throw new AuthException('FORBIDDEN', 'You don\'t have access to this page')
        }
    }
    catch (e) {
        showDialog(e)
    }
})
let isAuth = (auth)  => auth ?? false;


let dialogBoxId=document.getElementById("dialogBox");
let dialogBoxParagraph = document.querySelector(".message");


function showDialog(e){
    dialogBoxId.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            e.preventDefault();
        }
    });
    dialogBoxParagraph.innerText = e.message
    dialogBoxId.showModal();
}

function closeDialog(){
    dialogBoxId.close();
}


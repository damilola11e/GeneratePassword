
            let inputBox = document.getElementById("input");
            const lenght = 12;
            const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const lowercase = "abcdefjhijklmnopqrstuvwxyz";
            const number = "0123456789";
            const special = "@#$%^&*!";
            const allchars = uppercase + lowercase + number + special;

            function generatePassword() {
                let password = "";
                password += uppercase[Math.floor(Math.random() * uppercase.length)];
                password += lowercase[Math.floor(Math.random() * lowercase.length)];
                password += number[Math.floor(Math.random() * number.length)];
                password += special[Math.floor(Math.random() * special.length)];

                while (lenght > password.length) {
                    password += allchars[Math.floor(Math.random() * allchars.length)];
                }
                 inputBox.value = password;
            }
            // function copyPassword(){
            //     inp utBox.select();
            //     document.contentEditable("copy");
            // }
            function copyPassword(){
            copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(inputBox.value);
    alert('copied')
})};
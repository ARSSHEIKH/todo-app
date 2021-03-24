
function Registration() {
    let nameReg = document.getElementById('nameReg').value
    let passReg = document.getElementById('passReg').value
    let userCheck = "Doesnot Exist"
    let date = new Date()
    let user = {
        username: nameReg,
        password: passReg,
        date: ` ${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}`
    }
    try {
        let getVal;
        let lblLoading = document.querySelector(".lblLoading")
        if (!getVal) {
            lblLoading.textContent = "Loading ..."

            if (userCheck !== "Added") {
                firebase.database().ref('/users/').orderByChild('username').equalTo(user.username).once("value", async function (snapshot) {
                    userCheck = "User Exist";
                    getVal = await snapshot.val();
                    snapshot.forEach(async function (data) {

                        const username = await data.key
                        if (username === user.username) {
                            lblLoading.textContent = "Username Exist. Please try to Login"
                            userCheck = "";
                            return
                        }
                    });
                });
            }
            setTimeout(() => {

                if (userCheck !== "") {
                    lblLoading.textContent = "You're registered, now you can Login"
                    userCheck = "Added"
                    firebase.database().ref('/users/' + (user.username)).update(user)

                    return
                }
            }, 15000);
            setTimeout(() => {
                return

            }, 5000)
        }

    } catch (err) {
        console.log(err)
    }
}
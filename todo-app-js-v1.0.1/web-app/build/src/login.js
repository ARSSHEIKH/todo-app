
function Login() {
    if (userLogin === "Not Login Yet") {
        let nameLogin = document.getElementById('nameLogin').value;
        let passLogin = document.getElementById('passLogin').value;
        let lblLoginLoading = document.querySelector(".lblLoginLoading");
        let btnLogout = document.querySelector(".btnLogout");
        let btnLogin = document.querySelector(".btnLogin");
        let btnSave = document.querySelector(".btnSave");
        let userCheck = "Doesnot Exist";
        let user = {
            username: nameLogin,
            password: passLogin,
        }
        let getVal;
        if (!getVal) {
            lblLoginLoading.textContent = "Loading ..."

            if (userCheck !== "Added") {
                firebase.database().ref('/users/').orderByChild('username').equalTo(user.username).once("value", async function (snapshot) {
                    userCheck = "User Exist";
                    getVal = await snapshot.val();
                    snapshot.forEach(async function (data) {

                        user_Username = await data.key
                        const userPass = Object.values(getVal);

                        if (data.key === user.username) {
                            if (userPass[0].password === user.password) {
                                lblLoginLoading.textContent = "You're Login"
                                userCheck = "";
                                btnSave.style.visibility = "visible"
                                if (userLogin !== "Login") {
                                    firebase.database().ref(`/users/${user.username}/todoList`).on('value', (snapshot) => {
                                        const data = snapshot.val();
                                        userLogin="Login"
                                        console.log(userLogin)
                                        data.map((itemLists, ind) => {
                                            createNodes(itemLists.text, itemLists.dateAdded, itemLists.SNO);
                                        })
                                    });
                                }

                                btnLogin.style.display = "none"
                                btnLogout.textContent = `Login as ${data.key}`;
                                btnLogout.style.color = "black";
                                btnLogout.style.background = "#ffff";
                                btnLogout.style.visibility="visible"
                                return
                            }
                            else {
                                lblLoginLoading.textContent = "Incorrect Password"
                            }
                        }
                    });
                });
            }
            setTimeout(() => {

                if (userCheck !== "") {
                    lblLoginLoading.textContent = "You're not Register"
                    userCheck = "Added"
                    return
                }
            }, 15000);
            setTimeout(() => {
                return

            }, 5000)
        }
    }
}
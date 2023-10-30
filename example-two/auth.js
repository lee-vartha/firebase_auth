const createUser = document.getElementById("create-user");
const loginUser = document.getElementById("login-user");
const logoutUser = document.getElementById("logout-user");

// const customerList = document.getElementById("customer-list");
// const addCustomer = document.getElementById("add-customer");
// const userInfo = document.getElementById("user-info");


// create user
createUser.addEventListener("click", e => {
    e.preventDefault();
  
    // get user info
    const email = createUser["email"].value;
    const password = createUser["password"].value;
    const bio = createUser["bio"].value;
  
    // create user
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(cred => {
        // console.log(cred.user);
        return db
          .collection("users")
          .doc(cred.user.uid)
          .set({
            bio
          });
      })
      .then(() => {
        createUser["email"].value = "";
        createUser["password"].value = "";
        createUser["bio"].value = "";
      });
  });
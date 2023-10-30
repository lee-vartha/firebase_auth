function initFirebaseAuth(config) {
    if(!config.projectId) throw Error('Missing Firebase Project ID') // a project id is required to access the database
    if(!config.apiKey) throw Error ('Missing Firebase API Key') // an api key is required to access the database
    if(!config.authDomain) throw Error ('Missing Firebase Auth Domain') // an auth domain is required to access the database 
}

const firebaseConfig = {
    apiKey: config.apiKey,
    projectId: config.projectId,
    authDomain: config.authDomain,
};


firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(async function(user) {
    if (!user && config.loggedOut) {
        config.loggedOut
        return
    }

    if(!config.loggedIn) return
    const token = await user.getIdToken
    config.loggedIn(user, token)

})


function logout() {
    firebase.auth().signOut()
}

function googleLogin(onError) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth.signInWithPopup(provider).then(() => {})
}

export {
     initFirebaseAuth,
     googleLogin,
     logout
}
/** Connect to Moralis server */
const serverUrl = "https://ounkpbazzeqm.usemoralis.com:2053/server";
const appId = "oOZQ0XMvc8eEDBpEhyBGY1s0G3LLq4sHnhD5HJRD";
Moralis.start({ serverUrl, appId });

/** Add from here down */
// async function login() {
//   let user = Moralis.User.current();
//   if (!user) {
//    try {
//       user = await Moralis.authenticate({ signingMessage: "Hello World!" })
//       console.log(user)
//       console.log(user.get('ethAddress'))
//    } catch(error) {
//      console.log(error)
//    }
//   }
// }

// async function logOut() {
//   await Moralis.User.logOut();
//   console.log("logged out");

// }

const brownGorillaAvatar = "https://gateway.pinata.cloud/ipfs/QmbT5NxcjCbYezbo3fYgDawD9y2uqyqjMmGaJ4LGvtTEGt/brownGorilla.png";
const mainGorillaAvatar ="https://gateway.pinata.cloud/ipfs/QmbT5NxcjCbYezbo3fYgDawD9y2uqyqjMmGaJ4LGvtTEGt/gorilla.png"
const greenGorillaAvatar ="https://gateway.pinata.cloud/ipfs/QmbT5NxcjCbYezbo3fYgDawD9y2uqyqjMmGaJ4LGvtTEGt/greenGorilla.png"
const kidGorillaAvatar ="https://gateway.pinata.cloud/ipfs/QmbT5NxcjCbYezbo3fYgDawD9y2uqyqjMmGaJ4LGvtTEGt/kidGorilla.png"
const surpriseGorillaAvatar ="https://gateway.pinata.cloud/ipfs/QmbT5NxcjCbYezbo3fYgDawD9y2uqyqjMmGaJ4LGvtTEGt/surpriseGorilla.png"

const avatars = [brownGorillaAvatar,mainGorillaAvatar,greenGorillaAvatar,kidGorillaAvatar, surpriseGorillaAvatar]

const imageContainer = document.getElementById("avatarContainer");
imageContainer.onclick = function(e) {
    console.log(e.target); 
}


//User SignUp Script

signup = async (username, password) => {
    const btcAddress = "0xa01468628D1b08078E0619876007A1D7A23A49e7";
    const ethAddress = "0xa01468628D1b08078E0619876007A1D7A23A49e7";
    const bnbAddress = "0xa01468628D1b08078E0619876007A1D7A23A49e7";
    const avaxAddress = "0xa01468628D1b08078E0619876007A1D7A23A49e7";
    const user = new Moralis.User();
    user.set("username", username);
    user.set("password", password);
    user.set ("btcAddress", btcAddress);
    user.set ("ethAddress", ethAddress);
    user.set ("bnbAddress", bnbAddress);
    user.set ("avaxAddress", avaxAddress);

    try {
        await user.signUp();
        console.log(user)
        console.log(user.get('ethAddress'))
    } catch (error) {
        alert("Error: " + error.code + " " + error.message);
    }
}

signIn = async (username, password) => {
  try {
    const user = await Moralis.User.logIn(username, password)
    localStorage.setItem("TheUser", document.getElementById("email").value);
      console.log(user)
      console.log(user.get('ethAddress'))
      console.log(localStorage.getItem("TheUser"));
  } catch (error) {
      alert("Error: " + error.code + " " + error.message);
  }
}



// document.getElementById("btn-login").onclick = login;
// document.getElementById("btn-logout").onclick = logOut;
document.getElementById("signup").onclick = () => signup(document.getElementById("email").value, document.getElementById("password").value);
document.getElementById("btn-signin").onclick = () => signIn(document.getElementById("email").value, document.getElementById("password").value);

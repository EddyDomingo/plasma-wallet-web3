/** Connect to Moralis server */
const serverUrl = "https://ounkpbazzeqm.usemoralis.com:2053/server";
const appId = "oOZQ0XMvc8eEDBpEhyBGY1s0G3LLq4sHnhD5HJRD";
Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
   try {
      user = await Moralis.authenticate({ signingMessage: "Hello World!" })
      console.log(user)
      console.log(user.get('ethAddress'))
   } catch(error) {
     console.log(error)
   }
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");

}

const brownGorillaAvatar = "https://gateway.pinata.cloud/ipfs/QmbT5NxcjCbYezbo3fYgDawD9y2uqyqjMmGaJ4LGvtTEGt/brownGorilla.png";
const mainGorillaAvatar ="https://gateway.pinata.cloud/ipfs/QmbT5NxcjCbYezbo3fYgDawD9y2uqyqjMmGaJ4LGvtTEGt/gorilla.png"
const greenGorillaAvatar ="https://gateway.pinata.cloud/ipfs/QmbT5NxcjCbYezbo3fYgDawD9y2uqyqjMmGaJ4LGvtTEGt/greenGorilla.png"
const kidGorillaAvatar ="https://gateway.pinata.cloud/ipfs/QmbT5NxcjCbYezbo3fYgDawD9y2uqyqjMmGaJ4LGvtTEGt/kidGorilla.png"
const surpriseGorillaAvatar ="https://gateway.pinata.cloud/ipfs/QmbT5NxcjCbYezbo3fYgDawD9y2uqyqjMmGaJ4LGvtTEGt/surpriseGorilla.png"

const avatars = [brownGorillaAvatar,mainGorillaAvatar,greenGorillaAvatar,kidGorillaAvatar, surpriseGorillaAvatar]

const imageContainer = document.getElementById("imageContainer");
imageContainer.onclick = function(e) {
    console.log(e.target); 
}

// Create and display image
// const img = document.createElement('img');
// img.src = avatar[3];
// document.getElementById('demo').appendChild(img);

// const brownG = document.getElementById('brownGorilla');
// const bigG = document.getElementById('Gorilla');
// const greenG = document.getElementById('greenGorilla');
// const kidG = document.getElementById('kidGorilla');
// const surpG = document.getElementById('surpriseGorilla');

// brownG.addEventListener('click', avatarSelect);
// bigG.addEventListener('click', avatarSelect1);
// greenG.addEventListener('click', avatarSelect2);
// kidG.addEventListener('click', avatarSelect3);
// surpG.addEventListener('click', avatarSelect4);

// function avatarSelect (){
//   console.log(avatar[0])
// }
// function avatarSelect1 (){
//   console.log(avatar[1])
// }
// function avatarSelect2 (){
//   console.log(avatar[2])
// }
// function avatarSelect3 (){
//   console.log(avatar[3])
// }
// function avatarSelect4 (){
//   console.log(avatar[4])
// }



//User SignUp Script

signup = async (username, password) => {
    const btcAddress = "0xa01468628D1b08078E0619876007A1D7A23A49e7";
    const ethAddress = "0xa01468628D1b08078E0619876007A1D7A23A49e7";
    const bnbAddress = "0xa01468628D1b08078E0619876007A1D7A23A49e7";
    const avaxAddress = "0xa01468628D1b08078E0619876007A1D7A23A49e7";
    const user = new Moralis.User();
    user.set("username", username);
    user.set("password", password);
    // user.set("email", email);
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



document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
document.getElementById("signup").onclick = () => signup(document.getElementById("email").value, document.getElementById("password").value);

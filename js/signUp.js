
const serverUrl = "https://ounkpbazzeqm.usemoralis.com:2053/server";
const appId = "oOZQ0XMvc8eEDBpEhyBGY1s0G3LLq4sHnhD5HJRD";
Moralis.start({ serverUrl, appId });

// Scripts for Avatars //
const brownGorillaAvatar = "https://gateway.pinata.cloud/ipfs/QmbT5NxcjCbYezbo3fYgDawD9y2uqyqjMmGaJ4LGvtTEGt/brownGorilla.png";
const mainGorillaAvatar ="https://gateway.pinata.cloud/ipfs/QmbT5NxcjCbYezbo3fYgDawD9y2uqyqjMmGaJ4LGvtTEGt/gorilla.png"
const greenGorillaAvatar ="https://gateway.pinata.cloud/ipfs/QmbT5NxcjCbYezbo3fYgDawD9y2uqyqjMmGaJ4LGvtTEGt/greenGorilla.png"
const kidGorillaAvatar ="https://gateway.pinata.cloud/ipfs/QmbT5NxcjCbYezbo3fYgDawD9y2uqyqjMmGaJ4LGvtTEGt/kidGorilla.png"
const surpriseGorillaAvatar ="https://gateway.pinata.cloud/ipfs/QmbT5NxcjCbYezbo3fYgDawD9y2uqyqjMmGaJ4LGvtTEGt/surpriseGorilla.png"

const avatars = [brownGorillaAvatar,mainGorillaAvatar,greenGorillaAvatar,kidGorillaAvatar, surpriseGorillaAvatar]
// const avatar = brownGorillaAvatar;

document.querySelector("#avatar-container").addEventListener("click", e =>{
  console.log(e.target.id)
  const avatarID = e.target.id
  window.avatar = avatarID;
})

signup = async (username, password) => {
  const btcAddress = "0xa01468628D1b08078E0619876007A1D7A23A49e7";
  const ethAddress = "0xa01468628D1b08078E0619876007A1D7A23A49e7";
  const bnbAddress = "0xa01468628D1b08078E0619876007A1D7A23A49e7";
  const avaxAddress = "0xa01468628D1b08078E0619876007A1D7A23A49e7";
  const AvatarLocation = avatars[avatar];
  const user = new Moralis.User();
  user.set("username", username);
  user.set("password", password);
  user.set ("btcAddress", btcAddress);
  user.set ("ethAddress", ethAddress);
  user.set ("bnbAddress", bnbAddress);
  user.set ("avaxAddress", avaxAddress);
  user.set("AvatarLocation", AvatarLocation);

  try {
      await user.signUp();
      console.log(user)
      console.log(user.get('ethAddress'))
  } catch (error) {
      alert("Error: " + error.code + " " + error.message);
  }
}

document.getElementById("signup").onclick = () => signup(document.getElementById("userName").value, document.getElementById("passWord").value);




// Generate phrase code

var generateBtn = document.getElementById('generateSP');
generateBtn.addEventListener('click', fetchData);

function fetchData() {
  fetch('https://random-words-api.herokuapp.com/w?n=10')
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          'Looks like there was a problem. Status Code: ' + response.status
        );
        return;
      }
      response.json().then(function (data) {
        console.log(data);
        document.getElementById('w3review').value = data;
      });
    })
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}

fetchData();
  
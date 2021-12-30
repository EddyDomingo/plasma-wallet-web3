const APP_ID = "oOZQ0XMvc8eEDBpEhyBGY1s0G3LLq4sHnhD5HJRD";
const SERVER_URL = "https://ounkpbazzeqm.usemoralis.com:2053/server";
Moralis.start({
            appId: APP_ID,
            serverUrl: SERVER_URL,
        });
init = async() => window.web3 = await Moralis.enableWeb3();

getUser = async (names) => {
    const query = new Moralis.Query("User");
    query.equalTo("username", names);
    const clients = await query.find()
    console.log(clients)
    }

init();

// const btn1 = document.getElementById('get-user');
// btn1.addEventListener('click', getUser);


     
import Portis from "@portis/web3";
import Web3 from "web3";

const portis = new Portis("211b48db-e8cc-4b68-82ad-bf781727ea9e", "rinkeby");
const web3 = new Web3(portis.provider);

web3.eth
  .getAccounts()
  .then(accounts => console.log(accounts))
  .catch(error => console.log(error));

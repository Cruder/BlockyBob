import VoteStore from "./contracts/Vote";
import {Drizzle, generateStore} from "@drizzle/store";

export const options = {
    contracts: [VoteStore],
    web3: {
        fallback: {
            type: "ws",
            url: "ws://127.0.0.1:9545",
        },
    },
};

// setup drizzle
export const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);
console.log("root", drizzle);
console.log("root", drizzleStore);
console.log("root", drizzleStore.getState());


export default drizzle
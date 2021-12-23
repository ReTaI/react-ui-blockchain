import Web3 from 'web3';
import { abi } from './abi';

const web3 = new Web3('http://127.0.0.1:7545');
const contract = new web3.eth.Contract(abi, '0x0551a36d7C48cCe2D5eaEa9255256758F82aB611', {gas: '1000000'});

export const signin = (address) => {
    contract.methods.authUser(address).call()
    .then((data) => {
        if (!(data>0 && data<3)) return;
        localStorage.setItem('currentAddress', address);
        localStorage.setItem('role', data);
    });
}

export const signup = (address, role) => {
    contract.methods.createUser(address, role).send({ from: address });
};

export const getHouses = async() => {
    return await contract.methods.getHouses().call();
}

export const createHouse = (address, total, useful, curAdmin) => {
    console.log(curAdmin);
    contract.methods.createHouse(address, total, useful).send({from: curAdmin});
}

const abi = [
    {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
    },
    {
    "constant": false,
    "inputs": [
        {
        "internalType": "uint256",
        "name": "x",
        "type": "uint256"
        }
    ],
    "name": "set",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "get",
    "outputs": [
        {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": false,
    "inputs": [
        {
        "internalType": "address payable",
        "name": "_receiver",
        "type": "address"
        }
    ],
    "name": "send",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
    }
]
export { abi as default }
//Todas as funções que lidam com produtos

async function getFullName(codeId, productName) {

    console.log("\n");
    console.log("product: " + codeId + "--" + productName);

        return codeId + "--" + productName;
}

module.exports = {getFullName};
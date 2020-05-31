let _sexo = 0;

if(document.getElementById('f').checked)
    _sexo = 1; // feminino

function executar(){
    const sexo = get();
    const idade = Number(document.getElementById('idade').value);
    const profissao = Number(document.getElementById('profissao').value);
    const net = new brain.NeuralNetwork();
    const json = getJSON();
    net.fromJSON(JSON.parse(json));
    const output = parseFloat(net.run([sexo, idade, profissao])).toFixed(0);
    let saida = 'Crédito concedido';

    if(output > 0)
        saida = 'Crédito negado';

    document.getElementById('saida').value = saida;
}

function getJSON(){
    return `
    {"sizes":[3,3,1],"layers":[{"0":{},"1":{},"2":{}},{"0":{"bias":0.26300862431526184,"weights":{"0":1.8869372606277466,"1":-0.7851133942604065,"2":-1.0235514640808105}},"1":{"bias":2.818233013153076,"weights":{"0":6.689049243927002,"1":-1.3906829357147217,"2":3.685295581817627}},"2":{"bias":1.1821343898773193,"weights":{"0":10.560140609741211,"1":-0.6045672297477722,"2":-10.390506744384766}}},{"0":{"bias":0.13302016258239746,"weights":{"0":-0.8423552513122559,"1":-2.676941156387329,"2":-7.336268901824951}}}],"outputLookup":false,"inputLookup":false,"activation":"sigmoid","trainOpts":{"iterations":100000,"errorThresh":0.003,"log":false,"logPeriod":10,"learningRate":0.3,"momentum":0.1,"callbackPeriod":10,"beta1":0.9,"beta2":0.999,"epsilon":1e-8}}   
    `; 
}

function set(s = 0) {
    _sexo = s;
}

function get(){
    return _sexo;
}
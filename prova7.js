function calcularGorjeta() {

    const valorConta = parseFloat(document.getElementById('valorConta').value);
    const qualidade = document.getElementById('qualidadeServico').value;

    const calcularGorjetaPorQualidade = (qualidade) => {
        switch (qualidade) {
            case 'bom':
                return valorConta * 0.2; 
            case 'regular':
                return valorConta * 0.15; 
            case 'ruim':
                return valorConta * 0.1; 
            default:
                return 0;
        }
    };

    const gorjeta = calcularGorjetaPorQualidade(qualidade);


    const valorTotal = valorConta + gorjeta;

    document.getElementById('resultado').textContent = `Gorjeta: R$ ${gorjeta.toFixed(2)} | Valor total: R$ ${valorTotal.toFixed(2)}`;
}

const showTime = () => {
    const date = new Date();
    const [hours, minutes, seconds] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    ];

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    document.getElementById('clock').textContent   
= formattedTime;
  };

  setInterval(() => {
    showTime();
  }, 1000);

  showTime();
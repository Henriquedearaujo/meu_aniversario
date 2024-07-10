AOS.init();

const dataDoEvento = new Date("Sep 22, 2024 19:00:00");
    const timeStampDoEvento = dataDoEvento.getTime();

    const contaAsDeHoras = setInterval(function () {
        const agora = new Date();
        const timeStamopAtual = agora.getTime();

        const distanciaAteOEvento = timeStampDoEvento - timeStamopAtual;

        const diasEmMs = 1000 * 60 * 60 * 24;
        const horasEmMs = 1000 * 60 * 60;
        const minutoEmMs = 1000 * 60;

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs);
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutoEmMs);
        const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

        
        document.getElementById('timer').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
        
        //Menssagem quando terminar o tempo
        if (distanciaAteOEvento <0) {
            clearInterval(contaAsDeHoras);
            document.getElementById('timer').innerHTML = 'Feliz Aniversário'
        }
    }, 1000);

function calculateDosage() {
    const medication = document.getElementById('medication').value;
    const dose = parseFloat(document.getElementById('dose').value);
    const concentration = parseFloat(document.getElementById('concentration').value);
    const volume = parseFloat(document.getElementById('volume').value);

    if (isNaN(dose) || isNaN(concentration) || isNaN(volume)) {
        document.getElementById('result-text').innerText = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    const requiredVolume = (dose / concentration) * volume;

    document.getElementById('result-text').innerText = `Você deve administrar ${requiredVolume.toFixed(2)} mL do medicamento ${medication}.`;
}

function calculateInfusionRate() {
    const volume = parseFloat(document.getElementById('infusion-volume').value);
    const time = parseFloat(document.getElementById('infusion-time').value);
    
    if (isNaN(volume) || isNaN(time)) {
        document.getElementById('infusion-result-text').innerText = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    const rate = (volume / (time * 60)).toFixed(2); // Gotas por minuto

    document.getElementById('infusion-result-text').innerText = `Você deve administrar a solução a uma taxa de ${rate} gotas por minuto.`;
}

function calculateSpecificDosages() {
    const medication = document.getElementById('specific-medication').value;

    let resultText = '';
    
    switch (medication) {
        case 'amoxicilina':
            resultText = 'Para Amoxicilina 300mg VO de 8/8h, disponível 100mg/5mL, administre 15mL.';
            break;
        case 'insulina':
            resultText = 'Para Insulina NPH 50UI, disponível frasco de 100UI e seringa de 2 mL, aspire 1 mL.';
            break;
        case 'heparina':
            resultText = 'Para Heparina 10.000UI SC de 8/8h, disponível frasco 5000UI/1 mL, aspire 2 mL.';
            break;
        case 'dipirona':
            resultText = 'Para Dipirona 250mg IM, disponível ampola de 500mg/2mL, administre 1 mL.';
            break;
        case 'liquemine':
            resultText = 'Para Liquemine 500 UI SC de 12/12h, disponível 1000UI/mL em ampola de 1mL, aspire 0,5 mL.';
            break;
        case 'voltaren':
            resultText = 'Para Voltaren 50mg IM, disponível ampola de Diclofenaco 75mg/3mL, administre 2 mL.';
            break;
        case 'solucao-reposicao':
            resultText = 'Para uma solução de reposição hídrica de 250 mL em 3 horas, o gotejamento é de 27 gotas por minuto.';
            break;
        case 'soro-glicossado':
            resultText = 'Para 500 mL de soro glicosado em 6 horas, o gotejamento é de 14 gotas por minuto.';
            break;
        default:
            resultText = 'Por favor, selecione um medicamento específico.';
            break;
    }

    document.getElementById('specific-result-text').innerText = resultText;
}

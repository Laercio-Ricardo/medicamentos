// Função para calcular a dosagem de medicamentos
function calculateDosage() {
    const dose = parseFloat(document.getElementById('dose').value);
    const concentration = parseFloat(document.getElementById('concentration').value);
    const volume = parseFloat(document.getElementById('volume').value);

    if (isNaN(dose) || isNaN(concentration) || isNaN(volume)) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const result = (dose * volume) / concentration;
    document.getElementById('result-text').innerText = `Você deve administrar ${result.toFixed(2)} mL.`;
}

// Função para calcular a taxa de gotejamento com base na fórmula padrão
function calculateInfusionRate() {
    const infusionVolume = parseFloat(document.getElementById('infusion-volume').value);
    const infusionTime = parseFloat(document.getElementById('infusion-time').value);

    if (isNaN(infusionVolume) || isNaN(infusionTime)) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Fator de gotejamento padrão (ajuste conforme necessário)
    const dripFactor = 20; // Fator padrão de gotas/mL

    // Calcular a taxa de gotejamento em gotas/minuto
    const rate = (infusionVolume / (infusionTime * 60)) * dripFactor;
    document.getElementById('infusion-result-text').innerText = `O gotejamento é de ${rate.toFixed(2)} gotas/minuto.`;
}

// Função para calcular dosagens específicas com base no medicamento selecionado
function calculateSpecificDosages() {
    const medication = document.getElementById('specific-medication').value;
    const dose = parseFloat(document.getElementById('specific-dose').value);
    const volume = parseFloat(document.getElementById('specific-volume').value);
    const concentration = parseFloat(document.getElementById('specific-concentration').value);

    if (isNaN(dose) || isNaN(volume) || isNaN(concentration)) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Definir fatores de gotejamento para medicamentos específicos
    const dripFactors = {
        'soro-glic': 60, // Exemplo de fator de gotejamento para soro glicosado
        'heparina': 20,  // Exemplo de fator de gotejamento para heparina
        'amoxicilina': 15, // Exemplo de fator de gotejamento para amoxicilina
        'insulina': 30,  // Exemplo de fator de gotejamento para insulina
        'dipirona': 20,  // Exemplo de fator de gotejamento para dipirona
        'liquemine': 15, // Exemplo de fator de gotejamento para liquemine
        'voltaren': 20   // Exemplo de fator de gotejamento para voltaren
    };

    const dripFactor = dripFactors[medication] || 20; // Fator padrão se não definido
    const calculatedDose = (dose * volume) / concentration;

    document.getElementById('specific-result-text').innerText = `Você deve administrar ${calculatedDose.toFixed(2)} mL.`;
}

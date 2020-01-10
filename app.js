const submitText = () => {
    const propNoun1Input = document.getElementById('input-prop-noun1');
    const propNoun1Output = propNoun1Input.value;
    const propNoun1Field = document.getElementById('prop-noun1-field');
    propNoun1Field.textContent = propNoun1Output;

    const propNoun2Input = document.getElementById('input-prop-noun2');
    const propNoun2Output = propNoun2Input.value;
    const propNoun2Field = document.getElementById('prop-noun2-field');
    propNoun2Field.textContent = propNoun2Output;

    const placeInput = document.getElementById('place');
    const placeOutput = placeInput.value;
    const placeField = document.getElementById('place-field');
    placeField.textContent = placeOutput;
    
    const adj1Input = document.getElementById('adj1');
    const adj1Output = adj1Input.value;
    const adj1Field = document.getElementById('adj1-field');
    adj1Field.textContent = adj1Output;
}

const submit = document.getElementById('submit-button')
submit.addEventListener('click', submitText)



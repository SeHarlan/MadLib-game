

const submitText = () => {

    if (document.getElementById('adj3').value) {
    


    const propNoun1Input = document.getElementById('input-prop-noun1');
    const propNoun1Output = propNoun1Input.value;
    const propNoun1Field = document.getElementById('prop-noun1-field');
    propNoun1Field.textContent = propNoun1Output;
    const propNoun1Field2 = document.getElementById('prop-noun1-field2');
    propNoun1Field2.textContent = propNoun1Output;
    const propNoun1Field3 = document.getElementById('prop-noun1-field3');
    propNoun1Field3.textContent = propNoun1Output;
    const propNoun1Field4 = document.getElementById('prop-noun1-field4');
    propNoun1Field4.textContent = propNoun1Output;
    const propNoun1Field5 = document.getElementById('prop-noun1-field5');
    propNoun1Field5.textContent = propNoun1Output;

    const propNoun2Input = document.getElementById('input-prop-noun2');
    const propNoun2Output = propNoun2Input.value;
    const propNoun2Field = document.getElementById('prop-noun2-field');
    propNoun2Field.textContent = propNoun2Output;
    const propNoun2Field2 = document.getElementById('prop-noun2-field2');
    propNoun2Field2.textContent = propNoun2Output;
    const propNoun2Field3 = document.getElementById('prop-noun2-field3');
    propNoun2Field3.textContent = propNoun2Output;
    const propNoun2Field4 = document.getElementById('prop-noun2-field4');
    propNoun2Field4.textContent = propNoun2Output;
    const propNoun2Field5 = document.getElementById('prop-noun2-field5');
    propNoun2Field5.textContent = propNoun2Output;


    const placeInput = document.getElementById('place');
    const placeOutput = placeInput.value;
    const placeField = document.getElementById('place-field');
    placeField.textContent = placeOutput;
    
    const adj1Input = document.getElementById('adj1');
    const adj1Output = adj1Input.value;
    const adj1Field = document.getElementById('adj1-field');
    adj1Field.textContent = adj1Output;
    const adj1Field2 = document.getElementById('adj1-field2');
    adj1Field2.textContent = adj1Output;    

    const propNoun3Input = document.getElementById('input-prop-noun3');
    const propNoun3Output = propNoun3Input.value;
    const propNoun3Field = document.getElementById('prop-noun3-field');
    propNoun3Field.textContent = propNoun3Output;
    const propNoun3Field2 = document.getElementById('prop-noun3-field2');
    propNoun3Field2.textContent = propNoun3Output;
    const propNoun3Field3 = document.getElementById('prop-noun3-field3');
    propNoun3Field3.textContent = propNoun3Output;
    const propNoun3Field4 = document.getElementById('prop-noun3-field4');
    propNoun3Field4.textContent = propNoun3Output;
    const propNoun3Field5 = document.getElementById('prop-noun3-field5');
    propNoun3Field5.textContent = propNoun3Output;
    const propNoun3Field6 = document.getElementById('prop-noun3-field6');
    propNoun3Field6.textContent = propNoun3Output;
    const propNoun3Field7 = document.getElementById('prop-noun3-field7');
    propNoun3Field7.textContent = propNoun3Output;


    const nounInput = document.getElementById('input-noun');
    const nounOutput = nounInput.value;
    const nounField = document.getElementById('noun-field');
    nounField.textContent = nounOutput;
    const nounField2 = document.getElementById('noun-field2');
    nounField2.textContent = nounOutput;
    const nounField3 = document.getElementById('noun-field3');
    nounField3.textContent = nounOutput;
    const nounField4 = document.getElementById('noun-field4');
    nounField4.textContent = nounOutput;


    const pastTenseVerbInput = document.getElementById('past-tense-verb');
    const pastTenseVerbOutput = pastTenseVerbInput.value;
    const pastTenseVerbField = document.getElementById('past-tense-verb-field');
    pastTenseVerbField.textContent = pastTenseVerbOutput;

    const vehichle1Input = document.getElementById('vehichle1');
    const vehichle1Output = vehichle1Input.value;
    const vehichle1Field = document.getElementById('vehichle1-field');
    vehichle1Field.textContent = vehichle1Output;
    const vehichle1Field2 = document.getElementById('vehichle1-field2');
    vehichle1Field2.textContent = vehichle1Output;

    const bodyPartInput = document.getElementById('body-part');
    const bodyPartOutput = bodyPartInput.value;
    const bodyPartField = document.getElementById('body-part-field');
    bodyPartField.textContent = bodyPartOutput;
    const bodyPartField2 = document.getElementById('body-part-field2');
    bodyPartField2.textContent = bodyPartOutput;

    const verb2Input = document.getElementById('verb2');
    const verb2Output = verb2Input.value;
    const verb2Field = document.getElementById('verb2-field');
    verb2Field.textContent = verb2Output;

    const feelingNounInput = document.getElementById('feeling-noun');
    const feelingNounOutput = feelingNounInput.value;
    const feelingNounField = document.getElementById('feeling-noun-field');
    feelingNounField.textContent = feelingNounOutput;

    const adj3Input = document.getElementById('adj3');
    const adj3Output = adj3Input.value;
    const adj3Field = document.getElementById('adj3-field');
    adj3Field.textContent = adj3Output;
    
    const formField = document.getElementById('form');
    formField.style.display = 'none';

    const title = document.getElementById('title');
    title.style.display = 'none';

        // story field decloration
    const storyField = document.getElementById('story');
    storyField.style.transform = 'scale(0.4)';
    
    const enlarge = () => {
        storyField.style.visibility = 'visible';
        storyField.style.opacity = '1';
        storyField.style.transform = "scale(1)";
    };
    const delayEnlarge = () => {
        window.setTimeout(enlarge, 500)
    };
    delayEnlarge();
    } else {
        alert(
            "Please provide the words."
        )
    }

}

const submit = document.getElementById('submit-button')
submit.addEventListener('click', submitText)


const resetPage = () => {
    const userChoice = window.confirm('Are you sure???');

    if (userChoice === true) {
    document.location.reload(true)
    } else {
        return false;
    }
}

const reset = document.getElementById('reset-button')
reset.addEventListener('click', resetPage)


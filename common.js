//var d = document.getElementsByClassName('person');

//Sale Person
function displaySalePerson(){
    var d = document.getElementsByClassName('person');
    var salePerson = document.createElement('p');
        salePerson.className = 'headings'
        salePerson.appendChild(document.createTextNode('Sale Person: '));

    var salePersonSpan = document.createElement('span');
        salePersonSpan.appendChild(document.createTextNode(questionData.name));

    salePerson.appendChild(salePersonSpan);
    d[0].appendChild(salePerson);
}

//Multiple Choice Checkbox
function displayMultipleChoice(){
    var parentDiv = document.getElementsByClassName('multiChoice');
    var multipleChoiceHeading = document.createElement('p');
        multipleChoiceHeading.className = 'headings';
        multipleChoiceHeading.appendChild(document.createTextNode(questionData.questionSet[0].questionName));
        parentDiv[0].appendChild(multipleChoiceHeading);

    var newDiv = document.createElement('div');
        newDiv.className = 'choice';
        parentDiv[0].appendChild(newDiv);

    var callNewDiv = document.getElementsByClassName('choice');
    
    // <div class="choice"></div>
    var multipleChoice1 = document.createElement('input');
        multipleChoice1.setAttribute("type", "checkbox");
        multipleChoice1.setAttribute("id", "checkbox1");
        multipleChoice1.setAttribute("value", questionData.questionSet[0].anwsers[0].option);
        // multipleChoice1.setAttribute("onClick", 'validate()');
        // multipleChoice1.setAttribute("id", "Option 1");

    var multipleChoice2 = document.createElement('input');
        multipleChoice2.setAttribute("type", "checkbox");
        multipleChoice2.setAttribute("id", "checkbox2");
        multipleChoice2.setAttribute("value", questionData.questionSet[0].anwsers[1].option);
        // multipleChoice2.setAttribute("onClick", 'validate()');

    var label1 = document.createElement('label');
        label1.appendChild(document.createTextNode('Option 1'));

    var label2 = document.createElement('label');
        label2.appendChild(document.createTextNode('Option 2'));
     
    var errorSpan = document.createElement('span')
        errorSpan.appendChild(document.createTextNode('This field is required!'));
        errorSpan.setAttribute('class', 'mcErrorSpan');
        errorSpan.style.color = 'red';
        errorSpan.style.display = 'none';

    callNewDiv[0].appendChild(multipleChoice1);
    callNewDiv[0].appendChild(label1);
    callNewDiv[0].appendChild(multipleChoice2);
    callNewDiv[0].appendChild(label2);    
    parentDiv[0].appendChild(errorSpan);
}

//Display Essay Textarea
function displayEssay() {
    var essayHeading = document.createElement('p');
        essayHeading.className = 'headings';
        essayHeading.appendChild(document.createTextNode(questionData.questionSet[1].questionName));

    var essayQuestion = document.createElement('span');
        essayQuestion.appendChild(document.createTextNode('Enter your answer below'));
    
    var d = document.getElementsByClassName('essay');
        d[0].appendChild(essayHeading);
        d[0].appendChild(essayQuestion);

    var essay = document.createElement('textarea');
        essay.setAttribute('id', 'essayid');
        essay.setAttribute("rows", "5");
        essay.setAttribute("cols", "100");
        essay.setAttribute("name", "essay");
        d[0].appendChild(essay);

    var errorSpan = document.createElement('span')
        errorSpan.appendChild(document.createTextNode('This field is required!'));
        errorSpan.setAttribute('class', 'essayErrorSpan');
        errorSpan.style.color = 'red';
        errorSpan.style.display = 'none';

    d[0].appendChild(errorSpan);
}


//True of False radio buttons
function displayTrueFalse() {
    var parentDiv = document.getElementsByClassName('tf');
    var trueFalseHeading = document.createElement('p');
        trueFalseHeading.className = 'headings';
        trueFalseHeading.appendChild(document.createTextNode(questionData.questionSet[2].questionName));
    parentDiv[0].appendChild(trueFalseHeading);
    var newDiv = document.createElement('div');
        newDiv.className = 'options';
        parentDiv[0].appendChild(newDiv);
    var callNewDiv = document.getElementsByClassName('options');
    var multipleChoice1 = document.createElement('input');
        multipleChoice1.setAttribute("id", "mul1");
        multipleChoice1.setAttribute("type", "radio");
        multipleChoice1.setAttribute("name", "radioButton");
        multipleChoice1.setAttribute("value", "true");
    var multipleChoice2 = document.createElement('input');
    multipleChoice2.setAttribute("id", "mul2");
        multipleChoice2.setAttribute("type", "radio");
        multipleChoice2.setAttribute("name", "radioButton");
        multipleChoice2.setAttribute("value", "false");
    var label1 = document.createElement('label');
        label1.appendChild(document.createTextNode('True'));

    var label2 = document.createElement('label');
        label2.appendChild(document.createTextNode('False'));

    var errorSpan = document.createElement('span')
        errorSpan.appendChild(document.createTextNode('This field is required!'));
        errorSpan.setAttribute('class', 'tfErrorSpan');
        errorSpan.style.color = 'red';
        errorSpan.style.display = 'none';

    callNewDiv[0].appendChild(multipleChoice1);
    callNewDiv[0].appendChild(label1);
    callNewDiv[0].appendChild(multipleChoice2);
    callNewDiv[0].appendChild(label2);
    parentDiv[0].appendChild(errorSpan);
}

//Fill in the Blanks
function displayFillBlanks() {
    var d = document.getElementsByClassName('fillBlanks');
    
    var heading = document.createElement('p');
        heading.className = 'headings';
        heading.appendChild(document.createTextNode(questionData.questionSet[3].questionType));
        d[0].appendChild(heading);
    
    var text = document.createElement('span')
        text.appendChild(document.createTextNode(questionData.questionSet[3].questionName));
        d[0].appendChild(text);

    var input = document.createElement('input');
        input.setAttribute("type", "text");
        input.setAttribute("id", "fillDBlanks");
        input.setAttribute("name", "fillBlanks");
        d[0].appendChild(input);

    var errorSpan = document.createElement('span')
        errorSpan.appendChild(document.createTextNode('This field is required!'));
        errorSpan.setAttribute('class', 'fbErrorSpan');
        errorSpan.style.color = 'red';
        errorSpan.style.display = 'none';
        d[0].appendChild(errorSpan);
        
        
}
    
//File Upload
function displayFile() {
    var d = document.getElementsByClassName('file');
    var newDiv = document.createElement('div');
    newDiv.className = 'fileDiv';
    d[0].appendChild(newDiv);
    var input = document.createElement('input');
    input.setAttribute("type", "file");
    input.setAttribute("id", "fileButton");
    input.setAttribute("oninput", "uploadFile()");
    newDiv.appendChild(input);
    var label = document.createElement('label');
    label.setAttribute('for', 'fileButton');
    label.setAttribute('class', 'btnInputFile');
    label.innerHTML = 'Upload File';
    newDiv.appendChild(label);
}

function uploadFile() {
    fileLabel = document.getElementsByClassName('btnInputFile');
    fileLabel[0].innerHTML = document.getElementById('fileButton').files[0].name;
}

//Display Submit Button
function submit() {
    var parentDiv = document.getElementsByClassName('submit');
    var newDiv = document.createElement('div');
        newDiv.className = 'submitDiv';

    var submit = document.createElement('button');
        submit.innerHTML = 'Submit';
        submit.setAttribute("onClick", "validate()");
        submit.setAttribute("class", "btnInput");
    newDiv.appendChild(submit);
    parentDiv[0].appendChild(newDiv);
}



//Validate Form
function validate() {
    var multiOptions = document.getElementsByClassName('multiChoice');
    var tfCheck = document.getElementsByClassName('tf');
    
    if (!(multiOptions[0].childNodes[1].childNodes[0].checked || multiOptions[0].childNodes[1].childNodes[2].checked))
    document.getElementsByClassName('mcErrorSpan')[0].style.display = 'block';
    else
    document.getElementsByClassName('mcErrorSpan')[0].style.display = 'none';           
    
    if (!(tfCheck[0].childNodes[1].childNodes[0].checked || tfCheck[0].childNodes[1].childNodes[2].checked)) 
    document.getElementsByClassName('tfErrorSpan')[0].style.display = 'block';
    else
    document.getElementsByClassName('tfErrorSpan')[0].style.display = 'none';

    // Checking Essay
    var essay = document.getElementsByName('essay');
    if (essay[0].value == '')
    document.getElementsByClassName('essayErrorSpan')[0].style.display = 'block';
    else
        document.getElementsByClassName('essayErrorSpan')[0].style.display = 'none';

    // Checking Fill Blanks
    var fillBlanks = document.getElementsByClassName('fillBlanks');
    if (fillBlanks[0].childNodes[2].value == '')
        document.getElementsByClassName('fbErrorSpan')[0].style.display = 'block';
        else
        document.getElementsByClassName('fbErrorSpan')[0].style.display = 'none';
}

// Collecting Data From the User in Json Format
    let jsondata = []

    const SubmitForm = (e) => {
        e.preventDefault();
        let userdata = {
            // id: Date.now(),
            multiplechoise: document.getElementById('checkbox1','checkbox2').checked,
            essayAnswer: document.getElementById('essayid').value,
            TruFal: document.getElementById('mul2','mul1').checked,
            blankAnswer: document.getElementById('fillDBlanks').value
        }

        jsondata.push(userdata);
        document.forms[0].reset();
    

        console.log('added', { jsondata } );
        // let pre = document.querySelector('#msg pre');
        // pre.textContent = '\n' + JSON.stringify(jsondata, '\t', 2);
        // localStorage.setItem('MyMovieList', JSON.stringify(jsondata));
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('btn').addEventListener('click', SubmitForm);
    });

//Calling functions
displaySalePerson()
displayMultipleChoice()
displayEssay()
displayTrueFalse()
displayFillBlanks() 
displayFile()
// validate()
submit()




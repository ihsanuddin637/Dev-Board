//1st Card
document.getElementById('fix-btn').addEventListener('click', function () {

    const taskNumber = document.getElementById('task');
    let convertedNumber = parseInt(taskNumber.innerText);
    if (convertedNumber > 0) {
        taskNumber.innerText = convertedNumber - 1;
    }


    const checkboxIncrement = document.getElementById('checkbox-increment');
    let convertedNumberr = parseInt(checkboxIncrement.innerText);
    if (convertedNumberr < 29) {
        checkboxIncrement.innerText = convertedNumberr + 1;
    }

    const fixMobile = document.getElementById('fix-mobile')

    const changedText = fixMobile.innerText;
    const activityLog = document.getElementById('activity-log')
    const d = new Date();

    const addedItem = document.createElement('p');
    addedItem.innerText = 'You have Complete The Task ' + changedText + d;
    addedItem.style.color = '#000000'
    addedItem.style.backgroundColor = '#F4F7FF';
    addedItem.style.textAlign = 'center'
    addedItem.style.padding = '10px'
    addedItem.style.marginTop = '25px'
    addedItem.style.marginBottom = '25px'
    addedItem.style.marginLeft = '17px'
    addedItem.style.marginRight = '17px'
    addedItem.style.fontSize = '16px'
    addedItem.style.fontWeight = '400'
    addedItem.style.lineHeight = '24px'
    addedItem.style.fontFamily = 'font-poppins'
    activityLog.appendChild(addedItem);

    window.alert('Board Updated Successfully.')
    document.getElementById('fix-btn').disabled = true;

})
// 2nd Card
document.getElementById('dark-btn').addEventListener('click', function () {

    const taskNumber = document.getElementById('task');
    let convertedNumber = parseInt(taskNumber.innerText);
    if (convertedNumber > 0) {
        taskNumber.innerText = convertedNumber - 1;
    }

    const checkboxIncrement = document.getElementById('checkbox-increment');
    let convertedNumberr = parseInt(checkboxIncrement.innerText);
    if (convertedNumberr < 29) {
        checkboxIncrement.innerText = convertedNumberr + 1;
    }
    const fixMobile = document.getElementById('dark-mode')

    const changedText = fixMobile.innerText;
    const activityLog = document.getElementById('activity-log')
    const d = new Date();

    const addedItem = document.createElement('p');
    addedItem.innerText = 'You have Complete The Task ' + changedText + d;
    addedItem.style.color = '#000000'
    addedItem.style.backgroundColor = '#F4F7FF';
    addedItem.style.textAlign = 'center'
    addedItem.style.padding = '10px'
    addedItem.style.marginTop = '25px'
    addedItem.style.marginBottom = '25px'
    addedItem.style.marginLeft = '17px'
    addedItem.style.marginRight = '17px'
    addedItem.style.fontSize = '16px'
    addedItem.style.fontWeight = '400'
    addedItem.style.lineHeight = '24px'
    addedItem.style.fontFamily = 'font-poppins'
    activityLog.appendChild(addedItem);

    window.alert('Board Updated Successfully.')
    document.getElementById('dark-btn').disabled = true;

})

// 3rd Card
document.getElementById('optimize-btn').addEventListener('click', function () {

    const taskNumber = document.getElementById('task');
    let convertedNumber = parseInt(taskNumber.innerText);
    if (convertedNumber > 0) {
        taskNumber.innerText = convertedNumber - 1;
    }

    const checkboxIncrement = document.getElementById('checkbox-increment');
    let convertedNumberr = parseInt(checkboxIncrement.innerText);
    if (convertedNumberr < 29) {
        checkboxIncrement.innerText = convertedNumberr + 1;
    }



    const fixMobile = document.getElementById('optimize-page')

    const changedText = fixMobile.innerText;
    const activityLog = document.getElementById('activity-log')
    const d = new Date();

    const addedItem = document.createElement('p');
    addedItem.innerText = 'You have Complete The Task ' + changedText + d;
    addedItem.style.color = '#000000'
    addedItem.style.backgroundColor = '#F4F7FF';
    addedItem.style.textAlign = 'center'
    addedItem.style.padding = '10px'
    addedItem.style.marginTop = '25px'
    addedItem.style.marginBottom = '25px'
    addedItem.style.marginLeft = '17px'
    addedItem.style.marginRight = '17px'
    addedItem.style.fontSize = '16px'
    addedItem.style.fontWeight = '400'
    addedItem.style.lineHeight = '24px'
    addedItem.style.fontFamily = 'font-poppins'
    activityLog.appendChild(addedItem);

    window.alert('Board Updated Successfully.')
    document.getElementById('optimize-btn').disabled = true;

})

// 4th Card
document.getElementById('emoji-btn').addEventListener('click', function () {

    const taskNumber = document.getElementById('task');
    let convertedNumber = parseInt(taskNumber.innerText);
    if (convertedNumber > 0) {
        taskNumber.innerText = convertedNumber - 1;
    }

    const checkboxIncrement = document.getElementById('checkbox-increment');
    let convertedNumberr = parseInt(checkboxIncrement.innerText);
    if (convertedNumberr < 29) {
        checkboxIncrement.innerText = convertedNumberr + 1;
    }


    const fixMobile = document.getElementById('add-emoji')

    const changedText = fixMobile.innerText;
    const activityLog = document.getElementById('activity-log')
    const d = new Date();

    const addedItem = document.createElement('p');
    addedItem.innerText = 'You have Complete The Task ' + changedText + d;
    addedItem.style.color = '#000000'
    addedItem.style.backgroundColor = '#F4F7FF';
    addedItem.style.textAlign = 'center'
    addedItem.style.padding = '10px'
    addedItem.style.marginTop = '25px'
    addedItem.style.marginBottom = '25px'
    addedItem.style.marginLeft = '17px'
    addedItem.style.marginRight = '17px'
    addedItem.style.fontSize = '16px'
    addedItem.style.fontWeight = '400'
    addedItem.style.lineHeight = '24px'
    addedItem.style.fontFamily = 'font-poppins'
    activityLog.appendChild(addedItem);

    window.alert('Board Updated Successfully.')
    document.getElementById('emoji-btn').disabled = true;

})

// 5th Card
document.getElementById('api-btn').addEventListener('click', function () {

    const taskNumber = document.getElementById('task');
    let convertedNumber = parseInt(taskNumber.innerText);
    if (convertedNumber > 0) {
        taskNumber.innerText = convertedNumber - 1;
    }

    const checkboxIncrement = document.getElementById('checkbox-increment');
    let convertedNumberr = parseInt(checkboxIncrement.innerText);
    if (convertedNumberr < 29) {
        checkboxIncrement.innerText = convertedNumberr + 1;
    }


    const fixMobile = document.getElementById('openai-api')

    const changedText = fixMobile.innerText;
    const activityLog = document.getElementById('activity-log')
    const d = new Date();

    const addedItem = document.createElement('p');
    addedItem.innerText = 'You have Complete The Task ' + changedText + d;
    addedItem.style.color = '#000000'
    addedItem.style.backgroundColor = '#F4F7FF';
    addedItem.style.textAlign = 'center'
    addedItem.style.padding = '10px'
    addedItem.style.marginTop = '25px'
    addedItem.style.marginBottom = '25px'
    addedItem.style.marginLeft = '17px'
    addedItem.style.marginRight = '17px'
    addedItem.style.fontSize = '16px'
    addedItem.style.fontWeight = '400'
    addedItem.style.lineHeight = '24px'
    addedItem.style.fontFamily = 'font-poppins'
    activityLog.appendChild(addedItem);

    window.alert('Board Updated Successfully.')
    document.getElementById('api-btn').disabled = true;

})

// 6th Card
document.getElementById('job-btn').addEventListener('click', function () {

    const taskNumber = document.getElementById('task');
    let convertedNumber = parseInt(taskNumber.innerText);
    if (convertedNumber > 0) {
        taskNumber.innerText = convertedNumber - 1;
    }

    const checkboxIncrement = document.getElementById('checkbox-increment');
    let convertedNumberr = parseInt(checkboxIncrement.innerText);
    if (convertedNumberr < 29) {
        checkboxIncrement.innerText = convertedNumberr + 1;
    }

    const fixMobile = document.getElementById('job-search')

    const changedText = fixMobile.innerText;
    const activityLog = document.getElementById('activity-log')
    const d = new Date();

    const addedItem = document.createElement('p');
    addedItem.innerText = 'You have Complete The Task ' + changedText + d;
    addedItem.style.color = '#000000'
    addedItem.style.backgroundColor = '#F4F7FF';
    addedItem.style.textAlign = 'center'
    addedItem.style.padding = '10px'
    addedItem.style.marginTop = '25px'
    addedItem.style.marginBottom = '25px'
    addedItem.style.marginLeft = '17px'
    addedItem.style.marginRight = '17px'
    addedItem.style.fontSize = '16px'
    addedItem.style.fontWeight = '400'
    addedItem.style.lineHeight = '24px'
    addedItem.style.fontFamily = 'font-poppins'
    activityLog.appendChild(addedItem);

    window.alert('Board Updated Successfully.')
    document.getElementById('job-btn').disabled = true;

})


    document.getElementById('discover').addEventListener('click', function(){
        window.location.href="./main.html";
    })

    
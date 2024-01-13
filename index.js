function dropDownAnswer(element) {
    if (element.parentElement.classList.contains('close')) {
        element.parentElement.classList.remove('close');
        element.parentElement.classList.add('open');
    }
    else {
        element.parentElement.classList.add('close');
        element.parentElement.classList.remove('open');
    }
}
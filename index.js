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
function resourcesDropDown(id, name) {
    if (id == 'web' && name == 'resouce') {
        $("#resourcesDropDownResouce").toggleClass("hidden")
    }
    else if (id == 'web' && name == 'college') {
        $("#resourcesDropDownCollege").toggleClass("hidden")
    }
    else if (id == 'phone' && name == 'resouce') {
        $("#resourcesDropDownMobileResource").toggleClass("hidden")
    }
    else {
        $("#resourcesDropDownMobileCollege").toggleClass("hidden")
    }
}

function lessDisplay() {
    $(".mentorBoxes").addClass("hidden")
    $(".less").addClass("hidden")
    $(".more").removeClass("hidden")

}
function displayMore() {
    $(".mentorBoxes").removeClass("hidden")
    $(".more").addClass("hidden")
    $(".less").removeClass("hidden")
}

function filterTypeDrop(id) {
    $('.dontShowMobile').addClass('hidden')
    $('#' + id).removeClass('hidden')
}

function filterDrop(id) {
    $('.dontShow').addClass('hidden')
    $('#' + id).removeClass('hidden')
}
function mobileFilterDisplay(id) {
    $(id).toggleClass('hidden')
}
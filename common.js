var mentorObj = [
    {
        "name": "Anikait Chakraborty",
        "city": "Delhi NCR",
        // "state": "Maharashtra",
        "experience": " 0-5 Years",
        "domain": "Marketing",
        "workExperience": 4,
        // "course": "BBA",
        "college": "Symbiosis Centre for Media & Communication",
        "linkedInUrl": "https://www.linkedin.com/in/anikait-chakraborty/",
        "calendarLink": "",
        "img": "img/newMentorPic-1.webp",
        "mobileImg": "img/newMentorMobile-1.webp",
        "ComapniesAndroles": [
            {
                "role": "Head of Media",
                "company": "Razorpod",
                "current": true
            },
            {
                "role": "Co-Founder",
                "company": "Practical Dreams",
                "current": true
            }
        ]
    },
    {
        "name": "Amit Kundu",
        "city": "Delhi NCR",
        // "state": "Rajasthan",
        "experience": " > 5 Years",
        "domain": "Finance/Operations",
        "workExperience": 9.8,
        // "course": "",
        "college": "Geetanjali Institute of Technical Studies",
        "linkedInUrl": "https://www.linkedin.com/in/amit-kundu-39b20a253/",
        "calendarLink": "https://calendly.com/amit-kundu",
        "img": "img/newMentorPic-0.webp",
        "mobileImg": "img/newMentorMobile-0.webp",
        "ComapniesAndroles": [
            {
                "role": "AVP - Enterprise Demand and Forecasting",
                "company": "National Australia Bank - India",
                "current": true
            }
        ]
    },
    {
        "name": "Anindya Singh",
        "city": "Delhi NCR",
        // "state": "Maharashtra",
        "experience": " 0-5 Years",
        "domain": "Consulting",
        "workExperience": 5,
        // "course": "BBA",
        "college": "G.L.A. University, Uttar Pradesh",
        "linkedInUrl": "https://www.linkedin.com/in/anindyasingh/",
        "calendarLink": "",
        "img": "img/newMentorPic-2.webp",
        "mobileImg": "img/newMentorMobile-2.webp",
        "ComapniesAndroles": [
            {
                "role": "Digital Transformation Analyst - dss+",
                "company": "Formerly DuPont Sustainable Solutions",
                "current": true
            }
        ]
    },
    {
        "name": "Ajay Kumar Sunnapu",
        "city": "Delhi NCR",
        // "state": "Orissa",
        "experience": " > 5 Years",
        "domain": "Project Management",
        "workExperience": 8,
        // "course": "B.Tech",
        "college": "Chaitanya Bharti Institute of Technology",
        "linkedInUrl": "https://www.linkedin.com/in/ajaykumarsunnapu/",
        "calendarLink": "",
        "img": "img/newMentorPic-3.webp",
        "mobileImg": "img/newMentorMobile-3.webp",
        "ComapniesAndroles": [
            {
                "role": "Consulting Project Manager",
                "company": "Microsoft",
                "current": true
            },
        ]
    }
    ,
    {
        "name": "Ishani",
        "city": "Delhi NCR",
        "state": "Orissa",
        "experience": " > 5 Years",
        "domain": "Fashion  Entrepreneur",
        "workExperience": 7.4,
        // "course": "BBM",
        "college": "Annamalai University",
        "linkedInUrl": "https://www.linkedin.com/in/ishani-chakravorty/",
        "calendarLink": "",
        "img": "img/newMentorPic-4.webp",
        "mobileImg": "img/newMentorMobile-4.webp",
        "ComapniesAndroles": [
            {
                "role": "Founder",
                "company": "Earth Republic",
                "current": true
            },
            {
                "role": "Lecturer",
                "company": "International Institute Of Fashion Design",
                "current": true
            }
        ]
    },
    {
        "name": "Ramsha Mustafa",
        "city": "Delhi NCR",
        // "state": "Andhra Pradesh",
        "experience": " 0-5 Years",
        "domain": "Hotel Management",
        "workExperience": 4.3,
        // "course": "B.Tech",
        "college": "Institute of Hotel Management Bangalore",
        "linkedInUrl": "https://www.linkedin.com/in/ramsha-mustafa-6850a5170/",
        "calendarLink": "",
        "img": "img/newMentorPic-5.webp",
        "mobileImg": "img/newMentorMobile-5.webp",
        "ComapniesAndroles": [
            {
                "role": "Manager",
                "company": "Food delivery & takeway service services (PAN India)  - ITC Hotels",
                "current": true
            },

        ]
    },
    {
        "name": "Trishla Sapla",
        "city": "Delhi NCR",
        // "state": "Andhra Pradesh",
        "experience": " > 5 Years",
        "domain": "Finance",
        "workExperience": 9,
        // "course": "B.Tech",
        "college": " Kamla Nehru College | IGNOU",
        "linkedInUrl": "https://www.linkedin.com/in/trishla-sapla/",
        "calendarLink": "",
        "img": "img/newMentorPic-6.webp",
        "mobileImg": "img/newMentorMobile-6.webp",
        "ComapniesAndroles": [
            {
                "role": "Financial Planning  & Analysis Specialist",
                "company": "Accenture",
                "current": true
            },

        ]
    }
]

var mentorsOrder = [0, 1, 2, 3, 4, 5, 6]
$(document).ready(function () {
    initilise();
})

function initilise() {
    filterApplied = false
    experiencedFiltered = "";
    stateFiltered = "";
    domainFiltered = "";

    var filterObj = {
        "domain": [],
        "experience": []
    }

    for (key in filterObj) {
        filterObj[key] = [...new Set(mentorObj.map((element) => element[key]))];
    }

    createMentorCard(mentorObj)
    createFilter(filterObj)
}


function createMentorCard(mentorObj) {
    let mentorHtml = ''
    if (filterApplied) {

        for (let i = 0; i < mentorObj.length; i++) {
            // let i = mentorsOrder[j]
            mentorHtml += `<div class="flex items-center gap-y-3 py-3">
            <div class="flex  w-full gap-x-5 items-center grid grid-cols-12 rounded-lg"
                style="border: 1px solid #60BBE0; background: #F7F8FB;">
                <div class="md:col-span-3 col-span-12  md:block hidden h-full w-full bgRounded" style="background: rgba(96, 187, 224, 0.10);">
                <div class="flex justify-center items-center"><img src="${mentorObj[i].img}" class="w-3/4 pb-2"></div>
                </div>
                <div class="md:col-span-3 col-span-12 flex items-center md:hidden block">
                    <img src="${mentorObj[i].mobileImg}" class="xl:w-3/4 w-full">
                </div>
                <div class="md:col-span-6 col-span-12 py-5 md:px-0 px-5">
                    <div class="flex flex-col justify-start md:items-start items-center">
                        <div class="flex items-end md:justify-start justify-center gap-x-3 mb-3">
                            <span class="mentorName font-bold text-2xl text-main">${mentorObj[i].name}</span>
                            <a href="${mentorObj[i].linkedInUrl}"><img src="img/masterLinkedin.png" class="mentorLinked"></a>
                        </div>
                        <div class="md:hidden flex flex-col">
                            <div class="flex">
                                <p class="px-5 py-2 currently bg-lightBlue text-white text-xs font-normal">
                                    Currently</p>
                            </div>
                            <div class="flex p-3 notCurrently items-center bg-white"
                                style="border: 1px solid #60BBE0;">
                                <p class="text-xs text-main font-normal text-center"><span
                                        class="font-bold">PGP Rise Student</span> at Masters' Union | Cohort 1</p>
                            </div>
                        </div>
                        <div class="flex flex-col gap-y-3 md:pt-0 pt-5">
                            <div class="flex gap-x-3 items-center">
                                <img src="img/teacher.svg" class="mentorLinked">
                                <p class="mentorName font-normal md:text-base text-sm text-main">${mentorObj[i].college}</p>
                            </div>
                            <div class="flex gap-x-3 items-center">
                            <img src="img/briefcase.svg" class="mentorLinked">
                            <p class="mentorName font-normal md:text-base text-sm text-main">`
            for (let j = 0; j < mentorObj[i].ComapniesAndroles.length; j++) {
                if (mentorObj[i].ComapniesAndroles.length > 1) {
                    if (mentorObj[i].ComapniesAndroles.length - 1 != j) {
                        mentorHtml += `<span>${mentorObj[i].ComapniesAndroles[j].role} @ ${mentorObj[i].ComapniesAndroles[j].company} | </span>`
                    }
                    else {
                        mentorHtml += `<span>${mentorObj[i].ComapniesAndroles[j].role} @ ${mentorObj[i].ComapniesAndroles[j].company}</span>`
                    }
                } else {
                    mentorHtml += `<span>${mentorObj[i].ComapniesAndroles[j].role} @ ${mentorObj[i].ComapniesAndroles[j].company} </span>`
                }

            }
            mentorHtml += `</p></div>
                            <div class="flex gap-x-3 items-center">
                                <img src="img/brifecase-timer.svg" class="mentorLinked">
                                <p class="mentorName font-normal md:text-base text-sm text-main"><span class="text-base font-bold text-lightBlue">${mentorObj[i].workExperience} </span>  Years of Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:col-span-3 col-span-12 py-5 md:pr-5 md:pl-0 px-5">
                    <div class="">
                        <div class="md:block hidden">
                            <div class="flex">
                                <p class="px-5 py-2 currently bg-lightBlue text-white text-xs font-normal">
                                    Currently</p>
                            </div>
                            <div class="flex p-3 notCurrently items-center bg-white"
                                style="border: 1px solid #60BBE0;">
                                <p class="text-xs text-main font-normal text-center"><span
                                        class="font-bold">PGP Rise Student</span> at Masters' Union | Cohort 1</p>
                            </div>
                        </div>
    
                        <div class="md:mt-5 m-0">
                            <a href="javascript:;" onclick="openCalendar('${mentorObj[i].calendarLink}')"
                                class="w-full flex items-center justify-center text-sm text-white btn-Bg font-semibold py-2 text-center rounded-lg">
                                <span>Book Now</span></a>
                        </div>
                    </div>
    
                </div>
            </div>
        
            </div>`
            $("#mentorList").html(mentorHtml)
        }
    } else {
        for (let j = 0; j < mentorsOrder.length; j++) {
            let i = mentorsOrder[j]
            mentorHtml += `<div class="flex items-center gap-y-3 py-3">
            <div class="flex  w-full gap-x-5 items-center grid grid-cols-12 rounded-lg"
                style="border: 1px solid #60BBE0; background: #F7F8FB;">
                <div class="md:col-span-3 col-span-12  md:block hidden h-full w-full bgRounded" style="background: rgba(96, 187, 224, 0.10);">
                <div class="flex justify-center items-center"><img src="${mentorObj[i].img}" class="w-3/4 pb-2"></div>
                </div>
                <div class="md:col-span-3 col-span-12 flex items-center md:hidden block">
                    <img src="${mentorObj[i].mobileImg}" class="xl:w-3/4 w-full">
                </div>
                <div class="md:col-span-6 col-span-12 py-5 md:px-0 px-5">
                    <div class="flex flex-col justify-start md:items-start items-center">
                        <div class="flex items-end md:justify-start justify-center gap-x-3 mb-3">
                            <span class="mentorName font-bold text-2xl text-main">${mentorObj[i].name}</span>
                            <a href="${mentorObj[i].linkedInUrl}"><img src="img/masterLinkedin.png" class="mentorLinked"></a>
                        </div>
                        <div class="md:hidden flex flex-col">
                            <div class="flex">
                                <p class="px-5 py-2 currently bg-lightBlue text-white text-xs font-normal">
                                    Currently</p>
                            </div>
                            <div class="flex p-3 notCurrently items-center bg-white"
                                style="border: 1px solid #60BBE0;">
                                <p class="text-xs text-main font-normal text-center"><span
                                        class="font-bold">PGP Rise Student</span> at Masters' Union | Cohort 1</p>
                            </div>
                        </div>
                        <div class="flex flex-col gap-y-3 md:pt-0 pt-5">
                            <div class="flex gap-x-3 items-center">
                                <img src="img/teacher.svg" class="mentorLinked">
                                <p class="mentorName font-normal md:text-base text-sm text-main">${mentorObj[i].college}</p>
                            </div>
                            <div class="flex gap-x-3 items-center">
                            <img src="img/briefcase.svg" class="mentorLinked">
                            <p class="mentorName font-normal md:text-base text-sm text-main">`
            for (let j = 0; j < mentorObj[i].ComapniesAndroles.length; j++) {
                if (mentorObj[i].ComapniesAndroles.length > 1) {
                    if (mentorObj[i].ComapniesAndroles.length - 1 != j) {
                        mentorHtml += `<span>${mentorObj[i].ComapniesAndroles[j].role} @ ${mentorObj[i].ComapniesAndroles[j].company} | </span>`
                    }
                    else {
                        mentorHtml += `<span>${mentorObj[i].ComapniesAndroles[j].role} @ ${mentorObj[i].ComapniesAndroles[j].company}.</span>`
                    }
                } else {
                    mentorHtml += `<span>${mentorObj[i].ComapniesAndroles[j].role} @ ${mentorObj[i].ComapniesAndroles[j].company} .</span>`
                }
            }
            mentorHtml += `</p></div>
                            <div class="flex gap-x-3 items-center">
                                <img src="img/brifecase-timer.svg" class="mentorLinked">
                                <p class="mentorName font-normal md:text-base text-sm text-main"><span class="text-base font-bold text-lightBlue">${mentorObj[i].workExperience} </span>  Years of Experience</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="md:col-span-3 col-span-12 py-5 md:pr-5 md:pl-0 px-5">
                    <div class="">
                        <div class="md:block hidden">
                            <div class="flex">
                                <p class="px-5 py-2 currently bg-lightBlue text-white text-xs font-normal">
                                    Currently</p>
                            </div>
                            <div class="flex p-3 notCurrently items-center bg-white"
                                style="border: 1px solid #60BBE0;">
                                <p class="text-xs text-main font-normal text-center"><span
                                        class="font-bold">PGP Rise Student</span> at Masters' Union | Cohort 1</p>
                            </div>
                        </div>
    
                        <div class="md:mt-5 m-0">
                            <a href="javascript:;" onclick="openCalendar('${mentorObj[i].calendarLink}')"
                                class="w-full flex items-center justify-center text-sm text-white btn-Bg font-semibold py-2 text-center rounded-lg">
                                <span>Book Now</span></a>
                        </div>
                    </div>
    
                </div>
            </div>
        
            </div>`
            $("#mentorList").html(mentorHtml)
        }
    }
}

function createFilter(filterObj) {
    createExpFilter(filterObj['experience'])
    createDomainFilter(filterObj['domain'])
}

function createExpFilter(filter) {
    let filterHtml = ''
    filterHtml += ' <ul class="filter">'
    filter.forEach(element => {
        filterHtml += ' <li class="flex gap-x-3 py-2">';
        filterHtml += '<input type="radio" class="" name="experience" value="' + element + '" onclick="applyFilter(this,`experience`)">';
        filterHtml += '<span class="text-sm text-main">' + element + '</span>';
        filterHtml += '</li>';
    });
    filterHtml += '</ul>';
    $("#experience").html(filterHtml)

}

function createDomainFilter(filter) {
    filterHtml = ''
    filterHtml += ' <ul class="filter">'
    filter.forEach(element => {
        filterHtml += ' <li class="flex gap-x-3 py-2">';
        filterHtml += '<input type="radio" class=""   name="domain" value="' + element + '" onclick="applyFilter(this,`domain`)">';
        filterHtml += '<span class="text-sm text-main">' + element + '</span>';
        filterHtml += '</li>';
    });
    filterHtml += '</ul>';
    $("#domain").html(filterHtml)
}

function applyFilter(elem, filter) {

    if (!filterApplied) {
        clonedMentorObj = [...mentorObj]
        filterApplied = true
    }

    let currentFilter = elem.value;

    if (filter == 'experience') {
        clonedMentorObj = [...mentorObj]
        experiencedFiltered = clonedMentorObj.filter(d => d['experience'] == currentFilter)
        domain = [...new Set(experiencedFiltered.map((element) => element['domain']))];
        state = [...new Set(experiencedFiltered.map((element) => element['state']))];
        createDomainFilter(domain)
        createMentorCard(experiencedFiltered)
    }

    if (filter == 'domain') {
        if (experiencedFiltered == "") {
            domainFiltered = clonedMentorObj.filter(d => d['domain'] == currentFilter)
            // experiencedFiltered = clonedMentorObj.filter(d=> d['domain'] == currentFilter)
        } else {
            domainFiltered = experiencedFiltered.filter(d => d['domain'] == currentFilter)
        }
        createMentorCard(domainFiltered)

    }

}

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

function openCalendar(calendarLink) {
    // let calendarLink = mentorObj.calendarLink
    if (calendarLink == "") {
        alert("Something went wrong ! please try after sometime")
    } else {
        Calendly.initPopupWidget({ url: calendarLink })
    }

}
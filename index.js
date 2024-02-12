var mentorObj;
var mentorsOrder =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
$(document).ready(function () {



     mentorObj = [
        {
            "name": "Vansh Miglani",
            "city": "Sri Ganganagar",
            "state": "Rajasthan",
            "experience": "Fresher (0-1 year)",
            "domain": "Other",
            "workExperience": 0,
            "course": "BBA",
            "college": "Maharaja Ganga Singh University, Rajasthan",
            "linkedInUrl": "https://www.linkedin.com/in/vanshmiglani01/",
            "calendarLink": "https://calendly.com/vansh-miglani/30min",
            "img" : "../img/mentorPic-0.webp",
            "mobileImg" : "../img/mentorMobile-0.png",
            "ComapniesAndroles": [
                {
                    "role": "Co-founder",
                    "company": "Retailzoid",
                    "current": true
                },
                {
                    "role": "Founder",
                    "company": "Pentazoid",
                    "current": true
                }
            ]
        },
        {
            "name": "Vaibhav Mahajan",
            "city": "Sonipat",
            "state": "Haryana",
            "experience": "Family Business/ Entrepreneurship",
            "domain": "Other",
            "workExperience": 9.4,
            "course": "B. Des",
            "college": "Footwear Design and Development Institute",
            "linkedInUrl": "https://www.linkedin.com/in/vaibhavmahajan-outontrip/",
            "calendarLink": "",
            "img" : "../img/mentorPic-1.png",
            "mobileImg" : "../img/mentorMobile-1.png",
            "ComapniesAndroles": [
                {
                    "role": "Managing Partner",
                    "company": "Glassrock Traders Llp",
                    "current": true
                },
                {
                    "role": "Ecommerce Specialist And General Manager",
                    "company": "Glassrock Traders Llp",
                    "current": true
                }
            ]
        },
        {
            "name": "Udit Agarwal",
            "city": "Mumbai",
            "state": "Maharashtra",
            "experience": "Experience (1-5 years)",
            "domain": "Marketing",
            "workExperience": 4.2,
            "course": "BBA",
            "college": "D.Y. Patil University School of Business, Maharashtra",
            "linkedInUrl": "https://www.linkedin.com/in/uditt/",
            "calendarLink": "https://calendly.com/udit-pym/30min",
            "img" : "../img/mentorPic-2.webp",
            "mobileImg" : "../img/mentorMobile-2.png",
            "ComapniesAndroles": [
                {
                    "role": "Senior Brand Executive",
                    "company": "Emami Group Ltd.",
                    "current": true
                },
                {
                    "role": "Marketing and growth Associate",
                    "company": "Jumper.AI",
                    "current": true
                }
            ]
        },
        {
            "name": "Tabish Iqbal ",
            "city": "Khordha",
            "state": "Orissa",
            "experience": "Experience (1-5 years)",
            "domain": "Sales",
            "workExperience": 2.7,
            "course": "B.Tech",
            "college": "Malviya National Institute of Technology, Jaipur, Rajasthan",
            "linkedInUrl": "https://www.linkedin.com/in/taabish-iqbal",
            "calendarLink": "https://calendly.com/tabish-iqbal/30min",
            "img" : "../img/mentorPic-3.webp",
            "mobileImg" : "../img/mentorMobile-3.png",
            "ComapniesAndroles": [
                {
                    "role": "Territory Manager-Customer Experience",
                    "company": "Hero Motocorp",
                    "current": true
                },
            ]
        }
        ,
        {
            "name": "Suryanshu Panda",
            "city": "Khordha",
            "state": "Orissa",
            "experience": "Experience (1-5 years)",
            "domain": "Other",
            "workExperience": 2.8,
            "course": "BBM",
            "college": "Xavier University, Odisha",
            "linkedInUrl": "https://in.linkedin.com/in/suryanshu-panda-633810174",
            "calendarLink": "https://calendly.com/suryanshu-panda/1-1-discussion",
            "img" : "../img/mentorPic-4.webp",
            "mobileImg" : "../img/mentorMobile-4.png",
            "ComapniesAndroles": [
                {
                    "role": "Team Member - Human Resource",
                    "company": "Tata Strive",
                    "current": true
                },
                {
                    "role": "Founder - Chief Executive Officer",
                    "company": "Chef Junction Private Limited",
                    "current": true
                }
            ]
        },
        {
            "name": "Sri Badarinadh",
            "city": "East Godavari",
            "state": "Andhra Pradesh",
            "experience": "Experience (>5 years)",
            "domain": "Tech",
            "workExperience": 5.8,
            "course": "B.Tech",
            "college": "Amrita Vishwa Vidyapeetham, Tamilnadu",
            "linkedInUrl": "https://www.linkedin.com/in/kakaraparthi-sri-badarinadh-570863134/",
            "calendarLink": "https://calendly.com/sri-badarinadh/30min",
            "img" : "../img/mentorPic-5.webp",
            "mobileImg" : "../img/mentorMobile-5.png",
            "ComapniesAndroles": [
                {
                    "role": "Data Analyst",
                    "company": "Coinswitch",
                    "current": true
                },
                {
                    "role": "Trainee Decision Scientist",
                    "company": "Mu Sigma",
                    "current": true
                }
            ]
        },
        {
            "name": "Savrang Jain",
            "city": "Chennai",
            "state": "Tamil Nadu",
            "experience": "Family Business/ Entrepreneurship",
            "domain": "Other",
            "workExperience": 2.2,
            "course": "B.Com Hons.",
            "college": "Loyola College, Madras",
            "linkedInUrl": "https://www.linkedin.com/in/savrang-jain/",
            "calendarLink": "https://calendly.com/savrang-jain/30min",
            "img" : "../img/mentorPic-6.webp",
            "mobileImg" : "../img/mentorMobile-6.png",
            "ComapniesAndroles": [
                {
                    "role": "Business Development Manager",
                    "company": "Hiya Enterprises",
                    "current": true
                },
                {
                    "role": "Business Analyst",
                    "company": "Symbiate Ventures Private Limited",
                    "current": true
                }
            ]
        }, {
            "name": "Samkit Nahar",
            "city": "Bengaluru",
            "state": "Karnataka",
            "experience": "Experience (1-5 years)",
            "domain": "Tech",
            "workExperience": 2.4,
            "course": "BCA",
            "college": "Christ University, Karnataka",
            "linkedInUrl": "https://www.linkedin.com/in/samkitnahar/",
            "calendarLink": "https://calendly.com/samkitnahar/30min",
            "img" : "../img/mentorPic-7.webp",
            "mobileImg" : "../img/mentorMobile-7.png",
            "ComapniesAndroles": [
                {
                    "role": "Project Manager",
                    "company": "Yellowchalk Ui/Ux Design Stuido",
                    "current": true
                },
                {
                    "role": "Associate Product Manager",
                    "company": "Searce Inc",
                    "current": true
                }
            ]
        }, {
            "name": "Rohan Tomar",
            "city": "Gwalior",
            "state": "Madhya Pradesh",
            "experience": "Experience (1-5 years)",
            "domain": "Sales",
            "workExperience": 1.8,
            "course": "B.Tech",
            "college": "SRM Institute Of Sciences And Technology, Chennai",
            "linkedInUrl": "https://www.linkedin.com/in/rohan-tomar/",
            "calendarLink": "https://calendly.com/meetrohantomar/30min",
            "img" : "../img/mentorPic-8.webp",
            "mobileImg" : "../img/mentorMobile-8.png",
            "ComapniesAndroles": [
                {
                    "role": "Revenue Operations Manager",
                    "company": "Recruitigo (An Emerhub Entity)  ",
                    "current": true
                },
                {
                    "role": "Territory Outbound Sales Director",
                    "company": "ONTOP",
                    "current": true
                }
            ]
        }, {
            "name": "Prishta Grover",
            "city": "Gurugram",
            "state": "Haryana",
            "experience": "Experience (>5 years)",
            "domain": "Other",
            "workExperience": 5,
            "course": "B.A. (Hons.)",
            "college": "Moti Lal Nehru College, Delhi University",
            "linkedInUrl": "https://www.linkedin.com/in/prishtagrover/",
            "calendarLink": "https://calendly.com/groverprishta/prishta-mu",
            "img" : "../img/mentorPic-9.webp",
            "mobileImg" : "../img/mentorMobile-9.png",
            "ComapniesAndroles": [
                {
                    "role": "Strategy Lead- Founder’s Office",
                    "company": "Athena Education",
                    "current": true
                },
                {
                    "role": "Analyst",
                    "company": "Natwest Group",
                    "current": true
                }
            ]
        }, {
            "name": "Pavan Krishna",
            "city": "Chennai",
            "state": "Tamil Nadu",
            "experience": "Experience (1-5 years)",
            "domain": "Charted Accountant (CA)",
            "workExperience": 4,
            "course": "B.Com",
            "college": "Institute of Distance Education, University Of Madras, Tamil Nadu",
            "linkedInUrl": "https://www.linkedin.com/in/pavan-krishna-/",
            "calendarLink": "https://calendly.com/pavan-krishna/30min",
            "img" : "../img/mentorPic-10.webp",
            "mobileImg" : "../img/mentorMobile-10.png",
            "ComapniesAndroles": [
                {
                    "role": "Assistant Manager",
                    "company": "Deloitte Touche Tohmastu",
                    "current": true
                },
                {
                    "role": "Audit Assistant ",
                    "company": "Brahmayya & Co",
                    "current": true
                }
            ]
        }, {
            "name": "Nidhi S",
            "city": "Bengaluru",
            "state": "Karnataka",
            "experience": "Experience (1-5 years)",
            "domain": "Tech",
            "workExperience": 2.8,
            "course": "BE",
            "college": "M S Ramaiah Institute of technology",
            "linkedInUrl": "https://www.linkedin.com/in/nidhi-ss/",
            "calendarLink": "https://calendly.com/mu-nidhi-s/30min",
            "img" : "../img/mentorPic-11.webp",
            "mobileImg" : "../img/mentorMobile-11.png",
            "ComapniesAndroles": [
                {
                    "role": "Software Engineer",
                    "company": "Target Corporation",
                    "current": true
                }
            ]
        }, {
            "name": "Nandan Tawari",
            "city": "Jalgaon",
            "state": "Maharashtra",
            "experience": "Experience (1-5 years)",
            "domain": "Tech",
            "workExperience": 2.8,
            "course": "B.Tech",
            "college": "Vishwakarma Institute of Technology",
            "linkedInUrl": "www.linkedin.com/in/nandan-tawari",
            "calendarLink": "https://calendly.com/nandan-tawari/30min",
            "img" : "../img/mentorPic-12.webp",
            "mobileImg" : "../img/mentorMobile-12.png",
            "ComapniesAndroles": [
                {
                    "role": "Senior Technology Analyst",
                    "company": "Deutsche Bank",
                    "current": true
                }
            ]
        }, {
            "name": "Krishna Goyal",
            "city": "Gwalior",
            "state": "Madhya Pradesh",
            "experience": "Experience (1-5 years)",
            "domain": "Marketing",
            "workExperience": 2,
            "course": "BBA (Hons)",
            "college": "Christ University, Karnataka",
            "linkedInUrl": "https://www.linkedin.com/in/krishnaa-goyal/",
            "calendarLink": "https://calendly.com/krishna-goyal/30min",
            "img" : "../img/mentorPic-13.webp",
            "mobileImg" : "../img/mentorMobile-13.png",
            "ComapniesAndroles": [
                {
                    "role": "Associate Product Marketing Manager",
                    "company": "VWO",
                    "current": true
                },
                {
                    "role": "Product Marketing Analyst",
                    "company": "Hevo Data",
                    "current": true
                }
            ]
        }, {
            "name": "Harsh Patel",
            "city": "Bardhaman",
            "state": "West Bengal",
            "experience": "Fresher (0-1 year)",
            "domain": "Other",
            "workExperience": 0,
            "course": "BBA",
            "college": "Savitribai Phule Pune University, Maharashtra",
            "linkedInUrl": "https://www.linkedin.com/in/harsh-patel01",
            "calendarLink": "https://calendly.com/harsh-patel-08/meeting-with-harsh",
            "img" : "../img/mentorPic-14.webp",
            "mobileImg" : "../img/mentorMobile-14.png",
            "ComapniesAndroles": [
                {
                    "role": "Founder",
                    "company": "BeingHiveBeingHive",
                    "current": true
                }
            ]
        }, {
            "name": "Harsh Mudgil",
            "city": " Delhi",
            "state": "Delhi",
            "experience": "Fresher (0-1 year)",
            "domain": "Other",
            "workExperience": 0.8,
            "course": "B.Tech",
            "college": "Jaypee Institute Of Information Technology, Uttar Pradesh",
            "linkedInUrl": "https://www.linkedin.com/in/harsh-mudgil",
            "calendarLink": "https://calendly.com/harsh_mudgil/discussion-on-mu",
            "img" : "../img/mentorPic-15.webp",
            "mobileImg" : "../img/mentorMobile-15.png",
            "ComapniesAndroles": [
                {
                    "role": "Data Science Program Manager",
                    "company": "AlmaBetter",
                    "current": true
                },
                {
                    "role": "Analytics Consultant",
                    "company": "QuantZig",
                    "current": true
                }
            ]
        }, {
            "name": "Dhanush Varun",
            "city": "Pune",
            "state": "Maharashtra",
            "experience": "Experience (1-5 years)",
            "domain": "Consulting",
            "workExperience": 2,
            "course": "B.Tech",
            "college": "National Institute of Technology, Calicut, Kerala",
            "linkedInUrl": "https://www.linkedin.com/in/dhanush-varun",
            "calendarLink": "https://calendly.com/dhanush-siddanathi/explore-mu-with-dhanush",
            "img" : "../img/mentorPic-16.webp",
            "mobileImg" : "../img/mentorMobile-16.png",
            "ComapniesAndroles": [
                {
                    "role": "Decision Analytics Associate",
                    "company": "ZS Associates",
                    "current": true
                }

            ]
        }, {
            "name": "Deepak S",
            "city": "Chennai",
            "state": "Tamil Nadu",
            "experience": "Experience (1-5 years)",
            "domain": "Charted Accountant (CA)",
            "workExperience": 0,
            "course": "B.Com",
            "college": "Indira Gandhi National Open University, Delhi",
            "linkedInUrl": "https://www.linkedin.com/in/cadeepaks",
            "calendarLink": "https://calendly.com/deepak-s58/30min",
            "img" : "../img/mentorPic-17.webp",
            "mobileImg" : "../img/mentorMobile-17.png",
            "ComapniesAndroles": [
                {
                    "role": "Assistant Manager",
                    "company": "Deloitte Touche Tohmatsu India LLP",
                    "current": true
                },
                {
                    "role": "Article assistant",
                    "company": "BDO India LLP",
                    "current": true
                }
            ]
        }, {
            "name": "Aditi Lahane",
            "city": "Amravati",
            "state": "Maharashtra",
            "experience": "Experience (1-5 years)",
            "domain": "Consulting",
            "workExperience": 2.8,
            "course": "B.Tech",
            "college": "Vishwakarma Institute of Technology",
            "linkedInUrl": "https://www.linkedin.com/in/aditi-lahane/",
            "calendarLink": "https://calendly.com/aditi-lahane/office-hours",
            "img" : "../img/mentorPic-18.webp",
            "mobileImg" : "../img/mentorMobile-18.png",
            "ComapniesAndroles": [
                {
                    "role": "Senior Business Analyst",
                    "company": "Sthaptya Consultants Pvt. Ltd",
                    "current": true
                }
            ]
        }, {
            "name": "Aadi Jain",
            "city": "Vijaywada",
            "state": "Andhra Pradesh",
            "experience": "Experience (1-5 years)",
            "domain": "Tech",
            "workExperience": 2.9,
            "course": "B.Tech",
            "college": "Jawaharlal Nehru Technological University, Hyderabad, Telangana",
            "linkedInUrl": "https://www.linkedin.com/in/aadi-jainn/",
            "calendarLink": "https://calendly.com/aadi-jain/30min",
            "img" : "../img/mentorPic-19.webp",
            "mobileImg" : "../img/mentorMobile-19.png",
            "ComapniesAndroles": [
                {
                    "role": "Software Engineer",
                    "company": "Dell International",
                    "current": true
                },
                {
                    "role": "Mentor",
                    "company": "Corporate Gurukul - Big Data Analytics",
                    "current": true
                }
            ]
        }

    ]

    initilise();
   
})

function initilise(){
    filterApplied = false
    var filterObj = {
        "domain": [],
        "state": [],
        "experience": []
    }

    for (key in filterObj) {
        filterObj[key] = [...new Set(mentorObj.map((element) => element[key]))];
    }

    createMentorCard(mentorObj)

    createFilter(filterObj)

}


function createMentorCard(mentorObj){
    let mentorHtml = ''
    if(filterApplied){

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
                            <a href="${mentorObj[i].linkedInUrl}"><img src="../img/masterLinkedin.png" class="mentorLinked"></a>
                        </div>
                        <div class="md:hidden flex flex-col">
                            <div class="flex">
                                <p class="px-5 py-2 currently bg-lightBlue text-white text-xs font-normal">
                                    Currently</p>
                            </div>
                            <div class="flex p-3 notCurrently items-center bg-white"
                                style="border: 1px solid #60BBE0;">
                                <p class="text-xs text-main font-normal text-center"><span
                                        class="font-bold">PGP-TBM </span> Student at Masters' Union | Cohort
                                    of
                                    2024</p>
                            </div>
                        </div>
                        <div class="flex flex-col gap-y-3 md:pt-0 pt-5">
                            <div class="flex gap-x-3 items-center">
                                <img src="../img/teacher.svg" class="mentorLinked">
                                <p class="mentorName font-normal md:text-base text-sm text-main"><span class="text-base font-bold text-lightBlue">${mentorObj[i].course}, </span> ${mentorObj[i].college}</p>
                            </div>
                            <div class="flex gap-x-3 items-center">
                            <img src="../img/briefcase.svg" class="mentorLinked">
                            <p class="mentorName font-normal md:text-base text-sm text-main">`
                        for (let j = 0; j < mentorObj[i].ComapniesAndroles.length; j++) {
                            if (mentorObj[i].ComapniesAndroles.length > 1) {
                                if (mentorObj[i].ComapniesAndroles.length -1 != j){
                                    mentorHtml += `<span>${mentorObj[i].ComapniesAndroles[j].role} @ ${mentorObj[i].ComapniesAndroles[j].company} | </span>`
                                }
                                else{
                                    mentorHtml += `<span>${mentorObj[i].ComapniesAndroles[j].role} @ ${mentorObj[i].ComapniesAndroles[j].company}</span>`
                                }
                            } else {
                                mentorHtml += `<span>${mentorObj[i].ComapniesAndroles[j].role} @ ${mentorObj[i].ComapniesAndroles[j].company} </span>`
                            }
                        
                        } 
            mentorHtml += `</p></div>
                            <div class="flex gap-x-3 items-center">
                                <img src="../img/brifecase-timer.svg" class="mentorLinked">
                                <p class="mentorName font-normal md:text-base text-sm text-main"><span class="text-base font-bold text-lightBlue">${mentorObj[i].workExperience} </span>  Years of Experience</p>
                            </div>
                            <div class="flex gap-x-3 items-center">
                                <img src="../img/location.svg" class="mentorLinked">
                                <p class="mentorName font-normal md:text-base text-sm text-main">${mentorObj[i].city}</p>
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
                                        class="font-bold">PGP-TBM </span> Student at Masters' Union | Cohort
                                    of
                                    2024</p>
                            </div>
                        </div>
    
                        <div class="md:mt-5 m-0">
                            <a href="javascript:;" onclick="openCalendar(${[i]})"
                                class="w-full flex items-center justify-center text-sm text-white btn-Bg font-semibold py-2 text-center rounded-lg">
                                <span>Book Now</span></a>
                        </div>
                    </div>
    
                </div>
            </div>
        
            </div>`
            $("#mentorList").html(mentorHtml)
        }
    }else{
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
                            <a href="${mentorObj[i].linkedInUrl}"><img src="../img/masterLinkedin.png" class="mentorLinked"></a>
                        </div>
                        <div class="md:hidden flex flex-col">
                            <div class="flex">
                                <p class="px-5 py-2 currently bg-lightBlue text-white text-xs font-normal">
                                    Currently</p>
                            </div>
                            <div class="flex p-3 notCurrently items-center bg-white"
                                style="border: 1px solid #60BBE0;">
                                <p class="text-xs text-main font-normal text-center"><span
                                        class="font-bold">PGP-TBM </span> Student at Masters' Union | Cohort
                                    of
                                    2024</p>
                            </div>
                        </div>
                        <div class="flex flex-col gap-y-3 md:pt-0 pt-5">
                            <div class="flex gap-x-3 items-center">
                                <img src="../img/teacher.svg" class="mentorLinked">
                                <p class="mentorName font-normal md:text-base text-sm text-main"><span class="text-base font-bold text-lightBlue">${mentorObj[i].course}, </span> ${mentorObj[i].college}</p>
                            </div>
                            <div class="flex gap-x-3 items-center">
                            <img src="../img/briefcase.svg" class="mentorLinked">
                            <p class="mentorName font-normal md:text-base text-sm text-main">`
            for (let j = 0; j < mentorObj[i].ComapniesAndroles.length; j++) {
                if (mentorObj[i].ComapniesAndroles.length > 1) {
                    if (mentorObj[i].ComapniesAndroles.length -1 != j){
                        mentorHtml += `<span>${mentorObj[i].ComapniesAndroles[j].role} @ ${mentorObj[i].ComapniesAndroles[j].company} | </span>`
                    }
                    else{
                        mentorHtml += `<span>${mentorObj[i].ComapniesAndroles[j].role} @ ${mentorObj[i].ComapniesAndroles[j].company}.</span>`
                    }
                } else {
                    mentorHtml += `<span>${mentorObj[i].ComapniesAndroles[j].role} @ ${mentorObj[i].ComapniesAndroles[j].company} .</span>`
                }
            }
            mentorHtml += `</p></div>
                            <div class="flex gap-x-3 items-center">
                                <img src="../img/brifecase-timer.svg" class="mentorLinked">
                                <p class="mentorName font-normal md:text-base text-sm text-main"><span class="text-base font-bold text-lightBlue">${mentorObj[i].workExperience} </span>  Years of Experience</p>
                            </div>
                            <div class="flex gap-x-3 items-center">
                                <img src="../img/location.svg" class="mentorLinked">
                                <p class="mentorName font-normal md:text-base text-sm text-main">${mentorObj[i].city}</p>
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
                                        class="font-bold">PGP-TBM </span> Student at Masters' Union | Cohort
                                    of
                                    2024</p>
                            </div>
                        </div>
    
                        <div class="md:mt-5 m-0">
                            <a href="javascript:;" onclick="openCalendar(${[i]})"
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

function createFilter(filterObj){
    createExpFilter(filterObj['experience'])
    createDomainFilter(filterObj['domain'])
    createStateFilter(filterObj['state'])
}

function createExpFilter(filter){
    let filterHtml =''
    filterHtml+=' <ul class="filter">'
    filter.forEach(element => {
        filterHtml+=' <li class="flex gap-x-3 py-2">';
        filterHtml+='<input type="radio" class="" name="experience" value="'+element+'" onclick="applyFilter(this,`experience`)">';
        filterHtml+='<span class="text-sm text-main">'+element+'</span>';
        filterHtml+='</li>';                       
    });
    filterHtml+='</ul>';
    $("#experience").html(filterHtml)

}

function createDomainFilter(filter){
    filterHtml =''
    filterHtml+=' <ul class="filter">'
    filter.forEach(element => {
        filterHtml+=' <li class="flex gap-x-3 py-2">';
        filterHtml+='<input type="radio" class=""   name="domain" value="'+element+'" onclick="applyFilter(this,`domain`)">';
        filterHtml+='<span class="text-sm text-main">'+element+'</span>';
        filterHtml+='</li>';                       
    });
    filterHtml+='</ul>';
    $("#domain").html(filterHtml)
}

function createStateFilter(filter){
    filterHtml =''
    filterHtml+=' <ul class="filter">'
    filter.forEach(element => {
        filterHtml+=' <li class="flex gap-x-3 py-2">';
        filterHtml+='<input type="radio" class=""  name="state" value="'+element+'" onclick="applyFilter(this,`state`)">';
        filterHtml+='<span class="text-sm text-main">'+element+'</span>';
        filterHtml+='</li>';                       
    });
    filterHtml+='</ul>';
    $("#state").html(filterHtml)
}

var filterApplied = false
let clonedMentorObj
let experiencedFiltered;
let stateFiltered;
let domainFiltered;
function applyFilter(elem,filter){
  
    if(!filterApplied){
        clonedMentorObj =[...mentorObj]
        filterApplied = true
    }

    let currentFilter = elem.value;    

    if(filter == 'experience'){
         clonedMentorObj =[...mentorObj]
        experiencedFiltered = clonedMentorObj.filter(d=> d['experience'] == currentFilter)
        domain =[ ...new Set(experiencedFiltered.map((element) => element['domain']))];
        state  =[ ...new Set(experiencedFiltered.map((element) => element['state']))];
        createDomainFilter(domain)
        createStateFilter(state)
        createMentorCard(experiencedFiltered)

    }

    if(filter == 'domain'){
        if(experiencedFiltered == undefined){
            experiencedFiltered = clonedMentorObj.filter(d=> d['domain'] == currentFilter)
        }
        domainFiltered = experiencedFiltered.filter(d=> d['domain'] == currentFilter)
        state  =[ ...new Set(domainFiltered.map((element) => element['state']))];
        createStateFilter(state)
        createMentorCard(domainFiltered)

    }
    if(filter == 'state'){
        if(domainFiltered == undefined){
            domainFiltered = clonedMentorObj.filter(d=> d['domain'] == currentFilter)
        }
        stateFiltered = domainFiltered.filter(d=> d['state'] == currentFilter)
        createMentorCard(stateFiltered)
    }
    //reateMentorCard(clonedMentorObj)
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

function openCalendar(index){
    let calendarLink = mentorObj[index].calendarLink
    if(calendarLink == ""){
        alert("Something went wrong ! please try after sometime")
    }else{
        Calendly.initPopupWidget({url:calendarLink})
    }

}
```javascript
/* =========================================
   MEDPATH
   WEBSITE JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

function toggleMobileMenu() {

    const menu =
        document.getElementById("mobileMenu");

    menu.classList.toggle("open");

}


function closeMobileMenu() {

    const menu =
        document.getElementById("mobileMenu");

    menu.classList.remove("open");

}


/* =========================================
   JOURNEY MODAL
========================================= */

function openJourney() {

    const modal =
        document.getElementById("journeyModal");

    const question =
        document.getElementById("journeyQuestion");

    const result =
        document.getElementById("journeyResult");


    question.classList.remove("hidden");

    result.classList.add("hidden");

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeJourney() {

    const modal =
        document.getElementById("journeyModal");

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


/* =========================================
   JOURNEY PERSONALISATION
========================================= */

const journeyInformation = {

    exploring: {

        title:
            "You're exploring medicine 🌱",

        text:
            "We'll help you understand medicine as a career, explore healthcare experiences and discover what the application journey looks like."

    },


    student: {

        title:
            "You're currently studying 📚",

        text:
            "We'll help you explore medical schools, understand admissions tests and build useful preparation habits."

    },


    university: {

        title:
            "You're at university 🎓",

        text:
            "We'll help you explore graduate-entry and standard-entry medicine and understand the different routes available."

    },


    graduate: {

        title:
            "You're considering graduate entry 🔄",

        text:
            "We'll help you explore graduate-entry medicine, admissions tests and universities that accept graduate applicants."

    },


    applying: {

        title:
            "You're applying this year 📝",

        text:
            "We'll help you organise your university research, admissions-test preparation, application and interview preparation."

    },


    international: {

        title:
            "You're an international applicant 🌍",

        text:
            "We'll help you research UK medical schools, understand application routes and find information relevant to international applicants."

    }

};


function selectJourney(type) {

    openJourney();

    completeJourney(type);

}


function completeJourney(type) {

    const information =
        journeyInformation[type];

    if (!information) {

        return;

    }


    const question =
        document.getElementById("journeyQuestion");

    const result =
        document.getElementById("journeyResult");

    const title =
        document.getElementById("resultTitle");

    const text =
        document.getElementById("resultText");


    question.classList.add("hidden");

    result.classList.remove("hidden");


    title.textContent =
        information.title;

    text.textContent =
        information.text;


    /*
        Save the user's selected journey
        locally on their device.

        This does NOT send personal information
        to a server.
    */

    localStorage.setItem(
        "medpathJourney",
        type
    );

}


/* =========================================
   FEATURE CARDS
========================================= */

const featureMessages = {

    resources:
        "The Resource Hub will organise free and useful resources into categories such as medicine enrichment, study, work experience and applications.",

    ucat:
        "The UCAT section will eventually include original practice questions, strategies, timing tools and progress tracking.",

    universities:
        "The Medical Schools section will let users research and organise universities by entry route, admissions process and other useful information.",

    experience:
        "The Experience section will provide guidance on volunteering, healthcare exposure and reflecting on what you learn.",

    interviews:
        "The Interview section will contain MMI practice, ethics, communication and healthcare scenarios.",

    roadmap:
        "The Personal Roadmap will use the user's selected journey stage to recommend what they could focus on next."

};


function showFeature(feature) {

    const message =
        featureMessages[feature];

    if (!message) {

        return;

    }


    alert(message);

}


/* =========================================
   REMEMBER USER'S JOURNEY
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const savedJourney =
            localStorage.getItem(
                "medpathJourney"
            );


        if (savedJourney) {

            console.log(
                "MedPath journey:",
                savedJourney
            );

        }

    }
);


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById("journeyModal");


        if (
            event.target === modal
        ) {

            closeJourney();

        }

    }
);


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeJourney();

        }

    }
);
```

// =========================================
// BOOT SCREEN
// =========================================

const bootScreen =
    document.getElementById("bootScreen");


window.addEventListener("load", () => {

    setTimeout(() => {

        bootScreen.classList.add("hide");

    }, 1200);

});


// =========================================
// WINDOWS
// =========================================

const windowButtons =
    document.querySelectorAll("[data-window]");


const appWindows =
    document.querySelectorAll(".app-window");


function openWindow(windowId) {

    appWindows.forEach((appWindow) => {

        appWindow.classList.remove("active");

    });


    const selectedWindow =
        document.getElementById(windowId);


    if (selectedWindow) {

        selectedWindow.classList.add("active");

    }


    startMenu.classList.remove("active");

}


windowButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const targetWindow =
            button.getAttribute("data-window");

        openWindow(targetWindow);

    });

});


// =========================================
// CLOSE WINDOWS
// =========================================

const closeButtons =
    document.querySelectorAll(".window-close");


closeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const currentWindow =
            button.closest(".app-window");

        currentWindow.classList.remove("active");

    });

});


// =========================================
// PROFILE IMAGE
// =========================================

const profileImage =
    document.getElementById("profileImage");


const profileFallback =
    document.getElementById("profileFallback");


function showProfile() {

    profileImage.style.display = "block";
    profileFallback.style.display = "none";

}


function showFallback() {

    profileImage.style.display = "none";
    profileFallback.style.display = "grid";

}


profileImage.addEventListener(
    "load",
    showProfile
);


profileImage.addEventListener(
    "error",
    showFallback
);


if (profileImage.complete) {

    if (profileImage.naturalWidth > 0) {

        showProfile();

    } else {

        showFallback();

    }

}


// =========================================
// CLOCK
// =========================================

const statusClock =
    document.getElementById("statusClock");


const taskClock =
    document.getElementById("taskClock");


const statusDate =
    document.getElementById("statusDate");


function updateClock() {

    const now =
        new Date();


    const time =
        now.toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    const date =
        now.toLocaleDateString(
            [],
            {
                month: "short",
                day: "numeric",
                year: "numeric"
            }
        );


    statusClock.textContent =
        time;


    taskClock.textContent =
        time;


    statusDate.textContent =
        date;

}


updateClock();


setInterval(
    updateClock,
    1000
);


// =========================================
// THEME
// =========================================

const themeButton =
    document.getElementById("themeButton");


const savedTheme =
    localStorage.getItem("yuri-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

}


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    const theme =
        document.body.classList.contains("dark")
            ? "dark"
            : "light";


    localStorage.setItem(
        "yuri-theme",
        theme
    );

});


// =========================================
// START MENU
// =========================================

const startButton =
    document.getElementById("startButton");


const startMenu =
    document.getElementById("startMenu");


startButton.addEventListener("click", (event) => {

    event.stopPropagation();

    startMenu.classList.toggle("active");

});


startMenu.addEventListener("click", (event) => {

    event.stopPropagation();

});


document.addEventListener("click", () => {

    startMenu.classList.remove("active");

});


// =========================================
// ESC TO CLOSE
// =========================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        appWindows.forEach((appWindow) => {

            appWindow.classList.remove("active");

        });


        startMenu.classList.remove("active");

    }

});
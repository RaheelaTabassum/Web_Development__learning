const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[ata-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const SearchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");



let currentTab = userTab;
const API_Key = ""

currentTab.classList.add("current-tab");



function switchTab(clickedTab){ 
    if (clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
        
        if (! SearchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            SearchForm.classList.add("active"); 

        }
        else {
            SearchForm.classList.remove("active");
            userInfoContainer.remove("active")
        }
   }
}

userTab.addEventListener("click", () => {
    // pass clicked tab as input parameter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    // pass clicked tab as input parameter
    switchTab(searchTab);
});
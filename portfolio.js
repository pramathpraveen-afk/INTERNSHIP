console.log("JavaScript is Connected")
const year= new Date().getFullYear();
document.querySelector('.site-footer p').innerHTML=`&copy;${year} Prakayush Kumar. All reserved. Built with HTML & CSS`;

function getGreeting(){
    const hour= new Date().getHours();
    if(hour<12){
        return "Good Morning";
    }
    if(hour<17) {
        return "Good Afteroon";
    }
    return "Good Evening";
}
const heroTitle= document.querySelector('.hero-section h1');
if (heroTitle){
    heroTitle.textContent = `${getGreeting()}, I'm Pramath`
}
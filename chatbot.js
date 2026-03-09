function sendMessage(){

let input = document.getElementById("userInput").value.toLowerCase()
let output = document.getElementById("chatOutput")

let response=""

if(input.includes("skills")){
response="My skills include Active Directory, Microsoft 365, Python, and networking."
}

else if(input.includes("projects")){
response="Check the projects section to see my GitHub work."
}

else if(input.includes("experience")){
response="I have hands-on IT lab experience and troubleshooting practice."
}

else{
response="Try asking about my skills, projects, or experience."
}

output.innerHTML += "<p><b>You:</b> "+input+"</p>"
output.innerHTML += "<p><b>Bot:</b> "+response+"</p>"

document.getElementById("userInput").value=""

}
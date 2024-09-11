let data = [
    { element: document.getElementById("phone"), hidden: "0552463564", original: "123-456-7890" },
    { element: document.getElementById("email"), hidden: "jawadalhamada@gmail.com", original: "hello@reallygreatsite.com" },
    { element: document.getElementById("adress"), hidden: "2421 alhasa, 2422 al faisal street", original: "123 Anywhere St., Any City" },
    { element: document.getElementById("website"), hidden: "www.jawad-site.com", original: "www.reallygreatsite.com" },
    { element: document.getElementById("bachelor-date"), hidden: "2014- 2019", original: "2025 - 2029" },
    { element: document.getElementById("master-date"), hidden: "2027 - future", original: "2029 - 2030" },
    { element: document.getElementById("masters-item1"), hidden: "Robotics and PCB design", original: "Master of Buisness managment" },
    { element: document.getElementById("bachelor-item1"), hidden: "Bachelor in Computer Science", original: "Bachelor of Buisness" },
    { element: document.getElementById("bachelor-item2"), hidden: "GPA: 2.8/4", original: "GPA: 3.8 / 4.0" },
    { element: document.getElementById("skills-item-1"), hidden: "C", original: "Public Relations" },
    { element: document.getElementById("skills-item-2"), hidden: "C#", original: "Teamwork" },
    { element: document.getElementById("skills-item-3"), hidden: "React", original: "Time Managment" },
    { element: document.getElementById("skills-item-4"), hidden: "Bootstrap", original: "Leadership" },
    { element: document.getElementById("skills-item-5"), hidden: "Python", original: "Effective Communication" },
    { element: document.getElementById("skills-item-6"), hidden: "github", original: "Critical Thinking" },
    { element: document.getElementById("name-title"), hidden: "JAWAD ALHAMADAH", original: "RICHARD SANCHEZ" },
    { element: document.getElementById("specialty-title"), hidden: "FULL_STACK DEVELOPER", original: "MARKETING MANAGER" },
    { element: document.getElementById("intro"), hidden: " My name is jawad alhamdah, graduated from kansas state University. I have a passion in robotics, Art, web development and design.", original: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos veniam excepturi incidunt in nam sed quidem placeat reprehenderitvoluptates quam nemo, quo aperiam eaque, est, dicta assumenda optioex non." },
    { element: document.getElementById("workplace-1"), hidden: "Self-employed", original: "Brocelle Studio" },
    { element: document.getElementById("workplace-1-date"), hidden: "2023-present", original: "2030-PRESENT" },
    { element: document.getElementById("workplace-1-title"), hidden: "Dog breed Classifier", original: "Marketing Manger & Specialist" },
    { element: document.getElementById("workplace-1-point-1"), hidden: "Developed a website to classify dogs using machine learning in python", original: "Develop and execute comprehensive marketing strategies and campaigns that align with the company's goals and objectives." },
    { element: document.getElementById("workplace-1-point-2"), hidden: "Created a react UI to preprocess images for analysis", original: "Lead, mentor, and manage a high-performing marketing team, fostering a collaborative and results-driven work environment" },
    { element: document.getElementById("workplace-1-point-3"), hidden: "Created deployment process using docker, kubernetes and google cloud", original: "Monitor brand consistency across marketing channels and materials." },
    { element: document.getElementById("workplace-2"), hidden: "Self-employed", original: "Fauget Studio" },
    { element: document.getElementById("workplace-2-date"), hidden: " 2020 - 2021", original: "2025 - 2029" },
    { element: document.getElementById("workplace-2-title"), hidden: "Javascript OOP painting application", original: "Marketing Manger & Specialist" },
    { element: document.getElementById("workplace-2-point1"), hidden: "Created painting application using Canvas element, web sockets and SocketIO.", original: "Create and manage the marketing budget, ensuring efficient allocation of resources and optimizing ROI." },
    { element: document.getElementById("workplace-2-point2"), hidden: "Created canvas processing to create bucket fill tools", original: "Oversee market research to identify emerging trends, customer needs, and competitor strategies. " },
    { element: document.getElementById("workplace-2-point3"), hidden: "Improved user experience by adding a live chat feature for users.", original: "Monitor brand consistency across marketing channels and materials" },
    { element: document.getElementById("workplace-3"), hidden: "self-employment", original: "Studio Shodwe " },
    { element: document.getElementById("workplace-3-date"), hidden: "2023 - 2024", original: "2024 - 2025" },
    { element: document.getElementById("workplace-3-title"), hidden: "Python github script", original: "Marketing Manger & Specialist" },
    { element: document.getElementById("workplace-3-point1"), hidden: "created a file spliter script for github files", original: "Develop and maintain strong relationships with partners, agencies, and vendors to support marketing initiatives." },
    { element: document.getElementById("workplace-3-point2"), hidden: "created a file merger to merge split files back into a big file", original: "Monitor and maintain brand consistency across all marketing channels and materials." },
    { element: document.getElementById("ref-1-name"), hidden:  "John Jhonos", original: "Estelle Darcy" },
    { element: document.getElementById("ref-1-title"), hidden: "CEO OF company", original: "Wardiere inc. /CTO" },
    { element: document.getElementById("ref-1-phone"), hidden: "055663521", original: "123-456-7890" },
    { element: document.getElementById("ref-1-email"), hidden: "JCEO@outlook.com", original: "jello@reallygreatsite.com" },
    { element: document.getElementById("ref-2-name"), hidden:  "Sharp Shaper", original: "Harper Richard" },
    { element: document.getElementById("ref-2-title"), hidden: "CEO OF company2", original: "Wardiere inc. /CTO" },
    { element: document.getElementById("ref-2-phone"), hidden: "055622465", original: "123-456-7890" },
    { element: document.getElementById("ref-2-email"), hidden: "myem@provider.com", original: "jello@reallygreatsite.com" },
    { element: document.getElementById("uni-title-1"), hidden: "Kansas State University", original: "WARDIRE UNIVERSITY" },
    { element: document.getElementById("uni-title-2"), hidden: "Kansas State University", original: "WARDIRE UNIVERSITY" },
    { element: document.getElementById("language-1"), hidden: "Arabic", original: "English(Fluent)" },
    { element: document.getElementById("language-2"), hidden: "English", original: "French(Fluent)" },
    { element: document.getElementById("language-3"), hidden: "None", original: "German" },
    { element: document.getElementById("language-4"), hidden: "None", original: "Spanish(Intermediate)" },
   
   





]

data.map(element =>{
    element.element.classList.add("hide-container")
    let hidden = document.createElement("span")
    let original = document.createElement("span")
    hidden.classList.add("hidden")
    original.classList.add("original")
    hidden.innerText = element.hidden
    original.innerText = element.original
    element.element.appendChild(original)
    element.element.appendChild(hidden)
})


// phone.classList.add("hide-container")
// email.classList.add("hide-container")
// adress.classList.add("hide-container")
// website.classList.add("hide-container")




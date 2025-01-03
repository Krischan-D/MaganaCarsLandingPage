const FAQs = [
    {
      question: "What is the process?",
      answer:
        "The car buying process starts with selecting your desired vehicle. Once chosen, you can explore financing options. Finally, we handle the paperwork and delivery.",
      icon: "",
    },
    {
      question: "How is delivery handled?",
      answer:
        "We offer flexible delivery options tailored to your needs. Our team ensures your vehicle arrives safely and on time. You can track your delivery status online.",
      icon: "",
    },
    {
      question: "What financing options exist?",
      answer:
        "We provide various financing plans to suit your budget. Our partners offer competitive rates and terms. You can apply online for pre-approval.",
      icon: "",
    },
    {
      question: "Can I return a car?",
      answer:
        "Yes, we have a return policy that allows you to return your vehicle within a specified period. Please review the terms for details. Our goal is your satisfaction.",
      icon: "",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach our support team via email or phone. We are available to assist you during business hours. Your questions are important to us.",
      icon: "",
    },
];



export function renderFAQs(){
    let FAQsHTML = ''
    
    FAQs.forEach((faq)=>{

        FAQsHTML += 
        `
            <div class="question-container">
            <div class="question">
             <div class="icon-text">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
             ${faq.question} 
             </div>
              <button id="question-button"><i class='bx bx-chevron-down' style='color:#000' ></i></button></div>
            <div class="answer" id=""> ${faq.answer} </div>
          </div>
        `
        document.getElementById('faqs-container').innerHTML = FAQsHTML
    })
}


renderFAQs()
console.log("Hello faqs here")
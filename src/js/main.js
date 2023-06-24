var animItem = bodymovin.loadAnimation({
    container: document.getElementById("img-container"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://metaverse-images.s3.ap-northeast-1.amazonaws.com/mail.json'
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        document.getElementById("contact-submit-btn").style.visibility = "hidden";
        document.getElementById("img-container").style.display = "flex";
        data = {
            "client_email": e.target.querySelector("#email").value,
            "name": e.target.querySelector("#name").value,
            "subject": e.target.querySelector("#subject").value,
            "message": e.target.querySelector("#message").value,
        }

        let resp = await fetch('https://khivlrzp4bxdgiaowwmcqfdzty0dupsf.lambda-url.ap-northeast-1.on.aws/', {
            method: 'POST',
            headers: { 
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
        })

        if (resp.status !== 200) {
            alert("Message not sent. Error ocurred.");
        } else {
            alert("Mail received!")
        }

        document.getElementById("contact-form").reset();
        document.getElementById("contact-submit-btn").style.visibility = "visible";
        document.getElementById("img-container").style.display = "none";
    })
}

var animItem = bodymovin.loadAnimation({
    container: document.getElementById("about-image-container"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://metaverse-images.s3.ap-northeast-1.amazonaws.com/teamwork.json'
});

document.querySelectorAll(".faq").forEach(faq_element => {
    faq_element.addEventListener("click", e => {
        let faq = e.target
        if (!e.target.classList.contains("faq")) {
            faq = e.target.parentNode
        }
        faq.querySelector("p").classList.toggle("show")
    })
})

pdfViewerClose = document.querySelector(".pdf-viewer-close");

pdfViewerClose.addEventListener('click', () => {
    document.querySelector(".pdf-container").style.display = "none";
})

document.querySelector(".open-pdf").addEventListener('click', () => {
    document.querySelector(".pdf-container").style.display = "flex";
})
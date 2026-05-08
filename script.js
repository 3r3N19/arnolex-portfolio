function scrollCert(direction){

    const container = document.getElementById("certContainer");

    const scrollAmount =
        document.querySelector(".cert-image").clientWidth + 15;

    container.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });

}

function openCert(src){

    document.getElementById("certModal").style.display = "flex";

    document.getElementById("modalImg").src = src;

}

function closeCert(){

    document.getElementById("certModal").style.display = "none";

}

document.getElementById("year").innerHTML = new Date().getFullYear();


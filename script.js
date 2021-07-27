function myFunction() {
    var x = document.querySelector("#myLinks");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
window.onload = function(){
    setInterval(() => {
        let date = new Date();
        $('.date').text(`Data: ${date}`)
    }, 500)

    $('.submit-button').on('click', function (){
        let data = {};
        data['email'] = $('#email').val()
        data['name'] = $('#name').val()
        data['rating'] = $('input[name="rating"]:checked').attr('class')

        let card = $("<div>", {"class": "card"});
        let cardContainer = $("<div>", {"class": "card-container"});
        card.append(cardContainer)

        let emailTxt = $("<strong>").text('E-mail');
        let email = $("<span>", {"class" : 'email'}).text(data['email'])

        cardContainer.append(emailTxt)
        cardContainer.append(email)

        let nameTxt = $("<strong>").text('Nome');
        let name = $("<span>", {"class" : 'name'}).text(data['name'])

        cardContainer.append(nameTxt)
        cardContainer.append(name)

        let gradeTxt = $("<strong>").text('Nota');
        let rating = $("<span>", {"class" : 'grade'}).text(data['rating'])

        cardContainer.append(gradeTxt)
        cardContainer.append(rating)

        $('.ratings-container').append(card)
    })
}
function clickButtonDate(){

}

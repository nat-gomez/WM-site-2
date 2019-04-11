// find elements
var banner = $("#banner-message")
var button = $("button")

// handle click and add class
button.on("click", function(){
  banner.addClass("alt")
})

$('.social-ecology').on('click', function() {
  $('#guiding-principles-info').text('Social ecology is the symbiotic and interdependent relationship between people and the environment. In life, but especially in death, we have the opportunity to create closed-loop systems in which our dead bodies can provide ecosystem services to the living. The problem is that our modern funeral industry does the opposite. It consumes finite resources and produces toxic waste. ');
});

$('.thinking-outside-the-box').on('click', function() {
  $('#guiding-principles-info').text('Our modern funerary practices are a result of the funeral industrial complex. The strategies we create must work to deconstruct the funeral industrial complex, not work within its parameters. Reforms that work within those destructive parameters are harmful and the opposite of environmental remediation and intervention. ');
});

$('.the-future-is-now').on('click', function() {
  $('#guiding-principles-info').text('While the funeral industrial complex is a systemic problem, there are still small, everyday ways in which we can take action. Doing so gives us the agency, perspective and drive needed to propel social movements forward. Even with limited options, there are choices consumers can make and actions communities can take to die more kindly.');
});

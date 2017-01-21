$("#error").hide();
var database = firebase.database();

var name = "";
var destination = "";
var firstTime = "";
var frequency = 0;

var currentDate = moment().format("YYYY-MM-DD")
var currentTime = moment().startOf('minute');

$("#submit").on("click", function(event){
    event.preventDefault();

    name = $("#name").val().trim();
    destination = $("#destination").val().trim();
    firstTime = $("#firstTime").val().trim();
    frequency = $("#frequency").val().trim();

    var convertFirst = moment(currentDate + " " + firstTime)
   
    if (name === "" || destination === "" || firstTime === "" || frequency === "0" || frequency === ""){



};
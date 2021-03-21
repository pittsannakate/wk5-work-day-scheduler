window.onload = function(){
    colorCode();
    nineA();
    tenA();
    elevenA();
    twelveP();
    oneP();
    twoP();
    threeP();
    fourP();
    fiveP();
   }
  
  // WHEN I open the planner
  // THEN the current day and time is displayed at the top of the calendar
  
  var dayAndTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#dayAndTime").append(dayAndTime);
  
  
  // WHEN I scroll down
  // THEN I am presented with timeblocks for standard business hours
  // WHEN I view the timeblocks for that day
  // THEN each timeblock is color coded to indicate whether it is in the past (gray), present (red), or future (green)
  
  var current = new Date().getHours();
  
  $(document).ready(function () {
    // var timeInputs = JSON.parse(localStorage.getItem('timeInputs')) || {};
    var currentHour = moment().hours();
    var todaysDate = moment().format("dddd, MMMM Do YYYY");
    console.log(currentHour);
    //Create Variable with the hours.
   
    ]
    
    function printTime() {
        $("#currentDay").text(todaysDate);
    }
    
    function printInputBlocks() {
        for (let i = 0; i < timeInputs.length; i++) {
            console.log(timeInputs[i].time, timeInputs[i].input);
            var inputGroup = $('<div class="input-group mb-3">');
            var inputGroupPrepend = $('<div class="input-group-prepend">');
            var prependSpan = $('<span class="input-group-text">' + timeInputs[i].time + ':00' + '</span>');
            inputGroupPrepend.append(prependSpan);
            var inputEl = $('<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" value="' + timeInputs[i].input + '">');
            var inputGroupAppend = $('<div class="input-group-append">');
            var appendSpan = $('<span data-time="" class="input-group-text"><button>Save</button></span>');
            inputGroupAppend.append(appendSpan);
            inputGroup.append(inputGroupPrepend).append(inputEl).append(inputGroupAppend);
            $(".container").append(inputGroup);
        }
    }
    function compareTime() {
        var nowTime = parseInt(moment().format('HH'));
        //Start from 9AM, till 5PM
        for (time = 9; time >= 17; time++) {
            var timeBlock = parseInt($("#" + time + "hr").attr("data-index"));
            console.log(timeBlock);
            if (timeBlock < nowTime) {
                $("#" + time + "hr").addClass("past");
            } else if (timeBlock == nowTime) {
                $("#" + time + "hr").addClass("present");
            } else if (timeBlock > nowTime) {
                $("#" + time + "hr").addClass("future");
            }
        }
    }
        compareTime();
    printTime();
    printInputBlocks();
});
  
  
  
  function nineA() {
    var nineAtext = document.querySelectorAll("#9amtext");
    var output_one = document.querySelectorAll("#9amtext");
    var save_9a = document.querySelectorAll("#9ambutton");
  
    save_9a.addEventListener("click", update9a);
  
    output_one.textContent = localStorage.getItem("9acontent");
    nineAtext.value = localStorage.getItem("9acontent");
  
    function update9a() {
      localStorage.setItem("9acontent", nineAtext.value);
  
      output_one.textContent = nineAtext.value;
    }
  }
  
  
  
  function tenA() {
    var tenAtext = document.querySelectorAll("#10amtext");
    var output_two = document.querySelectorAll("#10amtext");
    var save_10a = document.querySelectorAll("#10ambutton");
  
    save_10a.addEventListener("click", update10a);
  
    output_two.textContent = localStorage.getItem("10acontent");
    tenAtext.value = localStorage.getItem("10acontent");
  
    function update10a() {
      localStorage.setItem("10acontent", tenAtext.value);
  
      output_two.textContent = tenAtext.value;
    }
  }
  
  
  function elevenA() {
    var elevenAtext = document.querySelectorAll("#11amtext");
    var output_three = document.querySelectorAll("#11amtext");
    var save_11a = document.querySelectorAll("#11ambutton");
  
    save_11a.addEventListener("click", update11a);
  
    output_three.textContent = localStorage.getItem("11acontent");
    elevenAtext.value = localStorage.getItem("11acontent");
  
    function update11a() {
      localStorage.setItem("11acontent", elevenAtext.value);
  
      output_three.textContent = elevenAtext.value;
    }
  }
  
  
  function twelveP() {
    var twelvePtext = document.querySelectorAll('#12pmtext');
    var output_four = document.querySelectorAll('#12pmtext');
    var save_12p = document.querySelectorAll('#12pmbutton');
  
    save_12p.addEventListener("click", update12p);
  
    output_four.textContent = localStorage.getItem('12pcontent');
    twelvePtext.value = localStorage.getItem('12pcontent');
  
    function update12p() {
      localStorage.setItem("12pcontent", twelvePtext.value);
  
      output_four.textContent = twelvePtext.value;
    }
  }
  
  
  function oneP() {
    var onePtext = document.querySelectorAll('#1pmtext');
    var output_five = document.querySelectorAll('#1pmtext');
    var save_1p = document.querySelectorAll('#1pmbutton');
  
    save_1p.addEventListener("click", update1p);
  
    output_five.textContent = localStorage.getItem('1pcontent');
    onePtext.value = localStorage.getItem('1pcontent');
  
    function update1p() {
      localStorage.setItem('1pcontent', onePtext.value);
  
      output_five.textContent = onePtext.value;
    }
  }
  
  
  function twoP() {
    var twoPtext = document.querySelectorAll('#2pmtext');
    var output_six = document.querySelectorAll('#2pmtext');
    var save_2p = document.querySelectorAll('#2pmbutton');
  
    save_2p.addEventListener("click", update2p);
  
    output_six.textContent = localStorage.getItem('2pcontent');
    twoPtext.value = localStorage.getItem('2pcontent');
  
    function update2p() {
      localStorage.setItem('2pcontent', twoPtext.value);
  
      output_six.textContent = twoPtext.value;
    }
  }
  
  
  function threeP() {
    var threePtext = document.querySelectorAll('#3pmtext');
    var output_seven = document.querySelectorAll('#3pmtext');
    var save_button3p = document.querySelectorAll('#3pmbutton');
  
    save_button3p.addEventListener("click", update3p);
  
    output_seven.textContent = localStorage.getItem('3pcontent');
    threePtext.value = localStorage.getItem('3pcontent');
  
    function update3p() {
      localStorage.setItem("3pcontent", threePtext.value);
  
      output_seven.textContent = threePtext.value;
    }
  }
  
  
  function fourP() {
    var fourPtext = document.querySelectorAll('#4pmtext');
    var output_eight = document.querySelectorAll('#4pmtext');
    var save_button4p = document.querySelectorAll('#4pmbutton');
  
    save_button4p.addEventListener("click", update4p);
  
    output_eight.textContent = localStorage.getItem('4pcontent');
    fourPtext.value = localStorage.getItem('4pcontent');
  
    function updateOutput16() {
      localStorage.setItem("4pcontent", fourPtext.value);
  
      output_eight.textContent = fourPtext.value;
    }
  }
  
  
  function fiveP() {
    var fivePtext = document.querySelectorAll("#5pmtext");
    var output_nine = document.querySelectorAll("#5pmtext");
    var save_button5p = document.querySelectorAll("#5pmbutton");
  
    save_button5p.addEventListener("click", update5p);
  
    output_nine.textContent = localStorage.getItem('5pcontent');
    fivePtext.value = localStorage.getItem('5pcontent');
  
    function update5p() {
      localStorage.setItem('5pcontent', fivePtext.value);
  
      output_nine.textContent = fivePtext.value;
    }
  }
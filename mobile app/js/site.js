console.log("javascript loaded");
$(document).ready(function () {
  console.log("jquery loaded");
  // Personal information javascript starts here
  $("#personalInfo").validate({
    rules: {
      legalName: "required",
      address: "required",
      city: "required",
      state: "required",
      zip: { required: true, number: true, range: [0, 99999] },
      email: "required email",
      phone: "required",
      birthday: "required date",
      startdate: "required date",
    },
    messages: {
      fname: {
        required: "You have to give your first name!",
      },
      lname: {
        required: "You have to give your last name!",
      },
      email: {
        required: "You have to give your email address!",
        email: "error, invalid email",
      },
      zip: {
        required: "This field is required",
        number: "zip code contains five digits",
        range: "maximum of five digits",
      },
    },
    errorPlacement: function (error, element) {
      if (element.val() || element.hasClass("right")) {
        error.insertAfter(element);
      } else {
        element.attr("placeholder", error.text());
      }
    },
  });
  $("#addschool2").click(function () {
    $("#school2").css("display", "block");
    $("#addschool2").css("display", "none");
    $("#removeschool2").css("display", "block");
  });
  $("#addschool3").click(function () {
    $("#school3").css("display", "block");
    $("#addschool3").css("display", "none");
    $("#removeschool3").css("display", "block");
    $("#removeschool2").css("display", "none");
  });
  $("#removeschool2").click(function () {
    $("#addschool2").css("display", "block");
    $("#school2").css("display", "none");
    $("#removeschool2").css("display", "none");
  });
  $("#removeschool3").click(function () {
    $("#addschool3").css("display", "block");
    $("#school3").css("display", "none");
    $("#removeschool3").css("display", "none");
    $("#removeschool2").css("display", "block");
  });
  $("#navbar li a").hover(
    function () {
      $(this).css("color", "white");
    },
    function () {
      $(this).css("color", "#B3A69B");
    }
  );
  $("#personalInfo").submit(function (evt) {
    /* prevent default form submission and page reload */
    evt.preventDefault();

    if ($("#personalInfo").valid()) {
      console.log("personal form submitted");
      $("#tab2").removeClass("ui-state-disabled");
      $("#tab1").addClass("ui-state-disabled");
      $("#tab2").click();
    } else {
      console.log("form not valid");
    }
  });
  $("#eduyes").click();
  $("#eduno").click(function () {
    $("#schools").css("display", "none");
  });

  $("#eduyes").click(function () {
    $("#schools").css("display", "block");
  });

  $("#educationInfo").validate({
    rules: {
      schoolName: "required",
      degree: "required",
      degreeStatus: "required",
      major: "required",
      country: "required",
    },
    messages: {},
    errorPlacement: function (error, element) {
      if (element.val() || element.hasClass("right")) {
        error.insertAfter(element);
      } else {
        element.attr("placeholder", error.text());
      }
    },
  });
  $("#educationInfo").submit(function (evt) {
    /* prevent default form submission and page reload */
    evt.preventDefault();

    if ($("#educationInfo").valid()) {
      console.log("education form submitted");
      $("#tab3").removeClass("ui-state-disabled");
      $("#tab2").addClass("ui-state-disabled");
      $("#tab3").click();
    } else {
      console.log("form not valid");
    }
  });
  $("#notfirst").click();
  $("#first").click(function () {
    $("#experience1").css("display", "none");
    $("#experience2").css("display", "none");
    $("#experience3").css("display", "none");
  });

  $("#notfirst").click(function () {
    $("#experience1").css("display", "block");
  });

  // $("#current").click()
  $("#job1current").click(function () {
    $("#job1end").fadeToggle();
  });

  $("#job2current").click(function () {
    $("#job2end").fadeToggle();
  });

  $("#job3current").click(function () {
    $("#job3end").fadeToggle();
  });

  // $("#current").click(function () {
  // $("#enddate").css("display", "none")
  // });
  $("#addjob2").click(function () {
    $("#experience2").css("display", "block");
    $("#addjob2").css("display", "none");
    $("#removejob2").css("display", "block");
  });
  $("#addjob3").click(function () {
    $("#experience3").css("display", "block");
    $("#addjob3").css("display", "none");
    $("#removejob3").css("display", "block");
    $("#removejob2").css("display", "none");
  });
  $("#removejob2").click(function () {
    $("#addjob2").css("display", "block");
    $("#experience2").css("display", "none");
    $("#removejob2").css("display", "none");
  });
  $("#removejob3").click(function () {
    $("#addjob3").css("display", "block");
    $("#experience3").css("display", "none");
    $("#removejob3").css("display", "none");
    $("#removejob2").css("display", "block");
  });
  $("#experienceInfo").validate({
    rules: {
      employerName1: "required",
      jobTitle1: "required",
      startdate1: "required",
      enddate1: "required",
    },
    messages: {},
    errorPlacement: function (error, element) {
      if (element.val() || element.hasClass("right")) {
        error.insertAfter(element);
      } else {
        element.attr("placeholder", error.text());
      }
    },
  });
  $("#experienceInfo").submit(function (evt) {
    /* prevent default form submission and page reload */
    evt.preventDefault();

    if ($("#experienceInfo").valid()) {
      console.log("experience form submitted");
      $("#tab4").removeClass("ui-state-disabled");
      $("#tab3").addClass("ui-state-disabled");
      $("#tab4").click();
    } else {
      console.log("form not valid");
    }
  });
  $("#felony").change(function () {
    if ($("#felony").val() == "yes") {
      $("#crimereasondiv").css("display", "block");
      $("#crimereason").addClass("required");
    } else {
      $("#crimereasondiv").css("display", "none");
    }
  });
  $("#finish").validate({
    rules: {
      felony: "required",
      agreement: "required",
    },
    messages: {},
    errorPlacement: function (error, element) {
      if (element.val() || element.hasClass("right")) {
        error.insertAfter(element);
      } else {
        element.attr("placeholder", error.text());
      }
    },
  });
  $("#finish").submit(function (evt) {
    /* prevent default form submission and page reload */
    evt.preventDefault();

    if ($("#finish").valid()) {
      $(function () {
        alert("Thanks for submitting your application. You are now being forwarded to our website.");
        setTimeout(function () {
          window.location.href = "http://www.blizzard.com/en-us/"; //will redirect to your blog page (an ex: blog.html)
       }, 2000); //will call the function after 2 secs.   
      });
    } else {
      console.log("form not valid");
    }
  });

  $(function () {
    var states_html = "<option value=''>Required</option>>";
    var states = [
      "AL",
      "AK",
      "AZ",
      "AR",
      "FL",
      "GA",
      "GU",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "PR",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VI",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY",
    ];
    for (var state of states) {
      states_html += '<option value="' + state + '">' + state + "</option>";
    }
    $("select[name='state']").html(states_html);
  });
});

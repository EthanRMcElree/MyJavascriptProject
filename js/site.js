console.log("javascript loaded");
$(document).ready(function () {
  console.log("jquery loaded");
  $(function () {
    $("#tabs").tabs();
    $("#tabs").tabs("option", "disabled", [1, 2, 3]);
    $("#tabs").tabs("option", "active", 0);
  });
  // Personal information javascript starts here
  $(function () {
    $("#birthday").datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-100:-0",
      maxDate: new Date("11/1/2005"),
      minDate: new Date("1/1/1970"),
    });
  });
  $(function () {
    $("#startdate").datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-100:+2",
      maxDate: new Date("11/1/2023"),
      minDate: new Date("11/15/2021"),
    });
  });
  $(function () {
    $("#startdate1").datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-100:-0",
      maxDate: "",
      minDate: "",
    });
  });
  $(function () {
    $("#enddate1").datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-100:+2",
      maxDate: "",
      minDate: "",
    });
  });

  $(function () {
    $("#startdate2").datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-100:-0",
      maxDate: "",
      minDate: "",
    });
  });
  $(function () {
    $("#enddate2").datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-100:+2",
      maxDate: "",
      minDate: "",
    });
  });

  $(function () {
    $("#startdate3").datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-100:-0",
      maxDate: "",
      minDate: "",
    });
  });
  $(function () {
    $("#enddate3").datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-100:+2",
      maxDate: "",
      minDate: "",
    });
  });
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

  // $("#navbar li a").hover(function(){
  //     $(this).animate({
  //       color: "white"
  //     },
  //     250,
  //     function(){
  //       $(this).css("color", "#B3A69B");
  //     });
  // });
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
      $("#tabs").tabs("option", "disabled", [0, 2, 3]);
      $("#tabs").tabs("option", "active", 1);
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
      $("#tabs").tabs("option", "disabled", [0, 1, 3]);
      $("#tabs").tabs("option", "active", 2);
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
      $("#tabs").tabs("option", "disabled", [0, 1, 2]);
      $("#tabs").tabs("option", "active", 3);
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
        $("#dialog-confirm").dialog({
          resizable: false,
          height: "auto",
          width: 400,
          modal: true,
          buttons: {
            Okay: function () {
              window.location = "https://www.blizzard.com/en-us/";

              $(this).dialog("close");
            },
            Cancel: function () {
              $(this).dialog("close");
            },
          },
        });
      });
      console.log("experience form submitted");
      $("#tabs").tabs("option", "disabled", [0, 1, 2]);
      $("#tabs").tabs("option", "active", 3);
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
    $("select[name='state']").html(states_html)
  });
});

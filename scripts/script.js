this.window.addEventListener("scroll", function () {
  console.log("aman");

  // when nav appear
  const class_title1 = ["col-12", "col-sm-3", "col-md-5", "col-lg-7"];
  const class_title2 = ["col-12", "col-sm-9", "col-md-7", "col-lg-5", "mx-5"];

  // when nav collapse
  const class_title1_collapse = ["col-lg-3", "col-sm-2"];
  const class_section = ["col-lg-6", "col-sm-7"];
  const class_title2_collapse = ["col-lg-3", "col-sm-3"];

  var nav = this.document.querySelector("nav");
  var title1 = this.document.getElementById("title1");
  var title2 = this.document.getElementById("title2");
  var form = this.document.querySelector("form.mx-4");
  var no_filled = this.document.getElementById("box-section-no-filled");

  if (this.window.scrollY > 40) {
    nav.classList.remove("hideNav");
    title1.classList.add(...class_title1);
    title2.classList.add(...class_title2);
    no_filled.classList.add("hideSection");

    title1.classList.remove(...class_title1_collapse);
    title2.classList.remove(...class_title2_collapse);
    no_filled.classList.remove(...class_section);

    form.classList.remove("hideSearch");
  } else {
    nav.classList.add("hideNav");
    title1.classList.remove(...class_title1);
    title2.classList.remove(...class_title2);
    no_filled.classList.remove("hideSection");

    title1.classList.add(...class_title1_collapse);
    title2.classList.add(...class_title2_collapse);
    no_filled.classList.add(...class_section);

    form.classList.add("hideSearch");
  }
});

const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 25,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
  init: function () {
    setCourseInfo(this);
    renderSections(this.sections);
  },
  changeEnrollment: function (sectionNum, add = true) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );

    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        if (this.sections[sectionIndex].enrolled > 0) {
          this.sections[sectionIndex].enrolled--;
        } else {
          alert("Enrollment cannot be negative!");
          return;
        }
      }
      renderSections(this.sections);
    } else {
      alert("Invalid section number! Please enter a valid section.");
    }
  },
};

function setCourseInfo(course) {
  document.querySelector("#courseName").textContent = course.name;
  document.querySelector("#courseCode").textContent = course.code;
}

function renderSections(sections) {
  const sectionHTML = sections
    .map(
      (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
      </tr>`
    )
    .join(""); // Ensures proper HTML rendering

  document.querySelector("#sections").innerHTML = sectionHTML;
}

export default aCourse;
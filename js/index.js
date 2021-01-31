(function() {

  const skills = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit.", "Ullam", "quam,", "dolor", "temporibus", "iste", "eos,", "hic", "dicta", "ex", "incidunt", "a", "minus", "sequi.", "Necessitatibus", "iste", "quisquam", "et", "repellendus", "labore", "illum", "porro", "sint", "accusantium,", "quasi"];
  const $skills = document.querySelector('.content-block__skills ul');

  const strSkills = skills.reduce((res, val) => {
    return res += `<li>${val}</li>`
  }, '')

  $skills.innerHTML = strSkills

  console.log(strSkills)

})()
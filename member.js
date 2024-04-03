function skillsMember() {
  var member = document.getElementById('member').value;
  var skills = document.getElementById('skills').value;
  var obj = {
    member: member,
    skills: skills
  };
  var str = JSON.stringify(obj);
  localStorage.setItem('skillsMember', str);
  return false;
}
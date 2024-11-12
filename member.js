function skillsMember() {
  var skills = ['HTML', 'CSS', 'JS'];
  var age = 30;
  var position = 'Frontend developer';

  return {
    getSkills: function() {
      return skills;
    },
    getAge: function() {
      return age;
    },
    getPosition: function() {
      return position;
    }
  }
}
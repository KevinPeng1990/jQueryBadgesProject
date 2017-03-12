$(function () {

  $.ajax({
    url: 'https://www.codeschool.com/users/2685101.json',
    dataType: 'jsonp',
    success: function (response) {
      generatedBadges(response.courses.completed);
    }
  });

  function generatedBadges(courses) {
    var $badges = $('#badges');

    courses.forEach(function (course) {
      $div = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($div);

      $('<img />', {
        src: course.badge
      }).appendTo($div);

      $('<a />', {
        'class': 'btn btn-primary',
        href: course.url,
        target: '_blank',
        text: 'See Course'
      }).appendTo($div);
    });
  }

});

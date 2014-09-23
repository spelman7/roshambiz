$(function() {
    var clicks = 0;
    $('button').on('click', function() {
        clicks++;
        var percent = Math.min(Math.round(clicks / 2 * 100), 100);
        $('.percent').width(percent + '%');
        $('.number').text(percent + '%');
    });


    $('.facebook').on('click', function() {
        var w = 580, h = 300,
              left = (screen.width/2)-(w/2),
              top = (screen.height/2)-(h/2);
              window.open ('https://www.facebook.com/dialog/share?app_id=1479671765629399&display=popup&href=https%3A%2F%2Fwww.kickstarter.com%2Fprojects%2F501803065%2Fthe-roshambusiness%2F&redirect_uri=https%3A%2F%2Fwww.kickstarter.com%2Fprojects%2F501803065%2Fthe-roshambusiness%2F?', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
    });

    $('.play').on('click', function() {
        window.location.href = "https://www.kickstarter.com/projects/501803065/the-roshambusiness";
    });

});

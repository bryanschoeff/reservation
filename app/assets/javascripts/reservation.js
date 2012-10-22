/*globals _ */
var template;
var ajaxCalls = {};
ajaxCalls.appointments = {};
ajaxCalls.timeslots = {};

ajaxCalls.appointments.addNew = function(firstname, lastname, seats, when) {
  var data = { appointment: { first_name: firstname, last_name: lastname, seats: seats, when: when}};
  $.post('/appointments', data, function () {
    ajaxCalls.appointments.loadAll();
  });
};

ajaxCalls.appointments.loadAll = function() {
  $('#main').html('');
  $.getJSON('/appointments', function (data) {
    var result = { results: data };
    _.each(data, function(item) {
      $('#main').append(template(item)); 
    }); 
  });
};

ajaxCalls.appointments.updateItem = function (id, data) {
    $.ajax({
        type: 'PUT',
        url: '/appointments/' + id,
        data: data
    }).done(function () {
    });
};

ajaxCalls.appointments.deleteItem = function (id) {
    $.ajax({
        type: 'DELETE',
        url: '/appointments/' + id
    }).done(function () {
    });
};

$(document).ready(function () {
  template = _.template(templates.reservation); 
  $('#addReservation').click( function() {
    ajaxCalls.addNew($('#firstname').val(), $('#lastname').val(), 
                     $('#seats').val(), $('#when').val());
  });

  ajaxCalls.appointments.loadAll();
  ajaxCalls.timeslots.loadAll();
});

ajaxCalls.timeslots.loadAll = function() {
  $.getJSON('/timeslots', function (data) {
    var result = { results: data };
    _.each(data, function(item) {
      $('#timeslots').append(template(item)); 
    }); 
  });
};

/*globals _ */
var template;
var ajaxCalls = {};

ajaxCalls.addNew = function(firstname, lastname, seats, when) {
  var data = { appointment: { first_name: firstname, last_name: lastname, seats: seats, when: when}};
  $.post('/appointments', data, function () {
    ajaxCalls.loadAll();
  });
};

ajaxCalls.loadAll = function() {
  $('#main').html('');
  $.getJSON('/appointments', function (data) {
    var result = { results: data };
    _.each(data, function(item) {
      $('#main').append(template(item)); 
    }); 
  });
};

ajaxCalls.updateItem = function (id, data) {
    $.ajax({
        type: 'PUT',
        url: '/appointments/' + id,
        data: data
    }).done(function () {
    });
};

ajaxCalls.deleteItem = function (id) {
    $.ajax({
        type: 'DELETE',
        url: '/appointments/' + id
    }).done(function () {
    });
};

$(document).ready(function () {
  template = _.template($("#template").html()); 
  $('#addReservation').click( function() {
    ajaxCalls.addNew($('#firstname').val(), $('#lastname').val(), 
                     $('#seats').val(), $('#when').val());
  });

  ajaxCalls.loadAll();
});


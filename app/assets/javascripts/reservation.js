/*globals _ */
var template;
var ajaxCalls = {};

ajaxCalls.addNew = function(firstname, lastname, seats, notes) {
  var data = { appointment: { first_name: firstname, last_name: lastname, seats: seats, notes: notes }};
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
        stateEvents.loadList();
    });
};

ajaxCalls.deleteItem = function (id) {
    $.ajax({
        type: 'DELETE',
        url: '/appointments/' + id
    }).done(function () {
        stateEvents.loadList();
    });
};

$(document).ready(function () {
  template = _.template($("#template").html()); 
  $('#addReservation').click( function() {
    ajaxCalls.addNew($('#firstname').val(), $('#lastname').val(), null, "");
  });

  ajaxCalls.loadAll();
});
/*
    var Reservation = Backbone.Model.extend({
    });

    var ReservationList = Backbone.Collection.extend({
        url: "/appointments.json",
    });


    var ReservationListView = Backbone.View.extend({
        el: "#updateform",
        template: _.template($("#template").html()),

        events: {
            "click input#addReservation" : "addReservation"
        },

        initialize: function () {
            this.collection = new ReservationList();
            //_.bindAll(this, "addReservation");
        },

        render: function () {
            $('#main').html(this.el);
            return this;
        },

        fetchSuccess: function () {
            console.log(this.collection);
            var outer = this;
            this.collection.each(function (item) {
                $(outer.el).filter('#main').append(outer.template(item.toJSON()));
            });

            pageview.render();
        },

        addReservation: function (e) {
            console.log('yo');
            // todo
            var res = new Reservation();

            res.set({first_name: $("#firstname").val(), last_name: $("#lastname")});
            this.collection.add(res);
            this.render();
        }

    });


    var pageview = new ReservationListView();
    pageview.collection.fetch().complete(pageview.fetchSuccess());


*/

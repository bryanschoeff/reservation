/*globals _ */
var Reservation = Backbone.Model.extend({
    defaults: {
        date: '',
        time: '',
        requestor: ''
    },

    initialize: function () {
        this.date = this.defaults.date;
        this.time = this.defaults.time;
        this.requestor = this.defaults.requestor;
    }


});

var Reservations = Backbone.Collection.extend({
    model: Reservation
        
});

var ReservationView = Backbone.View.extend({
        
    // template: _.template($("#reservation-template").html()),
    //template: _.template("oh hai"),

    render: function () {
        //this.$el.html(this.template(this.model.toJSON()));
        this.el.html("sup bro");
    },

    initialize: function () {
        this.model = new Reservation();
        this.el = $("main");
    }

});

$(function () {
    var addReservation = new ReservationView();
    console.log(addReservation);
    addReservation.render();

    //$("#main").html(addReservation.el);
});


/*globals _ */
var Reservation = Backbone.Model.extend({
});

var ReservationList = Backbone.Collection.extend({
    url: "reservations.json",
});


var ReservationListView = Backbone.View.extend({

    template: _.template($("#template").html()),

                         
    initialize: function () {
        this.collection = new ReservationList();
    },

    render: function () {
        var outer = this;
        $(this.el).html("");

        this.collection.each(function (item) {
            $(outer.el).append(outer.template(item.toJSON()));
        });

        return this.el;
    }


});


var pageview = new ReservationListView();

$(document).ready(function () {
    pageview.collection.fetch().complete(function () {
        $("#main").html(pageview.render());
    });
});

/*globals _ */
$(document).ready(function () {
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


});

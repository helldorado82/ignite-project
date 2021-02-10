
      /*
      
       You are creating a presentation page for a restaurant.
       The restaurant website will include a carousel with some pictures, a jumbotron with a catchy slogan and a reservation form.

       In the reservation form, the user can select:

       - Name
       - Phone number
       - Number of persons
       - Smoking (true / false)
       - Date and Time
       - Special Requests

        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true
        },
        numberOfPersons: {
            type: Number,
            required: false
        },
        smoking: {
            type: Boolean,
            required: false
        },
        dateTime: {
            type: Date,
            required: true
        },
        specialRequests: {
            type: String,
            required: false
        }

       These reservation will be sent to the owner of the restaurant trough a REST API.

       https://striveschool-api.herokuapp.com/api/reservation/

       The API accepts JSON as content payload and provides the usual REST features:

       - GET https://striveschool-api.herokuapp.com/api/reservation/ ==> Fetch all the reservations
       - GET https://striveschool-api.herokuapp.com/api/reservation/{id} ==> Fetch a single reservation
       - POST https://striveschool-api.herokuapp.com/api/reservation/ ==> Submit a new reservation
       - PUT https://striveschool-api.herokuapp.com/api/reservation/{id} ==> Edit a single reservation
       - DELETE https://striveschool-api.herokuapp.com/api/reservation/{id} ==> Delete a single reservation

       [EXTRA]
       Create a "back office" page where the restaurants' manager can edit / delete / check reservations.

      */
    
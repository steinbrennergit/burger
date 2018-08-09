$(function () {
    $(".delete").on("click", function () {
        let id = $(this).attr("data-id");
        // console.log("clicked delete on " + id);
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(() => {
            // console.log("deleted burger with id " + id);
            location.reload();
        });
    })

    $(".devour").on("click", function () {
        let id = $(this).attr("data-id");
        // console.log("clicked devour on " + id);
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(() => {
            // console.log("ate burger with id " + id);
            location.reload();
        });
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let data = { name: $("#burg").val().trim() };

        $.ajax("api/burgers/", {
            type: "POST",
            data
        }).then(() => {
            // console.log("created new burger with name " + data.name);
            location.reload();
        });
    });
});
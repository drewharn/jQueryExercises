$(document).ready(function () {
    $("#filmRank").submit(function (event) {
        event.preventDefault();
        let title = $("#title").val();
        let rating = $("#rating").val();
        let listItem = $("<div class='movie-item mb-2'></div>") ;
        listItem.append("<span>Title: " + title + " - Rating: " + rating + "</span>");
        listItem.append("<button class='btn btn-danger btn-sm remove-btn'>Remove</button>");
        $("#movieList").append(listItem);
        $("#title").val("");
        $("#rating").val("");
    });
    
    $("#movieList").on("click", ".remove-btn", function() {
        $(this).parent().remove();
    });
});
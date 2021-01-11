let currentId = 0;
let movieList = [];

$(function() {

$("#btn-1").on("click", function(e) {
  e.preventDefault();

  let title = $("#title").val();
  let rating = $("#rating").val();

  let movieData = {title, rating, currentId};
  let appendHTML = createMovieDataHTML(movieData);

  currentId++
  movieList.push(movieData);


  $("#movie-table-body").append(appendHTML);
  $("#inputs").trigger("reset");
  })

});

$("tbody").on("click", ".btn.btn-danger", function(e) {

  let indexToRemoveAt = movieList.findIndex(movie => movie.currentId === +$(e.target).data("deleteId"))

  movieList.splice(indexToRemoveAt, 1)

  $(e.target).closest("tr").remove();

})

function createMovieDataHTML(data) {
  return `
    <tr>
      <td>${data.title}</td>
      <td>${data.rating}</td>
      <td>
        <button class="btn btn-danger" data-delete-id=${data.currentId}>
          Delete
        </button>
      </td>
    <tr>
  `;
}
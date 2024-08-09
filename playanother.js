var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
for (var i = 0; i < queries.length; i++) {
    queries[i] = queries[i].split("=").pop();
}
console.log(queries);

document.getElementById("playanother").addEventListener('click', function(){window.location.replace("./index.html");});
document.getElementById("scoreT").textContent = "You're wrong! You got a total score of " + queries[0];
document.getElementById("answerT").textContent = "The answer was '" + queries[1] + "'";
function searchYouTube() {
    var searchTerm = document.getElementById("searchInput").value;
    var url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(searchTerm);
    window.open(url, "_blank");
}

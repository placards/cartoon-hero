var darkTheme;
var switchToDark = function () {
    if (darkTheme == true) {
        document.getElementById("title").className = "title";
        document.getElementById("snowflake").className = "snowflakek";
        document.getElementById("text").className = "text";
        document.body.classList.remove("dark");
        document.getElementById("footer").className = "footer";
        document.getElementById("darkLight").innerHTML = "Dark Mode";
        document.getElementById("darkLight").className = "darkLight";
        darkTheme = false;
    } else {
        document.getElementById("title").className = "title dark";
        document.getElementById("snowflake").className = "snowflake dark";
        document.getElementById("text").className = "text dark";
        document.body.classList.toggle("dark");
        document.getElementById("footer").className = "footer dark";
        document.getElementById("darkLight").innerHTML = "Light Mode";
        document.getElementById("darkLight").className = "darkLight dark";
        darkTheme = true;
    }

}
// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        WinJS.UI.processAll();

        var verseContainer = document.getElementById("verse");
        takeVerseOfTheDay("http://bible.netbg.com/bible/admin/verse.php");       
    };

    app.oncheckpoint = function (args) {
    };

    var takeVerseOfTheDay = function (linkToDailyVerse) {
        WinJS.xhr({ url: linkToDailyVerse }).then(function (dailyVerse) {
            document.getElementById("verse").innerHTML = dailyVerse.responseText;
        });
    };

    app.start();
})();

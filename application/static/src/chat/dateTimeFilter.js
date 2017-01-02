angular
    .module('bachelorsApp').filter('djangoTime', function () {
        return function (input) {
            input = input || '';
            var date = new Date(input);
            var monthNames = [
                "January", "February", "March",
                "April", "May", "June", "July",
                "August", "September", "October",
                "November", "December"
            ];
            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();
            var hours = date.getHours();
            var seconds = date.getSeconds();
            var minutes = date.getMinutes();

            out = day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hours + ':' + minutes + ':' + seconds;

            return out;
        };
    });
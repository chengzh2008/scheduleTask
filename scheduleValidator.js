function isValid(type, start, end, daysOfWeekOrMonth) {
    var ONE_DAY_MS = 24 * 60 * 60 * 1000;
    var jobRunTimeList = [];
    var start = new Date(start);
    var end = new Date(end);
    var tempDateTime = start;
    var time_ms = tempDateTime.getTime();
    var today = new Date();
    // create a list of job firing time between start and end date/time

    if (type === 'daily') {
        while (time_ms <= end.getTime()) {
            if (today.getTime() <= time_ms) {
                jobRunTimeList.push(tempDateTime);
            }
            tempDateTime = new Date(time_ms + ONE_DAY_MS);
            time_ms = tempDateTime.getTime();
        }
    }

    if (type === 'weekly') {
        var daysOfWeek = daysOfWeekOrMonth;
        console.log(daysOfWeek);
        if (daysOfWeek.length) {
            while (time_ms <= end.getTime()) {
                if (daysOfWeek.indexOf(tempDateTime.getDay() + 1) !== -1) {
                    jobRunTimeList.push(tempDateTime);
                }
                tempDateTime = new Date(time_ms + ONE_DAY_MS);
                time_ms = tempDateTime.getTime();
            }
        }
    }

    if (type === 'monthly') {
        var dayOfMonth = daysOfWeekOrMonth;
        console.log(dayOfMonth);
        var dateOfTempDateTime = tempDateTime.getDate();

        tempDateTime = new Date(tempDateTime.setDate(dayOfMonth));
        console.log("testing...");
        console.log("dayOfMonth" + dayOfMonth + "start day" + dateOfTempDateTime);

        // dayOfMonth is before the date of the start date/time
        if (dateOfTempDateTime > dayOfMonth) {
            tempDateTime = new Date(tempDateTime.setMonth(tempDateTime.getMonth() - 1));
        }
        console.log(tempDateTime);
        time_ms = tempDateTime.getTime();
        while (time_ms <= end.getTime()) {
            if (today.getTime() <= time_ms) {
                jobRunTimeList.push(tempDateTime);
            }
            // set to next month
            tempDateTime = new Date(tempDateTime.setMonth(tempDateTime.getMonth() + 1));
            time_ms = tempDateTime.getTime();
        }
    }
    console.log('###############')
    console.log(jobRunTimeList);
    // test is the schedule valid or not
    if (!jobRunTimeList.length || today.getTime() > jobRunTimeList[jobRunTimeList.length - 1]) {
        return false;
    }
    return true;
}
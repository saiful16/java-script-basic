
function cashOut(money) {
    if (money >= 0 && typeof money === 'number') {
        const cashOutCharge = (money * 1.75) / 100;
        return cashOutCharge;

    }
    else
        return "Invalid";
}



function validEmail(email) {
    if (typeof email !== 'string') {
        return "Invalid";
    }
    else if (email.startsWith('.') || email.startsWith('-') || email.startsWith('_') || email.startsWith('+') || email.startsWith('@') || email.includes(' ') || !email.includes('@') || !email.endsWith('.com')) {
        return false;
    }
    else
        return true;
}



function electionResult(votes) {

    let mangoVoteCount = 0;
    let bananaVoteCount = 0;
    if (!Array.isArray(votes)) {
        return "Invalid";
    }
    else {
        for (vote of votes) {
            if (vote === 'mango')
                mangoVoteCount++;
            else if (vote === 'banana') {
                bananaVoteCount++;
            }
        }
        if (mangoVoteCount === bananaVoteCount) {
            return "Draw";
        }
        else if (mangoVoteCount > bananaVoteCount) {
            return "Mango";
        }
        else
            return "Banana";
    }
}



function isBestFriend(f1, f2) {
    if (typeof f1 !== 'object' || typeof f2 !== 'object')
        return "Invalid";
    else {
        if (f1.roll === f2.bestFriend) {
            return true;
        }
        else
            return false;
    }
}



function calculateWatchTime(times) {
    const watchTime = {
        hour: 0,
        minute: 0,
        second: 0
    }
    let totalTimeInSecond = 0;
    for (time of times) {
        if (typeof time !== 'number') {
            return "Invalid";
        }
        else {
            totalTimeInSecond = totalTimeInSecond + time;
        }
    }
    const hour = Math.floor(totalTimeInSecond / 3600);
    watchTime.hour = hour;

    const remainingTime = totalTimeInSecond % 3600;

    const minute = Math.floor(remainingTime / 60);
    watchTime.minute = minute;

    const remainingSecond = remainingTime % 60;
    watchTime.second = remainingSecond;

    return watchTime;
}





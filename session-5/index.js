


function getGrade(total){
    if (total > 90) {
        console.log("A+")
    }
    else if (total > 80) {
        console.log("A")
        }
    else if (total >= 70) {
        console.log("B")
    }
    else if (total >= 60) {
        console.log("C")
    }
    else if (total >= 50) {
        console.log("D")
    }
    else if (total >= 40) {
        console.log("E")
    }
}

getGrade(70)
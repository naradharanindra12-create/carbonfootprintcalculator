document.getElementById('CarbonForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let KmDriven = Number(document.getElementById('KmDriven').value);
    let publicTransport = Number(document.getElementById('publicTransport').value);
    let flights = Number(document.getElementById('flights').value);
    let electricity = Number(document.getElementById('electricity').value);
    let gas = Number(document.getElementById('gas').value);
    let diet = document.getElementById('diet').value;
    let recycling = document.getElementById('recycling').value;
    let compost = document.getElementById('compost').value;

    let score = 0;

    score += KmDriven * 0.2;
    score += publicTransport * 2;
    score += flights * 50;
    score += electricity * 0.5;

    if (gas === "yes") {
        score += 20;
    }
    if (diet === "meat-heavy") {
        score += 30;
    } else if (diet === "balanced") {
        score += 20;
    } else if (diet === "vegetarian") {
        score += 10;
    } else if (diet === "vegan") {
        score += 5;
    }

    if (recycling === "never") {
        score += 15;
    }

    if (compost === "no") {
        score += 10;
    }

    let level = "";

    if (score < 100){
        level = "Low";
    } else if (score < 200) {
        level = "Medium";
    } else {
        level = "High";
    }

    document.getElementById('result').innerHTML =
    "<strong>Your Carbon Footprint Score: " + score.toFixed(2) + "<br>" +
    "This is considered a " + level + " footprint.</strong>";
});
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  var membersGlobal = {
    "Tristan": {
        "gender": "male",
        "note": 1
    },
    "Marly": {
        "gender": "female",
        "note": 1
    },
    "Antonin": {
        "gender": "male",
        "note": 1
    },
    "Thérèse": {
        "gender": "female",
        "note": 1
    },
    "Kev": {
        "gender": "male",
        "note": 6
    },
    "Marie": {
        "gender": "female",
        "note": 4
    },
    "Aurel": {
        "gender": "male",
        "note": 5
    },
    "Arnaud": {
        "gender": "male",
        "note": 1
    },
    "Ludo": {
        "gender": "male",
        "note": 8
    },
    "Xav": {
        "gender": "male",
        "note": 9
    },
    "Oliv": {
        "gender": "male",
        "note": 6
    },
    "Mika": {
        "gender": "male",
        "note": 5
    },
    "Kam": {
        "gender": "male",
        "note": 6
    },
    "Le grand K": {
        "gender": "male",
        "note": 4
    },
    "Daane": {
        "gender": "male",
        "note": 7
    },
    "dudu": {
        "gender": "male",
        "note": 5
    },
    "Keuwa": {
        "gender": "male",
        "note": 6
    },
    "Thibaut": {
        "gender": "male",
        "note": 1
    },
    "Seb": {
        "gender": "male",
        "note": 4
    },
    "Théo": {
        "gender": "male",
        "note": 1
    },
    "Loan": {
        "gender": "male",
        "note": 7
    },
    "Taimana": {
        "gender": "male",
        "note": 5
    },
    "Wawa": {
        "gender": "male",
        "note": 6
    },
    "Audrey": {
        "gender": "female",
        "note": 1
    },
    "Léonore": {
        "gender": "female",
        "note": 5
    },
    "Clm": {
        "gender": "male",
        "note": 4
    },
    "Erwan": {
        "gender": "male",
        "note": 5
    },
    "pif": {
        "gender": "male",
        "note": 8
    },
    "JM": {
        "gender": "male",
        "note": 6
    },
}

$(function(){
    


});

$(function(){
    $("#textarea").on("change", () => {
        var text = $("#textarea").val()
        text = text.split('\n')
        console.log(text)

        var members = {}

        text.forEach(element => {
            if(membersGlobal[element] !== undefined){
                members[element] = membersGlobal[element]
            }
        });






        var membersNumber = 0
        for (var member in members){
            membersNumber += 1
        }
        var numberOfTeam = 2
        var numberOfTeamLeft = numberOfTeam
    
    
        var teams = [[],[],[],[]]
        var teamScore = [[0],[0],[0],[0]]
        var isOk = true
    
    
        do {
    
            console.log("hey")
            //console.log(teams)
    
            isOk = true
            teamScore = [0,0,0,0]
            teams = [[],[],[],[]]
    
            for (var member in members){
                var random = getRandomInt(numberOfTeamLeft)
    
                while(teams[random].length >= membersNumber / numberOfTeamLeft) {
                    random = getRandomInt(numberOfTeamLeft)
                }
    
                teams[random].push({
                        [member]: members[member]
                    })
                var a = teamScore[random] + members[member].note
                teamScore[random] = a
            }
    
            for(var i = 0 ; i < numberOfTeam - 1 ; i++){
                //console.log(teamScore[i] - teamScore[i+1])
    
                if(teamScore[i] - teamScore[i+1] < 4 && teamScore[i] - teamScore[i+1] > -4 ){
                    console.log(teamScore[i] - teamScore[i+1])
                    continue
                }
                isOk = false
                break
            }
            console.log("end", isOk)
        } while (!isOk);
    
        for(var i = 0; i < numberOfTeam;i++ ){
            var result = ""
            for(var j = 0; j < teams[i].length; j++){
            var name = Object.keys(teams[i][j])[0]
                result += "<div> "+ name +" "+ teams[i][j][name].note +"</div>"
            }
            console.log(result)
            $("#team"+(i+1)).html(result)
            $("#team"+(i+1)+"score").html(teamScore[i])
    
        }
    })
});

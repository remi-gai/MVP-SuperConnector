var generateMatches = (keywords1, keywords2) => {
var keywordMatches = [];
    for (var i = 0 ; i < keywords1.length; i++) {
        for (var j = 0; j < keywords2.length; j++) {
            if (keywords1[i].toLowerCase() === keywords2[j].toLowerCase() && keywordMatches.indexOf(keywords1[i].toLowerCase()) === -1) {
                keywordMatches.push(keywords1[i].toLowerCase());
            }
        }
    }
return keywordMatches;
}

export default generateMatches;
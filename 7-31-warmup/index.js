let secret = (str) => {
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let output = "";
    str = str.toLowerCase();

    for(i=0;i<str.length;i++){
      consonants.includes(str[i]) ? output += str[i] + "o" + str[i] : output += str[i];
    }

    return output;
}
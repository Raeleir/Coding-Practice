let disemvowel = (str) => {
    let stringDoe = {
        corpse: "",
        guts: ""
    };
    let vowels = "aeiou";
    str = str.toLowerCase();

    for(i=0;i<str.length;i++){
      vowels.includes(str[i]) ? stringDoe.guts += str[i] : stringDoe.corpse += str[i];
    }

    return stringDoe;
}
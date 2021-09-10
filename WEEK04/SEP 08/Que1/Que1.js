function say(massage) {
    console.log(typeof massage);
}
    if (massage == undefined) {
      massage = "Hi";
    } else {
      massage = massage;
    }
    console.log(massage);
  }
  say();
  say("XYZ");
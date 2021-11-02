const sentence = "hello there from lighthouse labs";

// print the char here
let delay = 1000;
let sen = sentence + "\n";
for (const char of sen) {
  delay += 85;
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
}

// <= 1s delay to make it noticeable. Can dial it down later.

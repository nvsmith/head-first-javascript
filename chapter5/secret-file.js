/* You’ve been given a super secret file and two functions that allow access to get and set the contents of the file, but only if you have the right password. The first function, getSecret, returns the contents of the file if the password is correct, and logs each attempt to access the file. The second function, setSecret, updates the contents of the file, and resets the access tracking to 0. */

// The top secret file
var superSecretFile = {
  level: "classified",
  opened: 0,
  password: 2,
  contents: "Dr. Doom's next meeting is in Detroit."
};

// Access granted if password is correct
function getSecret(file, secretPassword) {
  file.opened = file.opened + 1;
  if (secretPassword == file.password) {
    return file.contents;
  } else {
    return "Invalid password! No secret for you.";
  }
}

// Reset the open counter and provide an optional new password
function setSecret(file, secretPassword, secret, newPassword) {
  if (secretPassword == file.password) {
    file.opened = 0;
    file.contents = secret;
    file.password = newPassword;
  }
}

// Access the secret file's contents
var secret = getSecret(superSecretFile, 2);
// Print 1st meeting location
console.log(secret);

// Update next meeting place & password
setSecret(superSecretFile, 2, "M. Bison will run the next meeting in Bangkok.", 5);

// Access the file again
secret = getSecret(superSecretFile, 5);
// Print the 2nd meeting location
console.log(secret);
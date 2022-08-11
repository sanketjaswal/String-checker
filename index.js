// Palindrome
function check_palindrome(palindromeStr) {
  let j = palindromeStr.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = palindromeStr[i];
    let y = palindromeStr[j - i];
    if (x != y) {
      return false;
    }
  }
  return true;
}
function is_palindrome() {
  var palindromeStr = document.getElementsByClassName("input2")[0].value;
  let ans = check_palindrome(palindromeStr);
  if (palindromeStr == "") {
    document.getElementsByClassName("output2")[0].innerText =
      "Enter string first";
  } else if (ans == true) {
    document.getElementsByClassName("output2")[0].innerText =
      "String is palindrome";
  } else {
    document.getElementsByClassName("output2")[0].innerText =
      "String not a palindrome";
  }
}

//frequency Validation
function findDiff() {
  var str1 = document.getElementsByClassName("input11")[0].value;
  var str2 = document.getElementsByClassName("input12")[0].value;

  if (str1 === str2) {
    console.log("same");
  }
  str1 = str1.split("").sort().join();
  str2 = str2.split("").sort().join();

  if (str1 == "" || str2 == "") {
    document.getElementsByClassName("output1")[0].innerText =
      "Enter Strings first";
  } else if (str1 === str2) {
    document.getElementsByClassName("output1")[0].innerText =
      "Strings are equal";
  } else {
    document.getElementsByClassName("output1")[0].innerText =
      "Strings are not equal";
  }
}

// pattern programming
function pattern_prog() {
  var patternStr = document.getElementsByClassName("input3")[0].value;
  if (patternStr == "") {
    document.getElementsByClassName("output3")[0].innerText =
      "Enter string first";
  } else {
    let n = patternStr.length;
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        string += patternStr[i - 1];
      }
      string += "\n";
    }
    document.getElementsByClassName("output3")[0].innerText = string;
  }
}

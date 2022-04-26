const { rmSync } = require("original-fs");
const isPrime = require("../../backend/index");

getValue = async function (event) {
  event.preventDefault();
  var val = document.getElementById("num").value;

  try {
    res = await isPrime(val);
    console.log(res);
    if (res == "1") alert("This Number is prime Number.");
    else alert("This Number is Not Prime Number.");
  } catch (err) {
    alert("went wrong");
  }
};

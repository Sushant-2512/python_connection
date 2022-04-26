let { PythonShell } = require("python-shell");

let isPrime = async function (val) {
  return await new Promise(async (resolve, reject) => {
    console.log(val);
    let res;
    let options = {
      //   mode: "text",
      //   pythonPath: "path/to/python",
      //   pythonOptions: ["-u"], // get print results in real-time
      //   scriptPath: "path/to/my/scripts",
      args: [val],
    };

    PythonShell.run(
      "../backend/my_script.py",
      options,
      function (err, results) {
        if (err) reject(err);
        // results is an array consisting of messages collected during execution
        res = results[0];
        console.log("results: %j", results[0]);
        resolve(res);
      }
    );
  });
};
module.exports = isPrime;

// svFuncs.js



module.exports = {
  updateSrc: function ( cmd ) // DO NOT CHANGE ANYTHING HERE!
  {
    try{
      cmd.run('sudo chmod -R 777 ./');
      cmd.run('git -C ./myServer fetch');
      cmd.run('git -C ./myServer reset --hard');
      cmd.run('git -C ./myServer pull --force');
      console.log("> [GIT] Updated with origin/master");
      var PID = run(cmd);
      console.log("> [PID] The main.js process is running on "+PID);
      return PID;
    } catch (error)
    {
      console.error("Error on 'updateSrc()'" + error);
      var PID = -1;
    }
    return PID;
  }
}

function run (cmd) //You can change this function.
{
  var ProcessID = cmd.run('sudo node --experimental-worker ./myServer/main.js > ./myServer/stdout.txt 2> ./myServer/stderr.txt &');
  return ProcessID;
}

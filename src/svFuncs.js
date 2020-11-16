// svFuncs.js



module.exports = {
  updateSrc: function ( cmd ) // DO NOT CHANGE ANYTHING HERE!
  {
    try{
      console.log(cmd.run('sudo chmod -R 777 ./'));
      cmd.run('cd myServer');
      cmd.run('git fetch');
      cmd.run('git reset --hard');
      cmd.run('git pull --force');
      console.log("> [GIT] Updated with origin/master");
      var PID = run(cmd);
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

// svFuncs.js



module.exports = {
  updateSrc: function ( cmd ) // DO NOT CHANGE ANYTHING HERE!
  {
    try{
      cmd.run('cd ..');
      cmd.run('sudo chmod -R 777 ./');
      cmd.run('cd myServer');
      cmd.run('git fetch');
      cmd.run('git reset --hard');
      cmd.run('git pull --force');
      console.log("> [GIT] Updated with origin/master");
      run(cmd);
    } catch (error)
    {
      console.error("Error on 'updateSrc()'" + error);
    }
  }
}

function run (cmd) //You can change this function.
{
  cmd.run('sudo node --experimental-worker ./myServer/main.js > ./myServer/stdout.txt 2> ./myServer/stderr.txt &');
}

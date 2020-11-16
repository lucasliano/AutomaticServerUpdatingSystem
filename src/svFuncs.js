// svFuncs.js

// DO NOT CHANGE ANYTHING HERE!

module.exports = {
  updateSrc: function ( cmd )
  {
    try{
      cmd.run('cd myServer');
      cmd.run('git fetch');
      cmd.run('git reset --hard');
      cmd.run('git pull --force');
      console.log("> [GIT] Updated with origin/master");
      cmd.run('sudo node --experimental-worker start.js > stdout.txt 2> stderr.txt &');   //You can change this line.
    } catch (error)
    {
      console.error("Error on 'updateSrc()'" + error);
    }
  }
}

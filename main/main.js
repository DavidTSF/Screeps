var rolHarvester = require('rol.harvester');
var rolUpgrader = require('rol.upgrader');
var creepManager = require('creepManager');
var GodManager = require('god.manager')


module.exports.loop = function () {

    GodManager.evalue()

    creepManager.run();
    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        if(creep.memory.role === 'upgrader') {
            rolUpgrader.run(creep);
        } else {
            rolHarvester.run(creep);
        }
    }

}
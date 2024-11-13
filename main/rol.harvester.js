var rolHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else if(Game.spawns['MainBase'].energy < Game.spawns['MainBase'].energyCapacity) {
            if(creep.transfer(Game.spawns['MainBase'], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['MainBase']);
            }
        }
	}
};

module.exports = rolHarvester;
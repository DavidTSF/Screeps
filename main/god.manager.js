

const GodManager = {

    evalue: function () {

        basesList.forEach( (base)=> {
            let currentBase = Game.getObjectById(base)

            console.log(currentBase)

        })
    },

    addBase : function ( baseid ) {
        basesList.push(baseid)
    }

};


module.exports = GodManager;
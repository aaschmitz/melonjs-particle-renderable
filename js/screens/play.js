/**
 * PlayScreen
 */
game.PlayScreen = me.ScreenObject.extend({

    /** 
     * action to perform on state change
     */
    "onResetEvent" : function() {
        // update the camera bounds
        me.game.viewport.setBounds(0, 0, 1920, 1080);
 
        me.game.world.addChild(new me.ColorLayer("background", "#202020", 0));
        me.game.world.addChild(new game.Entity(250, 100, {
            "width" : 50,
            "height" : 50,
            "color" : "red"
        }));
        me.game.world.addChild(new game.FloatingEntity(275, 125, {
            "width" : 50,
            "height" : 50,
            "color" : "blue"
        }));
        
	me.input.bindKey(me.input.KEY.Z, "action", true);
	me.input.bindKey(me.input.KEY.X, "action2", true);
	me.input.bindKey(me.input.KEY.C, "action3", true);
	me.input.bindKey(me.input.KEY.V, "action4", true);
    }
});

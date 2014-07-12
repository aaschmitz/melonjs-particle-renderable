/**
 * a renderable for my entity
 */
game.Rect = me.Renderable.extend({
    "init" : function (pos, w, h, color) {
        this._super(me.Renderable, "init", [pos, w, h]);
        this.z = 10;
        this.color = color;
    },
    
    "draw" : function(context) {
        context.fillStyle = this.color;
        context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }
});

game.Rect2 = me.Renderable.extend({
    "init" : function (pos, w, h, color) {
        this._super(me.Renderable, "init", [pos, w, h]);
        this.z = 10;
        this.color = color;
    },

	update : function () {
            return true;
        },
    
    "draw" : function(context) {	
        context.fillStyle = this.color;
        context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }
});

/**
 * a basic entity
 */
game.Entity = me.Entity.extend({
    "init" : function (x, y, settings) {
        this._super(me.Entity, "init", [x, y, settings]);
        this.z = 1;
        /*this.renderable = new me.ObjectContainer(0, 0, 50, 50);
        this.renderable.addChild(new game.Rect(
            new me.Vector2d(),
            50,
            50,
            settings.color
        ));*/
    },
    
    /**
     * action to perform on frame update
     */
    "update" : function () {
        
        if (me.input.isKeyPressed("action")) {

		//console.log(new me.SpriteObject (0, 0, me.loader.getImage("explosion")));

		var emitter = new me.ParticleEmitter(400, 400,{
		      renderable: new me.SpriteObject (0, 0, me.loader.getImage("explosion")),
		      totalParticles: 1,
		      width: 50,
		      minLife: 1000,
		      maxLife: 3000
		 });

		me.game.world.addChild(emitter, 10);
		me.game.world.addChild(emitter.container);

		emitter.burstParticles();
        }

	if (me.input.isKeyPressed("action2")) {
		
		var emitter = new me.ParticleEmitter(400, 400,{
		      renderable: game.texture.createSpriteFromName("slime_normal.png"),
		      totalParticles: 10,
		      width: 50,
		      minLife: 1000,
		      maxLife: 3000
		 });

		me.game.world.addChild(emitter, 10);
		me.game.world.addChild(emitter.container);

		emitter.burstParticles();
        }

	if (me.input.isKeyPressed("action3")) {
				
		var emitter = new me.ParticleEmitter(400, 400,{
		      renderable: new game.Rect2(new me.Vector2d(0, 0), 10, 10, "#ffffff"),
		      totalParticles: 10,
		      minLife: 1000,
		      maxLife: 3000
		 });

		me.game.world.addChild(emitter, 10);
		me.game.world.addChild(emitter.container);

		emitter.burstParticles();
        }

	if (me.input.isKeyPressed("action4")) {
				
		var emitter = new me.ParticleEmitter(400, 400,{
		      renderable: game.texture.createAnimationFromName(["slime_normal.png", "slime_walk.png", "slime_dead.png"]),
		      totalParticles: 10,
		      minLife: 1000,
		      maxLife: 3000
		 });

		me.game.world.addChild(emitter, 10);
		me.game.world.addChild(emitter.container);

		emitter.burstParticles();
        }

        return true;
    }
    
});

/**
 * a floating entity
 */
game.FloatingEntity = me.Entity.extend({
    "init" : function (x, y, settings) {
        this._super(me.Entity, "init", [x, y, settings]);
        this.z = 10;
        this.floating = true;
        this.renderable = new me.ObjectContainer(0, 0, 50, 50);

        /*var container = new me.ObjectContainer(0, 0, 50, 50);
        container.addChild(new game.Rect(
            new me.Vector2d(),
            50,
            50,
            settings.color
        ));
        this.renderable.addChild(container);*/
    }
});


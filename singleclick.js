L.Evented.addInitHook( function () {
    this._timerId = null;
    this.on( 'click', this._scheduleSingleClick, this );
    this.on( 'dblclick', this._cancelSingleClick, this );

});

L.Evented.include({

	_cancelSingleClick : function(){
		//This timeout is key to workaround an issue where double-click events are fired in this order on touch browsers: ['click', 'dblclick', 'click'] instead of ['click', 'click', 'dblclick']
		setTimeout( this._clearTimeout.bind(this), 0 );
	},

    _scheduleSingleClick: function(e) {
        this._clearTimeout();

        this._timerId = setTimeout( this._fireSingleClick.bind(this, e), (this.options.singleClickTimeout || 500) );
    },

    _fireSingleClick: function(e){
        if ( !e.originalEvent._stopped ) {
            this.fire( 'singleclick', L.Util.extend( e, { type : 'singleclick' } ) );
        }
    },

    _clearTimeout: function(){
        if (this._timerId != null)
        {
            clearTimeout( this._timerId );
            this._timerId = null;
        }
    }

})


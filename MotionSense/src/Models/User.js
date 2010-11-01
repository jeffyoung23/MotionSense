exports.user_definition = {
    properties: ['first', 'last', 'age', 'updated_at'],
    cast: {
      age: Number
    },
    getters: {
        full_name: function(){ 
            return this.first + ' ' + this.last 
        }
    },
    methods: {
        save: function(fn){
            this.updated_at = new Date();
            this.__super__(fn);
        }
    },
};

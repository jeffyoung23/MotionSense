exports.user = {
    properties: ['fname', 'lname', 'added_at','username', 'password', 'user_id', {'gestures' : [['g_id', 'orgin', {'data':[]},{'event':[['ev_id', 'script']]}]]}],
    getters: {
        full_name: function(){ 
            return this.first + ' ' + this.last 
        }
    },
    methods: {
        save: function(fn){
            this.added_at = new Date();
            this.__super__(fn);
        }
    },
};

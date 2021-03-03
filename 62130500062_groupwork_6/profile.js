const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    post: {
        presence: true,
        numericality: {
            lessThan: 1000
        }
    },
    face: {
        presence: true,
    },
    gitss: {
        presence: true,
        
    },
    follower: {
        presence: true,
        numericality: {
            lessThan: 1000,
            message: "must be at least 100 digits"
        },
                 
    },
    following: {
        presence: true,
        numericality: {
            lessThan: 1000,
            message: "must be at least 100 digits"
        },          
    },
    chosecareer: {
        presence: true
    }
}
const app =Vue.createApp ({
    data() {
        return {
            firstname: null,
            lastname:null,
            image:'./images/profile.jpg',
            face:null,
            gitss:null,
            post:null,
            follower:null,
            following:null,
            chosecareer:null,
            career_list: [  {career_id: 1, career_name:'Gamer'},
                            {career_id: 2, career_name: 'Programmer'},
                            {career_id: 3, career_name: 'Editor'}],
            errors: null,

        }
    },
    methods: {
        checkForm(){
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    post: this.post,
                                    face: this.face,
                                    gitss: this.gitss,
                                    follower: this.follower,
                                    following: this.following,
                                    chosecareer: this.chosecareer},
                                    constraints)
            if(!this.errors){
                alert("Your profile is updatedsuccessfully.")
            }
        }
    }
})

app.mount('#app')
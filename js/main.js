const app = new Vue(
    {
        el: '#app',
        data: {
            toDoList:[
                {
                    text:'boh',
                    done:''
                }  
            ]
        },
        methods:{
            delateToDo(indice) {

                this.todos.splice(indice, 1)


            }
        }
    }
)
 
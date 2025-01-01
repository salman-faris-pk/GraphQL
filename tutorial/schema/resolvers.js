import {UserList,MovieList} from "../datas.js"




const resolvers={
    Query:{
      
        users: ()=> {
            return UserList;
        },
        user: ()=>{
            
        }
    },


    // Mutations:{

    // }

};



export default resolvers;
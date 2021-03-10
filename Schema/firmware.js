const graphql=require('graphql');
const db=require('../config/db')

// const devicetype=require('../Models/deviceTypeModel')

const {GraphQLObjectType, GraphQLString,GraphQLID,GraphQLList,GraphQLSchema,GraphQLBoolean}=graphql;

const DeviceTypetable = new GraphQLObjectType({
    name:'devicetype',
    fields:() =>({
        ID:{type:GraphQLID},
        DeviceType:{type:GraphQLString},
        IsActive:{type:GraphQLBoolean}

    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        DeviceType:{
            type:DeviceTypetable,
            //   args:{id:{type:GraphQLID}},

              resolve(parent,args){
                
               return db.query(`select * From devicetype`,(err,result)=>{
                    if(err){
                        console.log('devicetype err',err);
                    }
                    else{
                        return console.log("device result",result);
                    }
               });

            } 
            }
        },
})

        // var Schema = new GraphQLSchema({query:RootQuery });
        module.exports = new GraphQLSchema({
            query:RootQuery
        })
            // query:RootQuery
            

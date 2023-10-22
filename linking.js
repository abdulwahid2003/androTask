const config={
 screens:{
        Home:{
path:'homes'
        },
        Profile:{
            path:'profile/:id',
            parse:{
                id:(id)=>`${id}`
            },
        },
          Settings:{
                path:'settings'
                        },
                    }
    
}
const linking={
    prefixes:['mychat://'],
    config
}
export default linking
function getStatusName(state: 'active'){
    console.log(state)
}
const s = 'active' 
getStatusName(s)

getStatusName(s as 'active');
function App () {
    return 
    const user = {name:"Alice"};
    return<parent user={user}/>;
    
}

function parent({user}){
    return<child usre={usre}/>;
}
function child({user}){
return <p>User's name is {user.name}</p>
}
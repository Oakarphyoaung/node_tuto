const fetchData = async ()=>{
    const url = "http://localhost:3000/users";
    const response = await fetch(url);
    console.log(response);

};
fetchData();
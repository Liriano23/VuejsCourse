// axios.get('https://jsonplaceholder.typicode.com/users')
// .then( (res) => console.log(res.data[0]))

//Axios de forma asincrona
const petition = async () => {
    const res = await axios.get
    ('https://jsonplaceholder.typicode.com/users');
    console.log(res);  
}

petition();
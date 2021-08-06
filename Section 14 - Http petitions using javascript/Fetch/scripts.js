// const dataSave = fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(data => this.dataSave = data);

// console.log(dataSave);

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(data => console.log(data));

// // console.log(dataSave);

//Obteniendo datos de forma asincrona

const petition = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    console.log(data[0].name)
}
petition()
console.log('UNIQUE TEAM API');

function fetchData() {
    const url = "https://reqres.in/api/users?page=1";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const users = data.data;
            for (let i = 0; i < users.length; i++) {
                document.getElementById(`profile${i + 1}`).src = users[i].avatar;
                document.getElementById(`name${i + 1}`).innerText = `${users[i].first_name} ${users[i].last_name}`;
                document.getElementById(`email${i + 1}`).innerText = users[i].email;
            }
        })
        .catch(error => console.error("Error fetching data:", error));
}
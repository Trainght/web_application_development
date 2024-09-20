fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      userId: 101,
      title: "for send in wep app crous",
      completed: false
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
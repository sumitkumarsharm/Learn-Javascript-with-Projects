## Async and Await in javascript

- async/await provides a better way to write asynchronous code, making it more readable and maintainable.

- It is a wrapper around Promises, combining the best of asynchronous programming with a synchronous-looking flow.

- Handle errors with try...catch and use Promise.all for parallel tasks.

Example 1: Basic async/await

- Without async/await

```javascript
async function myData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data Fetched Successfully");
    }, 3000);
  });
}
myData()
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });
```

- With async/await

```javascript
async function fetchDataAsync() {
  const data = await fetchData(); // Waits until the promise resolves
  console.log(data); // Logs: "Data received"
}

fetchDataAsync();
```

Example 2: Error Handling with async/await

```javascript
function FetchingUsersData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        Name: "sumit Sharma",
        Age: 22,
        url: `https://www.sumitSharma.com`,
      });
    }, 5000);
  });
}

async function DisplayData() {
  try {
    console.log("Fetching Data From server ....");
    let SingleData = await FetchingUsersData();
    console.log(SingleData);
    console.log("Data Fetched Successfully");
  } catch (error) {
    console.log("Error Fetching Data", error);
  }
}

DisplayData();

// output:-
// Fetching Data From server ....
// { Name: 'sumit Sharma', Age: 22, url: 'https://www.sumitSharma.com' }
// Data Fetched Successfully
```

Example 3: Sequential vs Parallel Execution

- 1 Sequential Execution:

```javascript
function fetchPostData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Post Data Fetched Successfully");
    }, 3000);
  });
}

function fetchCommentData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Comment Data Fetched Successfully...");
    }, 3000);
  });
}

async function fetchCommPstData() {
  try {
    const PostsData = await fetchPostData();
    const CommentsData = await fetchCommentData();
    console.log(PostsData);
    console.log(CommentsData);
    console.log("All Data Fetched Successfully");
  } catch (error) {
    console.log("Error in Fetching Data", error);
  }
}
fetchCommPstData();

// output:-
// Post Data Fetched Successfully
// Comment Data Fetched Successfully...
// All Data Fetched Successfully
```

- 2 Parallel Execution:

```javascript
function fetchPostData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Post Data Fetched Successfully");
    }, 3000);
  });
}

function fetchCommentData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Comment Data Fetched Successfully...");
    }, 3000);
  });
}

async function fetchCommPstData() {
  try {
    const [PostsData, CommentsData] = await Promise.all([
      fetchCommentData(),
      fetchPostData(),
    ]);
    console.log(PostsData);
    console.log(CommentsData);
    console.log("All Data Fetched Successfully");
  } catch (error) {
    console.log("Error in Fetching Data", error);
  }
}
fetchCommPstData();

// output:-
    // Comment Data Fetched Successfully...
    // Post Data Fetched Successfully
    // All Data Fetched Successfully
```

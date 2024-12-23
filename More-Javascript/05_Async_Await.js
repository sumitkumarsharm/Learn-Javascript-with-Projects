// function FetchingUsersData() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res({
//         Name: "sumit Sharma",
//         Age: 22,
//         url: `https://www.sumitSharma.com`,
//       });
//     }, 5000);
//   });
// }

// async function DisplayData() {
//   try {
//     console.log("Fetching Data From server ....");
//     let SingleData = await FetchingUsersData();
//     console.log(SingleData);
//     console.log("Data Fetched Successfully");
//   } catch (error) {
//     console.log("Error Fetching Data", error);
//   }
// }

// DisplayData();

//

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
    // const PostsData = await fetchPostData();
    // const CommentsData = await fetchCommentData();

    // there is also another way to fetching data using promise.All

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

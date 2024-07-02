// function TestPromise() {
//   return (promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 2000);
//   }));
// }

// TestPromise()
//   .then((result) => {
//     console.log(result);
//     return TestPromise();
//   })
//   .then((result) => {
//     console.log(result);
//     return TestPromise();
//   })
//   .then((result) => {
//     console.log(result);
//   });

// Simulate fetching user data
function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ userId: 1, username: "JohnDoe" }), 1000);
  });
}

// Simulate fetching posts for a user
function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000);
  });
}

// Simulate fetching comments for a post
function fetchCommentsForPost(postId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Comment 1", "Comment 2", "Comment 3"]), 1000);
  });
}

// Using Promise.all to wait for all promises to resolve
Promise.all([fetchUserData(), fetchUserPosts(1), fetchCommentsForPost(1)])
  .then((results) => {
    console.log("User Data:", results[0]);
    console.log("User Posts:", results[1]);
    console.log("Comments for Post 1:", results[2]);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

const postsData = [
  {
    id: 55,
    createdAt: 1552333200451,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur deserunt illo esse distinctio.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis nihil, aliquam est, voluptates officiis iure soluta alias vel odit, placeat reiciendis ut libero! Quas aliquid natus cumque quae repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, excepturi. Doloremque, reprehenderit! Quos in maiores, soluta doloremque molestiae reiciendis libero expedita assumenda fuga quae. Consectetur id molestias itaque facere? Hic!",
    tags: ["JavaScript", "Android", "PHP", "Node.js", "Ruby", "Python"],
    author: {
      fullName: "Miracles Lee Cross",
      userName: "LeeCross",
      avatarUrl: "https://randomuser.me/api/portraits/men/51.jpg",
    }
  },
  {
    id: 23,
    createdAt: 1552333210451,
    title: "Lorem ipsum dolor sit amet, consectetur adip.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.",
    tags: [],
    author: {
      fullName: "Miracles Lee Cross",
      userName: "LeeCross",
      avatarUrl: "https://randomuser.me/api/portraits/men/51.jpg",
    }
  }
];

const userData = {
  id: 3,
  fullName: "Miracles Lee Cross",
  userName: "LeeCross",
  followerCount: 52342,
  followingCount: 6758,
  bio: "Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js, etc."
}

function getPostsData() {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      resolve({data: postsData})
    }, 800)    
  })
}

function getUserData() {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      resolve({data: userData})
    }, 400)    
  })

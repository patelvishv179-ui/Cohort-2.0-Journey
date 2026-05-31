const reels = [
  {
    isMuted: true,
    username: "Vishv Patel",
    likeCount: 24500,
    isLiked: false,
    caption: "Sunset vibes at Riverfront Ahmedabad 🌇",
    commentCount: 420,
    video: "Videos/1.Mp4",
    userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    shareCount: 310,
    isFollowed: false
  },

  {
    isMuted: true,
    username: "Aarav Shah",
    likeCount: 18900,
    isLiked: true,
    caption: "Morning coffee and coding session ☕💻",
    commentCount: 265,
    video: "Videos/2.Mp4",
    userProfile: "https://images.unsplash.com/photo-1504593811423-6dd665756598",
    shareCount: 140,
    isFollowed: true
  },

  {
    isMuted: true,
    username: "Priya Mehta",
    likeCount: 32100,
    isLiked: false,
    caption: "Exploring the beautiful streets of Jaipur ✨",
    commentCount: 590,
    video: "Videos/3.Mp4",
    userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    shareCount: 480,
    isFollowed: false
  },

  {
    isMuted: true,
    username: "Dev Patel",
    likeCount: 8700,
    isLiked: false,
    caption: "Late night gym motivation 🔥",
    commentCount: 95,
    video: "Videos/1.Mp4",
    userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    shareCount: 60,
    isFollowed: true
  },

  {
    isMuted: true,
    username: "Riya Desai",
    likeCount: 45200,
    isLiked: true,
    caption: "Traditional Gujarati look for Navratri 💃",
    commentCount: 810,
    video: "Videos/3.Mp4",
    userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    shareCount: 690,
    isFollowed: true
  },

  {
    isMuted: true,
    username: "Karan Joshi",
    likeCount: 15400,
    isLiked: false,
    caption: "Weekend ride with the boys 🏍️",
    commentCount: 170,
    video: "Videos/2.Mp4",
    userProfile: "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
    shareCount: 120,
    isFollowed: false
  },

  {
    isMuted: true,
    username: "Sneha Trivedi",
    likeCount: 27600,
    isLiked: true,
    caption: "Rainy weather + music = perfect mood 🎧🌧️",
    commentCount: 340,
    video: "Videos/1.Mp4",
    userProfile: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
    shareCount: 250,
    isFollowed: true
  },

  {
    isMuted: true,
    username: "Yash Thakkar",
    likeCount: 9900,
    isLiked: false,
    caption: "Learning JavaScript one project at a time 🚀",
    commentCount: 130,
    video: "Videos/2.Mp4",
    userProfile: "https://images.unsplash.com/photo-1504593811423-6dd665756598",
    shareCount: 75,
    isFollowed: false
  },

  {
    isMuted: true,
    username: "Mihir Rana",
    likeCount: 50100,
    isLiked: true,
    caption: "Drone shot of Udaipur lake palace 😍",
    commentCount: 950,
    video: "Videos/3.Mp4",
    userProfile: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 820,
    isFollowed: true
  },

  {
    isMuted: false,
    username: "Anaya Kapoor",
    likeCount: 22300,
    isLiked: false,
    caption: "Minimal desk setup for productivity ✨",
    commentCount: 290,
    video: "Videos/1.Mp4",
    userProfile: "https://images.unsplash.com/photo-1491349174775-aaafddd81942",
    shareCount: 180,
    isFollowed: false
  }
];

let allReels = document.querySelector(".all-reels");

function addData() {
  let sum = '';

  reels.forEach((val, idx) => {
    sum += `<div class="reel">
                <div class="mute" id=${idx}>
                ${val.isMuted ? '<i class="ri-volume-mute-line"></i>' : '<i class="ri-volume-up-line"></i>'}
                  
                </div>
                    <video autoplay loop ${val.isMuted ? 'muted' : ''} src="${val.video}"></video>
                    <div class="bottom">  
                        <div class="user">
                            <img class="profileimage" src="${val.userProfile}" alt="">
                            <h4>${val.username}</h4>
                            <button id=${idx} class='follow'>${val.isFollowed ? "Unfollow" : "Follow"}</button>
                        </div>
                        <h4>${val.caption}</h4>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon icon">${val.isLiked ? "<i class='ri-heart-3-fill' style='color: red'></i>" : "<i class='ri-heart-3-line'></i>"}</h4>
                            <h6>${val.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${val.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${val.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>   `;
  });

  allReels.innerHTML = sum;
}

addData();

allReels.addEventListener("click", (e) => {

  console.log(e.target.className);

  let voice = e.target.closest(".voice");

  if (e.target.className == 'follow') {
    if (!reels[e.target.id].isFollowed) {
      reels[e.target.id].isFollowed = true;
    } else {
      reels[e.target.id].isFollowed = false
    }
    addData();
  }

  if (e.target.className == 'like') {
    if (!reels[e.target.id].isLiked) {
      reels[e.target.id].likeCount++;
      reels[e.target.id].isLiked = true;
    } else {
      reels[e.target.id].likeCount--;
      reels[e.target.id].isLiked = false;
    }
    addData();
  }

  if (e.target.className == 'mute') {
    if (!reels[e.target.id].isMuted) {
      reels[e.target.id].isMuted = true;
    } else {
      reels[e.target.id].isMuted = false;
    }
    addData();
  }

})
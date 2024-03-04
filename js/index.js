const latestPostContainer = document.getElementById('latest-post-container');
const postContainer = document.getElementById('post-container');
const readPostContainer = document.getElementById('read-post-container');

console.log(readPostContainer);


// LETS DISCUSS SECTION POST LOADING
const loadPosts = async ()=>
{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const posts = await res.json();
    const allPosts = posts.posts;

    allPosts.forEach (post =>{
        const postCard = document.createElement('div');
        postCard.classList = 'flex gap-6 rounded-3xl pl-7 pr-8 py-6 lg:p-6 lg:p-10 bg-[#F3F3F5]'

        postCard.innerHTML = `
            <div class="relative">
                <img id="post-image" class="h-[4rem] w-[4rem] lg:h-[4.5rem] lg:w-[4.5rem] rounded-2xl" src="${post.image}" alt="">
                <div class="absolute ${post.isActive? 'bg-green-600' : 'bg-red-600'} rounded-full h-[18.7px] w-[18.7px] -top-1 -right-1"></div>
            </div>
            <div>
                
                <div class="flex gap-5 font-inter text-sm font-medium text-[#12132DCC]">
                    <p># <span id="post-category">${post.category}</span></p>
                    <p>Author: <span id="post-author-name">${post.author.name}</span></p>
                </div>
                
                <div id="title-parent" class="mt-3 mb-4">
                    <p id="post-title" class="text-primary-blue text-xl font-mulish font-bold">${post.title}</p>
                </div>
                
                <div>
                    <p id="post-description" class="font-inter font-normal text-primary-gray">${post.description}</p>
                </div>
                <hr class="my-5 border-1 border-dashed border-[#12132D40] w-full lg:w-[800px]">
                
                <div id="post-stats" class="flex justify-between">
                    <div class="flex gap-6 font-inter font-normal text-base text-[#12132D99]">
                        <div class="flex gap-3 items-center"><i class="fa-regular fa-message"></i> <span id="post-comment-count">${post.comment_count}</span></div>
                        <div class="flex gap-3 items-center"><i class="fa-regular fa-eye"></i> <span id="post-view-count">${post.view_count}</span></div>
                        <div class="flex gap-3 items-center"><i class="fa-regular fa-clock"></i> <span id="post-time">${post.posted_time}</span> min</div>
                    </div>
                    <button onclick="markAsRead(this)" class="btn-mark-read"><img src="images/mark-read-btn.svg" alt=""></button>
                </div>
            </div>
        `

        postContainer.appendChild(postCard);    
    })

    const btnMarkRead = document.getElementsByClassName('btn-mark-read');
    console.log(btnMarkRead);
    
}

loadPosts();


function markAsRead(post) {
    // title
    const readPost = post.parentNode.parentNode;
    const postTitle = readPost.querySelector('#post-title').innerText;

    // view count
    const postViewCount = post.parentNode.children[0].children[1].children[1].innerText;

    const readPostCard = document.createElement('div');
    readPostCard.classList = 'flex justify-between bg-white rounded-2xl p-4';

    readPostCard.innerHTML=`
    <div class="flex gap-16 bg-white rounded-2xl p-4">
        <h6 class="w-2/3 font-mulish font-semibold text-base text-primary-blue" id="read-post-title">${postTitle}</h6>
        <div class="flex gap-3 items-center font-inter font-normal text-base text-[#12132D99]"><i class="fa-regular fa-eye"></i> <span id="post-view-count">${postViewCount}</span></div>
    </div>
    `

    readPostContainer.appendChild(readPostCard);

}



// LATEST POST SECTION POST LOADING
const loadLatestPosts = async ()=>
{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const latestPosts = await res.json();
    // console.log(posts);

    latestPosts.forEach(post => {
        const latestPostCard = document.createElement('div');
        latestPostCard.classList='card bg-base-100 shadow-xl p-8 font-mulish border border-[#12132D26] rounded-3xl';

        latestPostCard.innerHTML = `
        <figure><img class="rounded-[20px]" src="${post.cover_image}" alt="Shoes" /></figure>
         <div class="card-body">
            <div class="flex gap-2">
                <i class="fa-regular fa-calendar"></i>
                <span id="latest-publish-date">${post.author?.posted_date || 'No publish date'}</span>
            </div>
            <h2 id="latest-post-title" class="card-title text-primary-blue text-lg font-extrabold">${post.title}</h2>
            <p id="latest-post-description" class="mb-4 mt-3">${post.description}</p>
            <div class="flex gap-4">
                <img class="h-[44px] w-[44px] rounded-full" src="${post.profile_image}" alt="">
                <div>
                    <h6 id="latest-post-author-name" class="text-primary-blue text-base font-bold">${post.author.name}</h6>
                    <p id="author-designation" class="text-sm text-[#12132D99] font-normal">${post.author?.designation || 'Unknown'}</p>
                </div>
            </div>
        </div>
        `

        latestPostContainer.appendChild(latestPostCard);
    });
}

loadLatestPosts();






// const loadPhone = async(searchText,isShowAll) =>
// {
//     const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
//     const data = await res.json();
//     const phones = data.data;
//     // console.log(phones);
//     displayPhones(phones,isShowAll);
// }
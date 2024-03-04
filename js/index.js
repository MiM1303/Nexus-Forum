const latestPostContainer = document.getElementById('latest-post-container');
console.log(latestPostContainer);

const loadLatestPosts = async ()=>
{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const posts = await res.json();
    console.log(posts);

    posts.forEach(post => {
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
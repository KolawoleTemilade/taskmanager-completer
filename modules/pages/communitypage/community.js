import { renderPageLayout } from "../../../components/card/card.js";

const communityHtml = `
<div class="comm-container">
  <p>this should show</p>
  <div class="community-board">
    <div class="input-area">
      <div class="user-initials">
        <!-- this fiels should have user initials -->
      </div>
      <textarea
        type="text"
        name="text"
        id="text"
        placeholder="Share an update, ask for help, or celebrate a win...(Mention @comsq to get AI help)">

    </textarea>
    <!-- you want to work on the active and inactive state of this button -->
      <div class="btn-area">
        <button><img src="" alt="">post</button>
      </div>      
    </div>
    <div class="input-area">
        <!-- also you want to work on this ffield accepting post when user post -->
        <div class="comment-empty-state">
            <img src="/assets/images/icon/comment.svg" alt="comment" width="70" >
            <p>no posts yet. Be the first to share something</p>
        </div>
    </div>
   
  </div>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
    const layout = renderPageLayout({
        title: "Community",
        subtitle: "Join the conversation",
        icon: "/assets/icons/community.svg",
        contentHtml: communityHtml
    });

    document.getElementById("community").appendChild(layout);
});

import{S as d,i as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m=r=>`<li class="gallery-card">
      <a href="${r.largeImageURL}" class="gallery-link">
            <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-img" loading="lazy">
        </a>
      <ul class="info">
            <li class="info-item">
                <p class="info-item-desc">Likes</p>${r.likes}
            </li>
            <li class="info-item">
                <p class="info-item-desc">Views</p>${r.views}
            </li>
            <li class="info-item">
                <p class="info-item-desc">Comments</p>${r.comments}
            </li>
            <li class="info-item">
                <p class="info-item-desc">Downloads</p>${r.downloads}
            </li>
        </ul>
    </li>`,f="https://pixabay.com/api/",h=r=>{const o=new URLSearchParams({q:r,key:"45557561-052ca280d13484c0c5f536db7",image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${f}?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},n=document.querySelector(".js-search-form"),l=document.querySelector(".user-list"),u=document.querySelector(".loader"),p=new d(".user-list a",{});function y(){u.classList.remove("is-hidden")}function g(){u.classList.add("is-hidden")}const L=r=>{l.innerHTML="",r.preventDefault(),y();const o=n.elements.user_query.value;h(o).then(s=>{if(s.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.innerHTML="",n.reset();return}const i=s.hits.map(e=>m(e)).join("");l.innerHTML=i,p.refresh()}).catch(s=>{c.error({message:"Sorry, there was a problem with your request. Please try again!",position:"topRight"})}).finally(()=>{g()})};n.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map

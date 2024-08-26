import{i as u,S as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m=r=>`<li class="gallery-card">
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
    </li>`,f="https://pixabay.com/api/",h=r=>{const o=new URLSearchParams({q:r,key:"45557561-052ca280d13484c0c5f536db7",image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${f}?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},n=document.querySelector(".js-search-form"),a=document.querySelector(".user-list"),c=document.querySelector(".loader");function p(){c.classList.remove("is-hidden")}function y(){c.classList.add("is-hidden")}const g=r=>{a.innerHTML="",r.preventDefault();const o=n.elements.user_query.value;p(),h(o).then(s=>{if(s.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.innerHTML="",n.reset();return}const i=s.hits.map(t=>m(t)).join("");a.innerHTML=i,new d(".user-list a",{}).refresh()}).catch(s=>{console.log(s)}).finally(()=>{y()})};n.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map

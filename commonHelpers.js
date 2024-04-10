import{S as d,i as c}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",y="36191554-a4c97c0aee7312389854400e2";function g(o){const r=new URLSearchParams({key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:32});return fetch(`${h}?${r}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})}function L(o){return o.map(({webformatURL:r,largeImageURL:s,tags:n,likes:e,views:t,comments:i,downloads:f})=>`<li class="gallery-item">
        <div class="thumb">
            <a class="gallery-link" href="${s}">
              <img
                class="gallery-image"
                src="${r}"
                alt="${n}"
              />
            </a>
              <ul class="description-list">
                <li class="description-items"><span class="accent">Likes </span>${e}</li>
                <li class="description-items"><span class="accent">Views </span>${t}</li>
                <li class="description-items"><span class="accent">Comments </span>${i}</li>
                <li class="description-items"><span class="accent">Downloads </span>${f}</li>
              </ul>
        </div>
      </li>`).join("")}const m=document.querySelector(".js-search-form "),l=document.querySelector(".search-input"),u=document.querySelector("ul.gallery"),S=document.querySelector(".loader");function a(){S.classList.toggle("visible")}let p="";const b=new d(".gallery a",{captionsData:"alt",captionDelay:250});m.addEventListener("submit",v);function v(o){if(o.preventDefault(),u.innerHTML="",l.value.trim()==="")return c.error({title:"",message:"The field can not be empty!!!",position:"topCenter",timeout:3e3,pauseOnHover:!1});p=l.value,a(),g(p).then(r=>{r.hits.length===0?(c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,pauseOnHover:!1}),a()):(u.insertAdjacentHTML("beforeend",L(r.hits)),b.refresh(),a())}).catch(r=>console.log(r)).finally(()=>m.reset())}
//# sourceMappingURL=commonHelpers.js.map

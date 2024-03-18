var l=n=>{let a=document.querySelectorAll(".tariff-list__insert"),i=document.querySelectorAll(".modal__name"),s=document.querySelectorAll(".modal__price"),o=n.filter(e=>e.isDiscount===!0&&e.isPopular===!1),c=["-40%","-50%","-60%"];a.forEach((e,t)=>{if(t<n.length){let r=n[t];if(r.isDiscount===!1&&r.isPopular===!0){let f=`
          <h2 class="tariff-name">${r.name}</h2>
          <span class="tariff-price">${r.price}\u20BD</span>
        `;e.insertAdjacentHTML("beforeend",f)}}}),o.forEach((e,t)=>{if(t<i.length){let r=`<h2>${e.name}</h2>`;i[t].insertAdjacentHTML("beforeend",r);let f=`<p class="modal__new-price" data-discount="${c[t]}">${e.price}\u20BD</p>`;s[t].insertAdjacentHTML("beforeend",f)}})},m=n=>{let a=n.filter(s=>s.isDiscount===!1&&s.isPopular===!1);document.querySelectorAll(".tariff-list__insert").forEach((s,o)=>{if(o<a.length){let c=a[o],e=`
          <h2 class="tariff-name">${c.name}</h2>
          <span class="tariff-price">${c.price}\u20BD</span>
        `;s.innerHTML="",s.insertAdjacentHTML("beforeend",e)}})};export{m as renderNoDiscountTariffs,l as renderTariffs};

(()=>{"use strict";addEventListener("message",({data:s})=>{const t=s.url;console.log(`fetch data ${t}`),fetch(t).then(e=>e.json()).then(e=>{self.postMessage({page:s.page,status:!0,data:e})}).catch(e=>{console.error("Error fetching data:",e),self.postMessage({page:s.page,status:!1,data:e})})})})();
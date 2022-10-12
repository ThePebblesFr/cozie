"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4118],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7435:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const i={id:"extracting-data",title:"Extracting Data from Cozie Basic",sidebar_label:"Extracting Data from Cozie Basic"},s=void 0,o={unversionedId:"extracting-data",id:"extracting-data",title:"Extracting Data from Cozie Basic",description:"Extracting Data",source:"@site/docs/extracting-data.md",sourceDirName:".",slug:"/extracting-data",permalink:"/docs/extracting-data",draft:!1,editUrl:"https://github.com/ThePebblesFr/cozie-website/tree/master/my-website/docs/extracting-data.md",tags:[],version:"current",frontMatter:{id:"extracting-data",title:"Extracting Data from Cozie Basic",sidebar_label:"Extracting Data from Cozie Basic"},sidebar:"tutorialSidebar",previous:{title:"Installing and using Cozie Basic",permalink:"/docs/installing-watchface"},next:{title:"Troubleshooting Cozie Basic",permalink:"/docs/troubleshooting-cozie-basic"}},c={},l=[{value:"Extracting Data",id:"extracting-data",level:2},{value:"Extracting Data with Python",id:"extracting-data-with-python",level:3},{value:"Extracting Data with Bash",id:"extracting-data-with-bash",level:3},{value:"Extracting Data with Node js",id:"extracting-data-with-node-js",level:3},{value:"Extracting as a human using a browser",id:"extracting-as-a-human-using-a-browser",level:3},{value:"Other crowdsourced examples of extracting data from the Cozie app",id:"other-crowdsourced-examples-of-extracting-data-from-the-cozie-app",level:3}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"extracting-data"},"Extracting Data"),(0,n.kt)("p",null,"Data can be extracted via our API"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"URL Key:")," ",(0,n.kt)("a",{parentName:"p",href:"https://ay1bwnlt74.execute-api.us-east-1.amazonaws.com/test/request/"},"https://ay1bwnlt74.execute-api.us-east-1.amazonaws.com/test/request/")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"experiment-id: The name you set in the cozie settings above (required)"),(0,n.kt)("li",{parentName:"ul"},"user-id: The user-id set above (optional, if not included all users are extracted)"),(0,n.kt)("li",{parentName:"ul"},"weeks: Weeks of data (optional, default is 2 weeks)")),(0,n.kt)("h3",{id:"extracting-data-with-python"},"Extracting Data with Python"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\npayload = {'experiment-id': 'test', 'weeks': '30', 'user-id': 'test05'}\nresponse = requests.get('https://ay1bwnlt74.execute-api.us-east-1.amazonaws.com/test/request/', params = payload)\n\nprint(response.content)\n")),(0,n.kt)("h3",{id:"extracting-data-with-bash"},"Extracting Data with Bash"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl https://ay1bwnlt74.execute-api.us-east-1.amazonaws.com/test/request/?experiment-id=test&weeks=3\n")),(0,n.kt)("h3",{id:"extracting-data-with-node-js"},"Extracting Data with Node js"),(0,n.kt)("p",null,"There are multiple methods to access data. You may use ",(0,n.kt)("inlineCode",{parentName:"p"},"fetch")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"https")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"},"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"fetch('https://ay1bwnlt74.execute-api.us-east-1.amazonaws.com/test/request/?experiment-id=test&weeks=3')\n.then(function(response) {return response.json()})\n.then(function(myJson) {console.log(JSON.stringify(myJson))});\n")),(0,n.kt)("h3",{id:"extracting-as-a-human-using-a-browser"},"Extracting as a human using a browser"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://ay1bwnlt74.execute-api.us-east-1.amazonaws.com/test/request/?experiment-id=YOUR"},"https://ay1bwnlt74.execute-api.us-east-1.amazonaws.com/test/request/?experiment-id=YOUR")," EXPERIMENT ID&weeks=NUMBER_OF_WEEKS&user-id=USER-ID(OPTIONAL)"),(0,n.kt)("p",null,"for example. For Experiment-ID = test, User-ID = Vivid Vervet, and the last 30 weeks of data:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://ay1bwnlt74.execute-api.us-east-1.amazonaws.com/test/request/?experiment-id=besh&weeks=30&user-id=test05"},"https://ay1bwnlt74.execute-api.us-east-1.amazonaws.com/test/request/?experiment-id=besh&weeks=30&user-id=test05")),(0,n.kt)("h3",{id:"other-crowdsourced-examples-of-extracting-data-from-the-cozie-app"},"Other crowdsourced examples of extracting data from the Cozie app"))}u.isMDXComponent=!0}}]);
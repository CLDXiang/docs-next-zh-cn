(window.webpackJsonp=window.webpackJsonp||[]).push([[25,34],{394:function(e,t,o){"use strict";t.a={platinum_sponsors_china:[{url:"http://www.dcloud.io/?hmsr=vuejsorg&hmpl=&hmcu=&hmkw=&hmci=",img:"dcloud.gif"}],special_sponsors:[{url:"https://autocode.com",img:"autocode.svg",name:"Autocode",description:"Build app-to-app workflows and connect APIs"}],platinum_sponsors:[{url:"https://vueschool.io/?utm_source=Vuejs.org&utm_medium=Banner&utm_campaign=Sponsored%20Banner&utm_content=V1",img:"vueschool.png",name:"VueSchool"},{url:"https://vehikl.com/",img:"vehikl.png",name:"Vehikl"},{url:"https://retool.com/?utm_source=sponsor&utm_campaign=vue",img:"retool.png",name:"Retool"},{url:"https://passionatepeople.io/",img:"passionate_people.png",name:"Passionate People"},{url:"https://www.storyblok.com",img:"storyblok.png",name:"Storyblok"}],gold_sponsors:[{url:"https://www.vuemastery.com/",img:"vuemastery.png",name:"VueMastery"},{url:"https://laravel.com",img:"laravel.png",name:"Laravel"},{url:"https://htmlburger.com",img:"html_burger.png",name:"HTML Burger"},{url:"https://www.frontenddeveloperlove.com/",img:"frontendlove.png",name:"FrontendLove"},{url:"https://onsen.io/vue/",img:"onsen_ui.png",name:"Onsen UI"},{url:"https://neds.com.au/",img:"neds.png",name:"Neds"},{url:"https://vuejobs.com/?ref=vuejs",img:"vuejobs.png",name:"VueJobs"},{url:"https://tidelift.com/subscription/npm/vue",img:"tidelift.png",name:"Tidelift"},{url:"https://www.firesticktricks.com/",img:"firestick_tricks.png",name:"Firestick Tricks"},{url:"https://intygrate.com/",img:"intygrate.png",name:"Intygrate"},{url:"http://en.shopware.com/",img:"shopware_ag.png",name:"shopware AG"},{url:"https://www.vpnranks.com/",img:"vpnranks.png",name:"VPNRanks"},{url:"https://www.bacancytechnology.com",img:"bacancy_technology.png",name:"Bacancy Technology"},{url:"https://www.bestvpn.co/",img:"bestvpn_co.png",name:"BestVPN.co"},{url:"https://www.y8.com/",img:"y8.png",name:"Y8"},{url:"https://js.devexpress.com/",img:"devexpress.png",name:"DevExpress"},{url:"https://fastcoding.jp/javascript/ ",img:"fastcoding_inc.svg",name:"FASTCODING Inc"},{url:"https://usave.co.uk/utilities/broadband",img:"usave.png",name:"usave"},{url:"https://www.foo.software",img:"foo.png",name:"Foo"},{url:"https://flatlogic.com/templates",img:"flatlogic_templates.svg",name:"Flatlogic Templates"},{url:"http://moovweb.com/",img:"moovweb.png",name:"Moovweb"}],silver_sponsors:[{url:"https://roadster.com",img:"roadster.png",name:"Roadster"},{url:"https://www.inkoop.io",img:"inkoop.png",name:"Inkoop"},{url:"https://www.thecasinodb.com",img:"isolutions_uk_limited.png",name:"iSolutions UK Limited"}],bronze_sponsors:[{url:"https://www.accelebrate.com/",img:"accelebrate.png",name:"Accelebrate"},{url:"https://polyglotengineer.com/derek.pollard",img:"derek_pollard.png",name:"Derek Pollard"},{url:"https://www.earthlink.ro",img:"earthlink.png",name:"Earthlink"},{url:"https://www.webucator.com",img:"webucator.png",name:"Webucator"}],video_sponsors_china:[{url:"https://cloud.youku.com/index.php?source=vuejs",img:"youku.png"}]}},443:function(e,t,o){"use strict";o.r(t);var s={props:{sponsor:{type:Object,required:!0}},computed:{imageStyles:function(){var e=[];return this.sponsor.big_width&&e.push("width:".concat(sponsor.big_width,";")),this.sponsor.big_height&&e.push("height:".concat(sponsor.big_height,";")),e}}},n=o(57),r=Object(n.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:this.sponsor.url,target:"_blank",rel:"noopener"}},[t("img",{style:this.imageStyles,attrs:{src:"/images/sponsors/"+this.sponsor.img}})])}),[],!1,null,null,null);t.default=r.exports},519:function(e,t,o){"use strict";o.r(t);var s=o(394),n=o(443),r={props:{group:{type:String,required:!0}},components:{SponsorImageLink:n.default},computed:{sponsors:function(){return s.a[this.group]}}},p=o(57),i=Object(p.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"sponsor-group"},this._l(this.sponsors,(function(e,o){return t("SponsorImageLink",{key:o,attrs:{sponsor:e}})})),1)}),[],!1,null,null,null);t.default=i.exports}}]);
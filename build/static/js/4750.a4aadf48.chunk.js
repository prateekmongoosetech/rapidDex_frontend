"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4750],{71943:(e,t,r)=>{r.d(t,{K:()=>a});var i=r(45779),n=r(70854);function s(e,t){var r,i,n,s,a,o,l,d,c,p,g,u,h,x,m,f,v,w,y,j,b,k,T,z,C,_,S,P,I,$,E,N,R,M,F,B,L,A,Z,H,O;const D=null===(i=e)||void 0===i||null===(r=i.markets)||void 0===r?void 0:r[0];if(!t&&!(null===(a=e)||void 0===a||null===(s=a.nftContracts)||void 0===s||null===(n=s[0])||void 0===n?void 0:n.address))return{};const U={};var X;(null===(o=e)||void 0===o?void 0:o.traits)&&(null===(X=e)||void 0===X||X.traits.forEach((e=>{e.name&&e.stats&&(U[e.name]=e.stats.map((e=>({trait_type:e.name,trait_value:e.value,trait_count:e.assets}))))})));return{address:t??(null===(c=e)||void 0===c||null===(d=c.nftContracts)||void 0===d||null===(l=d[0])||void 0===l?void 0:l.address)??"",isVerified:null===(p=e)||void 0===p?void 0:p.isVerified,name:null===(g=e)||void 0===g?void 0:g.name,description:null===(u=e)||void 0===u?void 0:u.description,standard:null===(m=e)||void 0===m||null===(x=m.nftContracts)||void 0===x||null===(h=x[0])||void 0===h?void 0:h.standard,bannerImageUrl:null===(v=e)||void 0===v||null===(f=v.bannerImage)||void 0===f?void 0:f.url,stats:{num_owners:null===(w=D)||void 0===w?void 0:w.owners,floor_price:null===(j=D)||void 0===j||null===(y=j.floorPrice)||void 0===y?void 0:y.value,one_day_volume:null===(k=D)||void 0===k||null===(b=k.volume)||void 0===b?void 0:b.value,one_day_change:null===(z=D)||void 0===z||null===(T=z.volumePercentChange)||void 0===T?void 0:T.value,one_day_floor_change:null===(_=D)||void 0===_||null===(C=_.floorPricePercentChange)||void 0===C?void 0:C.value,banner_image_url:null===(P=e)||void 0===P||null===(S=P.bannerImage)||void 0===S?void 0:S.url,total_supply:null===(I=e)||void 0===I?void 0:I.numAssets,total_listings:null===(E=D)||void 0===E||null===($=E.listings)||void 0===$?void 0:$.value,total_volume:null===(R=D)||void 0===R||null===(N=R.totalVolume)||void 0===N?void 0:N.value},traits:U,marketplaceCount:null===(F=D)||void 0===F||null===(M=F.marketplaces)||void 0===M?void 0:M.map((e=>{var t;return{marketplace:(null===(t=e.marketplace)||void 0===t?void 0:t.toLowerCase())??"",count:e.listings??0,floorPrice:e.floorPrice??0}})),imageUrl:(null===(L=e)||void 0===L||null===(B=L.image)||void 0===B?void 0:B.url)??"",twitterUrl:null===(A=e)||void 0===A?void 0:A.twitterName,instagram:null===(Z=e)||void 0===Z?void 0:Z.instagramName,discordUrl:null===(H=e)||void 0===H?void 0:H.discordUrl,externalUrl:null===(O=e)||void 0===O?void 0:O.homepageUrl,rarityVerified:!1}}function a(e,t){var r,a,o,l;const{data:d,loading:c}=(0,n.useCollectionQuery)({variables:{addresses:e},skip:t}),p=null===(l=d)||void 0===l||null===(o=l.nftCollections)||void 0===o||null===(a=o.edges)||void 0===a||null===(r=a[0])||void 0===r?void 0:r.node;return(0,i.useMemo)((()=>({data:s(p,e),loading:c})),[e,c,p])}},97965:(e,t,r)=>{r.r(t),r.d(t,{BannerWrapper:()=>Fr,CollectionBannerLoading:()=>$r,default:()=>Dr});var i=r(92936),n=r(5985),s=r(42277),a=r(52529),o=r(55478),l=r(83792),d=r(71943),c=r(75603),p=r(93465),g=r(22722),u=r(36664),h=r(97125),x=r(52843),m=r(49108),f=(r(21422),r(78052)),v=r(99251),w=r(25075),y=r(23882),j=r(64972);const b=()=>{const e=(0,v.c)((e=>e.itemsInBag)),t=(0,v.c)((e=>e.toggleBag)),r=(0,w.P)(),n=(0,w.B)(),{formatEther:s,formatNumberOrString:a}=(0,j.Gb)(),o=e.length>0;return(0,i.jsxs)(m.X2,{display:{sm:o?"flex":"none",md:"none"},className:"rgw6ez48r rgw6ez32f rgw6ez35l rgw6ez3b3 rgw6ez4ql rgw6ez2tx rgw6ez3qr rgw6ez80p rgw6ez7zp rgw6ez55f rgw6ez895 rgw6ez48f",children:[(0,i.jsxs)(m.X2,{gap:"8",children:[(0,i.jsx)(x.n,{position:"relative",style:{width:"34px",height:"34px"},children:e.slice(0,3).map(((e,t)=>(0,i.jsx)(x.n,{as:"img",position:"absolute",src:e.asset.smallImageUrl,top:"1/2",left:"1/2",width:"26",height:"26",borderRadius:"4",style:{transform:0===t?"translate(-50%, -50%) rotate(-4.42deg)":1===t?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)",zIndex:t}},t)))}),(0,i.jsxs)(m.sg,{children:[(0,i.jsx)(x.n,{className:f.d1,fontWeight:"medium",children:(0,y.t)(e.length,"NFT")}),(0,i.jsxs)(m.X2,{gap:"8",children:[(0,i.jsxs)(x.n,{className:f.d1,children:[`${s({input:r.toString(),type:j.sw.NFTToken})}`," ETH"]}),(0,i.jsx)(x.n,{color:"neutral2",className:f.Km,children:a({input:n,type:j.sw.FiatNFTToken})})]})]})]}),(0,i.jsx)(x.n,{className:"rgw6ezd9 rgw6ezb9 rgw6ezdx rgw6ez2e9 rgw6ez2jr rgw6ez2of rgw6ez27x rgw6ez4df rgw6ez6sl rgw6ez80x rgw6ez7zd",onClick:t,children:"View bag"})]})};var k=r(1890),T=r(61152),z=(r(29387),"_2kdvfw1 jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l jinxmnf"),C="jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l rgw6ez6rr",_="jinxmn1 rgw6ezwf rgw6ezya rgw6ezf3 rgw6ezha",S=r(52801),P=r(41420),I=r(67762),$=r(12294),E=r(47832);const N=(0,$.Ue)()((0,E.mW)((e=>({isCollectionNftsLoading:!1,setIsCollectionNftsLoading:t=>e((()=>({isCollectionNftsLoading:t}))),isCollectionStatsLoading:!1,setIsCollectionStatsLoading:t=>e((()=>({isCollectionStatsLoading:t})))})),{name:"useIsCollectionLoading"}));var R=r(39550);const M=e=>0===e?"0":e?e<1?"<1":Math.round(e).toString():"";var F=r(45779),B=r(35339),L=r.n(B),A=r(56363);const Z=u.ZP.div`
  color: ${({theme:e,isNegative:t})=>t?e.critical:e.success};
  display: flex;
  align-items: center;
  justify-content: center;
`,H=u.ZP.h1`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  margin-right: ${({isVerified:e})=>e?"6px":"0px"};
`,O=u.ZP.div`
  ${P.S}
  height: 32px;
  width: 236px;
`,D=u.ZP.div`
  display: flex;
  margin-left: 4px;
  flex-direction: column;
  justify-content: center;
  height: 28px;
`,U=({children:e,href:t})=>(0,i.jsx)(x.n,{display:"flex",as:"a",target:"_blank",rel:"noreferrer",href:t,height:"40",width:"40",borderRadius:"round",backgroundColor:"surface1",children:e}),X=({collectionStats:e,collectionSocialsIsOpen:t,toggleCollectionSocials:r})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(D,{onClick:r,children:t?(0,i.jsx)(S.DX,{width:"28",height:"28",fill:I.Z4.colors.neutral2}):(0,i.jsx)(S.ws,{width:"28",height:"20",fill:I.Z4.colors.neutral2})}),t&&(0,i.jsxs)(m.X2,{position:"absolute",gap:"4",alignItems:"center",justifyContent:"center",style:{top:"-48px",right:"-6px"},children:[e.discordUrl?(0,i.jsx)(U,{href:e.discordUrl,children:(0,i.jsx)(x.n,{margin:"auto",paddingTop:"4",children:(0,i.jsx)(S.D7,{width:28,height:28,color:I.Z4.colors.neutral2})})}):null,e.twitterUrl?(0,i.jsx)(U,{href:"https://twitter.com/"+e.twitterUrl,children:(0,i.jsx)(x.n,{margin:"auto",paddingTop:"6",children:(0,i.jsx)(S.Zm,{fill:I.Z4.colors.neutral2,color:I.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.instagram?(0,i.jsx)(U,{href:"https://instagram.com/"+e.instagram,children:(0,i.jsx)(x.n,{margin:"auto",paddingLeft:"2",paddingTop:"4",children:(0,i.jsx)(S.yu,{fill:I.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.externalUrl?(0,i.jsx)(U,{href:e.externalUrl,children:(0,i.jsx)(x.n,{margin:"auto",paddingTop:"4",children:(0,i.jsx)(S.O1,{fill:I.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null]})]}),W=({children:e,href:t})=>(0,i.jsx)(m.sg,{as:"a",target:"_blank",rel:"noreferrer",href:t,height:"full",justifyContent:"center",children:e}),V=({collectionStats:e,name:t,isVerified:r,isMobile:n,collectionSocialsIsOpen:s,toggleCollectionSocials:a})=>{const o=N((e=>e.isCollectionStatsLoading));return(0,i.jsxs)(m.X2,{justifyContent:"space-between",children:[(0,i.jsxs)(m.X2,{minWidth:"0",children:[o?(0,i.jsx)(O,{}):(0,i.jsx)(H,{isVerified:r,className:n?f.td:f.Es,children:t}),r&&(0,i.jsx)(S.SA,{style:{width:"32px",height:"32px"}}),(0,i.jsxs)(m.X2,{display:{sm:"none",md:"flex"},alignItems:"center",justifyContent:"center",marginLeft:"32",gap:"8",height:"32",children:[e.discordUrl?(0,i.jsx)(W,{href:e.discordUrl??"",children:(0,i.jsx)(S.D7,{fill:I.Z4.colors.neutral2,color:I.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.twitterUrl?(0,i.jsx)(W,{href:"https://twitter.com/"+e.twitterUrl,children:(0,i.jsx)(S.Zm,{fill:I.Z4.colors.neutral2,color:I.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.instagram?(0,i.jsx)(W,{href:"https://instagram.com/"+e.instagram,children:(0,i.jsx)(S.yu,{fill:I.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.externalUrl?(0,i.jsx)(W,{href:e.externalUrl??"",children:(0,i.jsx)(S.O1,{fill:I.Z4.colors.neutral2,width:"26px",height:"26px"})}):null]})]}),n&&(e.discordUrl||e.twitterUrl||e.instagram||e.externalUrl)&&(0,i.jsx)(X,{collectionStats:e,collectionSocialsIsOpen:s,toggleCollectionSocials:a})]})},K=u.ZP.p`
  vertical-align: top;
  text-overflow: ellipsis;
  margin: 0;

  ${({readMore:e})=>e?T.css`
          white-space: normal;
          overflow: visible;
          display: inline;
          max-width: 100%;
        `:T.css`
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          max-width: min(calc(100% - 112px), 600px);
        `}

  a[href] {
    color: ${({theme:e})=>e.neutral2};
    text-decoration: none;

    :hover {
      opacity: ${({theme:e})=>e.opacity.hover};
    }

    :focus {
      opacity: ${({theme:e})=>e.opacity.click};
    }
  }
`,Y=u.ZP.span`
  vertical-align: top;
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  margin-left: 4px;
`,G=()=>(0,i.jsx)(x.n,{marginTop:{sm:"12",md:"16"},className:"jinxmnc _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez199"}),q=({description:e})=>{const[t,r]=(0,F.useState)(!1),[n,s]=(0,F.useReducer)((e=>!e),!1),a=(0,F.useRef)(null),o=(0,F.useRef)(null),l=N((e=>e.isCollectionStatsLoading)),d=(0,c.d)();return(0,F.useEffect)((()=>{var e;a&&o&&a.current&&o.current&&(o.current.getBoundingClientRect().width>=(null===(e=a.current)||void 0===e?void 0:e.getBoundingClientRect().width)-112||o.current.getBoundingClientRect().width>=590)?r(!0):r(!1)}),[o,a,l,e]),l?(0,i.jsx)(G,{}):(0,i.jsxs)(x.n,{ref:a,marginTop:{sm:"12",md:"16"},style:{maxWidth:"680px"},children:[(0,i.jsx)(K,{readMore:n,ref:o,className:d?f.Km:f.d1,children:(0,i.jsx)(L(),{source:e,allowedTypes:["link","paragraph","strong","code","emphasis","text"],renderers:{paragraph:"span"}})}),t&&(0,i.jsxs)(Y,{className:d?f.Km:f.d1,onClick:s,children:["show ",n?"less":"more"]})]})},J=({children:e,label:t,shouldHide:r})=>(0,i.jsxs)(x.n,{display:r?"none":"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",children:[(0,i.jsx)(A.T.SubHeader,{className:"jinxmn6 rgw6ezd9 rgw6ezbl rgw6ezef",children:e}),(0,i.jsx)(x.n,{as:"span",className:"jinxmn5 rgw6ezd3 rgw6ezb9 rgw6ezdr rgw6ez4bf rgw6ez45l",children:t})]}),Q=e=>new Array(e?3:5).fill(null).map(((t,r)=>(0,i.jsxs)(x.n,{display:"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",marginBottom:e?"12":"0",children:[(0,i.jsx)("div",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez18x"}),(0,i.jsx)("span",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez199 rgw6ezwf"})]},`statsLoadingSkeleton-key-${r}`))),ee=({stats:e,isMobile:t,...r})=>{var n,s,a,o,l,d,c,g,u,h,x,f,w,y;const{formatNumberOrString:b,formatDelta:T}=(0,j.Gb)(),z=(null===(s=e)||void 0===s||null===(n=s.stats)||void 0===n?void 0:n.total_supply)?M((e.stats.num_owners??0)/e.stats.total_supply*100):0,C=e.stats?b({input:e.stats.total_supply??0,type:j.sw.NFTCollectionStats}):0,_=(null===(o=e)||void 0===o||null===(a=o.stats)||void 0===a?void 0:a.total_supply)?M((e.stats.total_listings??0)/e.stats.total_supply*100):0,S=N((e=>e.isCollectionStatsLoading)),P=b({input:Number(null===(l=e.stats)||void 0===l?void 0:l.total_volume)??0,type:j.sw.NFTCollectionStats}),I=b({input:(null===(d=e.stats)||void 0===d?void 0:d.floor_price)??0,type:j.sw.NFTTokenFloorPrice}),$=T(Math.round(Math.abs((null===(g=e)||void 0===g||null===(c=g.stats)||void 0===c?void 0:c.one_day_floor_change)??0))),E=(0,v.c)((e=>e.bagExpanded)),F=(0,p.e)(),B=t||!F.lg&&E;return(0,i.jsx)(m.X2,{gap:{sm:"24",md:"36",lg:"48",xl:"60"},...r,children:S?Q(t??!1):(0,i.jsxs)(i.Fragment,{children:[(null===(u=e.stats)||void 0===u?void 0:u.floor_price)?(0,i.jsxs)(J,{label:"Global floor",shouldHide:!1,children:[I," ETH"]}):null,void 0!==(null===(h=e.stats)||void 0===h?void 0:h.one_day_floor_change)?(0,i.jsx)(J,{label:"Floor 24H",shouldHide:!1,children:(0,i.jsxs)(Z,{isNegative:e.stats.one_day_floor_change<0,children:[(0,i.jsx)(k.Kx,{delta:null===(f=e)||void 0===f||null===(x=f.stats)||void 0===x?void 0:x.one_day_floor_change}),$]})}):null,(null===(w=e.stats)||void 0===w?void 0:w.total_volume)?(0,i.jsxs)(J,{label:"Total volume",shouldHide:!1,children:[P," ETH"]}):null,C?(0,i.jsx)(J,{label:"Items",shouldHide:t??!1,children:C}):null,z&&e.standard!==R.iv.ERC1155?(0,i.jsxs)(J,{label:"Unique owners",shouldHide:B??!1,children:[z,"%"]}):null,(null===(y=e.stats)||void 0===y?void 0:y.total_listings)&&e.standard!==R.iv.ERC1155?(0,i.jsxs)(J,{label:"Listed",shouldHide:B??!1,children:[_,"%"]}):null]})})},te=({isMobile:e})=>(0,i.jsxs)(m.sg,{position:"relative",width:"full",children:[(0,i.jsx)(x.n,{className:C}),(0,i.jsx)(x.n,{className:z}),(0,i.jsxs)(x.n,{className:_,children:[(0,i.jsx)(x.n,{className:"jinxmni _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez19x"}),!e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(G,{}),(0,i.jsx)(m.X2,{gap:"60",marginTop:"20",children:Q(!1)})]})]}),e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(G,{}),(0,i.jsx)(m.X2,{gap:"20",marginTop:"20",children:Q(!0)})]})]}),re=({stats:e,isMobile:t})=>{const[r,n]=(0,F.useReducer)((e=>!e),!1),s=N((e=>e.isCollectionStatsLoading));return(0,i.jsxs)(x.n,{display:"flex",marginTop:t&&!e.bannerImageUrl?r?"52":"20":"0",justifyContent:"center",position:"relative",flexDirection:"column",width:"full",children:[s&&(0,i.jsx)(x.n,{as:"div",borderRadius:"round",position:"absolute",className:C}),(0,i.jsx)(x.n,{as:s?"div":"img",background:"white",borderRadius:"round",position:"absolute",className:s?z:"jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l",src:e.imageUrl}),(0,i.jsxs)(x.n,{className:_,children:[(0,i.jsx)(V,{collectionStats:e,name:e.name??"",isVerified:e.isVerified??!1,isMobile:t,collectionSocialsIsOpen:r,toggleCollectionSocials:n}),(e.description||s)&&!t&&(0,i.jsx)(q,{description:e.description??""}),(0,i.jsx)(ee,{display:{sm:"none",md:"flex"},overflow:"hidden",stats:e,marginTop:"20"})]}),(e.description||s)&&t&&(0,i.jsx)(q,{description:e.description??""}),(0,i.jsx)("div",{id:"nft-anchor-mobile"}),(0,i.jsx)(ee,{isMobile:!0,display:{sm:"flex",md:"none"},stats:e,marginTop:"20",marginBottom:"12"})]})};var ie="_1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4bf",ne="_1wiwg135 _1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4b9",se=r(48313);const ae=(0,u.ZP)(m.X2)`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.surface3};
  margin-right: 12px;
`,oe=new Array(2).fill(null).map(((e,t)=>(0,i.jsx)("div",{className:"_1wiwg136 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3"},`ActivitySwitcherLoading-key-${t}`))),le=({showActivity:e,toggleActivity:t})=>{const r=N((e=>e.isCollectionStatsLoading));return(0,i.jsx)(ae,{gap:"24",marginBottom:"16",children:r?oe:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.n,{as:"button",className:e?ie:ne,onClick:()=>e&&t(),children:"Items"}),(0,i.jsx)(se.default,{logPress:!0,element:n.xo.NFT_ACTIVITY_TAB,eventOnTrigger:n.Yz.NFT_ACTIVITY_SELECTED,children:(0,i.jsx)(x.n,{as:"button",className:e?ne:ie,onClick:()=>!e&&t(),"data-testid":"nft-activity",children:"Activity"})})]})})};var de=r(11604),ce=r(66284),pe=r(21989),ge=r(5561),ue=r(89484),he=r(69201),xe=(e=>(e[e.LowToHigh=0]="LowToHigh",e[e.HighToLow=1]="HighToLow",e[e.RareToCommon=2]="RareToCommon",e[e.CommonToRare=3]="CommonToRare",e))(xe||{});const me={1:"highest",0:"lowest",2:"rare",3:"common"},fe={1:{field:"PRICE",asc:!1},0:{field:"PRICE",asc:!0},2:{field:"RARITY",asc:!0},3:{field:"RARITY",asc:!1}},ve={minPrice:"",maxPrice:"",minRarity:"",maxRarity:"",traits:[],hasRarity:!1,markets:[],marketCount:{},buyNow:!1,search:"",sortBy:0,showFullTraitName:{shouldShow:!1,trait_value:"",trait_type:""}},we=(0,$.Ue)()((0,E.mW)((e=>({...ve,setHasRarity:t=>e({hasRarity:t}),setSortBy:t=>e({sortBy:t}),setSearch:t=>e({search:t}),setBuyNow:t=>e({buyNow:t}),setMarketCount:t=>e({marketCount:t}),addMarket:t=>e((({markets:e})=>({markets:[...e,t]}))),removeMarket:t=>e((({markets:e})=>({markets:e.filter((e=>t!==e))}))),addTrait:t=>e((({traits:e})=>({traits:[...e,t]}))),removeTrait:t=>e((({traits:e})=>({traits:e.filter((e=>JSON.stringify(e)!==JSON.stringify(t)))}))),reset:()=>e((()=>({traits:[],minRarity:"",maxRarity:"",markets:[],minPrice:"",maxPrice:""}))),setMinPrice:t=>e((()=>({minPrice:t}))),setMaxPrice:t=>e((()=>({maxPrice:t}))),setMinRarity:t=>e((()=>({minRarity:t}))),setMaxRarity:t=>e((()=>({maxRarity:t}))),toggleShowFullTraitName:({shouldShow:t,trait_value:r,trait_type:i})=>e((()=>({showFullTraitName:{shouldShow:t,trait_value:r,trait_type:i}})))})),{name:"useCollectionTraits"})),ye=()=>{const e=we((e=>e.setSearch)),t=we((e=>e.search)),r=N((e=>e.isCollectionStatsLoading));return(0,i.jsx)(x.n,{as:"input",flex:"1",borderColor:{default:"surface3",focus:"accent1"},borderWidth:"1.5px",borderStyle:"solid",borderRadius:"12",padding:"12",backgroundColor:"surface1",maxWidth:"332",minWidth:"0",fontSize:"16",fontWeight:"book",height:"44",color:{placeholder:"neutral3",default:"neutral1"},value:t,placeholder:r?"":"Search by name",className:(0,pe.default)(r&&"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez88d"),onChange:t=>{e(t.currentTarget.value)}})};var je=r(32040),be=r(45079),ke=r(45878),Te=r(97994),ze=r(89081);const Ce=({asset:e,isMobile:t,mediaShouldBePlaying:r,setCurrentTokenPlayingMedia:s,uniformAspectRatio:a,setUniformAspectRatio:o,renderedHeight:l,setRenderedHeight:d})=>{var c,p;const{formatEther:g}=(0,j.Gb)(),u=(0,v.c)((e=>e.bagManuallyClosed)),h=(0,v.c)((e=>e.addAssetsToBag)),x=(0,v.c)((e=>e.removeAssetsFromBag)),m=(0,v.c)((e=>e.itemsInBag)),f=(0,v.c)((e=>e.bagExpanded)),w=(0,v.c)((e=>e.setBagExpanded)),y=(0,ze.useTrace)({page:n.yJ.NFT_COLLECTION_PAGE}),{isSelected:b}=(0,F.useMemo)((()=>({isSelected:m.filter((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address)).length>0})),[e,m]),k=e.notForSale||de.O$.from(e.priceInfo?e.priceInfo.ETHPrice:0).lt(0),T=(null===(p=e)||void 0===p||null===(c=p.rarity)||void 0===c?void 0:c.providers)?e.rarity.providers[0]:void 0,z=(0,F.useCallback)((()=>{var r;de.O$.from((null===(r=e.priceInfo)||void 0===r?void 0:r.ETHPrice)??0).gt(0)&&(h([e]),f||t||u||w({bagExpanded:!0}),(0,ke.sendAnalyticsEvent)(n.Yz.NFT_BUY_ADDED,{collection_address:e.address,token_id:e.tokenId,token_type:e.tokenType,...y}))}),[h,e,f,u,t,w,y]),C=(0,F.useCallback)((()=>{x([e])}),[e,x]),_=(0,F.useMemo)((()=>({primaryInfo:e.name?e.name:`#${e.tokenId}`,primaryInfoIcon:e.susFlag?(0,i.jsx)(be.yT,{}):null,primaryInfoRight:e.rarity&&T?(0,i.jsx)(be.SD,{provider:T}):null,secondaryInfo:k?"":`${g({input:e.priceInfo.ETHPrice,type:j.sw.NFTToken})} ETH`,selectedInfo:(0,i.jsx)(Te.Trans,{i18nKey:"nft.removeFromBag"}),notSelectedInfo:(0,i.jsx)(Te.Trans,{i18nKey:"nft.addToBag"}),disabledInfo:(0,i.jsx)(Te.Trans,{i18nKey:"nft.notListed"})})),[e.name,e.priceInfo.ETHPrice,e.rarity,e.susFlag,e.tokenId,g,k,T]);return(0,i.jsx)(je.y,{asset:e,display:_,isSelected:b,isDisabled:Boolean(e.notForSale),selectAsset:z,unselectAsset:C,mediaShouldBePlaying:r,uniformAspectRatio:a,setUniformAspectRatio:o,renderedHeight:l,setRenderedHeight:d,setCurrentTokenPlayingMedia:s,testId:"nft-collection-asset"})};var _e=r(49513),Se=r(92720),Pe="_10b1b4ve rgw6ez4bf rgw6ez453 rgw6ez19r rgw6ez12r rgw6ez8e1",Ie="_10b1b4vc",$e="rgw6ez80d rgw6ez6df rgw6ez8ap rgw6ez8bh rgw6ezvx rgw6ezff",Ee="_10b1b4vb rgw6ez805 rgw6ez5yr rgw6ez89x rgw6ez2cl rgw6ez27x",Ne="rgw6ez44r rgw6ez2jl rgw6ez7zd rgw6ezbf rgw6eze3 rgw6ez48f rgw6ez3x rgw6ez2dr rgw6ez2ol rgw6ez283",Re="_10b1b4v2",Me=(e=>(e[e.MARKPLACE_INDEX=0]="MARKPLACE_INDEX",e[e.PRICE_RANGE_INDEX=1]="PRICE_RANGE_INDEX",e[e.TRAIT_START_INDEX=2]="TRAIT_START_INDEX",e))(Me||{});const Fe=(0,$.Ue)()((0,E.mW)((e=>({traitsOpen:{},setTraitsOpen:(t,r)=>{e((({traitsOpen:e})=>({traitsOpen:{...e,[t]:r}})))}})),{name:"useTraitsOpen"}));var Be=r(73335),Le=r(17955);const Ae=(0,u.ZP)(m.X2)`
  justify-content: space-between;
  padding: 10px 16px 10px 12px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background: ${({theme:e})=>e.surface2};
  }
`,Ze=(0,u.ZP)(m.X2)`
  gap: 10px;
`,He={x2y2:"X2Y2",opensea:"OpenSea",looksrare:"LooksRare",sudoswap:"SudoSwap",nftx:"NFTX",nft20:"NFT20",cryptopunks:"LarvaLabs"},Oe=({title:e,element:t,onClick:r})=>(0,i.jsxs)(Ae,{onClick:r,children:[(0,i.jsx)(A.T.BodyPrimary,{children:e}),(0,i.jsx)(A.T.SubHeaderSmall,{children:t})]}),De=({title:e,value:t,addMarket:r,removeMarket:s,isMarketSelected:a,count:o})=>{const[l,d]=(0,F.useState)(!1);(0,F.useEffect)((()=>{d(a)}),[a]);const c=()=>{l?(s(t),d(!1)):(r(t),d(!0)),(0,ke.sendAnalyticsEvent)(n.Yz.NFT_FILTER_SELECTED,{filter_type:n.fm.MARKETPLACE})},p=(0,i.jsx)(Le.f,{variant:"branded",checked:l,onCheckPressed:c,text:String(o)}),g=(0,i.jsxs)(Ze,{children:[(0,Be.Dp)(e,"16"),e]});return(0,i.jsx)("div",{children:(0,i.jsx)(Oe,{title:g,element:p,onClick:c})},t)},Ue=({title:e,items:t,onClick:r,isOpen:n})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.n,{className:$e,opacity:n?"1":"0"}),(0,i.jsxs)(x.n,{as:"details",className:(0,pe.default)(f.Nf,!n&&Re),open:n,borderRadius:n?"0":"12",children:[(0,i.jsxs)(x.n,{as:"summary",className:`${Ne} ${Re}`,display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"16",paddingTop:"12",paddingLeft:"12",paddingBottom:"12",lineHeight:"20",borderRadius:"12",maxHeight:"48",onClick:r,children:[e,(0,i.jsx)(x.n,{display:"flex",alignItems:"center",children:(0,i.jsx)(x.n,{className:Pe,style:{transform:`rotate(${n?0:180}deg)`},children:(0,i.jsx)(S.g8,{className:Ie})})})]}),(0,i.jsx)(m.sg,{className:Ee,paddingBottom:"8",paddingLeft:"0",children:t})]})]}),Xe=()=>{const{addMarket:e,removeMarket:t,markets:r,marketCount:n}=we((({markets:e,marketCount:t,removeMarket:r,addMarket:i})=>({markets:e,marketCount:t,removeMarket:r,addMarket:i}))),[s,a]=(0,F.useState)(!!r.length),o=Fe((e=>e.setTraitsOpen)),l=(0,F.useMemo)((()=>Object.entries(He).map((([s,a])=>{var o;return(0,i.jsx)(De,{title:a,value:s,count:(null===(o=n)||void 0===o?void 0:o[s])||0,addMarket:e,removeMarket:t,isMarketSelected:r.includes(s)},s)}))),[e,n,t,r]);return(0,i.jsx)(Ue,{title:"Marketplaces",items:l,onClick:e=>{e.preventDefault(),a(!s),o(Me.MARKPLACE_INDEX,!s)},isOpen:s})};r(95676);var We=r(64653),Ve=r(95928),Ke=r(4105);const Ye=u.ZP.div`
  display: flex;
  gap: 60px;
  margin-top: 12px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.surface1};
  justify-content: space-between;
  background:
    linear-gradient(${({theme:e})=>e.surface1}, ${({theme:e})=>e.surface1}) padding-box,
    linear-gradient(to right, #4673fa, #9646fa) border-box;
  border: 2px solid transparent;
`,Ge=(0,u.ZP)(Ke.Z)`
  cursor: pointer;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,qe=u.ZP.div`
  display: flex;
  width: 100%;
  gap: 24px;
`,Je=u.ZP.div`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  min-width: 160px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Qe=u.ZP.div`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,et=u.ZP.div`
  display: flex;
  width: 100%;
  gap: 12px;
  align-items: center;
`,tt=u.ZP.input`
  width: 96px;
  color: ${({theme:e})=>e.neutral1};
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 16px;
  font-weight: 485;
  line-height: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: 100%;
  }

  :hover,
  :focus {
    outline: none;
    border: 1px solid ${({theme:e})=>e.accent1};
  }
`,rt=u.ZP.div`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 12px;
  padding: 4px;
  cursor: pointer;
`,it=u.ZP.div`
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({theme:e,active:t})=>t?e.surface3:"none"};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
`,nt=u.ZP.div`
  position: relative;
  width: 34px;
  height: 34px;
`,st=u.ZP.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background: ${({theme:e,src:t})=>t?`url(${t})`:e.neutral3};
  background-size: 26px;
  opacity: ${({src:e,index:t})=>e?1:0===t?.9:1===t?.6:.3};
  transform: ${({index:e})=>0===e?"translate(-50%, -50%) rotate(-4.42deg)":1===e?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)"};
  z-index: ${({index:e})=>3-e};
`,at=RegExp("^(0|[1-9][0-9]*)$"),ot=RegExp("^\\d*\\.?\\d{0,2}$"),lt=({nfts:e})=>(0,i.jsx)(nt,{children:[...Array(3)].map(((t,r)=>(0,i.jsx)(st,{index:r,src:e.length-1>=r?e[e.length-1-r].smallImageUrl:void 0},r)))}),dt=({contractAddress:e,minPrice:t,maxPrice:r})=>{var n;const s=(0,T.useTheme)(),{formatEther:a}=(0,j.Gb)(),[o,l]=(0,F.useReducer)((e=>!e),!0),[d,c]=(0,F.useState)(""),p=(0,v.c)((e=>e.addAssetsToBag)),g=(0,v.c)((e=>e.removeAssetsFromBag)),u=(0,v.c)((e=>e.itemsInBag)),h=(0,v.c)((e=>e.lockSweepItems)),x=(0,v.c)((e=>e.setBagExpanded)),m=we((e=>e.traits)),f=we((e=>e.markets)),w=pt(e,"others",t,r),y=pt(e,R.Fz.Sudoswap,t,r),b=pt(e,R.Fz.NFTX,t,r),k=pt(e,R.Fz.NFT20,t,r),{data:z}=(0,ge.he)(w),{data:C}=(0,ge.he)(y),{data:_}=(0,ge.he)(b),{data:S}=(0,ge.he)(k),{sortedAssets:P,sortedAssetsTotalEth:I}=(0,F.useMemo)((()=>{var e,t,r,i;if(!z&&!C&&!_&&!S)return{sortedAssets:void 0,sortedAssetsTotalEth:de.O$.from(0)};let n=0,s=0,a=[];C&&(a=[...a,...C]),_&&(a=[...a,..._]),S&&(a=[...a,...S]);const o=a.filter((e=>e.marketplace===R.Fz.Sudoswap&&!e.susFlag));a.forEach((e=>{if(!e.susFlag)if(e.marketplace===R.Fz.Sudoswap){const t=(0,We.Pu)(e,o.filter((t=>(0,Ve.z)(e,t))).findIndex((t=>t.tokenId===e.tokenId)));e.priceInfo.ETHPrice=t??"0"}else{const t=e.marketplace===R.Fz.NFTX,r=(0,We.Pu)(e,t?n:s);de.O$.from(r).gt(0)&&(t?n++:s++),e.priceInfo.ETHPrice=r}})),a=z?z.concat(a):a,a.sort(((e,t)=>de.O$.from(e.priceInfo.ETHPrice).gt(de.O$.from(t.priceInfo.ETHPrice))?1:-1));let l=a.filter((e=>de.O$.from(e.priceInfo.ETHPrice).gt(0)&&!e.susFlag));return l=l.slice(0,Math.max((null===(e=z)||void 0===e?void 0:e.length)??0,(null===(t=C)||void 0===t?void 0:t.length)??0,(null===(r=_)||void 0===r?void 0:r.length)??0,(null===(i=S)||void 0===i?void 0:i.length)??0)),{sortedAssets:l,sortedAssetsTotalEth:l.reduce(((e,t)=>e.add(de.O$.from(t.priceInfo.ETHPrice))),de.O$.from(0))}}),[z,C,_,S]),{sweepItemsInBag:$,sweepEthPrice:E}=(0,F.useMemo)((()=>{const t=u.filter((t=>t.inSweep&&t.asset.address===e)).map((e=>e.asset)),r=t.reduce(((e,t)=>e.add(de.O$.from(t.priceInfo.ETHPrice))),de.O$.from(0));return{sweepItemsInBag:t,sweepEthPrice:r}}),[u,e]);(0,F.useEffect)((()=>{0===$.length&&c("")}),[$]),(0,F.useEffect)((()=>{h(e)}),[e,m,f,t,r,h]);const N=e=>{if(P)if(o)0===$.length&&e>0&&x({bagExpanded:!0}),$.length<e?p(P.slice($.length,e),!0):g($.slice(e,$.length),!0),c(e<1?"":e.toString());else{const t=(0,ce.parseEther)(e.toString());if(E.lte(t)){let e=$.length,r=E;const i=[];for(;e<P.length&&r.add(de.O$.from(P[e].priceInfo.ETHPrice)).lte(t);)i.push(P[e]),r=r.add(de.O$.from(P[e].priceInfo.ETHPrice)),e++;i.length>0&&(0===$.length&&x({bagExpanded:!0}),p(i,!0))}else{let e=$.length-1,r=E;const i=[];for(;e>=0&&r.gt(t);)i.push($[e]),r=r.sub(de.O$.from($[e].priceInfo.ETHPrice)),e--;i.length>0&&g(i,!0)}c(0===e?"":e.toFixed(2))}};return(0,i.jsxs)(Ye,{"data-testid":"nft-sweep-slider",children:[(0,i.jsxs)(qe,{children:[(0,i.jsx)(Qe,{children:(0,i.jsx)(A.T.SubHeader,{lineHeight:"20px",paddingTop:"6px",paddingBottom:"6px",children:(0,i.jsx)(Te.Trans,{i18nKey:"nft.sweep"})})}),(0,i.jsxs)(et,{children:[(0,i.jsx)(Ge,{defaultValue:0,min:0,max:o?(null===(n=P)||void 0===n?void 0:n.length)??0:parseFloat((0,ce.formatEther)(I).toString()),value:o?$.length:parseFloat((0,ce.formatEther)(E.toString())),step:o?1:.01,trackStyle:{top:"3px",height:"8px",background:"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)"},handleStyle:{top:"3px",width:"12px",height:"20px",backgroundColor:"#4673FA",borderRadius:"4px",border:"none",opacity:"1",boxShadow:`${s.deprecated_shallowShadow.slice(0,-1)}`},railStyle:{top:"3px",height:"8px",backgroundColor:`${s.surface3}`},onChange:e=>{"number"===typeof e&&P&&(o?(Math.floor(e)!==Math.floor(""!==d?parseFloat(d):0)&&N(Math.floor(e)),c(e<1?"":e.toString())):(N(e),c(0===e?"":e.toFixed(2))))}}),(0,i.jsx)(tt,{inputMode:"decimal",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:"0",minLength:1,maxLength:79,spellCheck:"false",value:o&&""!==d?Math.floor(parseFloat(d)):d,onChange:e=>{var t;""===(t=e.target.value.replace(/,/g,"."))?(N(0),c("")):(o&&at.test(t)||!o&&ot.test(t))&&(N(parseFloat(t)),c(t))}}),(0,i.jsxs)(rt,{onClick:()=>{c(""),g($),l()},children:[(0,i.jsx)(it,{active:o,children:"Items"}),(0,i.jsx)(it,{active:!o,children:"ETH"})]})]})]}),(0,i.jsxs)(Je,{children:[(0,i.jsx)(A.T.SubHeader,{"font-size":"14px",children:`${a({input:E.toString(),type:j.sw.NFTToken})} ETH`}),(0,i.jsx)(lt,{nfts:$})]})]})},ct=[R.Fz.Opensea,R.Fz.X2Y2,R.Fz.LooksRare];function pt(e,t,r,i){const n=we((e=>e.traits)),s=we((e=>e.markets)),a=!!s.length;return(0,F.useMemo)((()=>{if(a){if("others"===t){const t=s.filter((e=>!(0,R.g7)(e)));return t.length>0?{contractAddress:e,traits:n,markets:t}:{contractAddress:"",traits:[],markets:[]}}if(!s.includes(t))return{contractAddress:"",traits:[],markets:[]}}switch(t){case R.Fz.Sudoswap:case R.Fz.NFTX:case R.Fz.NFT20:return{contractAddress:e,traits:n,markets:[t],price:{low:r,high:i,symbol:"ETH"}};case"others":return{contractAddress:e,traits:n,markets:ct,price:{low:r,high:i,symbol:"ETH"}}}}),[e,a,t,s,i,r,n])}const gt=u.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 6px 6px 12px;
  font-weight: 535;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
`,ut=u.ZP.div`
  color: ${({theme:e})=>e.neutral2};
  height: 28px;
  width: 28px;
  border: none;
  padding-top: 1px;
`,ht=({onClick:e,value:t})=>(0,i.jsxs)(gt,{children:[(0,i.jsx)("span",{children:t}),(0,i.jsx)(ut,{onClick:e,children:(0,i.jsx)(S.aM,{cursor:"pointer"})})]});var xt=r(83024),mt=r(48444);const ft=({dropDownOptions:e,inFilters:t,mini:r,miniPrompt:n,top:s,left:a})=>{const o=we((e=>e.sortBy)),[l,d]=(0,F.useReducer)((e=>!e),!1),[c,p]=(0,F.useReducer)((e=>!e),!1),[g,u]=(0,F.useState)(o),h=N((e=>e.isCollectionStatsLoading)),[v,w]=(0,F.useState)(0);(0,F.useEffect)((()=>{u(o)}),[o]);const y=(0,F.useRef)(null);(0,mt.t)(y,(()=>l&&d())),(0,F.useEffect)((()=>w(0)),[e]);const j=(0,F.useMemo)((()=>e[g].reverseOnClick||e[g].reverseIndex),[g,e]),b=h?220:t?"full":r?"min":v||"300px";return(0,i.jsxs)(x.n,{ref:y,borderRadius:"12",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,style:{width:b},children:[(0,i.jsx)(x.n,{as:"button",borderRadius:"12",borderStyle:"solid",background:r?"none":"surface1",borderColor:"surface3",borderWidth:"1px",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,padding:t?"12":r?"0":"8",color:"neutral1",whiteSpace:"nowrap",display:"flex",justifyContent:"space-between",height:"44",alignItems:"center",width:t?"full":"inherit",onClick:d,cursor:"pointer",className:h?"_12q7kth3 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez1al":(0,pe.default)(l&&!r&&"_12q7kth0"),children:!h&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(x.n,{display:"flex",alignItems:"center",color:"neutral1",children:[!l&&j&&(0,i.jsxs)(m.X2,{marginRight:"4",onClick:t=>{if(t.stopPropagation(),e[g].reverseOnClick){var r,i;null===(r=(i=e[g]).reverseOnClick)||void 0===r||r.call(i),p()}else{const t=e[g].reverseIndex??1;e[t-1].onClick(),u(t-1)}},children:[e[g].reverseOnClick&&(c?(0,i.jsx)(S.iB,{}):(0,i.jsx)(S.L7,{})),e[g].reverseIndex&&(g>(e[g].reverseIndex??1)-1?(0,i.jsx)(S.iB,{}):(0,i.jsx)(S.L7,{}))]}),(0,i.jsx)(x.n,{marginLeft:j?"4":"0",marginRight:r?"2":"0",color:"neutral1",className:f.km,children:r?n:l?"Sort by":e[g].displayText})]}),(0,i.jsx)(S.g8,{secondaryColor:r?I.Z4.colors.neutral1:void 0,secondaryWidth:r?"20":void 0,secondaryHeight:r?"20":void 0,style:{transform:l?"":"rotate(180deg)"}})]})}),(0,i.jsx)(x.n,{position:"absolute",zIndex:"3",width:t?"auto":"inherit",right:t?"16":"auto",paddingBottom:"8",fontSize:"14",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",borderRadius:"8",borderTopLeftRadius:r?void 0:"0",borderTopRightRadius:r?void 0:"0",overflowY:"hidden",transition:"250",display:l||!v?"block":"none",visibility:v?"visible":"hidden",marginTop:r?"12":"0",className:(0,pe.default)(!r&&"_12q7kth1"),style:{top:s?`${s}px`:"inherit",left:t?"16px":a?`${a}px`:"inherit"},children:v?l&&e.map(((t,n)=>(0,i.jsx)(vt,{option:t,index:n,mini:r,onClick:()=>{e[n].onClick(),u(n),d(),c&&p()}},n))):[e.reduce(((e,t)=>t.displayText.length>=e.displayText.length?t:e),e[0])].map(((e,t)=>(0,i.jsx)(wt,{option:e,index:t,setMaxWidth:w},t)))})]})},vt=({option:e,index:t,onClick:r,mini:n})=>(0,i.jsx)(x.n,{as:"button",border:"none",display:"flex",alignItems:"center",paddingTop:"10",paddingBottom:"10",paddingLeft:"12",paddingRight:n?"20":"0",width:"full",background:{default:"surface1",hover:"surface3"},color:"neutral1",onClick:r,cursor:"pointer",children:(0,i.jsx)(x.n,{marginLeft:"8",className:f.km,children:e.displayText})},t),wt=({option:e,index:t,setMaxWidth:r})=>{const n=(0,F.useRef)(null);return(0,F.useLayoutEffect)((()=>{n&&n.current&&r(Math.ceil(n.current.getBoundingClientRect().width)+52)})),(0,i.jsx)(x.n,{position:"absolute",ref:n,children:(0,i.jsx)(vt,{option:e,index:t})},t)};var yt=r(62390);const jt=(0,$.Ue)()((0,E.mW)((e=>({priceRangeLow:"",setPriceRangeLow:t=>{e((()=>({priceRangeLow:t})))},priceRangeHigh:"",setPriceRangeHigh:t=>{e((()=>({priceRangeHigh:t})))},prevMinMax:[0,100],setPrevMinMax:t=>{e((()=>({prevMinMax:t})))}})),{name:"usePriceRange"}));var bt=r(82208);const kt="undefined"!==typeof window;const Tt=()=>{var e;const t=!!kt&&window.innerWidth<I.AV.sm?"nft-anchor-mobile":"nft-anchor";null===(e=window.document.getElementById(t))||void 0===e||e.scrollIntoView({behavior:"smooth"})};var zt=r(18806);const Ct=e=>{const t={...e};for(const i in t){const e=t[i],r=ve[i];JSON.stringify(e)===JSON.stringify(r)&&delete t[i]}t.all!==ve.buyNow&&delete t.all;const r=me[ve.sortBy];return t.sort===r&&delete t.sort,t},_t=(e,t)=>{const r={...e};["traits","markets"].forEach((e=>{r[e]||(r[e]=[]),r[e]&&"string"===typeof r[e]&&(r[e]=[r[e]])}));try{const{buyNow:e,search:i}=ve;if(Object.entries(me).forEach((([e,t])=>{t===r.sort&&(r.sortBy=Number(e))})),r.buyNow=!(void 0===r.all?!e:r.all),r.search=void 0===r.search?i:String(r.search),2===r.traits.length){const[e,t]=r.traits;`${e}${t}`.includes(",")||e.startsWith("(")&&!e.endsWith(")")&&t.endsWith(")")&&!t.startsWith("(")&&(r.traits=[`${e},${t}`])}r.traits=r.traits.map((e=>{const r=(e=>e.substring(1,e.length-1))(e.replace(/(")/g,"")),[i,n]=r.split(",");return(t.traits&&t.traits[i].find((e=>e.trait_value===n)))??{trait_type:i,trait_value:n,trait_count:0}}))}catch(i){r.traits=[]}return r};var St=r(10581),Pt=r(6282),It=r(70854);const $t=new Map,Et=T.css`
  margin: 0 16px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin: 0 20px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    margin: 0 26px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    margin: 0 48px;
  }
`,Nt=u.ZP.div`
  display: flex;
  flex: 1 1 auto;
  gap: 10px;
  justify-content: space-between;

  ${Et}
`,Rt=u.ZP.div`
  display: flex;
  gap: 12px;
  flex: 1;
  min-width: 0px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 10px;
  }
`,Mt=u.ZP.div`
  width: max-content;
  height: 44px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    ${({isFiltersExpanded:e})=>e&&"display: none;"}
  }
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Ft=u.ZP.div`
  display: block;
  text-align: center;
`,Bt=u.ZP.span`
  ${s.c}
`,Lt=u.ZP.div`
  ${Et}
`,At=u.ZP.div`
  display: flex;
  gap: 8px;
  border: none;
  border-radius: 12px;
  padding: 12px 18px 12px 12px;
  cursor: ${({disabled:e})=>e?"auto":"pointer"};
  color: ${({toggled:e,disabled:t,theme:r})=>e&&!t?r.deprecated_accentTextLightPrimary:r.neutral1};
  background: ${({theme:e,toggled:t,disabled:r})=>!r&&t?"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)":e.surface3};
  opacity: ${({disabled:e})=>e?.4:1};
  :hover {
    background-color: ${({theme:e})=>e.surface3};
    transition: ${({theme:{transition:{duration:e,timing:t}}})=>`${e.fast} background-color ${t.in}`};
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 12px 12px 12px 12px;
  }
`,Zt=(0,u.ZP)(A.T.BodyPrimary)`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Ht=(0,u.ZP)(m.X2)`
  gap: 8px;
`,Ot=({height:e})=>(0,i.jsx)(x.n,{width:"full",className:Se.P,children:(0,i.jsx)(_e.p,{height:e})}),Dt=()=>(0,i.jsx)(Lt,{children:(0,i.jsxs)(m.sg,{alignItems:"flex-start",position:"relative",width:"full",children:[(0,i.jsxs)(m.X2,{marginY:"12",gap:"12",marginBottom:"40",children:[(0,i.jsx)(x.n,{className:P.S,borderRadius:"12",width:{sm:"44",md:"100"},height:"44"}),(0,i.jsx)(x.n,{className:P.S,borderRadius:"12",height:"44",display:{sm:"none",md:"flex"},style:{width:"220px"}}),(0,i.jsx)(x.n,{className:P.S,borderRadius:"12",height:"44",width:{sm:"276",md:"332"}})]}),(0,i.jsx)(Ot,{})]})}),Ut=(e,t)=>{const r=[{displayText:"Price: Low to High",onClick:()=>e(xe.LowToHigh),reverseIndex:2,sortBy:xe.LowToHigh},{displayText:"Price: High to Low",onClick:()=>e(xe.HighToLow),reverseIndex:1,sortBy:xe.HighToLow}];return t?r.concat([{displayText:"Rarity: Rare to Common",onClick:()=>e(xe.RareToCommon),reverseIndex:4,sortBy:xe.RareToCommon},{displayText:"Rarity: Common to Rare",onClick:()=>e(xe.CommonToRare),reverseIndex:3,sortBy:xe.CommonToRare}]):r},Xt=({contractAddress:e,collectionStats:t,rarityVerified:r})=>{var s,a,o,l,d;const{chainId:u}=(0,g.m)(),h=we((e=>e.traits)),w=we((e=>e.minPrice)),j=we((e=>e.maxPrice)),b=we((e=>e.markets)),k=we((e=>e.sortBy)),T=we((e=>e.search)),z=we((e=>e.setMarketCount)),C=we((e=>e.setSortBy)),_=we((e=>e.buyNow)),P=jt((e=>e.setPriceRangeLow)),I=jt((e=>e.priceRangeLow)),$=jt((e=>e.priceRangeHigh)),E=jt((e=>e.setPriceRangeHigh)),M=jt((e=>e.setPrevMinMax)),B=N((e=>e.setIsCollectionNftsLoading)),L=we((e=>e.removeTrait)),A=we((e=>e.removeMarket)),Z=we((e=>e.reset)),H=we((e=>e.setMinPrice)),O=we((e=>e.setMaxPrice)),D=we((e=>e.setHasRarity)),U=(0,v.c)((e=>e.toggleBag)),X=(0,v.c)((e=>e.bagExpanded)),W=(0,v.c)((e=>e.itemsInBag)),V=(0,ue.Z)(w,500),K=(0,ue.Z)(j,500),Y=(0,ue.Z)(T,500),[G,q]=(0,F.useState)(bt.Yp.unset),[J,Q]=(0,F.useState)(),[ee,te]=(0,F.useState)(!1),re={address:e,orderBy:fe[k].field,asc:fe[k].asc,filter:{listed:_,marketplaces:b.length>0?b.map((e=>e.toUpperCase())):void 0,maxPrice:K?(0,ce.parseEther)(K.toString()).toString():void 0,minPrice:V?(0,ce.parseEther)(V.toString()).toString():void 0,tokenSearchQuery:Y,traits:h.length>0?h.map((e=>({name:e.trait_type,values:[e.trait_value]}))):void 0},first:ge.iQ},{data:ie,loading:ne,hasNext:ae,loadMore:oe}=(0,ge.gP)(re),le=(0,F.useCallback)((e=>{const t=W.some((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address));if(e.marketplace===R.Fz.Sudoswap){const r=W.filter((t=>(0,Ve.z)(e,t.asset)));return t?r.findIndex((t=>t.asset.tokenId===e.tokenId)):r.length}return t?W.filter((t=>(0,Ve.H)(e,t.asset))).findIndex((t=>t.asset.tokenId===e.tokenId)):W.filter((t=>(0,Ve.H)(e,t.asset))).length}),[W]),je=(0,F.useCallback)((e=>(0,We.Pu)(e,le(e))),[le]),be=(0,F.useMemo)((()=>{if(!ie||!ie.some((e=>e.marketplace&&(0,R.g7)(e.marketplace))))return ie;const e=[...ie];return e.forEach((e=>e.marketplace&&(0,R.g7)(e.marketplace)&&(e.priceInfo.ETHPrice=je(e)??"0"))),k!==xe.HighToLow&&k!==xe.LowToHigh||e.sort(((e,t)=>{var r,i;const n=de.O$.from((null===(r=e.priceInfo)||void 0===r?void 0:r.ETHPrice)??0),s=de.O$.from((null===(i=t.priceInfo)||void 0===i?void 0:i.ETHPrice)??0);if(n.gt(0)&&s.lte(0))return-1;if(s.gt(0)&&n.lte(0))return 1;const a=n.sub(s);return a.gt(0)?k===xe.LowToHigh?1:-1:a.lt(0)?k===xe.LowToHigh?-1:1:0})),e}),[ie,k,je]),[ke,Te]=(0,F.useState)(),[ze,Pe]=(0,yt.w)(),Ie=(0,F.useRef)(null),$e=(0,c.d)(),Ee=(0,p.e)();(0,F.useEffect)((()=>{B(ne)}),[ne,B]);const Ne=(0,F.useMemo)((()=>{var e;const r=(0,Be.oY)($t,null===(e=t)||void 0===e?void 0:e.address,be)??!1;return D(r),r}),[t.address,be,D]),Re=(0,F.useMemo)((()=>Ut(C,Ne)),[Ne,C]);(0,F.useEffect)((()=>(te(!1),()=>{we.setState(ve)})),[e]);const Me=(0,F.useMemo)((()=>be?be.map((e=>(0,i.jsx)(Ce,{asset:e,isMobile:$e,mediaShouldBePlaying:e.tokenId===ke,setCurrentTokenPlayingMedia:Te,rarityVerified:r,uniformAspectRatio:G,setUniformAspectRatio:q,renderedHeight:J,setRenderedHeight:Q},e.address+e.tokenId))):null),[be,$e,ke,r,G,J]),Fe=be&&be.length>0,Le=Fe&&be[0]&&(null===(s=be[0])||void 0===s?void 0:s.tokenType)===It.NftStandard.Erc1155,Ae=(0,F.useMemo)((()=>V&&K?`Price: ${V} - ${K} ETH`:V?`Min. Price: ${V} ETH`:K?`Max Price: ${K} ETH`:void 0),[V,K]);(0,F.useEffect)((()=>{var e,r;const i={};null===(r=t)||void 0===r||null===(e=r.marketplaceCount)||void 0===e||e.forEach((({marketplace:e,count:t})=>{i[e]=t})),z(i),Ie.current=we.getState()}),[null===(a=t)||void 0===a?void 0:a.marketplaceCount,z]);const Ze=(0,Pt.TH)();(0,F.useEffect)((()=>{var e;if(null===(e=t)||void 0===e?void 0:e.traits){const e=((e,t)=>{if(!e.search)return;const r=zt.parse(e.search,{arrayFormat:"comma",parseNumbers:!0,parseBooleans:!0});return _t(r,t)})(Ze,t);requestAnimationFrame((()=>{e&&we.setState(e)})),we.subscribe((e=>{JSON.stringify(Ie.current)!==JSON.stringify(e)&&((e=>{const t={};["markets","maxPrice","maxRarity","minPrice","minRarity","traits","all","search","sort"].forEach((r=>{switch(r){case"traits":{const r=e.traits.map((({trait_type:e,trait_value:t})=>`("${e}","${t}")`));t.traits=r;break}case"all":t.all=!e.buyNow;break;case"sort":t.sort=me[e.sortBy];break;default:t[r]=e[r]}}));const r=Ct(t),i=window.location.href.split("?")[0],n=zt.stringify(r,{arrayFormat:"comma"});window.history.replaceState({},"",`${i}${n&&`?${n}`}`)})(e),Ie.current=e)}))}}),[Ze]),(0,F.useEffect)((()=>{q(bt.Yp.unset),Q(void 0)}),[e]),(0,F.useEffect)((()=>{var e;if(t&&(null===(e=t.stats)||void 0===e?void 0:e.floor_price)){var r,i;const e=null===(r=t.stats)||void 0===r?void 0:r.floor_price,s=10*(null===(i=t.stats)||void 0===i?void 0:i.floor_price);var n;if(""===I)P(null===(n=e)||void 0===n?void 0:n.toFixed(2));""===$&&E(s.toFixed(2))}}),[t,I,$,E,P]);const Oe=(0,F.useCallback)((()=>{Le||(ee||(Tt(),X||$e||U()),te(!ee))}),[X,Le,$e,ee,U]),De=(0,F.useCallback)((()=>{Z(),M([0,100]),Tt()}),[Z,M]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(x.x,{backgroundColor:"surface1",position:"sticky",top:"72",width:"full",zIndex:"3",marginBottom:{sm:"8",md:"20"},paddingTop:"16",paddingBottom:"16",children:[(0,i.jsxs)(Nt,{children:[(0,i.jsxs)(Rt,{children:[(0,i.jsx)(se.default,{logPress:!0,element:n.xo.NFT_FILTER_BUTTON,eventOnTrigger:n.Yz.NFT_FILTER_OPENED,logImpression:!ze,properties:{collection_address:e,chain_id:u},children:(0,i.jsx)(he.L,{isMobile:$e,isFiltersExpanded:ze,collectionCount:(null===(l=be)||void 0===l||null===(o=l[0])||void 0===o?void 0:o.totalCount)??0,onClick:()=>{X&&!Ee.xl&&U(),Pe(!ze)}})}),(0,i.jsx)(Mt,{isFiltersExpanded:ze,children:(0,i.jsx)(ft,{dropDownOptions:Re})}),(0,i.jsx)(ye,{})]}),!Le&&(0,i.jsxs)(At,{toggled:ee,disabled:Le,className:f.km,onClick:Oe,"data-testid":"nft-sweep-button",children:[(0,i.jsx)(S.UV,{viewBox:"0 0 24 24",width:"20px",height:"20px"}),(0,i.jsx)(Zt,{fontWeight:535,color:"currentColor",lineHeight:"20px",children:"Sweep"})]})]}),(0,i.jsxs)(Lt,{children:[ee&&(0,i.jsx)(dt,{contractAddress:e,minPrice:V,maxPrice:K}),(0,i.jsxs)(m.X2,{paddingTop:b.length||h.length||Ae?"12":"0",gap:"8",flexWrap:"wrap",children:[b.map((e=>(0,i.jsx)(ht,{value:(0,i.jsxs)(Ht,{children:[(0,Be.Dp)(e,"16"),He[e]]}),onClick:()=>{Tt(),A(e)}},e))),h.map((e=>(0,i.jsx)(ht,{value:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,y._)(Number(e.trait_value))}`:`${e.trait_type}: ${e.trait_value}`,onClick:()=>{Tt(),L(e)}},e.trait_value))),Ae&&(0,i.jsx)(ht,{value:Ae,onClick:()=>{Tt(),H(""),O(""),M([0,100])}}),Boolean(h.length||b.length||Ae)&&(0,i.jsx)(xt.v,{onClick:De,children:"Clear All"})]})]})]}),(0,i.jsx)(Lt,{children:ne?(0,i.jsx)(Ot,{height:J}):(0,i.jsx)(St.Z,{next:oe,hasMore:ae??!1,loader:Boolean(ae&&Fe)&&(0,i.jsx)(_e.p,{}),dataLength:(null===(d=be)||void 0===d?void 0:d.length)??0,style:{overflow:"unset"},className:Fe?Se.P:void 0,children:Fe?Me:(0,i.jsx)(m.M5,{width:"full",color:"neutral2",textAlign:"center",style:{height:"60vh"},children:(0,i.jsxs)(Ft,{children:[(0,i.jsx)("p",{className:f.Es,children:"No NFTS found"}),(0,i.jsx)(x.n,{onClick:Z,type:"button",className:(0,pe.default)(f.Km,f.km),color:"accent1",cursor:"pointer",children:(0,i.jsx)(Bt,{children:"View full collection"})})]})})})})]})};var Wt="rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez6w3 rgw6ez2u9 rgw6ez80x rgw6ez7zp rgw6ez899";const Vt=u.ZP.div`
  padding: ${({isMobile:e})=>e?"0px 16px 0px 12px":"0px"};
`,Kt=e=>{const{children:t,index:r,title:n}=e,[s,a]=(0,F.useState)(!1),o=Fe((e=>e.traitsOpen)),l=Fe((e=>e.setTraitsOpen)),d=(0,c.d)(),p=void 0!==r&&o[r-1],g=r!==Me.TRAIT_START_INDEX;return(0,F.useEffect)((()=>{void 0!==r&&l(r,s)}),[s,r,l]),(0,i.jsxs)(i.Fragment,{children:[g&&(0,i.jsx)(x.n,{className:(0,pe.default)(f.Nf,!s&&Re,$e),opacity:!p&&s&&0!==r?"1":"0",marginTop:p?"0":"8"}),(0,i.jsxs)(x.n,{as:"details",className:(0,pe.default)(f.Nf,!s&&Re),open:s,children:[(0,i.jsxs)(x.n,{as:"summary",className:`${Ne} ${Re}`,onClick:e=>{e.preventDefault(),a(!s)},children:[n,(0,i.jsxs)(x.n,{display:"flex",alignItems:"center",children:[(0,i.jsx)(x.n,{color:"neutral2",display:"inline-block",marginRight:"12",children:e.numTraits}),(0,i.jsx)(x.n,{className:Pe,style:{transform:`rotate(${s?0:180}deg)`},children:(0,i.jsx)(S.g8,{className:Ie})})]})]}),(0,i.jsx)(Vt,{isMobile:d,children:t})]})]})};var Yt=r(52694),Gt=r(64712);const qt=(0,u.ZP)(Ke.Z)`
  cursor: pointer;
`,Jt=()=>{const[e,t]=(0,F.useState)(""),r=we((e=>e.setMinPrice)),s=we((e=>e.setMaxPrice)),a=we((e=>e.minPrice)),o=we((e=>e.maxPrice)),l=jt((e=>e.priceRangeLow)),d=jt((e=>e.priceRangeHigh)),c=jt((e=>e.setPriceRangeLow)),p=jt((e=>e.setPriceRangeHigh)),g=jt((e=>e.prevMinMax)),u=jt((e=>e.setPrevMinMax)),h=(0,T.useTheme)(),v=(0,Pt.TH)();(0,F.useEffect)((()=>{r(""),s(""),c(""),p("")}),[v.pathname,r,s,c,p]);const w=e=>{t(e.currentTarget.placeholder),e.currentTarget.placeholder=""},y=r=>{r.currentTarget.placeholder=e,t(""),(a||o)&&(0,ke.sendAnalyticsEvent)(n.Yz.NFT_FILTER_SELECTED,{filter_type:n.fm.PRICE_RANGE})};return(0,i.jsxs)(Kt,{title:"Price range",index:Me.PRICE_RANGE_INDEX,children:[(0,i.jsxs)(m.X2,{marginTop:"12",color:"neutral1",justifyContent:"space-between",children:[(0,i.jsx)(m.X2,{position:"relative",children:(0,i.jsx)(Yt.A,{style:{width:"126px"},className:Wt,placeholder:l,onChange:e=>{const[,t]=g;if(e.currentTarget.value){const r=parseInt(e.currentTarget.value)-parseInt(l),i=Math.floor(r/(parseInt(d)-parseInt(l))*100);parseInt(e.currentTarget.value)>=parseInt(o)?u([t,t]):u([i,t])}else u([0,t]);r(e.currentTarget.value.toString()),Tt()},onFocus:w,value:a,onBlur:y})}),(0,i.jsx)(x.n,{className:f.d1,children:"to"}),(0,i.jsx)(m.X2,{position:"relative",children:(0,i.jsx)(Yt.A,{style:{width:"126px"},className:Wt,placeholder:d,value:o,onChange:e=>{const[t]=g;if(e.currentTarget.value){const r=parseInt(d)-parseInt(e.currentTarget.value),i=Math.floor(100-r/(parseInt(d)-parseInt(l))*100);parseInt(e.currentTarget.value)<=parseInt(a)?u([t,t]):u([t,i])}else u([t,100]);s(e.currentTarget.value),Tt()},onFocus:w,onBlur:y})})]}),(0,i.jsx)(m.X2,{marginTop:"24",marginBottom:"12",paddingLeft:"8",paddingRight:"8",children:(0,i.jsx)(qt,{defaultValue:[0,100],min:0,max:100,range:!0,step:1e-4,value:g,trackStyle:{top:"3px",height:"8px",background:`${h.accent1}`},handleStyle:{top:"3px",width:"12px",height:"20px",opacity:"1",backgroundColor:"white",borderRadius:"4px",border:"none",boxShadow:Gt.I.deprecated_shallowShadow.slice(0,-1)},railStyle:{top:"3px",height:"8px",backgroundColor:`${h.accent2}`},onChange:e=>{if("number"===typeof e)return;const[t,i]=e,n=parseFloat(d.replace(/,/g,"")),a=parseFloat(l.replace(/,/g,"")),o=n-a,c=n-(100-i)/100*o;r((t/100*o+a).toFixed(2).toString()),s(c.toFixed(2).toString()),0===t&&r(""),100===i&&s(""),u(e)}})})]})};var Qt=r(1285),er=r(67544);const tr=({trait:e,addTrait:t,removeTrait:r,isTraitSelected:s,style:a})=>{const[o,l]=(0,F.useState)(!1),[d,c]=(0,F.useState)(!1),p=()=>c(!d),g=we((e=>e.toggleShowFullTraitName)),{shouldShow:u,trait_value:h,trait_type:v}=we((e=>e.showFullTraitName));(0,F.useEffect)((()=>{l(s)}),[s]);const w=()=>{Tt(),o?(r(e),l(!1)):(t(e),l(!0)),(0,ke.sendAnalyticsEvent)(n.Yz.NFT_FILTER_SELECTED,{filter_type:n.fm.TRAIT})},j=u&&v===e.trait_type&&h===e.trait_value;return(0,i.jsxs)(m.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:`${f.Nf} _10b1b4v5`,justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...a},maxHeight:"44",onMouseEnter:p,onMouseLeave:p,onClick:w,children:[(0,i.jsx)(x.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",style:{minHeight:15},maxWidth:j?"full":"160",onMouseOver:t=>(t=>{t.currentTarget.offsetWidth<t.currentTarget.scrollWidth&&g({shouldShow:!0,trait_value:e.trait_value,trait_type:e.trait_type})})(t),onMouseLeave:()=>g({shouldShow:!1,trait_type:"",trait_value:""}),children:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,y._)(Number(e.trait_value))}`:e.trait_value}),(0,i.jsx)(Le.f,{checked:o,onCheckPressed:w,text:j?String(e.trait_count):"",variant:"branded"})]},e.trait_value)},rr=({traits:e,type:t,index:r})=>{const n=we((e=>e.addTrait)),s=we((e=>e.removeTrait)),a=we((e=>e.traits)),[o,l]=(0,F.useState)(""),d=(0,ue.Z)(o,300),c=(0,F.useMemo)((()=>e.filter((e=>{var t;return null===(t=e.trait_value)||void 0===t?void 0:t.toString().toLowerCase().includes(d.toLowerCase())}))),[d,e]),p=(0,F.useCallback)((function({data:e,index:t,style:r}){const o=e[t],l=a.find((({trait_type:e,trait_value:t})=>e===o.trait_type&&String(t)===String(o.trait_value)));return(0,i.jsx)(tr,{style:r,isTraitSelected:!!l,trait:o,addTrait:n,removeTrait:s})}),[a,n,s]),g=(0,F.useCallback)(((e,t)=>{const r=t[e];return`${r.trait_type}_${r.trait_value}_${e}`}),[]);return e.length?(0,i.jsxs)(Kt,{index:r,numTraits:e.length,title:t,children:[(0,i.jsx)(Yt.I,{value:o,onChange:e=>l(e.currentTarget.value),placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full"}),(0,i.jsx)(m.sg,{className:Ee,style:{height:`${Math.min(44*c.length,302)}px`},children:(0,i.jsx)(Qt.default,{disableWidth:!0,children:({height:e})=>(0,i.jsx)(er.FixedSizeList,{height:e,width:"100%",itemData:c,itemCount:c.length,itemSize:44,itemKey:g,children:({index:e,style:t,data:r})=>(0,i.jsx)(p,{style:t,data:r,index:e},g(e,r))})})})]}):null};var ir=r(7797);const nr=(0,u.ZP)(ir.Z)`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.accent1};
`,sr=({sortDropDownOptions:e})=>{const[t,r]=(0,F.useState)(!1),n=e=>{e.preventDefault(),r(!t)},s=e.map((e=>(0,i.jsx)(ar,{dropDownOption:e,parentOnClick:n},e.displayText)));return(0,i.jsx)(Ue,{title:"Sort by",items:s,onClick:n,isOpen:t})},ar=({dropDownOption:e,parentOnClick:t})=>{const r=we((e=>e.sortBy)),n=void 0!==e.sortBy&&r===e.sortBy?(0,i.jsx)(nr,{}):(0,i.jsx)(i.Fragment,{});return(0,i.jsx)(Oe,{title:e.displayText,element:n,onClick:r=>{r.preventDefault(),t(r),e.onClick()}})};var or=r(11947),lr=r(8806),dr=r(82205),cr=r(94685);const pr=({traitsByGroup:e})=>{const{buyNow:t,setBuyNow:r}=we((e=>({buyNow:e.buyNow,setBuyNow:e.setBuyNow}))),n=we((e=>e.setSortBy)),s=we((e=>e.hasRarity)),a=(0,F.useMemo)((()=>Ut(n,s??!1)),[s,n]);return(0,i.jsxs)(x.n,{className:"_10b1b4v1 rgw6ez8bx rgw6ez1ef rgw6ez2o3 rgw6ezlf rgw6ezng",children:[(0,i.jsx)(m.X2,{width:"full",justifyContent:"space-between"}),(0,i.jsxs)(m.sg,{marginTop:"8",children:[(0,i.jsxs)(or.k,{row:!0,width:"100%",justifyContent:"space-between",px:"$spacing12",children:[(0,i.jsx)(lr.xv,{children:"Buy now"}),(0,i.jsx)(dr.X,{testID:"nft-collection-filter-buy-now",checked:t,onPress:()=>{r(!t)},variant:"branded"})]}),cr.isMobileWeb&&(0,i.jsx)(sr,{sortDropDownOptions:a}),(0,i.jsx)(Xe,{}),(0,i.jsx)(Jt,{}),Object.entries(e).length>0&&(0,i.jsx)(x.n,{as:"span",color:"neutral2",paddingLeft:"8",marginTop:"12",marginBottom:"12",className:"rgw6ez80d rgw6ez6df rgw6ez8ap"}),(0,i.jsx)(m.sg,{children:Object.entries(e).map((([e,t],r)=>(0,i.jsx)(rr,{type:e,traits:t,index:r+Me.TRAIT_START_INDEX},e)))})]})]})};var gr=r(40453),ur=r(95894);const hr=(0,u.ZP)(o.ZP)`
  ${ur.bc}
`,xr=(0,u.ZP)(o.ZP)`
  width: ${({isBagExpanded:e})=>e?`calc(100% - ${h.ZI+16}px)`:"100%"};
  align-self: start;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${({isBagExpanded:e})=>e?`calc(100% - ${h.zD+16}px)`:"100%"};
  }
`,mr=(0,u.ZP)(l.ZP)`
  gap: 24px;
  margin-bottom: 28px;
`,fr=()=>{const e=(0,v.c)((e=>e.bagExpanded)),t=(0,c.d)();return(0,i.jsxs)(xr,{isBagExpanded:e,children:[(0,i.jsx)(Fr,{children:(0,i.jsx)($r,{})}),(0,i.jsxs)(hr,{children:[(0,i.jsx)(te,{isMobile:t}),(0,i.jsx)(mr,{children:oe})]}),(0,i.jsx)(Dt,{})]})};var vr=r(57221),wr=r(77134),yr=r(96929);const jr=(0,u.ZP)(o.ZP)`
  height: 75vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 48px;
  gap: 8px;
`,br=(0,u.ZP)(wr.dL)`
  color: ${({theme:e})=>e.neutral2};
`;function kr({isBlocked:e}){const t=(0,T.useTheme)();return e?(0,i.jsxs)(jr,{children:[(0,i.jsx)(vr.Z,{width:"48px",height:"48px",stroke:t.background,strokeWidth:"1px",fill:t.critical,"data-testid":"alert-icon"}),(0,i.jsx)(A.T.HeadlineMedium,{children:(0,i.jsx)(Te.Trans,{i18nKey:"nft.blockedCollection"})}),(0,i.jsx)(wr.m_,{to:"/nfts",children:(0,i.jsx)(Te.Trans,{i18nKey:"nft.returnToExplore"})}),(0,i.jsx)(br,{href:yr.uniswapUrls.helpArticleUrls.unsupportedTokenPolicy,children:(0,i.jsx)(Te.Trans,{i18nKey:"nft.learnWhy"})})]}):(0,i.jsxs)(jr,{children:[(0,i.jsx)(A.T.HeadlineMedium,{children:(0,i.jsx)(Te.Trans,{i18nKey:"nft.noneAtAddress"})}),(0,i.jsx)(wr.m_,{to:"/nfts",children:(0,i.jsx)(Te.Trans,{i18nKey:"nft.returnToExplore"})})]})}var Tr=r(18991),zr=r(80438),Cr=r(437),_r=r(76907),Sr=r(45003),Pr=r(54884);const Ir={},$r=(0,u.ZP)(a.X)`
  width: 100%;
  height: 100%;
  border-radius: 0px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,Er=(0,u.ZP)(o.ZP)`
  width: 100%;
  align-self: start;
  will-change: width;
`,Nr=(0,_r.q)(Er),Rr=u.ZP.div`
  position: ${({hideUnderneath:e})=>e?"fixed":"static"};
`,Mr=(0,_r.q)(Rr),Fr=u.ZP.div`
  height: 100px;
  max-width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin-top: 16px;
    margin-left: 20px;
    margin-right: 20px;
    height: 288px;
  }
`,Br=u.ZP.div`
  height: 100%;
  width: 100%;
  background-image: url(${({src:e})=>e});
  background-position-y: center;
  background-size: cover;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,Lr=(0,u.ZP)(o.ZP)`
  ${ur.bc}
`,Ar=u.ZP.div`
  position: ${({isMobile:e})=>e?"fixed":"sticky"};
  top: 0px;
  left: 0px;
  width: ${({isMobile:e})=>e?"100%":"0px"};
  height: ${({isMobile:e,isFiltersExpanded:t})=>e&&t?"100%":void 0};
  background: ${({theme:e,isMobile:t})=>t?e.surface2:void 0};
  z-index: ${Pr.k.modalBackdrop-3};
  overflow-y: ${({isMobile:e})=>e?"scroll":void 0};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    top: 72px;
  }
`,Zr=(0,u.ZP)(l.ZP)`
  padding: 20px 16px;
  justify-content: space-between;
`,Hr=(0,u.ZP)(l.ZP)`
  align-items: flex-start;
  position: relative;
`,Or=u.ZP.button`
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  padding: 2px 0px;
  opacity: 1;

  ${s.c}
`,Dr=()=>{var e,t,r,s,a,o;const{contractAddress:l}=(0,Pt.UO)(),u=(0,c.d)(),[x,m]=(0,yt.w)(),{pathname:f}=(0,Pt.TH)(),w=(0,Pt.s0)(),y=f.includes("/activity"),j=we((e=>e.setMarketCount)),k=(0,v.c)((e=>e.bagExpanded)),T=(0,v.c)((e=>e.setBagExpanded)),{chainId:z}=(0,g.m)(),C=(0,p.e)(),{data:_,loading:P}=(0,d.K)(l),{CollectionContainerWidthChange:I}=(0,_r.q_)({CollectionContainerWidthChange:k&&!u?(C.xxxl?h.zD:h.ZI)+16:0,config:{duration:Sr.Kd.medium,easing:_r.Z5.easeOutSine}}),{gridWidthOffset:$}=(0,_r.q_)({gridWidthOffset:x&&!u?332:0,config:{duration:Sr.Kd.medium,easing:_r.Z5.easeOutSine}}),E=(0,F.useMemo)((()=>({title:_.name+" on RapidDex",image:window.location.origin+"/api/image/nfts/collection/"+l,url:window.location.href,description:_.description})),[_.description,_.name,l]),N=(0,zr.X)(E);if((0,F.useEffect)((()=>{var e,t;const r={};null===(t=_)||void 0===t||null===(e=t.marketplaceCount)||void 0===e||e.forEach((({marketplace:e,count:t})=>{r[e]=t})),j(r)}),[null===(e=_)||void 0===e?void 0:e.marketplaceCount,j]),(0,F.useEffect)((()=>{k&&x&&!C.xl&&m(!1)}),[k,x,C,m]),(0,F.useEffect)((()=>{T({bagExpanded:!1,manualClose:!1})}),[]),P)return(0,i.jsx)(fr,{});if(!_.name)return(0,i.jsx)(kr,{});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(Cr.Helmet,{children:[(0,i.jsxs)("title",{children:[_.name," | ",(0,Te.t)("nft.collection.title")]}),N.map(((e,t)=>(0,i.jsx)("meta",{...e},t))),(0,i.jsx)("meta",{name:"robots",content:"max-image-preview:large"})]}),(0,i.jsx)(se.default,{logImpression:!0,page:n.yJ.NFT_COLLECTION_PAGE,properties:{collection_address:l,chain_id:z,is_activity_view:y},children:(0,i.jsx)(Nr,{style:{width:I.to((e=>`calc(100% - ${e}px)`))},children:l&&!Tr._.includes(l)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Fr,{children:(0,i.jsx)(Br,{src:(null===(t=_)||void 0===t?void 0:t.bannerImageUrl)?`${_.bannerImageUrl}?w=${window.innerWidth}`:""})}),(0,i.jsxs)(Lr,{children:[_&&(0,i.jsx)(re,{stats:_,isMobile:u}),(0,i.jsx)("div",{id:"nft-anchor"}),(0,i.jsx)(le,{showActivity:y,toggleActivity:()=>{x&&m(!1),w(y?`/nfts/collection/${l}`:`/nfts/collection/${l}/activity`)}})]}),(0,i.jsxs)(Hr,{children:[(0,i.jsx)(Ar,{isMobile:u,isFiltersExpanded:x,children:x&&(0,i.jsxs)(i.Fragment,{children:[u&&(0,i.jsxs)(Zr,{children:[(0,i.jsx)(A.T.HeadlineSmall,{children:"Filter"}),(0,i.jsx)(Or,{onClick:()=>m(!1),children:(0,i.jsx)(S.BW,{})})]}),(0,i.jsx)(pr,{traitsByGroup:(null===(r=_)||void 0===r?void 0:r.traits)??Ir})]})}),(0,i.jsx)(Mr,{hideUnderneath:u&&(x||k),style:{transform:$.to((e=>`translate(${e}px)`)),width:$.to((e=>`calc(100% - ${e}px)`))},children:y?l&&(0,i.jsx)(gr.c,{contractAddress:l,rarityVerified:(null===(s=_)||void 0===s?void 0:s.rarityVerified)??!1,collectionName:(null===(a=_)||void 0===a?void 0:a.name)??"",chainId:z}):l&&_&&(0,i.jsx)(F.Suspense,{fallback:(0,i.jsx)(Dt,{}),children:(0,i.jsx)(Xt,{collectionStats:_,contractAddress:l,rarityVerified:null===(o=_)||void 0===o?void 0:o.rarityVerified})})})]})]}):(0,i.jsx)(kr,{isBlocked:!0})})}),(0,i.jsx)(b,{})]})}}}]);
//# sourceMappingURL=4750.a4aadf48.chunk.js.map
"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6084],{71943:(e,i,n)=>{n.d(i,{K:()=>o});var r=n(45779),l=n(70854);function t(e,i){var n,r,l,t,o,a,s,d,c,u,p,h,m,x,g,v,f,y,w,b,j,k,P,$,T,C,S,z,H,Z,F,_,E,D,N,I,V,O,A,B,M;const L=null===(r=e)||void 0===r||null===(n=r.markets)||void 0===n?void 0:n[0];if(!i&&!(null===(o=e)||void 0===o||null===(t=o.nftContracts)||void 0===t||null===(l=t[0])||void 0===l?void 0:l.address))return{};const U={};var R;(null===(a=e)||void 0===a?void 0:a.traits)&&(null===(R=e)||void 0===R||R.traits.forEach((e=>{e.name&&e.stats&&(U[e.name]=e.stats.map((e=>({trait_type:e.name,trait_value:e.value,trait_count:e.assets}))))})));return{address:i??(null===(c=e)||void 0===c||null===(d=c.nftContracts)||void 0===d||null===(s=d[0])||void 0===s?void 0:s.address)??"",isVerified:null===(u=e)||void 0===u?void 0:u.isVerified,name:null===(p=e)||void 0===p?void 0:p.name,description:null===(h=e)||void 0===h?void 0:h.description,standard:null===(g=e)||void 0===g||null===(x=g.nftContracts)||void 0===x||null===(m=x[0])||void 0===m?void 0:m.standard,bannerImageUrl:null===(f=e)||void 0===f||null===(v=f.bannerImage)||void 0===v?void 0:v.url,stats:{num_owners:null===(y=L)||void 0===y?void 0:y.owners,floor_price:null===(b=L)||void 0===b||null===(w=b.floorPrice)||void 0===w?void 0:w.value,one_day_volume:null===(k=L)||void 0===k||null===(j=k.volume)||void 0===j?void 0:j.value,one_day_change:null===($=L)||void 0===$||null===(P=$.volumePercentChange)||void 0===P?void 0:P.value,one_day_floor_change:null===(C=L)||void 0===C||null===(T=C.floorPricePercentChange)||void 0===T?void 0:T.value,banner_image_url:null===(z=e)||void 0===z||null===(S=z.bannerImage)||void 0===S?void 0:S.url,total_supply:null===(H=e)||void 0===H?void 0:H.numAssets,total_listings:null===(F=L)||void 0===F||null===(Z=F.listings)||void 0===Z?void 0:Z.value,total_volume:null===(E=L)||void 0===E||null===(_=E.totalVolume)||void 0===_?void 0:_.value},traits:U,marketplaceCount:null===(N=L)||void 0===N||null===(D=N.marketplaces)||void 0===D?void 0:D.map((e=>{var i;return{marketplace:(null===(i=e.marketplace)||void 0===i?void 0:i.toLowerCase())??"",count:e.listings??0,floorPrice:e.floorPrice??0}})),imageUrl:(null===(V=e)||void 0===V||null===(I=V.image)||void 0===I?void 0:I.url)??"",twitterUrl:null===(O=e)||void 0===O?void 0:O.twitterName,instagram:null===(A=e)||void 0===A?void 0:A.instagramName,discordUrl:null===(B=e)||void 0===B?void 0:B.discordUrl,externalUrl:null===(M=e)||void 0===M?void 0:M.homepageUrl,rarityVerified:!1}}function o(e,i){var n,o,a,s;const{data:d,loading:c}=(0,l.useCollectionQuery)({variables:{addresses:e},skip:i}),u=null===(s=d)||void 0===s||null===(a=s.nftCollections)||void 0===a||null===(o=a.edges)||void 0===o||null===(n=o[0])||void 0===n?void 0:n.node;return(0,r.useMemo)((()=>({data:t(u,e),loading:c})),[e,c,u])}},74623:(e,i,n)=>{n.d(i,{$:()=>s,p:()=>d});var r=n(66284),l=n(53258),t=n(44958),o=n(39499),a=n(92139);const s=(e=a.UniverseChainId.Mainnet)=>{var i;const n=(0,t.Z)(e),r=(0,o.Z)("1",n);return(null===(i=(0,l.L)(r))||void 0===i?void 0:i.data)??0};function d(e){var i,n,l,t;const o=s();return o&&(null===(n=e)||void 0===n||null===(i=n.priceInfo)||void 0===i?void 0:i.ETHPrice)?(parseFloat((0,r.formatEther)(null===(t=e)||void 0===t||null===(l=t.priceInfo)||void 0===l?void 0:l.ETHPrice))*o).toString():""}},56084:(e,i,n)=>{n.r(i),n.d(i,{default:()=>di});var r=n(92936),l=n(5985),t=n(36664),o=n(45779),a=n(70854);function s(e,i){var n,r;const{data:l,loading:t,error:s}=(0,a.useTrendingCollectionsQuery)({variables:{size:e,timePeriod:i}}),d=(0,o.useMemo)((()=>{var e,i,n;return null===(n=l)||void 0===n||null===(i=n.topCollections)||void 0===i||null===(e=i.edges)||void 0===e?void 0:e.map((e=>{var i,n,r,l,t,o,a,s,d,c,u,p,h,m,x,g,v,f,y,w,b,j,k,P,$,T,C,S,z,H,Z,F;const _=null===(i=e)||void 0===i?void 0:i.node;return{name:_.name,address:null===(r=_.nftContracts)||void 0===r||null===(n=r[0])||void 0===n?void 0:n.address,imageUrl:null===(l=_.image)||void 0===l?void 0:l.url,bannerImageUrl:null===(t=_.bannerImage)||void 0===t?void 0:t.url,isVerified:_.isVerified,volume:null===(s=_.markets)||void 0===s||null===(a=s[0])||void 0===a||null===(o=a.volume)||void 0===o?void 0:o.value,volumeChange:null===(u=_.markets)||void 0===u||null===(c=u[0])||void 0===c||null===(d=c.volumePercentChange)||void 0===d?void 0:d.value,floor:null===(m=_.markets)||void 0===m||null===(h=m[0])||void 0===h||null===(p=h.floorPrice)||void 0===p?void 0:p.value,floorChange:null===(v=_.markets)||void 0===v||null===(g=v[0])||void 0===g||null===(x=g.floorPricePercentChange)||void 0===x?void 0:x.value,marketCap:null===(w=_.markets)||void 0===w||null===(y=w[0])||void 0===y||null===(f=y.totalVolume)||void 0===f?void 0:f.value,percentListed:((null===(k=_.markets)||void 0===k||null===(j=k[0])||void 0===j||null===(b=j.listings)||void 0===b?void 0:b.value)??0)/((null===($=_.nftContracts)||void 0===$||null===(P=$[0])||void 0===P?void 0:P.totalSupply)??1),owners:null===(C=_.markets)||void 0===C||null===(T=C[0])||void 0===T?void 0:T.owners,sales:null===(H=_.markets)||void 0===H||null===(z=H[0])||void 0===z||null===(S=z.sales)||void 0===S?void 0:S.value,totalSupply:null===(F=_.nftContracts)||void 0===F||null===(Z=F[0])||void 0===Z?void 0:Z.totalSupply}}))}),[null===(r=l)||void 0===r||null===(n=r.topCollections)||void 0===n?void 0:n.edges]);return{data:d,loading:t,error:s}}var d=n(52801);const c=(e,i)=>(e<0?e+i:e)%i;var u=n(76907);function p(e,i,n,r,l,t,o){try{var a=e[t](o),s=a.value}catch(d){return void n(d)}a.done?i(s):Promise.resolve(s).then(r,l)}function h(e){return function(){var i=this,n=arguments;return new Promise((function(r,l){var t=e.apply(i,n);function o(e){p(t,r,l,o,a,"next",e)}function a(e){p(t,r,l,o,a,"throw",e)}o(void 0)}))}}const m=t.ZP.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,x=t.ZP.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  height: 390px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 600px;
  }
`,g=(0,t.ZP)(u.a.div)`
  display: flex;
  justify-content: center;
  padding: 4px 12px 32px;
  position: absolute;
  will-change: transform;
  width: calc(100%);
  height: calc(100%);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 4px 32px 32px;
  }
`,v=t.ZP.div`
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: none;
  user-select: none;
  height: calc(100%);
  padding: 4px 0 32px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    display: flex;
  }

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,f=800,y=({children:e,activeIndex:i,toggleNextSlide:n})=>{const l=(0,o.useCallback)(((i,n=e.length)=>c(i,n)),[e]),t=(0,o.useCallback)(((e,i,n)=>((e,i,n,r)=>r(e-i+n))(e,i,n,l)),[l]),[a,s]=(0,u.bY)(e.length,(i=>({x:(i<e.length-1?i:-1)*f}))),p=(0,o.useRef)([0,1]),y=(0,o.useCallback)(((i,n)=>{const r=l(Math.floor(i/f)%e.length),o=n<0?e.length-2:1;s((l=>{const a=t(l,r,o),s=t(l,p.current[0],p.current[1]),d=((e,i,n,r,l)=>e-(l<0?r:0)+n-i+(l<0&&0===e?r:0))(r,o,a,e.length,i);return{x:-i%(f*e.length)+f*d,immediate:n<0?s>a:s<a,config:{tension:250,friction:30}}})),p.current=[r,o]}),[l,t,s,e.length]),w=(0,o.useRef)(0);(0,o.useEffect)((()=>{y(i*f,w.current)}),[i,y]);const b=(0,o.useCallback)((e=>{w.current=e,n(e)}),[n]);return(0,o.useEffect)((()=>{const e=setInterval(h((function*(){b(1)})),7e3);return()=>{clearInterval(e)}}),[b,i]),(0,r.jsxs)(m,{children:[(0,r.jsx)(v,{onClick:()=>b(-1),children:(0,r.jsx)(d.wy,{width:"16px",height:"16px"})}),(0,r.jsx)(x,{children:a.map((({x:i},n)=>(0,r.jsx)(g,{style:{x:i},children:e[n]},n)))}),(0,r.jsx)(v,{onClick:()=>b(1),children:(0,r.jsx)(d.XC,{width:"16px",height:"16px"})})]})},w=({children:e})=>(0,r.jsx)(y,{activeIndex:0,toggleNextSlide:()=>{},children:[e]});var b=n(38081),j=n(52529),k=n(71943),P=n(39550),$=n(56363),T=n(64972);const C=t.ZP.div`
  width: 100%;
  position: relative;
  border-radius: 21px;
  cursor: pointer;
  border: 1px solid transparent;
  transition-property: border-color;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};
  }

  ::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    z-index: -1;
    box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
    transition-property: opacity;
    transition-duration: ${({theme:e})=>e.transition.duration.fast};
    transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};
  }

  :hover::after {
    opacity: 1;
  }
`,S=t.ZP.div`
  position: relative;
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,z=t.ZP.div`
  position: relative;
  animation: ${b.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,H=t.ZP.div`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 202px;
  justify-content: center;
  padding: 0 40px;
  z-index: 1;
`,Z=t.ZP.div`
  display: inline-flex;
  vertical-align: text-bottom;
  margin-left: 2px;
  transform: translateY(-2px) translateX(2px);
`,F=t.ZP.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  max-height: 56px;
`,_=(0,t.ZP)(j.X)`
  width: 50%;
`,E=t.ZP.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.08));
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 0;

  // overlay workaround for firefox only
  @supports (-moz-appearance: none) {
    bottom: -1px;
  }
`,D=t.ZP.img`
  width: 86px;
  height: 86px;
  background: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border: 2px solid ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border-radius: 100px;
`,N=t.ZP.div`
  width: 86px;
  height: 86px;
  border-radius: 100px;
  animation: ${b.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,I=(0,t.ZP)(j.X)`
  width: 50px;
`,V=t.ZP.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,O=t.ZP.div``,A=t.ZP.div`
  display: grid;
  flex: 1;
  gap: 8px;
  grid-template-columns: auto auto auto;
  padding: 16px 16px 20px;
`,B=t.ZP.img`
  width: 20px;
  height: 20px;
`,M=t.ZP.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  ${V}:nth-child(3n-1), ${I}:nth-child(3n-1) {
    justify-self: center;
  }

  ${V}:nth-child(3n), ${I}:nth-child(3n) {
    justify-self: right;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) or ((min-width: ${({theme:e})=>e.breakpoint.sm}px) and (max-width: 880px)) {
    ${O} {
      display: none;
    }
    ${V} {
      justify-self: left !important;
    }
    ${H} {
      padding: 0 20px;
    }
  }
`,L=({marketplace:e,floorInEth:i,listings:n})=>{const{formatNumberOrString:l}=(0,T.Gb)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(V,{children:[(0,r.jsx)(B,{src:`/nft/svgs/marketplaces/${e.toLowerCase()}-grey.svg`,alt:`${e} icon`}),(0,r.jsx)(O,{children:(0,r.jsx)($.T.BodySmall,{color:"neutral2",children:e})})]}),(0,r.jsx)(V,{children:(0,r.jsx)($.T.BodySmall,{color:"neutral2",children:Number(i)>0?`${l({input:i,type:T.sw.NFTTokenFloorPriceTrailingZeros})} ETH`:"-"})}),(0,r.jsx)(V,{children:(0,r.jsx)($.T.BodySmall,{color:"neutral2",children:Number(n)>0?n:"None"})})]})},U=[P.Fz.Opensea,P.Fz.X2Y2,P.Fz.LooksRare],R={[P.Fz.Opensea]:"OpenSea",[P.Fz.X2Y2]:"X2Y2",[P.Fz.LooksRare]:"LooksRare"},G=({collection:e,onClick:i})=>{var n;const{data:l,loading:t}=(0,k.K)(e.address??""),{formatNumber:o}=(0,T.Gb)();return t?(0,r.jsx)(K,{}):(0,r.jsx)(C,{children:(0,r.jsxs)(M,{onClick:i,children:[(0,r.jsx)(W,{collection:e}),(0,r.jsx)(A,{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(V,{children:[(0,r.jsx)(d.pD,{width:"20",height:"20"}),(0,r.jsx)(O,{children:(0,r.jsx)($.T.SubHeaderSmall,{color:"userThemeColor",children:"RapidDex"})})]}),(0,r.jsx)(V,{children:e.floor&&(0,r.jsxs)($.T.SubHeaderSmall,{color:"userThemeColor",children:[o({input:e.floor,type:T.sw.NFTToken})," ETH Floor"]})}),(0,r.jsx)(V,{children:(0,r.jsxs)($.T.SubHeaderSmall,{color:"userThemeColor",children:[null===(n=l.marketplaceCount)||void 0===n?void 0:n.reduce(((e,i)=>e+i.count),0)," Listings"]})}),U.map((i=>{var n;const t=null===(n=l.marketplaceCount)||void 0===n?void 0:n.find((e=>e.marketplace===i));return t?(0,r.jsx)(L,{marketplace:R[i],listings:t.count,floorInEth:t.floorPrice},`CarouselCard-key-${e.address}-${t.marketplace}`):null}))]})})]})})},X=()=>(0,r.jsx)(r.Fragment,{children:[...Array(12)].map((e=>(0,r.jsx)(I,{},e)))}),Y=(0,t.ZP)($.T.MediumHeader)`
  display: inline;
  vertical-align: text-bottom;
  line-height: 28px;
`,W=({collection:e})=>(0,r.jsxs)(S,{src:e.bannerImageUrl??"",children:[(0,r.jsxs)(H,{children:[(0,r.jsx)(D,{src:e.imageUrl}),(0,r.jsxs)(F,{children:[(0,r.jsx)(Y,{color:"deprecated_accentTextLightPrimary",fontWeight:"500",children:e.name}),e.isVerified&&(0,r.jsx)(Z,{children:(0,r.jsx)(d.SA,{width:"24px",height:"24px"})})]})]}),(0,r.jsx)(E,{})]}),K=({collection:e})=>(0,r.jsx)(C,{children:(0,r.jsxs)(M,{children:[e?(0,r.jsx)(W,{collection:e}):(0,r.jsxs)(z,{children:[(0,r.jsxs)(H,{children:[(0,r.jsx)(N,{}),(0,r.jsx)(_,{})]}),(0,r.jsx)(E,{})]}),(0,r.jsx)(A,{children:(0,r.jsx)(X,{})})]})});var Q=n(6282);const q=t.ZP.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 22px;
  position: relative;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding: 32px 16px;
  }
`,J=t.ZP.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 36px;
  max-width: ${({theme:e})=>`${e.maxWidth}px`};
  justify-content: space-between;
  z-index: 2;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    height: 100%;
    gap: 14px;
    margin-top: 4px;
    margin-bottom: 6px;
  }
`,ee=t.ZP.div`
  display: flex;
  max-width: 500px;
  font-weight: 535;
  font-size: 72px;
  line-height: 88px;
  align-self: center;
  flex-shrink: 0;
  padding-bottom: 32px;

  color: ${({theme:e})=>e.neutral1};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    font-size: 48px;
    line-height: 67px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    font-size: 36px;
    line-height: 50px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    line-height: 43px;
    text-align: center;
    padding-bottom: 16px;

    br {
      display: none;
    }
  }

  /* Custom breakpoint to split into two lines on smaller screens */
  @media only screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 0;

    br {
      display: unset;
    }
  }
`,ie=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"],ne=()=>{const e=(0,Q.s0)(),{data:i}=s(5+ie.length,a.HistoryDuration.Day),n=(0,o.useMemo)((()=>{var e;return null===(e=i)||void 0===e?void 0:e.filter((e=>e.address&&!ie.includes(e.address))).slice(0,5)}),[i]),[l,t]=(0,o.useState)(0),d=(0,o.useCallback)((e=>{n&&t((i=>c(i+e,n.length)))}),[n]);return(0,r.jsx)(q,{children:(0,r.jsxs)(J,{children:[(0,r.jsxs)(ee,{children:["Better prices. ",(0,r.jsx)("br",{}),"More listings."]}),n?(0,r.jsx)(y,{activeIndex:l,toggleNextSlide:d,children:n.map((i=>(0,r.jsx)(G,{collection:i,onClick:()=>e(`/nfts/collection/${i.address}`)},i.address)))}):(0,r.jsx)(w,{children:(0,r.jsx)(K,{})})]})})};var re=n(42277),le=n(66284),te=n(1890),oe=n(75603),ae=(n(21422),(e=>(e.OneDay="ONE_DAY",e.SevenDays="SEVEN_DAYS",e.ThirtyDays="THIRTY_DAYS",e.AllTime="ALL_TIME",e))(ae||{})),se=(e=>(e.ETH="ETH",e.USD="USD",e))(se||{});const de=t.ZP.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ce=(0,t.ZP)(de)`
  display: flex;
  padding: 14px 0px 14px 8px;
  align-items: center;
`,ue=(0,t.ZP)(de)`
  margin-left: 8px;
`,pe=(0,t.ZP)($.T.SubHeader)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,he=(0,t.ZP)($.T.SubHeaderSmall)`
  color: ${({theme:e})=>`${e.neutral1}`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,me=t.ZP.div`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  background: ${({src:e,theme:i})=>e?`url(${e})`:i.surface2};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`,xe=t.ZP.div`
  display: flex;
  color: ${({theme:e,change:i})=>i>=0?e.success:e.critical};
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`,ge=t.ZP.div`
  display: flex;
  justify-content: flex-end;
`,ve=({value:e})=>{const i=(0,oe.d)();return(0,r.jsxs)(ce,{children:[(0,r.jsx)(me,{src:e.logo}),(0,r.jsx)(ue,{children:i?(0,r.jsx)(he,{children:e.name}):(0,r.jsx)(pe,{children:e.name})}),e.isVerified&&(0,r.jsx)("span",{className:"rgw6ezl3 rgw6ez453 rgw6ez2o3 rgw6ez19r rgw6ez12r rgw6ez45x",children:(0,r.jsx)(d.SA,{})})]})},fe=({value:e})=>{const{formatNumberOrString:i}=(0,T.Gb)();return(0,r.jsx)("span",{children:e.value?i({input:e.value,type:T.sw.NFTCollectionStats}):"-"})},ye=(e,i,n,r)=>e===se.ETH?n:r&&n?r*(i?parseFloat((0,le.formatEther)(n)):n):void 0,we=({value:e,denomination:i,usdPrice:n})=>{const{formatNumberOrString:l}=(0,T.Gb)(),t=ye(i,!1,e,n),o=i===se.ETH,a=l({input:t,type:o?T.sw.NFTToken:T.sw.FiatTokenStats})+(o?" ETH":""),s=(0,oe.d)()?$.T.BodySmall:$.T.BodyPrimary;return(0,r.jsx)(ge,{children:(0,r.jsx)(s,{children:e?a:"-"})})},be=({value:e})=>(0,r.jsx)($.T.BodyPrimary,{children:e}),je=({value:e,denomination:i,usdPrice:n})=>{const{formatNumberOrString:l}=(0,T.Gb)(),t=ye(i,!1,e,n),o=i===se.ETH,a=l({input:t,type:o?T.sw.WholeNumber:T.sw.FiatTokenStats})+(o?" ETH":"");return(0,r.jsx)(ge,{children:(0,r.jsx)($.T.BodyPrimary,{children:a})})},ke=({change:e,children:i})=>{const n=(0,oe.d)()?$.T.BodySmall:$.T.BodyPrimary;return(0,r.jsxs)(xe,{change:e??0,children:[(0,r.jsx)(te.Kx,{delta:e}),(0,r.jsx)(n,{color:"currentColor",children:i||`${e?Math.abs(Math.round(e)):0}%`})]})};var Pe=n(57577),$e=n(79613),Te=n(52843),Ce=n(26686),Se=n(22722),ze=n(61152),He="_1mor7veh rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2of rgw6ez27x rgw6ez1jl rgw6ez463 rgw6ez48x",Ze="_1mor7vea rgw6ez4qf rgw6ez16r rgw6ez80x rgw6ez7zl",Fe="_1mor7ved rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4bf rgw6ez2or rgw6ez289",_e="rgw6ezr9 rgw6ez55f rgw6ez895 rgw6ez805",Ee=n(40403),De=n(48313);const Ne=t.ZP.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 12px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-left: 8px;
  }
`,Ie=t.ZP.tr`
  cursor: pointer;
  :hover {
    background: ${({theme:e})=>e.surface3};
  }
  :active {
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }
`,Ve=t.ZP.tr`
  height: 80px;
`,Oe=t.ZP.th`
  ${({disabled:e})=>!e&&"cursor: pointer;"}

  :hover {
    ${({theme:e,disabled:i})=>!i&&`opacity: ${e.opacity.hover};`}
  }

  :active {
    ${({theme:e,disabled:i})=>!i&&`opacity: ${e.opacity.click};`}
  }
`,Ae=t.ZP.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,Be=t.ZP.div`
  display: flex;
  margin-left: 24px;
  gap: 8px;
  align-items: center;
`,Me=(0,t.ZP)(j.X)`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,Le=(0,t.ZP)(j.X)`
  width: 8px;
  height: 16px;
  margin-right: 12px;
`,Ue=10;function Re({columns:e,data:i,smallHiddenColumns:n,mediumHiddenColumns:t,largeHiddenColumns:a,...s}){const d=(0,ze.useTheme)(),{chainId:c}=(0,Se.m)(),{width:u}=(0,Ce.i)(),p=(0,oe.d)(),{getTableProps:h,getTableBodyProps:m,headerGroups:x,rows:g,prepareRow:v,setHiddenColumns:f,visibleColumns:y}=(0,Ee.useTable)({columns:e,data:i,initialState:{sortBy:[{desc:!0,id:Ye.Volume}]},...s},Ee.useSortBy),w=(0,Q.s0)();return(0,o.useEffect)((()=>{u&&(u<=d.breakpoint.sm?f(n):u<=d.breakpoint.md?f(t):u<=d.breakpoint.lg?f(a):f([]))}),[u,f,e,n,t,a,d.breakpoint]),0===i.length?(0,r.jsx)(Ge,{headerGroups:x,visibleColumns:y,...h()}):(0,r.jsxs)("table",{...h(),className:Ze,children:[(0,r.jsx)("thead",{className:_e,children:x.map((e=>(0,o.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,i)=>(0,o.createElement)(Oe,{className:Fe,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===i?"left":"right",paddingLeft:0===i?p?"16px":"52px":0},disabled:e.disableSortBy,key:i,children:[(0,r.jsx)(Te.n,{as:"span",color:"neutral2",position:"relative",children:e.isSorted?e.isSortedDesc?(0,r.jsx)($e.V,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):(0,r.jsx)(Pe.c,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):""}),(0,r.jsx)(Te.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,r.jsx)("tbody",{...m(),children:g.map(((e,i)=>(v(e),(0,r.jsx)(De.default,{logPress:!0,eventOnTrigger:l.Yz.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:c},element:l.xo.NFT_TRENDING_ROW,children:(0,o.createElement)(Ie,{...e.getRowProps(),key:e.id,onClick:()=>w(`/nfts/collection/${e.original.collection.address}`),"data-testid":"nft-trending-collection"},e.cells.map(((e,n)=>(0,o.createElement)("td",{className:"_1mor7vef rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2o3 rgw6ez27l rgw6ez1jl rgw6ez463 rgw6ez48x",...e.getCellProps(),key:n,style:{maxWidth:0===n?p?"240px":"360px":"160px"}},0===n?(0,r.jsxs)(Ne,{children:[!p&&(0,r.jsx)($.T.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:i+1}),e.render("Cell")]}):e.render("Cell")))))},i))))})]})}function Ge({headerGroups:e,visibleColumns:i,...n}){return(0,r.jsxs)("table",{...n,className:Ze,children:[(0,r.jsx)("thead",{className:_e,children:e.map((e=>(0,o.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,i)=>(0,o.createElement)(Oe,{className:Fe,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===i?"left":"right",paddingLeft:0===i?"52px":0},disabled:0===i,key:i,children:[(0,r.jsx)(Te.n,{as:"span",color:"accent1",position:"relative",children:e.isSorted?e.isSortedDesc?(0,r.jsx)($e.V,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):(0,r.jsx)(Pe.c,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):""}),(0,r.jsx)(Te.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,r.jsx)("tbody",{...n,children:[...Array(Ue)].map(((e,n)=>(0,r.jsx)(Ve,{children:[...Array(i.length)].map(((e,i)=>(0,r.jsx)("td",{className:He,children:0===i?(0,r.jsxs)(Be,{children:[(0,r.jsx)(Le,{}),(0,r.jsx)(Me,{}),(0,r.jsx)(j.X,{})]}):(0,r.jsx)(Ae,{children:(0,r.jsx)(j.X,{})})},i)))},n)))})]})}var Xe=n(77134),Ye=(e=>(e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners",e))(Ye||{});const We=(e,i)=>e?i?Math.round(1e5*e)>=Math.round(1e5*i)?1:-1:1:-1,Ke=({data:e,timePeriod:i})=>{const n=(0,o.useMemo)((()=>(e,i)=>We(e.original.floor.value,i.original.floor.value)),[]),l=(0,o.useMemo)((()=>(e,i)=>We(e.original.floor.change,i.original.floor.change)),[]),t=(0,o.useMemo)((()=>(e,i)=>We(e.original.volume.value,i.original.volume.value)),[]),a=(0,o.useMemo)((()=>(e,i)=>We(e.original.volume.change,i.original.volume.change)),[]),s=(0,o.useMemo)((()=>[{Header:"Collection name",accessor:"collection",Cell:ve,disableSortBy:!0},{id:"Floor",Header:"Floor",accessor:({floor:e})=>e.value,sortType:n,Cell:function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(we,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),i!==ae.AllTime&&(0,r.jsx)(Xe.SF,{children:(0,r.jsx)(ke,{change:e.row.original.floor.change})})]})}},{id:"Floor change",Header:"Floor change",accessor:({floor:e})=>e.value,sortDescFirst:!0,disableSortBy:i===ae.AllTime,sortType:l,Cell:function(e){return i===ae.AllTime?(0,r.jsx)(be,{value:"-"}):(0,r.jsx)(ke,{change:e.row.original.floor.change})}},{id:"Volume",Header:"Volume",accessor:({volume:e})=>e.value,sortDescFirst:!0,sortType:t,Cell:function(e){return(0,r.jsx)(je,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:"Volume change",Header:"Volume change",accessor:({volume:e})=>e.value,sortDescFirst:!0,disableSortBy:i===ae.AllTime,sortType:a,Cell:function(e){const{change:n}=e.row.original.volume;return i===ae.AllTime?(0,r.jsx)(be,{value:"-"}):n&&n>=9999?(0,r.jsxs)(ke,{change:n,children:[">9999","%"]}):(0,r.jsx)(ke,{change:n})}},{id:"Items",Header:"Items",accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return(0,r.jsx)(fe,{value:{value:e.row.original.totalSupply}})}},{Header:"Owners",accessor:({owners:e})=>e.value,sortDescFirst:!0,Cell:function(e){return(0,r.jsx)(fe,{value:e.row.original.owners})}}]),[l,n,a,t,i]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(Re,{smallHiddenColumns:["Items","Floor change","Volume","Volume change","Owners"],mediumHiddenColumns:["Items","Floor change","Volume change","Owners"],largeHiddenColumns:["Items","Owners"],data:e,columns:s})})};var Qe=n(74623),qe=n(11367);const Je=[{label:"1D",value:ae.OneDay},{label:"1W",value:ae.SevenDays},{label:"1M",value:ae.ThirtyDays},{label:"All",value:ae.AllTime}],ei=t.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme:e})=>`${e.maxWidth}px`};
  padding: 0 16px;
`,ii=t.ZP.h1`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  line-height: 44px;
  font-weight: 535;
  margin: 0;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
  }
`,ni=t.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    margin-bottom: 16px;
    margin-top: 16px;
  }
`,ri=t.ZP.div`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  padding: 4px;
`,li=t.ZP.div`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({active:e,theme:i})=>e?i.surface3:"none"};
  cursor: pointer;

  ${re.c}
`,ti=(0,t.ZP)($.T.SubHeader)`
  color: ${({theme:e,active:i})=>i?e.neutral1:e.neutral2};
`;const oi=()=>{const e=(0,qe.useAppFiatCurrency)(),[i,n]=(0,o.useState)(ae.OneDay),[l,t]=(0,o.useState)(!0),{data:d,loading:c}=s(100,function(e){switch(e){case ae.OneDay:return a.HistoryDuration.Day;case ae.SevenDays:return a.HistoryDuration.Week;case ae.ThirtyDays:return a.HistoryDuration.Month;case ae.AllTime:return a.HistoryDuration.Max;default:return a.HistoryDuration.Day}}(i)),u=(0,Qe.$)(),p=(0,o.useMemo)((()=>!c&&d?d.map((e=>({...e,collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:l?se.ETH:se.USD,usdPrice:u}))):[]),[d,c,l,u]);return(0,r.jsxs)(ei,{children:[(0,r.jsx)(ii,{children:"Trending NFT collections"}),(0,r.jsxs)(ni,{children:[(0,r.jsx)(ri,{children:Je.map((e=>(0,r.jsx)(li,{active:e.value===i,onClick:()=>n(e.value),children:(0,r.jsx)(ti,{lineHeight:"20px",active:e.value===i,children:e.label})},e.value)))}),(0,r.jsxs)(ri,{onClick:()=>t(!l),children:[(0,r.jsx)(li,{active:l,children:(0,r.jsx)(ti,{lineHeight:"20px",active:l,children:"ETH"})}),(0,r.jsx)(li,{active:!l,children:(0,r.jsx)(ti,{lineHeight:"20px",active:!l,children:e})})]})]}),(0,r.jsx)(Ke,{data:p,timePeriod:i})]})};var ai=n(99251);const si=t.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    gap: 0px;
  }
`,di=()=>{const e=(0,ai.c)((e=>e.setBagExpanded));return(0,o.useEffect)((()=>{e({bagExpanded:!1,manualClose:!1})}),[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(De.default,{logImpression:!0,page:l.yJ.NFT_EXPLORE_PAGE,children:(0,r.jsxs)(si,{children:[(0,r.jsx)(ne,{}),(0,r.jsx)(oi,{})]})})})}}}]);
//# sourceMappingURL=6084.21d214e3.chunk.js.map
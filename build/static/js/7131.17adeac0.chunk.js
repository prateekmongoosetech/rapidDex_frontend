"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7131],{33393:(e,t,n)=>{n.d(t,{Z:()=>N});var i=n(92936),o=n(5985),r=n(89878),s=n(3115),a=n(32409),d=n(55478),l=n(92139),u=n(97994);const c={[r.FeeAmount.LOWEST]:{label:"0.01",description:(0,i.jsx)(u.Trans,{i18nKey:"fee.bestForVeryStable"}),supportedChains:l.ALL_CHAIN_IDS.filter((e=>e!==l.UniverseChainId.MstTestnet))},[r.FeeAmount.LOW_200]:{label:"0.02",supportedChains:[l.UniverseChainId.Base]},[r.FeeAmount.LOW_300]:{label:"0.03",supportedChains:[l.UniverseChainId.Base]},[r.FeeAmount.LOW_400]:{label:"0.04",supportedChains:[l.UniverseChainId.Base]},[r.FeeAmount.LOW]:{label:"0.05",description:(0,i.jsx)(u.Trans,{i18nKey:"fee.bestForStablePairs"}),supportedChains:l.ALL_CHAIN_IDS},[r.FeeAmount.MEDIUM]:{label:"0.3",description:(0,i.jsx)(u.Trans,{i18nKey:"fee.bestForMost"}),supportedChains:l.ALL_CHAIN_IDS},[r.FeeAmount.HIGH]:{label:"1",description:(0,i.jsx)(u.Trans,{i18nKey:"fee.bestForExotic"}),supportedChains:l.ALL_CHAIN_IDS}};var m=n(75985),p=n(64063),v=n(11947),x=n(63808),A=n(8806),b=n(64972);function f({feeAmount:e,selected:t,poolState:n,distributions:o,onClick:r}){var s,a;const{formatDelta:l}=(0,b.Gb)(),f=null===(a=o)||void 0===a||null===(s=a[e])||void 0===s?void 0:s.toFixed(0),h=c[e].description;return(0,i.jsx)(m.ud,{disabled:!h,text:h,size:m.Oz.Max,placement:"auto",children:(0,i.jsxs)(v.k,{alignItems:"flex-start",py:"$padding12",px:"$padding8",borderRadius:"$rounded12",borderWidth:"$spacing1",borderColor:t?"$accent1":"$surface3",focusStyle:{shadowColor:"$surface3",shadowRadius:"$spacing1"},pressStyle:{shadowColor:"$surface3",shadowRadius:"$spacing1"},hoverStyle:{shadowColor:"$neutral3",shadowRadius:"$spacing1"},disabledStyle:{opacity:.5,cursor:"auto"},children:[(0,i.jsx)(x.E,{position:"absolute",top:"$spacing8",right:"$spacing8",value:e.toString(),onPress:r,variant:"branded"}),(0,i.jsxs)(d.Tz,{gap:"sm",justify:"flex-start",children:[(0,i.jsx)(A.xv,{variant:"buttonLabel3",children:l(parseFloat(c[e].label))}),o&&(0,i.jsx)(A.xv,{variant:"body4",color:"$neutral2",children:o&&n!==p.tK.NOT_EXISTS&&n!==p.tK.INVALID?void 0!==o[e]?(0,i.jsx)(u.Trans,{i18nKey:"fee.selectPercent",values:{pct:f}}):(0,i.jsx)(u.Trans,{i18nKey:"common.noData"}):(0,i.jsx)(u.Trans,{i18nKey:"common.notCreated.label"})})]})]})})}var h=n(67978),L=n(56363);function F({feeAmount:e,distributions:t,poolState:n}){var o,r;const s=null===(r=t)||void 0===r||null===(o=r[e])||void 0===o?void 0:o.toFixed(0);return(0,i.jsx)(h.Z,{children:(0,i.jsx)(L.T.DeprecatedLabel,{fontSize:10,children:t&&n!==p.tK.NOT_EXISTS&&n!==p.tK.INVALID?void 0!==t[e]?(0,i.jsx)(u.Trans,{i18nKey:"fee.selectPercent",values:{pct:s}}):(0,i.jsx)(u.Trans,{i18nKey:"common.noData"}):(0,i.jsx)(u.Trans,{i18nKey:"common.notCreated.label"})})})}var I=n(83792),T=n(22722),S=n(63490),O=n.n(S),g=n(45779),E=n(70854),_=n(36625),W=n(9450),j=n(25105);function y(e,t){var n,i;const{isLoading:o,error:s,distributions:a}=function(e,t){var n,i,o,s;const{defaultChainId:a}=(0,_.useEnabledChains)(),d=(0,W.toGraphQLChain)((null===(n=e)||void 0===n?void 0:n.chainId)??a),{loading:l,error:u,data:c}=(0,E.useFeeTierDistributionQuery)({variables:{chain:d,token0:(null===(i=e)||void 0===i?void 0:i.address)??"",token1:(null===(o=t)||void 0===o?void 0:o.address)??""},pollInterval:O()("30s")}),{data:m,error:p}=(0,E.useIsV3SubgraphStaleQuery)({variables:{chain:d},pollInterval:O()("30s")}),{v3PoolsForTokenPair:v}=c??{};return(0,g.useMemo)((()=>{var e;if(p||!v)return{isLoading:l,error:u??p};if(null===(e=m)||void 0===e?void 0:e.isV3SubgraphStale)return j.logger.info("useFeeTierDistribution","usePoolTVL","Subgraph stale"),{isLoading:l,error:u};const t=v.reduce(((e,t)=>{var n,i;return t.feeTier?((n=e)[i=t.feeTier]??(n[i]=[0,0]),e[t.feeTier][0]=(e[t.feeTier][0]??0)+Number(t.token0Supply),e[t.feeTier][1]=(e[t.feeTier][1]??0)+Number(t.token1Supply),e):e}),{[r.FeeAmount.LOWEST]:[void 0,void 0],[r.FeeAmount.LOW]:[void 0,void 0],[r.FeeAmount.MEDIUM]:[void 0,void 0],[r.FeeAmount.HIGH]:[void 0,void 0],[r.FeeAmount.LOW_200]:[void 0,void 0],[r.FeeAmount.LOW_300]:[void 0,void 0],[r.FeeAmount.LOW_400]:[void 0,void 0]}),[n,i]=Object.values(t).reduce(((e,t)=>(e[0]+=t[0]??0,e[1]+=t[1]??0,e)),[0,0]),o=(e,t,n,i)=>void 0===e&&void 0===n?void 0:((e??0)+(n??0))/(t+i)||0,s={[r.FeeAmount.LOWEST]:o(t[r.FeeAmount.LOWEST][0],n,t[r.FeeAmount.LOWEST][1],i),[r.FeeAmount.LOW]:o(t[r.FeeAmount.LOW][0],n,t[r.FeeAmount.LOW][1],i),[r.FeeAmount.MEDIUM]:o(t[r.FeeAmount.MEDIUM][0],n,t[r.FeeAmount.MEDIUM][1],i),[r.FeeAmount.HIGH]:o(t[r.FeeAmount.HIGH][0],n,t[r.FeeAmount.HIGH][1],i),[r.FeeAmount.LOW_200]:o(t[r.FeeAmount.LOW_200][0],n,t[r.FeeAmount.LOW_200][1],i),[r.FeeAmount.LOW_300]:o(t[r.FeeAmount.LOW_300][0],n,t[r.FeeAmount.LOW_300][1],i),[r.FeeAmount.LOW_400]:o(t[r.FeeAmount.LOW_400][0],n,t[r.FeeAmount.LOW_400][1],i)};return{isLoading:l,error:u,distributions:s}}),[p,v,null===(s=m)||void 0===s?void 0:s.isV3SubgraphStale,l,u])}(null===(n=e)||void 0===n?void 0:n.wrapped,null===(i=t)||void 0===i?void 0:i.wrapped),[d]=(0,p.AI)(e,t,r.FeeAmount.LOWEST),[l]=(0,p.AI)(e,t,r.FeeAmount.LOW_200),[u]=(0,p.AI)(e,t,r.FeeAmount.LOW_300),[c]=(0,p.AI)(e,t,r.FeeAmount.LOW_400),[m]=(0,p.AI)(e,t,r.FeeAmount.LOW),[v]=(0,p.AI)(e,t,r.FeeAmount.MEDIUM),[x]=(0,p.AI)(e,t,r.FeeAmount.HIGH);return(0,g.useMemo)((()=>{if(o||s||!a)return{isLoading:o,isError:!!s,distributions:a};const e=Object.keys(a).map((e=>Number(e))).filter((e=>0!==a[e]&&void 0!==a[e])).reduce(((e,t)=>(a[e]??0)>(a[t]??0)?e:t),-1),t=o||s||!a||d===p.tK.LOADING||l===p.tK.LOADING||u===p.tK.LOADING||c===p.tK.LOADING||m===p.tK.LOADING||v===p.tK.LOADING||x===p.tK.LOADING?void 0:{[r.FeeAmount.LOWEST]:d===p.tK.EXISTS?100*(a[r.FeeAmount.LOWEST]??0):void 0,[r.FeeAmount.LOW_200]:l===p.tK.EXISTS?100*(a[r.FeeAmount.LOW_200]??0):void 0,[r.FeeAmount.LOW_300]:u===p.tK.EXISTS?100*(a[r.FeeAmount.LOW_300]??0):void 0,[r.FeeAmount.LOW_400]:c===p.tK.EXISTS?100*(a[r.FeeAmount.LOW_400]??0):void 0,[r.FeeAmount.LOW]:m===p.tK.EXISTS?100*(a[r.FeeAmount.LOW]??0):void 0,[r.FeeAmount.MEDIUM]:v===p.tK.EXISTS?100*(a[r.FeeAmount.MEDIUM]??0):void 0,[r.FeeAmount.HIGH]:x===p.tK.EXISTS?100*(a[r.FeeAmount.HIGH]??0):void 0};return{isLoading:o,isError:!!s,distributions:t,largestUsageFeeTier:-1===e?void 0:e}}),[o,s,a,d,m,v,x,l,u,c])}var D=n(94109),M=n(61152),K=n(36664),$=n(9330),P=n(22953),C=n(45878),w=n(89081);const k=(0,K.ZP)(a.ZP)`
  border: 1px solid ${({theme:e})=>e.surface3};
  animation: ${({pulsing:e,theme:t})=>{return e&&(n=t.accent1,M.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${n};
  }

  70% {
    box-shadow: 0 0 0 2px ${n};
  }

  100% {
    box-shadow: 0 0 0 0 ${n};
  }
`);var n}} 0.6s linear;
  align-self: center;
`,U=K.ZP.div`
  align-items: flex-start;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
  width: 100%;
`;function N({disabled:e=!1,feeAmount:t,handleFeePoolSelect:n,currencyA:a,currencyB:l}){var m;const{chainId:v}=(0,T.m)(),A=(0,w.useTrace)(),{formatDelta:h}=(0,b.Gb)(),{isLoading:S,isError:O,largestUsageFeeTier:E,distributions:_}=y(a,l),W=(0,p.Oh)([[a,l,r.FeeAmount.LOWEST],[a,l,r.FeeAmount.LOW_200],[a,l,r.FeeAmount.LOW_300],[a,l,r.FeeAmount.LOW_400],[a,l,r.FeeAmount.LOW],[a,l,r.FeeAmount.MEDIUM],[a,l,r.FeeAmount.HIGH]]),j=(0,g.useMemo)((()=>W.reduce(((e,[t,n])=>{var i;return e={...e,[null===(i=n)||void 0===i?void 0:i.fee]:t}}),{[r.FeeAmount.LOWEST]:p.tK.NOT_EXISTS,[r.FeeAmount.LOW_200]:p.tK.NOT_EXISTS,[r.FeeAmount.LOW_300]:p.tK.NOT_EXISTS,[r.FeeAmount.LOW_400]:p.tK.NOT_EXISTS,[r.FeeAmount.LOW]:p.tK.NOT_EXISTS,[r.FeeAmount.MEDIUM]:p.tK.NOT_EXISTS,[r.FeeAmount.HIGH]:p.tK.NOT_EXISTS})),[W]),[M,K]=(0,g.useState)(!1),[N,H]=(0,g.useState)(!1),R=(0,D.Z)(t),z=(0,g.useRef)(!1),Z=(0,g.useCallback)((e=>{(0,C.sendAnalyticsEvent)(o.vp.SELECT_LIQUIDITY_POOL_FEE_TIER,{action:o.jI.MANUAL,fee_tier:e,...A}),n(e)}),[n,A]);return(0,g.useEffect)((()=>{t||S||O||(E?(K(!1),z.current=!0,(0,C.sendAnalyticsEvent)(o.vp.SELECT_LIQUIDITY_POOL_FEE_TIER,{action:o.jI.RECOMMENDED,fee_tier:E,...A}),n(E)):K(!0))}),[t,S,O,E,n,A]),(0,g.useEffect)((()=>{K(O)}),[O]),(0,g.useEffect)((()=>{t&&R!==t&&H(!0)}),[R,t]),(0,i.jsx)(d.Tz,{gap:"16px",children:(0,i.jsxs)($.DD,{gap:"md",disabled:e,children:[(0,i.jsx)(k,{pulsing:N,onAnimationEnd:()=>H(!1),children:(0,i.jsxs)(I.m0,{children:[(0,i.jsx)(d.Tz,{id:"add-liquidity-selected-fee",children:t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(L.T.DeprecatedLabel,{className:"selected-fee-label",children:(0,i.jsx)(u.Trans,{i18nKey:"fee.tierExact",values:{fee:h(parseFloat(c[t].label))}})}),_&&(0,i.jsx)(P.xu,{style:{width:"fit-content",marginTop:"8px"},className:"selected-fee-percentage",children:(0,i.jsx)(F,{distributions:_,feeAmount:t,poolState:j[t]})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(L.T.DeprecatedLabel,{children:(0,i.jsx)(u.Trans,{i18nKey:"fee.tier"})}),(0,i.jsx)(L.T.DeprecatedMain,{fontWeight:485,fontSize:"12px",textAlign:"left",children:(0,i.jsx)(u.Trans,{i18nKey:"fee.percentEarned"})})]})}),(0,i.jsx)(s.Ux,{onClick:()=>K(!M),width:"auto",padding:"4px",$borderRadius:"6px",children:M?(0,i.jsx)(u.Trans,{i18nKey:"common.hide.button"}):(0,i.jsx)(u.Trans,{i18nKey:"common.edit.button"})})]})}),v&&M&&(0,i.jsx)(x.S,{value:null===(m=t)||void 0===m?void 0:m.toString(),orientation:"horizontal",justifyContent:"flex-start",flexWrap:"wrap",children:(0,i.jsx)(U,{children:[r.FeeAmount.LOWEST,r.FeeAmount.LOW_200,r.FeeAmount.LOW_300,r.FeeAmount.LOW_400,r.FeeAmount.LOW,r.FeeAmount.MEDIUM,r.FeeAmount.HIGH].map(((e,n)=>{const{supportedChains:o}=c[e];return o.includes(v)?(0,i.jsx)(f,{feeAmount:e,selected:e===t,onClick:()=>Z(e),distributions:_,poolState:j[e]},n):null}))})})]})})}},55750:(e,t,n)=>{n.d(t,{Z:()=>E});var i=n(92936),o=n(3115),r=n(32409),s=n(55478),a=n(87478),d=n(61152),l=n(36664),u=n(45779),c=n(57809),m=n(79784),p=n(56363),v=n(56250),x=n(8806),A=n(97994);const b=l.ZP.div`
  display: flex;
`,f=(0,l.ZP)(o.Ux)`
  border-radius: 8px;
  padding: 4px;
`,h=(0,l.ZP)(r.nq)`
  border-color: ${({active:e,theme:t})=>e&&t.deprecated_stateOverlayPressed};
  padding: 12px;
  animation: ${({pulsing:e,theme:t})=>{return e&&(n=t.accent1,d.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${n};
  }

  70% {
    box-shadow: 0 0 0 2px ${n};
  }

  100% {
    box-shadow: 0 0 0 0 ${n};
  }
`);var n}} 0.8s linear;
`,L=(0,l.ZP)(a.II)`
  background-color: transparent;
  font-weight: 535;
  text-align: left;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 16px;
  `};
`,F=(0,l.ZP)(s.Tz)`
  width: 100%;
`,I=(0,v.z)(x.xv,{fontSize:12,fontWeight:"$medium",color:"$neutral2"}),T=(0,l.ZP)(p.T.DeprecatedWhite)`
  color: ${({theme:e,disabled:t})=>t?e.neutral2:e.neutral1} !important;
  display: flex;
`,S=({value:e,decrement:t,increment:n,decrementDisabled:o=!1,incrementDisabled:r=!1,width:a,locked:d,onUserInput:l,title:p,tokenA:v,tokenB:x})=>{const[S,O]=(0,u.useState)(!1),[g,E]=(0,u.useState)(""),[_,W]=(0,u.useState)(!1),[j,y]=(0,u.useState)(!1),D=(0,u.useCallback)((()=>{W(!1),O(!1),l(g)}),[g,l]),M=(0,u.useCallback)((()=>{W(!1),l(t())}),[t,l]),K=(0,u.useCallback)((()=>{W(!1),l(n())}),[n,l]);return(0,u.useEffect)((()=>{g===e||_||setTimeout((()=>{E(e),y(!0),setTimeout((function(){y(!1)}),1800)}),0)}),[g,_,e]),(0,i.jsx)(h,{pulsing:j,active:S,onFocus:()=>{W(!0),O(!0)},onBlur:D,width:a,children:(0,i.jsxs)(b,{children:[(0,i.jsxs)(F,{justify:"flex-start",children:[(0,i.jsx)(I,{fontSize:12,textAlign:"center",children:p}),(0,i.jsx)(L,{className:"rate-input-0",value:g,fontSize:"20px",disabled:d,onUserInput:e=>{E(e)}}),(0,i.jsx)(I,{fontSize:12,textAlign:"left",children:(0,i.jsx)(A.Trans,{i18nKey:"common.feesEarnedPerBase",values:{symbolA:x,symbolB:v}})})]}),(0,i.jsxs)(s.Tz,{gap:"8px",children:[!d&&(0,i.jsx)(f,{"data-testid":"increment-price-range",onClick:K,disabled:r,children:(0,i.jsx)(T,{disabled:r,fontSize:"12px",children:(0,i.jsx)(c.Z,{size:18})})}),!d&&(0,i.jsx)(f,{"data-testid":"decrement-price-range",onClick:M,disabled:o,children:(0,i.jsx)(T,{disabled:o,fontSize:"12px",children:(0,i.jsx)(m.Z,{size:18})})})]})]})})};var O=n(83792),g=n(74695);function E({priceLower:e,priceUpper:t,onLeftRangeInput:n,onRightRangeInput:o,getDecrementLower:r,getIncrementLower:s,getDecrementUpper:a,getIncrementUpper:d,currencyA:l,currencyB:u,feeAmount:c,ticksAtLimit:m}){var p,v,x,b,f,h,L,F,I,T,E,_;const W=null===(p=l??void 0)||void 0===p?void 0:p.wrapped,j=null===(v=u??void 0)||void 0===v?void 0:v.wrapped,y=W&&j&&W.sortsBefore(j),D=y?e:null===(x=t)||void 0===x?void 0:x.invert(),M=y?t:null===(b=e)||void 0===b?void 0:b.invert();return(0,i.jsxs)(O.BA,{gap:"md",children:[(0,i.jsx)(S,{value:m[y?g.Mb.LOWER:g.Mb.UPPER]?"0":(null===(f=D)||void 0===f?void 0:f.toSignificant(8))??"",onUserInput:n,decrement:y?r:d,increment:y?s:a,decrementDisabled:void 0===D||m[y?g.Mb.LOWER:g.Mb.UPPER],incrementDisabled:void 0===D||m[y?g.Mb.LOWER:g.Mb.UPPER],feeAmount:c,label:D?`${null===(h=u)||void 0===h?void 0:h.symbol}`:"-",title:(0,i.jsx)(A.Trans,{i18nKey:"common.lowPrice"}),tokenA:null===(L=l)||void 0===L?void 0:L.symbol,tokenB:null===(F=u)||void 0===F?void 0:F.symbol}),(0,i.jsx)(S,{value:m[y?g.Mb.UPPER:g.Mb.LOWER]?"\u221e":(null===(I=M)||void 0===I?void 0:I.toSignificant(8))??"",onUserInput:o,decrement:y?a:s,increment:y?d:r,incrementDisabled:void 0===M||m[y?g.Mb.UPPER:g.Mb.LOWER],decrementDisabled:void 0===M||m[y?g.Mb.UPPER:g.Mb.LOWER],feeAmount:c,label:M?`${null===(T=u)||void 0===T?void 0:T.symbol}`:"-",tokenA:null===(E=l)||void 0===E?void 0:E.symbol,tokenB:null===(_=u)||void 0===_?void 0:_.symbol,title:(0,i.jsx)(A.Trans,{i18nKey:"common.highPrice"})})]})}},11678:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(22722),o=n(29717),r=n(24055),s=n(70359),a=n(45779);function d(){var e,t;const n=(0,i.m)(),d=(0,o.c5)(),l=(0,a.useMemo)((()=>[n.address]),[n.address]),u=(0,r.Wk)(d,"isArgentWallet",l,s.DB);return Boolean(null===(t=u)||void 0===t||null===(e=t.result)||void 0===e?void 0:e[0])}},9330:(e,t,n)=>{n.d(t,{DD:()=>d,Fy:()=>l,SF:()=>c,Sx:()=>u,im:()=>s,zH:()=>a});var i=n(55478),o=n(87478),r=n(36664);const s=r.ZP.div`
  position: relative;
  padding: 26px 16px;
`,a=r.ZP.div`
  padding: 20px 8px 0px;
  position: relative;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin: 0 auto;
  `};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,d=(0,r.ZP)(i.Tz)`
  opacity: ${({disabled:e})=>e?"0.2":"1"};
  pointer-events: ${({disabled:e})=>e?"none":"initial"};
`,l=(0,r.ZP)(o.II)`
  background-color: ${({theme:e})=>e.surface1};
  text-align: left;
  font-size: 18px;
  width: 100%;
`,u=r.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;

  border-top: 1px solid ${({theme:e})=>e.surface3};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin-top: 0;
  `};
`,c=r.ZP.div`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    display: none;
  `};
`}}]);
//# sourceMappingURL=7131.17adeac0.chunk.js.map
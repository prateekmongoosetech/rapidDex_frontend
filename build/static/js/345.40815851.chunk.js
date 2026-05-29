"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[345],{10404:(e,n,r)=>{r.d(n,{Z:()=>d});var i=r(45779),t=r(68090),o=r.n(t);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},l.apply(this,arguments)}function s(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=(0,i.forwardRef)((function(e,n){var r=e.color,t=void 0===r?"currentColor":r,o=e.size,c=void 0===o?24:o,d=s(e,["color","size"]);return i.createElement("svg",l({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("circle",{cx:"12",cy:"12",r:"10"}),i.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),i.createElement("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="AlertCircle";const d=c},33882:(e,n,r)=>{r.d(n,{Z:()=>d});var i=r(45779),t=r(68090),o=r.n(t);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},l.apply(this,arguments)}function s(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=(0,i.forwardRef)((function(e,n){var r=e.color,t=void 0===r?"currentColor":r,o=e.size,c=void 0===o?24:o,d=s(e,["color","size"]);return i.createElement("svg",l({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("circle",{cx:"12",cy:"12",r:"10"}),i.createElement("polyline",{points:"16 12 12 8 8 12"}),i.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"8"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="ArrowUpCircle";const d=c},83109:(e,n,r)=>{r.d(n,{Z:()=>s});var i=r(92936),t=r(36664),o=r(45779);const l=t.ZP.input`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: ${({theme:e})=>e.accent1};
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow:
        0px 0px 1px rgba(0, 0, 0, 0.1),
        0px 4px 8px rgba(0, 0, 0, 0.08),
        0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    border: none;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow:
        0px 0px 1px rgba(0, 0, 0, 0.1),
        0px 4px 8px rgba(0, 0, 0, 0.08),
        0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow:
        0px 0px 1px rgba(0, 0, 0, 0.1),
        0px 4px 8px rgba(0, 0, 0, 0.08),
        0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.accent1}, ${({theme:e})=>e.accent1});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.surface4}, ${({theme:e})=>e.surface2});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({theme:e})=>e.surface4};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${({theme:e})=>e.surface4};
  }
  &::-ms-fill-upper {
    background: ${({theme:e})=>e.surface2};
  }
`;function s({value:e,onChange:n,min:r=0,step:t=1,max:s=100,size:c=28,...d}){const a=(0,o.useCallback)((e=>{n(parseInt(e.target.value))}),[n]);return(0,i.jsx)(l,{size:c,...d,type:"range",value:e,style:{padding:"15px 0"},onChange:a,"aria-labelledby":"input slider",step:t,min:r,max:s})}},87995:(e,n,r)=>{r.d(n,{Z:()=>t});var i=r(45779);function t(e,n,r=100){const[t,o]=(0,i.useState)((()=>e)),l=(0,i.useRef)(),s=(0,i.useCallback)((e=>{o(e),l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{n(e),l.current=void 0}),r)}),[r,n]);return(0,i.useEffect)((()=>{l.current&&(clearTimeout(l.current),l.current=void 0),o(e)}),[e]),[t,s]}},19188:(e,n,r)=>{r.r(n),r.d(n,{default:()=>he});var i=r(92936),t=r(11604),o=r(5985),l=r(44913),s=r(76078),c=r(89878),d=r(42704),a=r(3115),u=r(32409),m=r(87710),x=r(70174),v=r(58543),p=r(23652),h=r(76394),y=r(83109),f=r(26901),g=r(55478),j=r(83792),b=r(44609),w=r(22722),k=r(29717),T=r(87995),z=r(74015),C=r(64063),S=r(72976),$=r(17125),A=r(44958),I=r(11712),O=r(32507),E=r(36664),q=r(83639),L=r(22953);const P=E.ZP.div`
  position: relative;
  padding: 20px;
  min-width: 460px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
    min-width: 340px;
  `};
`,R=(0,E.ZP)(q.ER)`
  font-size: 12px;
`,W=(0,E.ZP)(L.xv)`
  font-size: 40px;
  font-weight: 535;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
     font-size: 24px
  `};
`;var Z=r(45779),D=r(6282),_=r(69532),K=r(97704),V=r(78087),U=r(25277),F=r(34946),N=r(97994),B=r(88362);function M(){return(0,F.C)((e=>e.burnV3))}var Q=r(90379),Y=r(67153),G=r(16138),H=r(56363),J=r(8806),X=r(1596),ee=r(40834),ne=r(36625),re=r(9450),ie=r(95625),te=r(39063),oe=r(45878),le=r(65541),se=r(25105),ce=r(89081),de=r(58730),ae=r(85209),ue=r(88671),me=r(64972);function xe(e,n,r,i,t,o,l){try{var s=e[o](l),c=s.value}catch(d){return void r(d)}s.done?n(c):Promise.resolve(c).then(i,t)}function ve(e){return function(){var n=this,r=arguments;return new Promise((function(i,t){var o=e.apply(n,r);function l(e){xe(o,i,t,l,s,"next",e)}function s(e){xe(o,i,t,l,s,"throw",e)}l(void 0)}))}}const pe=new s.Percent(50,1e4);function he(){const{chainId:e}=(0,w.m)(),{defaultChainId:n}=(0,ne.useEnabledChains)(),r=(0,ne.useIsSupportedChainId)(e),{tokenId:o}=(0,D.UO)(),l=(0,D.TH)(),s=(0,Z.useMemo)((()=>{try{return t.O$.from(o)}catch{return null}}),[o]),{position:c,loading:d}=(0,$.n)(s??void 0);if((0,te.useFeatureFlag)(ie.FeatureFlags.V4Everywhere)){const r=(0,re.toGraphQLChain)(e??n).toLowerCase();return(0,i.jsx)(D.Fg,{to:`/positions/v3/${r}/${o}`,replace:!0})}return null===s||s.eq(0)?(0,i.jsx)(D.Fg,{to:{...l,pathname:"/pools"},replace:!0}):r&&(d||c)?(0,i.jsx)(ye,{tokenId:s}):(0,i.jsx)(O.p,{})}function ye({tokenId:e}){var n,r,t,O,E,q,L,D,ne,re,ie,te,xe,he,ye,fe,ge,je,be,we,ke,Te,ze,Ce,Se,$e,Ae,Ie,Oe,Ee,qe,Le;const{position:Pe}=(0,$.n)(e),Re=(0,w.m)(),We=(0,z.z)(),Ze=(0,ce.useTrace)(),{formatCurrencyAmount:De}=(0,me.Gb)(),[_e,Ke]=(0,Z.useState)(!1),Ve=(0,A.Z)(Re.chainId).wrapped.symbol,{percent:Ue}=M(),{position:Fe,liquidityPercentage:Ne,liquidityValue0:Be,liquidityValue1:Me,feeValue0:Qe,feeValue1:Ye,outOfRange:Ge,error:He}=function(e,n=!1){var r,t,o,l;const d=(0,w.m)(),{percent:a}=M(),u=(0,K.dQ)(null===(r=e)||void 0===r?void 0:r.token0),m=(0,K.dQ)(null===(t=e)||void 0===t?void 0:t.token1),[,x]=(0,C.AI)(u??void 0,m??void 0,null===(o=e)||void 0===o?void 0:o.fee),v=(0,Z.useMemo)((()=>{var n,r,i;return x&&(null===(n=e)||void 0===n?void 0:n.liquidity)&&"number"===typeof(null===(r=e)||void 0===r?void 0:r.tickLower)&&"number"===typeof(null===(i=e)||void 0===i?void 0:i.tickUpper)?new c.Position({pool:x,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper}):void 0}),[x,e]),p=new s.Percent(a,100),h=v?p.multiply(v.amount0.quotient).quotient:void 0,y=v?p.multiply(v.amount1.quotient).quotient:void 0,f=u&&h?s.CurrencyAmount.fromRawAmount(n?u:(0,B.B)(u),h):void 0,g=m&&y?s.CurrencyAmount.fromRawAmount(n?m:(0,B.B)(m),y):void 0,[j,b]=(0,V.t)(x??void 0,null===(l=e)||void 0===l?void 0:l.tokenId,n),k=!(!x||!e)&&(x.tickCurrent<e.tickLower||x.tickCurrent>e.tickUpper);let T;return d.isConnected||(T=(0,i.jsx)(_.T,{})),0===a&&(T=T??(0,i.jsx)(N.Trans,{i18nKey:"burn.input.enterAPercent.error"})),{position:v,liquidityPercentage:p,liquidityValue0:f,liquidityValue1:g,feeValue0:j,feeValue1:b,outOfRange:k,error:T}}(Pe,_e),{onPercentSelect:Je}=function(){const e=(0,F.T)();return{onPercentSelect:(0,Z.useCallback)((n=>{e((0,U.o)({percent:n}))}),[e])}}(),Xe=null===(r=Pe)||void 0===r||null===(n=r.liquidity)||void 0===n?void 0:n.eq(0),[en,nn]=(0,T.Z)(Ue,Je),rn=(0,S.n)(),tn=(0,G.eq)(pe),[on,ln]=(0,Z.useState)(!1),[sn,cn]=(0,Z.useState)(!1),[dn,an]=(0,Z.useState)(),un=(0,Q.h7)(),mn=(0,k.GL)(),xn=(0,Z.useCallback)(ve((function*(){if(cn(!0),!mn||!Be||!Me||"connected"!==Re.status||!Fe||!Ne||!We)return;const n=yield rn();if(!n)throw new Error("could not get deadline");const{calldata:r,value:i}=c.NonfungiblePositionManager.removeCallParameters(Fe,{tokenId:e.toString(),liquidityPercentage:Ne,slippageTolerance:tn,deadline:n.toString(),collectOptions:{expectedCurrencyOwed0:Qe??s.CurrencyAmount.fromRawAmount(Be.currency,0),expectedCurrencyOwed1:Ye??s.CurrencyAmount.fromRawAmount(Me.currency,0),recipient:Re.address}}),t={to:mn.address,data:r,value:i},d=yield We.getChainId();if(Re.chainId!==d)throw new ue.CJ;We.estimateGas(t).then((e=>{const n={...t,gasLimit:(0,de.y)(e)};return We.sendTransaction(n).then((e=>{var n;(0,oe.sendAnalyticsEvent)(o.vp.REMOVE_LIQUIDITY_SUBMITTED,{...(0,x.l)({trace:Ze,fee:null===(n=Pe)||void 0===n?void 0:n.fee,poolId:Re.chainId&&Pe?C.WQ.getPoolAddress((0,le.NM)(Re.chainId,s.V3_CORE_FACTORY_ADDRESSES[Re.chainId])??"",Fe.amount0.currency,Fe.amount1.currency,Pe.fee,Re.chainId):void 0,currency0:Be.currency,currency1:Me.currency,currency0AmountUsd:Be,currency1AmountUsd:Me,version:l.Qe.V3,chainId:Re.chainId}),expectedAmountBaseRaw:Be.quotient.toString(),expectedAmountQuoteRaw:Me.quotient.toString(),transaction_hash:e.hash,closePosition:100===Ue}),an(e.hash),cn(!1),un(e,{type:Y.i.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,ae.H)(Be.currency),quoteCurrencyId:(0,ae.H)(Me.currency),expectedAmountBaseRaw:Be.quotient.toString(),expectedAmountQuoteRaw:Me.quotient.toString()})}))})).catch((e=>{cn(!1),se.logger.error(e,{tags:{file:"RemoveLiquidity/V3",function:"burn"}})}))})),[mn,Be,Me,Re.status,Re.address,Re.chainId,Fe,Ne,We,rn,e,tn,Qe,Ye,Ze,Pe,Ue,un]),vn=(0,Z.useCallback)((()=>{ln(!1),dn&&nn(0),cn(!1),an("")}),[nn,dn]),pn=(0,i.jsx)(N.Trans,{i18nKey:"removeLiquidity.removing",values:{amt1:null===(t=Be)||void 0===t?void 0:t.toSignificant(6),symbol1:null===(E=Be)||void 0===E||null===(O=E.currency)||void 0===O?void 0:O.symbol,amt2:null===(q=Me)||void 0===q?void 0:q.toSignificant(6),symbol2:null===(D=Me)||void 0===D||null===(L=D.currency)||void 0===L?void 0:L.symbol}});function hn(){var e,n,r,t,o,l,s,c,d,u,m,x,p,h;return(0,i.jsxs)(g.Tz,{gap:"sm",style:{padding:"16px"},children:[(0,i.jsxs)(j.m0,{align:"flex-end",children:[(0,i.jsx)(J.xv,{fontSize:16,fontWeight:"$medium",children:(0,i.jsx)(N.Trans,{i18nKey:"removeLiquidity.pooled",values:{symbol:null===(n=Be)||void 0===n||null===(e=n.currency)||void 0===e?void 0:e.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(J.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Be&&De({amount:Be})}),(0,i.jsx)(v.Z,{size:20,style:{marginLeft:"8px"},currency:null===(r=Be)||void 0===r?void 0:r.currency})]})]}),(0,i.jsxs)(j.m0,{align:"flex-end",children:[(0,i.jsx)(J.xv,{fontSize:16,fontWeight:"$medium",children:(0,i.jsx)(N.Trans,{i18nKey:"removeLiquidity.pooled",values:{symbol:null===(o=Me)||void 0===o||null===(t=o.currency)||void 0===t?void 0:t.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(J.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Me&&De({amount:Me})}),(0,i.jsx)(v.Z,{size:20,style:{marginLeft:"8px"},currency:null===(l=Me)||void 0===l?void 0:l.currency})]})]}),(null===(s=Qe)||void 0===s?void 0:s.greaterThan(0))||(null===(c=Ye)||void 0===c?void 0:c.greaterThan(0))?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(J.xv,{fontSize:12,color:"$neutral2",textAlign:"left",pt:8,children:(0,i.jsx)(N.Trans,{i18nKey:"removeLiquidity.collectFees"})}),(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(J.xv,{fontSize:16,fontWeight:"$medium",children:(0,i.jsx)(N.Trans,{i18nKey:"common.feesEarned.label",values:{symbol:null===(u=Qe)||void 0===u||null===(d=u.currency)||void 0===d?void 0:d.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(J.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Qe&&De({amount:Qe})}),(0,i.jsx)(v.Z,{size:20,style:{marginLeft:"8px"},currency:null===(m=Qe)||void 0===m?void 0:m.currency})]})]}),(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(J.xv,{fontSize:16,fontWeight:"$medium",children:(0,i.jsx)(N.Trans,{i18nKey:"common.feesEarned.label",values:{symbol:null===(p=Ye)||void 0===p||null===(x=p.currency)||void 0===x?void 0:x.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(J.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ye&&De({amount:Ye})}),(0,i.jsx)(v.Z,{size:20,style:{marginLeft:"8px"},currency:null===(h=Ye)||void 0===h?void 0:h.currency})]})]})]}):null,(0,i.jsx)(a.DF,{mt:"16px",onClick:xn,children:(0,i.jsx)(N.Trans,{i18nKey:"common.remove.label"})})]})}const yn=Boolean((null===(ne=Be)||void 0===ne?void 0:ne.currency)&&(null===(re=Me)||void 0===re?void 0:re.currency)&&(Be.currency.isNative||Me.currency.isNative||(null===(ie=ee.WRAPPED_NATIVE_CURRENCY[Be.currency.chainId])||void 0===ie?void 0:ie.equals(Be.currency.wrapped))||(null===(te=ee.WRAPPED_NATIVE_CURRENCY[Me.currency.chainId])||void 0===te?void 0:te.equals(Me.currency.wrapped))));return(0,i.jsxs)(g.Tz,{children:[(0,i.jsx)(f.Z,{isOpen:on,onDismiss:vn,attemptingTxn:sn,hash:dn??"",reviewContent:()=>(0,i.jsx)(f.p,{title:(0,i.jsx)(N.Trans,{i18nKey:"pool.removeLiquidity"}),onDismiss:vn,topContent:hn}),pendingText:pn}),(0,i.jsxs)(I.Z,{$maxWidth:"unset",children:[(0,i.jsx)(h.w,{creating:!1,adding:!1,autoSlippage:pe}),(0,i.jsx)(P,{children:Pe?(0,i.jsxs)(g.Tz,{gap:"lg",children:[(0,i.jsxs)(j.m0,{children:[(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(p.ge,{currencies:[null===(xe=Be)||void 0===xe?void 0:xe.currency,null===(he=Me)||void 0===he?void 0:he.currency],size:20}),(0,i.jsx)(H.T.DeprecatedLabel,{ml:"10px",fontSize:"20px",id:"remove-liquidity-tokens",children:`${null===(fe=Be)||void 0===fe||null===(ye=fe.currency)||void 0===ye?void 0:ye.symbol}/${null===(je=Me)||void 0===je||null===(ge=je.currency)||void 0===ge?void 0:ge.symbol}`})]}),(0,i.jsx)(d.Z,{removed:Xe,inRange:!Ge})]}),(0,i.jsx)(u.hl,{children:(0,i.jsxs)(g.Tz,{gap:"md",children:[(0,i.jsx)(H.T.DeprecatedMain,{fontWeight:485,children:(0,i.jsx)(N.Trans,{i18nKey:"common.amount.label"})}),(0,i.jsxs)(j.m0,{children:[(0,i.jsxs)(W,{children:[en,"%"]}),(0,i.jsxs)(j.BA,{gap:"4px",justify:"flex-end",children:[(0,i.jsx)(R,{onClick:()=>Je(25),width:"20%",children:"25%"}),(0,i.jsx)(R,{onClick:()=>Je(50),width:"20%",children:"50%"}),(0,i.jsx)(R,{onClick:()=>Je(75),width:"20%",children:"75%"}),(0,i.jsx)(R,{onClick:()=>Je(100),width:"20%",children:(0,i.jsx)(N.Trans,{i18nKey:"common.max"})})]})]}),(0,i.jsx)(y.Z,{value:en,onChange:nn})]})}),(0,i.jsx)(u.hl,{children:(0,i.jsxs)(g.Tz,{gap:"md",children:[(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(J.xv,{fontSize:16,fontWeight:"$medium",id:"remove-pooled-tokena-symbol",children:(0,i.jsx)(N.Trans,{i18nKey:"removeLiquidity.pooled",values:{symbol:null===(we=Be)||void 0===we||null===(be=we.currency)||void 0===be?void 0:be.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(J.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Be&&De({amount:Be})}),(0,i.jsx)(v.Z,{size:20,style:{marginLeft:"8px"},currency:null===(ke=Be)||void 0===ke?void 0:ke.currency})]})]}),(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(J.xv,{fontSize:16,fontWeight:"$medium",id:"remove-pooled-tokenb-symbol",children:(0,i.jsx)(N.Trans,{i18nKey:"removeLiquidity.pooled",values:{symbol:null===(ze=Me)||void 0===ze||null===(Te=ze.currency)||void 0===Te?void 0:Te.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(J.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Me&&De({amount:Me})}),(0,i.jsx)(v.Z,{size:20,style:{marginLeft:"8px"},currency:null===(Ce=Me)||void 0===Ce?void 0:Ce.currency})]})]}),(null===(Se=Qe)||void 0===Se?void 0:Se.greaterThan(0))||(null===($e=Ye)||void 0===$e?void 0:$e.greaterThan(0))?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b.SS,{}),(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(J.xv,{fontSize:16,fontWeight:"$medium",children:(0,i.jsx)(N.Trans,{i18nKey:"common.feesEarned.label",values:{symbol:null===(Ie=Qe)||void 0===Ie||null===(Ae=Ie.currency)||void 0===Ae?void 0:Ae.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(J.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Qe&&De({amount:Qe})}),(0,i.jsx)(v.Z,{size:20,style:{marginLeft:"8px"},currency:null===(Oe=Qe)||void 0===Oe?void 0:Oe.currency})]})]}),(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(J.xv,{fontSize:16,fontWeight:"$medium",children:(0,i.jsx)(N.Trans,{i18nKey:"common.feesEarned.label",values:{symbol:null===(qe=Ye)||void 0===qe||null===(Ee=qe.currency)||void 0===Ee?void 0:Ee.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(J.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ye&&De({amount:Ye})}),(0,i.jsx)(v.Z,{size:20,style:{marginLeft:"8px"},currency:null===(Le=Ye)||void 0===Le?void 0:Le.currency})]})]})]}):null]})}),yn&&(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(H.T.DeprecatedMain,{children:(0,i.jsx)(N.Trans,{i18nKey:"pool.collectAs",values:{nativeWrappedSymbol:Ve}})}),(0,i.jsx)(X.r,{id:"receive-as-weth",checked:_e,onCheckedChange:()=>Ke((e=>!e)),variant:"branded"})]}),(0,i.jsx)("div",{style:{display:"flex"},children:(0,i.jsx)(g.Tz,{gap:"md",style:{flex:"1"},children:(0,i.jsx)(a.gn,{confirmed:!1,disabled:Xe||0===Ue||!Be,onClick:()=>ln(!0),children:Xe?(0,i.jsx)(N.Trans,{i18nKey:"common.closed"}):He??(0,i.jsx)(N.Trans,{i18nKey:"common.remove.label"})})})})]}):(0,i.jsx)(m.ZP,{})})]})]})}}}]);
//# sourceMappingURL=345.40815851.chunk.js.map
"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5541],{25541:(e,n,i)=>{i.r(n),i.d(n,{LegacyPoolRedirects:()=>hn,LegacyPoolV2Redirects:()=>mn,LegacyPositionPageRedirects:()=>jn,PoolFinderRedirects:()=>gn});var t=i(92936),o=i(5985),r=i(66142),s=i(3115),d=i(99454),l=i(24644),a=i(36664),c=i(43969),p=i(97994);const x=a.ZP.div`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${c.e.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,u=a.ZP.div`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${c.e.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${c.e.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,h=a.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,m=a.ZP.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;function g({positions:e,setUserHideClosedPositions:n,userHideClosedPositions:i}){const{t:o}=(0,p.useTranslation)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(x,{children:[(0,t.jsxs)("div",{children:[o("pool.positions.title"),e&&" ("+e.length+")"]}),(0,t.jsx)(m,{id:"desktop-hide-closed-positions",onClick:()=>{n(!i)},children:o(i?"pool.showClosed":"pool.hideClosed")})]}),(0,t.jsxs)(u,{children:[o("pool.positions.title"),(0,t.jsx)(h,{children:(0,t.jsx)(m,{onClick:()=>{n(!i)},children:o(i?"pool.showClosed":"pool.hideClosed")})})]}),e.map((e=>(0,t.jsx)(l.Z,{...e},e.tokenId.toString())))]})}var j=i(92241),v=i(55478),f=i(22722),y=i(58534),T=i(15149),w=i(42659),k=i(61190),P=i(51371),b=i(24055),A=i(70359),C=i(22286);const I=new P.vU(C);var _=i(45779),S=i(70854),F=i(36625),$=i(9450);function Z(e){if(!e)return!1;return new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(e)}function L(e,n,i,t,o,r,s){try{var d=e[r](s),l=d.value}catch(a){return void i(a)}d.done?n(l):Promise.resolve(l).then(t,o)}function D(e){return function(){var n=this,i=arguments;return new Promise((function(t,o){var r=e.apply(n,i);function s(e){L(r,t,o,s,d,"next",e)}function d(e){L(r,t,o,s,d,"throw",e)}s(void 0)}))}}function E(e){const{chainId:n}=(0,f.m)(),{defaultChainId:i}=(0,F.useEnabledChains)(),t=(0,_.useMemo)((()=>function(e){return Array.from(new Set(e.reduce(((e,n)=>e.concat(n.token0,n.token1)),[])))}(e)),[e]),o=(0,y.h)({queries:e.map((e=>function(e,n){return(0,k.TJ)({queryKey:["positionCurrencyInfo",e],queryFn:D((function*(){const i=[T.l.query({query:S.TokenDocument,variables:{address:e.token0,chain:(0,$.toGraphQLChain)(n)},fetchPolicy:"cache-first"}),T.l.query({query:S.TokenDocument,variables:{address:e.token1,chain:(0,$.toGraphQLChain)(n)},fetchPolicy:"cache-first"})],[t,o]=yield Promise.all(i);return{position:e,currency0Info:(0,w.l)(t.data.token),currency1Info:(0,w.l)(o.data.token)}}))})}(e,n??i)))}),r=function(e,n){return(0,b._Y)(e,I,n,void 0,A.DB)}(t,"symbol"),s=(0,_.useMemo)((()=>{const e={};for(let i=0;i<t.length;i++){var n;const o=null===(n=r[i])||void 0===n?void 0:n.result;if(!o)continue;e[t[i]]=o}return e}),[t,r]);return(0,_.useMemo)((()=>o.map((e=>{var n,i,t,o,r,d,l,a;if(!e.data)return;const{currency0Info:c,currency1Info:p,position:x}=e.data;let u=0;if((null===(n=c)||void 0===n?void 0:n.isSpam)||(null===(i=c)||void 0===i?void 0:i.safetyLevel)!==S.SafetyLevel.Verified||u++,(null===(t=p)||void 0===t?void 0:t.isSpam)||(null===(o=p)||void 0===o?void 0:o.safetyLevel)!==S.SafetyLevel.Verified||u++,2===u)return x;let h=0;return Z((null===(d=c)||void 0===d||null===(r=d.currency)||void 0===r?void 0:r.symbol)??s[x.token0])&&h++,Z((null===(a=p)||void 0===a||null===(l=a.currency)||void 0===l?void 0:l.symbol)??s[x.token1])&&h++,1===u&&h<2||0===h?x:void 0})).filter((e=>!!e))),[s,o])}var R=i(42183),z=i(17125),q=i(61152),B=i(77134),W=i(56363),V=i(33127),K=i(92139);const O=a.ZP.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`,M=q.css`
  padding: 16px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.surface3};
  text-decoration: none;

  * {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};

    * {
      text-decoration: none !important;
    }
  }
`,N=(0,a.ZP)(B.dL)`
  ${M}
`,U=(0,a.ZP)(B.m_)`
  ${M}
`,G=(0,a.ZP)(W.T.DeprecatedLabel)`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`,H=(0,a.ZP)(v.Tz)`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`;function Y(){const{chainId:e}=(0,f.m)(),n=(0,V.getChainInfo)((0,F.useSupportedChainId)(e)??K.UniverseChainId.Mainnet);return(0,t.jsxs)(O,{children:[(0,t.jsx)(N,{href:"https://mstblockchain.com",children:(0,t.jsxs)(H,{children:[(0,t.jsxs)(G,{children:[(0,t.jsx)(p.Trans,{i18nKey:"pool.learnLiquidity"})," \u2197"]}),(0,t.jsx)(W.T.DeprecatedBody,{style:{alignItems:"center",display:"flex",fontWeight:485},children:(0,t.jsx)(p.Trans,{i18nKey:"pool.learnv3LP"})})]})}),(0,t.jsx)(U,{"data-testid":"cta-poolslink",to:`/explore/pools/${n.urlParam}`,children:(0,t.jsxs)(H,{children:[(0,t.jsxs)(G,{style:{alignSelf:"flex-start"},children:[(0,t.jsx)(p.Trans,{i18nKey:"pool.top"})," \u2197"]}),(0,t.jsx)(W.T.DeprecatedBody,{style:{alignSelf:"flex-start",fontWeight:485},children:(0,t.jsx)(p.Trans,{i18nKey:"pool.exporeAnalytics"})})]})})]})}var J=i(57367),Q=i(56250),X=i(20449),ee=i(8806),ne=i(95625),ie=i(39063);const te=(0,Q.z)(X.e,{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",gap:"$gap12",textDecorationLine:"none",color:"$neutral2",hoverStyle:{color:"$neutral1"}}),oe={[S.ProtocolVersion.V4]:{title:(0,p.t)("pool.v4"),link:"/pool"},[S.ProtocolVersion.V3]:{title:(0,p.t)("pool.v3"),link:"/pool"},[S.ProtocolVersion.V2]:{title:(0,p.t)("pool.v2"),link:"/pools/v2"}},re={[S.ProtocolVersion.V4]:"v4",[S.ProtocolVersion.V3]:"v3",[S.ProtocolVersion.V2]:"v2"};function se({protocolVersion:e}){const[n,i]=(0,_.useState)(!1),o=(0,ie.useFeatureFlag)(ne.FeatureFlags.V4Everywhere);return(0,t.jsx)(d.u,{isOpen:n,menuLabel:(0,t.jsx)(ee.xv,{variant:"body1",children:re[e]}),internalMenuItems:(0,t.jsx)(t.Fragment,{children:Object.entries(oe).filter((([n,i])=>!(!o&&n===S.ProtocolVersion.V4)&&i.title!==oe[e].title)).map((([,e])=>(0,t.jsxs)(te,{href:e.link,children:[(0,t.jsx)(J.K,{width:"20px",height:"20px"}),(0,t.jsx)(ee.xv,{variant:"body1",style:{color:"inherit"},children:e.title})]},e.title)))}),toggleOpen:i,buttonStyle:{height:36},adaptToSheet:!1})}var de=i(83639),le=i(57221),ae=i(13310),ce=i(74928),pe=i(48274),xe=i(97142),ue=i(43454),he=i(16138),me=i(11947),ge=i(48313);const je=(0,a.ZP)(v.Tz)`
  padding: 68px 8px 0px;
  max-width: 870px;
  width: 100%;

  @media (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 800px;
    padding-top: 48px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    max-width: 500px;
    padding-top: 20px;
  }
`,ve=(0,Q.z)(X.e,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",fontWeight:"$book",p:"$spacing8",textDecorationLine:"none",color:"$neutral2",hoverStyle:{color:"$neutral1"}}),fe=a.ZP.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`,ye=q.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,Te=(0,a.ZP)(le.Z)`
  ${ye}
`,we=(0,a.ZP)(ae.Z)`
  ${ye}
`,ke=(0,a.ZP)(s.DF)`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  white-space: nowrap;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,Pe=a.ZP.main`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function be(){return(0,t.jsxs)(de.pr,{children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{})]})}function Ae(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(je,{children:(0,t.jsx)(v.Tz,{gap:"lg",justify:"center",children:(0,t.jsxs)(v.Tz,{gap:"lg",style:{width:"100%"},children:[(0,t.jsx)(me.k,{row:!0,p:"$none",gap:"$gap12",children:(0,t.jsx)(ee.xv,{variant:"heading2",children:(0,p.t)("pool.positions")})}),(0,t.jsx)(Pe,{children:(0,t.jsx)(fe,{children:(0,t.jsxs)(ee.xv,{variant:"body1",color:"$neutral3",textAlign:"center",children:[(0,t.jsx)(Te,{strokeWidth:1.2}),(0,t.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,p.t)("pool.connection.networkUnsupported")})]})})})]})})}),(0,t.jsx)(j.c,{})]})}function Ce(){var e;const{t:n}=(0,p.useTranslation)(),i=(0,f.m)(),l=(0,F.useIsSupportedChainId)(i.chainId),a=(0,R.G)(),c=(0,r.Q)(),[x,u]=(0,_.useState)(!1),h=(0,q.useTheme)(),[m,y]=(0,he.QP)(),{positions:T,loading:w}=(0,z.W)(i.address),[k,P]=(null===(e=T)||void 0===e?void 0:e.reduce(((e,n)=>{var i;return e[(null===(i=n.liquidity)||void 0===i?void 0:i.isZero())?1:0].push(n),e}),[[],[]]))??[[],[]],b=E((0,_.useMemo)((()=>[...k,...m?[]:P]),[P,k,m]));if(!l)return(0,t.jsx)(Ae,{});const A=Boolean(!i),C=[(0,t.jsxs)(ve,{href:"/migrate/v2",children:[n("common.migrate"),(0,t.jsx)(ce.Z,{size:16})]},"migrate"),(0,t.jsxs)(ve,{href:"/pools/v2",children:[n("pool.v2liquidity"),(0,t.jsx)(pe.Z,{size:16})]},"v2-liquidity"),(0,t.jsxs)(ve,{href:"https://mstblockchain.com",children:[n("pool.learn"),(0,t.jsx)(xe.Z,{size:16})]},"learn")];return(0,t.jsxs)(ge.default,{logImpression:!0,page:o.yJ.POOL_PAGE,children:[(0,t.jsx)(je,{children:(0,t.jsx)(v.Tz,{gap:"lg",justify:"center",children:(0,t.jsxs)(v.Tz,{gap:"lg",style:{width:"100%"},children:[(0,t.jsxs)(me.k,{row:!0,alignItems:"center",justifyContent:"space-between",p:"$none",gap:"$gap12",$md:{flexWrap:"wrap",width:"100%"},children:[(0,t.jsxs)(me.k,{row:!0,alignItems:"center",gap:"$spacing8",width:"min-content",children:[(0,t.jsx)(ee.xv,{variant:"heading2",children:n("pool.positions")}),(0,t.jsx)("div",{children:(0,t.jsx)(se,{protocolVersion:S.ProtocolVersion.V3})})]}),(0,t.jsxs)(me.k,{row:!0,gap:"8px",$md:{width:"100%"},children:[a&&(0,t.jsx)(me.k,{grow:!0,$md:{width:"calc(50% - 4px)"},children:(0,t.jsx)(d.u,{isOpen:x,toggleOpen:u,menuLabel:(0,t.jsx)(t.Fragment,{children:n("common.more")}),internalMenuItems:(0,t.jsx)(t.Fragment,{children:[...C]}),buttonStyle:{height:40,justifyContent:"center"},dropdownStyle:{width:200,top:"calc(100% + 20px)"},adaptToSheet:!1})}),(0,t.jsx)(ke,{"data-cy":"join-pool-button",id:"join-pool-button",as:ue.Link,to:"/add/ETH",children:n("pool.newPosition.plus")})]})]}),(0,t.jsx)(Pe,{children:w?(0,t.jsx)(be,{}):b&&P&&b.length>0?(0,t.jsx)(g,{positions:b,setUserHideClosedPositions:y,userHideClosedPositions:m}):(0,t.jsxs)(fe,{children:[(0,t.jsxs)(W.T.BodyPrimary,{color:h.neutral3,textAlign:"center",children:[(0,t.jsx)(we,{strokeWidth:1,style:{marginTop:"2em"}}),(0,t.jsx)("div",{children:n("pool.activePositions.appear")})]}),!A&&P.length>0&&(0,t.jsx)(s.oD,{style:{marginTop:".5rem"},onClick:()=>y(!m),children:n("pool.showClosed")}),A&&(0,t.jsx)(ge.default,{logPress:!0,eventOnTrigger:o.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:o.xo.CONNECT_WALLET_BUTTON,children:(0,t.jsx)(s.DF,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:c.open,children:n("common.connectAWallet.button")})})]})}),(0,t.jsx)(B.Pw,{children:(0,t.jsx)(Y,{})})]})})}),(0,t.jsx)(j.c,{})]})}var Ie=i(32507),_e=i(32409),Se=i(89045),Fe=i(17256),$e=i(83792),Ze=i(44609),Le=i(61808),De=i(22407),Ee=i(99300),Re=i(61592),ze=i.n(Re),qe=i(97047),Be=i(22953),We=i(4570),Ve=i(76078),Ke=i(12972),Oe=i(6409),Me=i(40834),Ne=i(25105);const Ue=new P.vU(We.Mt),Ge={1:[{tokens:[Me.WRAPPED_NATIVE_CURRENCY[K.UniverseChainId.Mainnet],Me.DAI],stakingRewardAddress:"0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711"},{tokens:[Me.WRAPPED_NATIVE_CURRENCY[K.UniverseChainId.Mainnet],Me.USDC_MAINNET],stakingRewardAddress:"0x7FBa4B8Dc5E7616e59622806932DBea72537A56b"},{tokens:[Me.WRAPPED_NATIVE_CURRENCY[K.UniverseChainId.Mainnet],Me.USDT],stakingRewardAddress:"0x6C3e4cb2E96B01F4b866965A91ed4437839A121a"},{tokens:[Me.WRAPPED_NATIVE_CURRENCY[K.UniverseChainId.Mainnet],Me.WBTC],stakingRewardAddress:"0xCA35e32e7926b96A9988f61d510E038108d8068e"}]};const He=(0,a.ZP)(v.Tz)`
  max-width: 640px;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0px 8px;
  `};
`,Ye=(0,a.ZP)(Ze.I8)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  margin: 0 0 16px 0;
  overflow: hidden;
`,Je=(0,a.ZP)($e.DA)`
  gap: 8px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  `};
`,Qe=(0,a.ZP)(s.DF)`
  height: 40px;
  width: fit-content;
  border-radius: 12px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,Xe=(0,a.ZP)(s.PL)`
  height: 40px;
  width: fit-content;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,en=a.ZP.div`
  border: 1px solid ${({theme:e})=>e.neutral2};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,nn=(0,a.ZP)(W.T.H1Small)`
  margin-top: 8px;
  justify-self: flex-start;
  font-weight: 535;
  text-wrap: nowrap;
`;function tn(){var e,n,i,r,d,l,a;const c=(0,q.useTheme)(),x=(0,f.m)(),u=(0,R.G)();let h=(0,he.B3)();u||(h=[]);const m=(0,_.useMemo)((()=>h.map((e=>({liquidityToken:(0,he.Ce)(e),tokens:e})))),[h]),[g,y]=(0,qe.bv)(x.address,m.map((({liquidityToken:e})=>e)),!(null===(e=x)||void 0===e?void 0:e.address)),T=(0,_.useMemo)((()=>m.filter((({liquidityToken:e})=>{var n;return null===(n=g[e.address])||void 0===n?void 0:n.greaterThan(0)}))),[m,g]),w=(0,Ee.OY)(T.map((({tokens:e})=>e))),k=y||(null===(n=w)||void 0===n?void 0:n.length)<T.length||(null===(i=w)||void 0===i?void 0:i.some((e=>!e))),P=w.map((([,e])=>e)).filter((e=>Boolean(e))),C=function(e){const n=(0,f.m)(),i=(0,Oe.Z)(A.DB),t=(0,_.useMemo)((()=>{var i;return n.chainId?(null===(i=Ge[n.chainId])||void 0===i?void 0:i.filter((n=>void 0===e||null!==e&&e.involvesToken(n.tokens[0])&&e.involvesToken(n.tokens[1]))))??[]:[]}),[n.chainId,e]),o=n.chainId?Me.UNI[n.chainId]:void 0,r=(0,_.useMemo)((()=>t.map((({stakingRewardAddress:e})=>e))),[t]),s=(0,_.useMemo)((()=>[n.address]),[n.address]),d=(0,b._Y)(r,Ue,"balanceOf",s),l=(0,b._Y)(r,Ue,"earned",s),a=(0,b._Y)(r,Ue,"totalSupply"),c=(0,b._Y)(r,Ue,"rewardRate",void 0,A.DB),p=(0,b._Y)(r,Ue,"periodFinish",void 0,A.DB);return(0,_.useMemo)((()=>n.chainId&&o?r.reduce(((e,n,r)=>{var s,x;const u=d[r],h=l[r],m=a[r],g=c[r],j=p[r];if(!(null===(s=u)||void 0===s?void 0:s.loading)&&!(null===(x=h)||void 0===x?void 0:x.loading)&&m&&!m.loading&&g&&!g.loading&&j&&!j.loading){var v,f,y,T,w,k,P,b,A,C;if((null===(v=u)||void 0===v?void 0:v.error)||(null===(f=h)||void 0===f?void 0:f.error)||m.error||g.error||j.error)return Ne.logger.warn("stake/hooks","useStakingInfo","Failed to load staking rewards info"),e;const s=t[r].tokens,d=new Ke.Pair(Ve.CurrencyAmount.fromRawAmount(s[0],"0"),Ve.CurrencyAmount.fromRawAmount(s[1],"0")),l=Ve.CurrencyAmount.fromRawAmount(d.liquidityToken,ze().BigInt((null===(T=u)||void 0===T||null===(y=T.result)||void 0===y?void 0:y[0])??0)),a=Ve.CurrencyAmount.fromRawAmount(d.liquidityToken,ze().BigInt(null===(w=m.result)||void 0===w?void 0:w[0])),c=Ve.CurrencyAmount.fromRawAmount(o,ze().BigInt(null===(k=g.result)||void 0===k?void 0:k[0])),p=(e,n,i)=>Ve.CurrencyAmount.fromRawAmount(o,ze().greaterThan(n.quotient,ze().BigInt(0))?ze().divide(ze().multiply(i.quotient,e.quotient),n.quotient):ze().BigInt(0)),x=p(l,a,c),I=null===(b=j.result)||void 0===b||null===(P=b[0])||void 0===P?void 0:P.toNumber(),_=1e3*I,S=!I||!i||I>i.toNumber();e.push({stakingRewardAddress:n,tokens:t[r].tokens,periodFinish:_>0?new Date(_):void 0,earnedAmount:Ve.CurrencyAmount.fromRawAmount(o,ze().BigInt((null===(C=h)||void 0===C||null===(A=C.result)||void 0===A?void 0:A[0])??0)),rewardRate:x,totalRewardRate:c,stakedAmount:l,totalStakedAmount:a,getHypotheticalRewardRate:p,active:S})}return e}),[]):[]),[d,n.chainId,i,l,t,p,c,r,a,o])}(),I=null===(r=C)||void 0===r?void 0:r.filter((e=>ze().greaterThan(e.stakedAmount.quotient,De.iV))),F=(0,Ee.OY)(null===(d=I)||void 0===d?void 0:d.map((e=>e.tokens))),$=P.filter((e=>{var n;return 0===(null===(n=F)||void 0===n?void 0:n.map((e=>e[1])).filter((n=>{var i;return(null===(i=n)||void 0===i?void 0:i.liquidityToken.address)===e.liquidityToken.address})).length)}));return(0,t.jsx)(ge.default,{logImpression:!0,page:o.yJ.POOL_PAGE,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(He,{children:[(0,t.jsxs)(Ye,{children:[(0,t.jsx)(Ze.sq,{}),(0,t.jsx)(Ze.RF,{}),(0,t.jsx)(Ze.uO,{children:(0,t.jsxs)(v.Tz,{gap:"md",children:[(0,t.jsx)($e.m0,{children:(0,t.jsx)(W.T.DeprecatedWhite,{fontWeight:535,children:(0,t.jsx)(p.Trans,{i18nKey:"pool.liquidity.rewards"})})}),(0,t.jsx)($e.m0,{children:(0,t.jsx)(W.T.DeprecatedWhite,{fontSize:14,children:(0,t.jsx)(p.Trans,{i18nKey:"pool.liquidity.earn.fee"})})}),(0,t.jsx)(B.dL,{style:{color:c.white,textDecoration:"underline"},target:"_blank",href:"https://mstblockchain.com",children:(0,t.jsx)(W.T.DeprecatedWhite,{fontSize:14,children:(0,t.jsx)(p.Trans,{i18nKey:"pool.learnAbout"})})})]})}),(0,t.jsx)(Ze.sq,{}),(0,t.jsx)(Ze.RF,{})]}),u?(0,t.jsx)(v.Tz,{gap:"lg",justify:"center",children:(0,t.jsxs)(v.Tz,{gap:"md",style:{width:"100%"},children:[(0,t.jsxs)($e.ZP,{gap:"md",justify:"space-between",style:{marginTop:"1rem"},padding:"0",children:[(0,t.jsxs)($e.ZP,{gap:"md",width:"content",children:[(0,t.jsx)(B.Pw,{children:(0,t.jsx)(nn,{children:(0,t.jsx)(p.Trans,{i18nKey:"pool.yourv2"})})}),(0,t.jsx)(se,{protocolVersion:S.ProtocolVersion.V2})]}),(0,t.jsxs)(Je,{children:[(0,t.jsx)(Xe,{as:ue.Link,padding:"6px 8px",to:"/add/v2/ETH",children:(0,t.jsx)(p.Trans,{i18nKey:"pool.create.pair"})}),(0,t.jsx)(Qe,{id:"find-pool-button",as:ue.Link,to:"/pools/v2/find",padding:"6px 8px",children:(0,t.jsx)(Be.xv,{fontWeight:535,fontSize:16,children:(0,t.jsx)(p.Trans,{i18nKey:"pool.import"})})}),(0,t.jsx)(Qe,{id:"join-pool-button",as:ue.Link,to:"/add/v2/ETH",padding:"6px 8px",children:(0,t.jsx)(Be.xv,{fontWeight:535,fontSize:16,children:(0,t.jsx)(p.Trans,{i18nKey:"pool.v2.add"})})})]})]}),x?k?(0,t.jsx)(en,{children:(0,t.jsx)(W.T.DeprecatedBody,{color:c.neutral3,textAlign:"center",children:(0,t.jsx)(Le.bb,{children:(0,t.jsx)(p.Trans,{i18nKey:"common.loading"})})})}):(null===(l=P)||void 0===l?void 0:l.length)>0||(null===(a=F)||void 0===a?void 0:a.length)>0?(0,t.jsxs)(t.Fragment,{children:[$.map((e=>(0,t.jsx)(Se.ZP,{pair:e},e.liquidityToken.address))),F.map(((e,n)=>e[1]&&(0,t.jsx)(Se.ZP,{pair:e[1],stakedBalance:I[n].stakedAmount},I[n].stakingRewardAddress))),(0,t.jsx)($e.DA,{justify:"center",style:{width:"100%"},children:(0,t.jsxs)(s.JU,{as:ue.Link,to:"/migrate/v2",id:"import-pool-link",style:{padding:"8px 16px",margin:"0 4px",borderRadius:"12px",width:"fit-content",fontSize:"14px"},children:[(0,t.jsx)(ce.Z,{size:16,style:{marginRight:"8px"}}),(0,t.jsx)(p.Trans,{i18nKey:"pool.v2.migratev3"})]})})]}):(0,t.jsx)(en,{children:(0,t.jsx)(W.T.DeprecatedBody,{color:c.neutral3,textAlign:"center",children:(0,t.jsx)(p.Trans,{i18nKey:"pool.noLiquidity"})})}):(0,t.jsx)(_e.ZP,{padding:"40px",children:(0,t.jsx)(W.T.DeprecatedBody,{color:c.neutral3,textAlign:"center",children:(0,t.jsx)(p.Trans,{i18nKey:"pool.liquidity.connectToAdd"})})})]})}):(0,t.jsx)(Fe.A,{})]}),(0,t.jsx)(j.c,{})]})})}var on=i(58543),rn=i(76394),sn=i(26410),dn=i(11712),ln=i(57809),an=i(6282),cn=i(85209);function pn(){var e;const n=new URLSearchParams((0,an.TH)().search),i=(0,f.m)(),[r,d]=(0,_.useState)(!1),[l,a]=(0,_.useState)(1),[c,x]=(0,_.useState)((()=>i.chainId?(0,Me.nativeOnChain)(i.chainId):null)),[u,h]=(0,_.useState)(null),[m,g]=(0,Ee.Oo)(c??void 0,u??void 0),y=(0,he.uB)();(0,_.useEffect)((()=>{g&&y(g)}),[g,y]);const T=m===Ee._G.NOT_EXISTS||Boolean(m===Ee._G.EXISTS&&g&&ze().equal(g.reserve0.quotient,ze().BigInt(0))&&ze().equal(g.reserve1.quotient,ze().BigInt(0))),w=(0,qe.mM)(i.address,null===(e=g)||void 0===e?void 0:e.liquidityToken),k=Boolean(w&&ze().greaterThan(w.quotient,ze().BigInt(0))),P=(0,_.useCallback)((e=>{0===l?x(e):h(e)}),[l]),b=(0,_.useCallback)((()=>{d(!1)}),[d]),A=(0,t.jsx)(_e.hl,{padding:"45px 10px",children:(0,t.jsx)(Be.xv,{textAlign:"center",children:i.isConnected?(0,t.jsx)(p.Trans,{i18nKey:"poolFinder.selectToken"}):(0,t.jsx)(p.Trans,{i18nKey:"poolFinder.connect"})})});return(0,R.G)()?(0,t.jsx)(ge.default,{logImpression:!0,page:o.yJ.POOL_PAGE,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(dn.Z,{children:[(0,t.jsx)(rn.q,{origin:n.get("origin")??"/pools/v2"}),(0,t.jsxs)(v.Tz,{style:{padding:"1rem"},gap:"md",children:[(0,t.jsx)(_e.Pj,{children:(0,t.jsx)(v.Tz,{gap:"10px",children:(0,t.jsx)(W.T.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,t.jsx)(p.Trans,{i18nKey:"poolFinder.tip"})})})}),(0,t.jsx)(s.KA,{onClick:()=>{d(!0),a(0)},children:c?(0,t.jsxs)($e.ZP,{children:[(0,t.jsx)(on.Z,{currency:c}),(0,t.jsx)(Be.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:c.symbol})]}):(0,t.jsx)(Be.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,t.jsx)(p.Trans,{i18nKey:"common.selectToken.label"})})}),(0,t.jsx)(v.lg,{children:(0,t.jsx)(ln.Z,{size:"16",color:"#888D9B"})}),(0,t.jsx)(s.KA,{onClick:()=>{d(!0),a(1)},children:u?(0,t.jsxs)($e.ZP,{children:[(0,t.jsx)(on.Z,{currency:u}),(0,t.jsx)(Be.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:u.symbol})]}):(0,t.jsx)(Be.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,t.jsx)(p.Trans,{i18nKey:"common.selectToken.label"})})}),k&&(0,t.jsxs)(v.lg,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[(0,t.jsx)(Be.xv,{textAlign:"center",fontWeight:535,children:(0,t.jsx)(p.Trans,{i18nKey:"poolFinder.found"})}),(0,t.jsx)(B.m_,{to:"/pools/v2",children:(0,t.jsx)(Be.xv,{textAlign:"center",children:(0,t.jsx)(p.Trans,{i18nKey:"poolFinder.managePool"})})})]}),c&&u?m===Ee._G.EXISTS?k&&g?(0,t.jsx)(Se.WP,{pair:g,border:"1px solid #CED0D9"}):(0,t.jsx)(_e.hl,{padding:"45px 10px",children:(0,t.jsxs)(v.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(Be.xv,{textAlign:"center",children:(0,t.jsx)(p.Trans,{i18nKey:"poolFinder.noLiquidity"})}),(0,t.jsx)(B.m_,{to:`/add/v2/${(0,cn.H)(c)}/${(0,cn.H)(u)}`,children:(0,t.jsx)(Be.xv,{textAlign:"center",children:(0,t.jsx)(p.Trans,{i18nKey:"common.addLiquidity"})})})]})}):T?(0,t.jsx)(_e.hl,{padding:"45px 10px",children:(0,t.jsxs)(v.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(Be.xv,{textAlign:"center",children:(0,t.jsx)(p.Trans,{i18nKey:"poolFinder.noPoolFound"})}),(0,t.jsx)(B.m_,{to:`/add/${(0,cn.H)(c)}/${(0,cn.H)(u)}`,children:(0,t.jsx)(p.Trans,{i18nKey:"poolFinder.create"})})]})}):m===Ee._G.INVALID?(0,t.jsx)(_e.hl,{padding:"45px 10px",children:(0,t.jsx)(v.Tz,{gap:"sm",justify:"center",children:(0,t.jsx)(Be.xv,{textAlign:"center",fontWeight:535,children:(0,t.jsx)(p.Trans,{i18nKey:"common.invalidPair"})})})}):m===Ee._G.LOADING?(0,t.jsx)(_e.hl,{padding:"45px 10px",children:(0,t.jsx)(v.Tz,{gap:"sm",justify:"center",children:(0,t.jsxs)(Be.xv,{textAlign:"center",children:[(0,t.jsx)(p.Trans,{i18nKey:"common.loading"}),(0,t.jsx)(de.bb,{})]})})}):null:A]}),(0,t.jsx)(sn.Z,{isOpen:r,onCurrencySelect:P,onDismiss:b,selectedCurrency:(0===l?u:c)??void 0})]}),(0,t.jsx)(j.c,{})]})}):(0,t.jsx)(Fe.A,{})}var xn=i(29936),un=i(590);function hn(){return(0,ie.useFeatureFlag)(ne.FeatureFlags.V4Everywhere)?(0,t.jsx)(an.Fg,{to:"/positions",replace:!0}):(0,t.jsx)(Ce,{})}function mn(){return(0,ie.useFeatureFlag)(ne.FeatureFlags.V4Everywhere)?(0,t.jsx)(an.Fg,{to:"/positions",replace:!0}):(0,t.jsx)(tn,{})}function gn(){return(0,ie.useFeatureFlag)(ne.FeatureFlags.V4Everywhere)?(0,t.jsx)(an.Fg,{to:"/positions",replace:!0}):(0,t.jsx)(pn,{})}function jn(){const e=(0,ie.useFeatureFlag)(ne.FeatureFlags.V4Everywhere),{tokenId:n}=(0,an.UO)(),[i]=(0,ue.useSearchParams)(),{chainId:o}=(0,un.m)(),{defaultChainId:r}=(0,F.useEnabledChains)();if(e){var s;const e=(null===(s=(0,xn.oC)(i.get("chain")))||void 0===s?void 0:s.toLowerCase())??(0,$.toGraphQLChain)(o??r).toLowerCase();return(0,t.jsx)(an.Fg,{to:`/positions/v3/${e}/${n}`,replace:!0})}return(0,t.jsx)(Ie.Z,{})}}}]);
//# sourceMappingURL=5541.12c7fd54.chunk.js.map
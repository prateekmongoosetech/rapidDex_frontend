"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1407],{37525:(e,n,i)=>{i.d(n,{Z:()=>l});var r=i(45779),t=i(68090),s=i.n(t);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var d=(0,r.forwardRef)((function(e,n){var i=e.color,t=void 0===i?"currentColor":i,s=e.size,d=void 0===s?24:s,l=a(e,["color","size"]);return r.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.createElement("polyline",{points:"18 15 12 9 6 15"}))}));d.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},d.displayName="ChevronUp";const l=d},44609:(e,n,i)=>{i.d(n,{SS:()=>p,sq:()=>l,MN:()=>c,RF:()=>x,uO:()=>u,I8:()=>d});const r=i.p+"static/media/big_unicorn.595c49962d708abbaaec.png",t=i.p+"static/media/noise.3c7efafc83614205bd1a.png",s=i.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var o=i(55478),a=i(36664);const d=(0,a.ZP)(o.Tz)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,l=a.ZP.span`
  background: url(${r});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,c=a.ZP.span`
  background: url(${s});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,x=a.ZP.span`
  background: url(${t});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,u=(0,a.ZP)(o.Tz)`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,p=a.ZP.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},11712:(e,n,i)=>{i.d(n,{Z:()=>a,e:()=>o});var r=i(92936),t=i(36664),s=i(54884);const o=t.ZP.main`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${s.k.default};
`;function a(e){return(0,r.jsx)(o,{...e})}},88607:(e,n,i)=>{i.r(n),i.d(n,{MigrateHeader:()=>Q,default:()=>ne});var r=i(92936),t=i(16851),s=i(76498),o=i(76078),a=i(32409),d=i(67978),l=i(3115),c=i(23652),x=i(89045),u=i(55478),p=i(83792),h=i(44609),g=i(61808),m=i(54971),j=i(36664),f=i(36399),y=i(43454),v=i(22953),b=i(97994),k=i(88362);const T=(0,j.ZP)(a.hl)`
  border: none;
  background: ${({theme:e,bgColor:n})=>`radial-gradient(91.85% 100% at 1.84% 0%, ${(0,f.DZ)(.8,n)} 0%, ${e.surface2} 100%) `};
  position: relative;
  overflow: hidden;
`;function z({tokenA:e,tokenB:n,liquidityToken:i,border:t}){const s=(0,k.B)(e),o=(0,k.B)(n),a=(0,m.r)(e);return(0,r.jsxs)(T,{border:t,bgColor:a,children:[(0,r.jsx)(h.RF,{}),(0,r.jsx)(u.Tz,{gap:"md",children:(0,r.jsxs)(x.rG,{children:[(0,r.jsxs)(p.BA,{gap:"8px",children:[(0,r.jsx)(c.ge,{currencies:[s,o],size:20}),(0,r.jsx)(v.xv,{fontWeight:535,fontSize:20,children:s&&o?`${s.symbol}/${o.symbol}`:(0,r.jsx)(g.bb,{children:(0,r.jsx)(b.Trans,{i18nKey:"common.loading"})})}),(0,r.jsx)(d.Z,{variant:d.P.WARNING,children:"Sushi"})]}),(0,r.jsx)(p.DA,{gap:"8px",children:(0,r.jsx)(l.qL,{padding:"0px 35px 0px 0px",$borderRadius:"12px",width:"fit-content",as:y.Link,to:`/migrate/v2/${i.address}`,children:(0,r.jsx)(b.Trans,{i18nKey:"common.migrate"})})})]})})]})}var w=i(58543),$=i(22407),S=i(22722),q=i(14366),A=i(61592),L=i.n(A),P=i(45779),B=i(37525),Z=i(86082),K=i(97047),O=i(85209);const W=(0,j.ZP)(a.hl)`
  border: none;
  background: ${({theme:e,bgColor:n})=>`radial-gradient(91.85% 100% at 1.84% 0%, ${(0,f.DZ)(.8,n)} 0%, ${e.surface2} 100%) `};
  position: relative;
  overflow: hidden;
`;function C({pair:e,border:n,stakedBalance:i}){var t,s,a,d;const j=(0,S.m)(),f=(0,k.B)(e.token0),T=(0,k.B)(e.token1),[z,A]=(0,P.useState)(!1),C=(0,K.mM)(j.address,e.liquidityToken),D=(0,q.A)(e.liquidityToken),I=i?null===(t=C)||void 0===t?void 0:t.add(i):C,F=I&&D&&L().greaterThanOrEqual(D.quotient,I.quotient)?new o.Percent(I.quotient,D.quotient):void 0,[G,R]=e&&D&&I&&L().greaterThanOrEqual(D.quotient,I.quotient)?[e.getLiquidityValue(e.token0,D,I,!1),e.getLiquidityValue(e.token1,D,I,!1)]:[void 0,void 0],E=(0,m.r)(null===(s=e)||void 0===s?void 0:s.token0);return(0,r.jsxs)(W,{border:n,bgColor:E,children:[(0,r.jsx)(h.RF,{}),(0,r.jsxs)(u.Tz,{gap:"md",children:[(0,r.jsxs)(x.rG,{children:[(0,r.jsxs)(p.BA,{gap:"8px",children:[(0,r.jsx)(c.ge,{currencies:[f,T],size:20}),(0,r.jsx)(v.xv,{fontWeight:535,fontSize:20,children:f&&T?`${f.symbol}/${T.symbol}`:(0,r.jsx)(g.bb,{children:(0,r.jsx)(b.Trans,{i18nKey:"common.loading"})})})]}),(0,r.jsx)(p.DA,{gap:"8px",children:(0,r.jsx)(l.qL,{padding:"6px 8px",$borderRadius:"12px",width:"fit-content",onClick:()=>A(!z),children:z?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.Trans,{i18nKey:"common.manage"}),(0,r.jsx)(B.Z,{size:"20",style:{marginLeft:"10px"}})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.Trans,{i18nKey:"common.manage"}),(0,r.jsx)(Z.Z,{size:"20",style:{marginLeft:"10px"}})]})})})]}),z&&(0,r.jsxs)(u.Tz,{gap:"sm",children:[(0,r.jsxs)(x.rG,{children:[(0,r.jsx)(v.xv,{fontSize:16,fontWeight:535,children:(0,r.jsx)(b.Trans,{i18nKey:"pool.totalTokens"})}),(0,r.jsx)(v.xv,{fontSize:16,fontWeight:535,children:I?I.toSignificant(4):"-"})]}),i&&(0,r.jsxs)(x.rG,{children:[(0,r.jsx)(v.xv,{fontSize:16,fontWeight:535,children:(0,r.jsx)(b.Trans,{i18nKey:"pool.rewardsPool.label"})}),(0,r.jsx)(v.xv,{fontSize:16,fontWeight:535,children:i.toSignificant(4)})]}),(0,r.jsxs)(x.rG,{children:[(0,r.jsx)(p.DA,{children:(0,r.jsx)(v.xv,{fontSize:16,fontWeight:535,children:(0,r.jsx)(b.Trans,{i18nKey:"removeLiquidity.pooled",values:{symbol:f.symbol}})})}),G?(0,r.jsxs)(p.DA,{children:[(0,r.jsx)(v.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(a=G)||void 0===a?void 0:a.toSignificant(6)}),(0,r.jsx)(w.Z,{size:20,style:{marginLeft:"8px"},currency:f})]}):"-"]}),(0,r.jsxs)(x.rG,{children:[(0,r.jsx)(p.DA,{children:(0,r.jsx)(v.xv,{fontSize:16,fontWeight:535,children:(0,r.jsx)(b.Trans,{i18nKey:"pool.pooled",values:{sym:T.symbol}})})}),R?(0,r.jsxs)(p.DA,{children:[(0,r.jsx)(v.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(d=R)||void 0===d?void 0:d.toSignificant(6)}),(0,r.jsx)(w.Z,{size:20,style:{marginLeft:"8px"},currency:T})]}):"-"]}),(0,r.jsxs)(x.rG,{children:[(0,r.jsx)(v.xv,{fontSize:16,fontWeight:535,children:(0,r.jsx)(b.Trans,{i18nKey:"pool.share.label"})}),(0,r.jsx)(v.xv,{fontSize:16,fontWeight:535,children:F?("0.00"===F.toFixed(2)?"<0.01":F.toFixed(2))+"%":"-"})]}),C&&L().greaterThan(C.quotient,$.iV)&&(0,r.jsxs)(p.m0,{marginTop:"10px",children:[(0,r.jsx)(l.DF,{padding:"8px",$borderRadius:"8px",as:y.Link,to:`/migrate/v2/${e.liquidityToken.address}`,width:"64%",children:(0,r.jsx)(b.Trans,{i18nKey:"common.migrate"})}),(0,r.jsx)(l.PL,{padding:"8px",$borderRadius:"8px",as:y.Link,width:"32%",to:`/remove/v2/${(0,O.H)(f)}/${(0,O.H)(T)}`,children:(0,r.jsx)(b.Trans,{i18nKey:"common.remove.label"})})]})]})]})]})}var D=i(45255),I=i(92241),F=i(17256),G=i(42183),R=i(99300),E=i(61152),_=i(11712),M=i(6282),V=i(16138),N=i(56363),H=i(77134),Y=i(21300),U=i(48313),J=i(19487);const Q=(0,j.ZP)(N.T.H1Small)`
  font-weight: 535;
`;function X({message:e}){return(0,r.jsx)(u.Tz,{style:{minHeight:200,justifyContent:"center",alignItems:"center"},children:(0,r.jsx)(N.T.DeprecatedBody,{children:e})})}const ee=({tokenA:e,tokenB:n})=>{const[i,r]=e.sortsBefore(n)?[e,n]:[n,e];return(0,t.getCreate2Address)("0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",(0,s.keccak256)(["bytes"],[(0,s.pack)(["address","address"],[i.address,r.address])]),"0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303")};function ne(){const e=(0,E.useTheme)(),n=(0,S.m)(),i=(0,M.s0)(),t=(0,M.ur)(),s=n.chainId?o.V2_FACTORY_ADDRESSES[n.chainId]:void 0,d=(0,V.B3)(),l=(0,P.useMemo)((()=>d.map((e=>{const i=1===n.chainId?function([e,n]){return new o.Token(e.chainId,ee({tokenA:e,tokenB:n}),18,"SLP","SushiSwap LP Token")}(e):null;return{v2liquidityToken:s?(0,V.Ce)(e):void 0,sushiLiquidityToken:i,tokens:e}}))),[d,n.chainId,s]),c=(0,P.useMemo)((()=>[...l.map((({v2liquidityToken:e})=>e)),...l.map((({sushiLiquidityToken:e})=>e)).filter((e=>!!e))]),[l]),[x,h]=(0,K.bv)(n.address,c),m=(0,P.useMemo)((()=>h?[]:l.filter((({v2liquidityToken:e})=>{var n;return e&&(null===(n=x[e.address])||void 0===n?void 0:n.greaterThan(0))})).map((e=>e.tokens))),[h,l,x]),j=(0,P.useMemo)((()=>h?[]:l.filter((({sushiLiquidityToken:e})=>{var n;return!!e&&(null===(n=x[e.address])||void 0===n?void 0:n.greaterThan(0))}))),[h,l,x]),f=(0,R.OY)(m),y=h||f.some((([e])=>e===R._G.LOADING));return(0,G.G)()?(0,r.jsxs)(U.default,{logImpression:!0,page:J.InterfacePageNameLocal.MigrateV2,children:[(0,r.jsx)(_.e,{style:{padding:24},children:(0,r.jsxs)(u.Tz,{gap:"16px",children:[(0,r.jsxs)(p.BA,{style:{alignItems:"center",justifyContent:"space-between"},gap:"8px",children:[(0,r.jsx)(Y.z,{theme:"secondary",onPress:()=>{i("POP"!==t?-1:"/pools")},backgroundColor:"$transparent",size:"small",children:(0,r.jsx)(H.pf,{})}),(0,r.jsx)(Q,{children:(0,r.jsx)(b.Trans,{i18nKey:"migrate.v2Title"})}),(0,r.jsx)("div",{children:(0,r.jsx)(D.Z,{text:(0,r.jsx)(b.Trans,{i18nKey:"migrate.v2Subtitle"})})})]}),(0,r.jsx)(N.T.DeprecatedBody,{style:{marginBottom:8,fontWeight:485},children:(0,r.jsx)(b.Trans,{i18nKey:"migrate.v2Instruction"})}),n?y?(0,r.jsx)(a.hl,{padding:"40px",children:(0,r.jsx)(N.T.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,r.jsx)(g.bb,{children:(0,r.jsx)(b.Trans,{i18nKey:"common.loading"})})})}):f.filter((([,e])=>!!e)).length>0?(0,r.jsxs)(r.Fragment,{children:[f.filter((([,e])=>!!e)).map((([,e])=>(0,r.jsx)(C,{pair:e},e.liquidityToken.address))),j.map((({sushiLiquidityToken:e,tokens:n})=>(0,r.jsx)(z,{tokenA:n[0],tokenB:n[1],liquidityToken:e},e.address)))]}):(0,r.jsx)(X,{message:(0,r.jsx)(b.Trans,{i18nKey:"migrate.noV2Liquidity"})}):(0,r.jsx)(a.hl,{padding:"40px",children:(0,r.jsx)(N.T.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,r.jsx)(b.Trans,{i18nKey:"migrate.connectWallet"})})}),(0,r.jsx)(u.Tz,{justify:"center",gap:"md",children:(0,r.jsx)(v.xv,{textAlign:"center",fontSize:14,style:{padding:".5rem 0 .5rem 0"},children:(0,r.jsx)(b.Trans,{i18nKey:"migrate.missingV2Position",components:{link:(0,r.jsx)(H.m_,{id:"import-pool-link",to:"/pools/v2/find"})}})})})]})}),(0,r.jsx)(I.c,{})]}):(0,r.jsx)(F.A,{})}}}]);
//# sourceMappingURL=1407.fad213b0.chunk.js.map
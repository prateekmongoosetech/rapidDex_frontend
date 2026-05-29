"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7509],{83639:(e,n,i)=>{i.d(n,{DC:()=>a,ER:()=>d,bb:()=>c,im:()=>s,pr:()=>l});var r=i(38081),o=i(36664),t=i(22953);const s=o.ZP.div`
  position: relative;
  padding: 20px;
`,a=(0,o.ZP)(t.xv)`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,d=o.ZP.button`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,c=o.ZP.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,l=(0,o.ZP)(r.pr)`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`},17509:(e,n,i)=>{i.r(n),i.d(n,{default:()=>q});var r=i(92936),o=i(44913),t=i(48836),s=i(54566),a=i(82618),d=i(13422),c=i(23652),l=i(22407),u=i(83639),x=i(25543),p=i(26818),h=i(65344),m=i(45779),v=i(51578),j=i(6282),y=i(57353),g=i(34946),b=i(90379),w=i(56250),f=i(86539),$=i(8806),k=i(11947),P=i(21300),T=i(50897),C=i(95625),I=i(39063),L=i(41444),z=i(19487),N=i(64077),A=i(97994),F=i(46657),K=i(29936),S=i(590);const _=(0,w.z)(f.or,{backgroundColor:"$surface1",display:"flex",flexDirection:"column",alignItems:"center",width:"100%",maxWidth:600,zIndex:"$default",py:"$spacing24",px:"$spacing40",$lg:{px:"$padding20"}});function q(){var e,n,i,w,f,q,W,V,Z;const{pairAddress:B}=(0,j.UO)(),D=(0,K._4)(),H=(0,S.m)(),{data:R,isLoading:U,refetch:E}=(0,T.m)({owner:(null===(e=H)||void 0===e?void 0:e.address)??l.r_,protocolVersion:o.Qe.V2,pairAddress:B,chainId:D??H.chainId}),M=null===(n=R)||void 0===n?void 0:n.position,O=(0,m.useMemo)((()=>(0,d.tS)(M)),[M]),G=(0,g.T)(),Q=(0,j.s0)(),{formatCurrencyAmount:Y,formatPercent:J}=(0,L.useLocalizationContext)(),{t:X}=(0,A.useTranslation)();(0,b.Op)(E);const{value:ee,isLoading:ne}=(0,I.useFeatureFlagWithLoading)(C.FeatureFlags.V4Everywhere),{currency0Amount:ie,currency1Amount:re,status:oe,liquidityAmount:te}=O??{},se=(0,N.useUSDCValue)(ie),ae=(0,N.useUSDCValue)(re),de=(0,a.qz)(O);return ne||ee?U?(0,r.jsx)(_,{children:(0,r.jsxs)(u.pr,{children:[(0,r.jsx)(h.P,{}),(0,r.jsx)(h.P,{}),(0,r.jsx)(h.P,{}),(0,r.jsx)(h.P,{}),(0,r.jsx)(h.P,{}),(0,r.jsx)(h.P,{}),(0,r.jsx)(h.P,{}),(0,r.jsx)(h.P,{}),(0,r.jsx)(h.P,{}),(0,r.jsx)(h.P,{}),(0,r.jsx)(h.P,{}),(0,r.jsx)(h.P,{})]})}):O&&te&&ie&&re?(0,r.jsx)(_,{children:(0,r.jsxs)(k.k,{gap:"$gap20",width:"100%",children:[(0,r.jsx)(k.k,{row:!0,width:"100%",justifyContent:"flex-start",alignItems:"center",children:(0,r.jsx)(t.zG,{"aria-label":"breadcrumb-nav",children:(0,r.jsxs)(t.yY,{to:"/positions",children:[(0,r.jsx)(A.Trans,{i18nKey:"pool.positions.title"})," ",(0,r.jsx)(v.Z,{size:14})]})})}),(0,r.jsx)(s.U,{positionInfo:O}),oe===o.H6.IN_RANGE&&(0,r.jsxs)(k.k,{row:!0,gap:"$gap12",alignItems:"center",maxWidth:"100%",flexWrap:"wrap",children:[(0,r.jsx)(p.HeaderButton,{emphasis:"secondary",onPress:()=>{Q("/migrate/v2")},children:(0,r.jsx)($.xv,{variant:"buttonLabel2",color:"$neutral1",children:(0,r.jsx)(A.Trans,{i18nKey:"common.migrate.v3"})})}),(0,r.jsx)(p.HeaderButton,{emphasis:"secondary",onPress:()=>{G((0,y.i3)({name:z.ModalName.AddLiquidity,initialState:O}))},children:(0,r.jsx)($.xv,{variant:"buttonLabel2",color:"$neutral1",children:(0,r.jsx)(A.Trans,{i18nKey:"common.addLiquidity"})})}),(0,r.jsx)(p.HeaderButton,{emphasis:"primary",onPress:()=>{G((0,y.i3)({name:z.ModalName.RemoveLiquidity,initialState:O}))},children:(0,r.jsx)($.xv,{variant:"buttonLabel2",color:"$surface1",children:(0,r.jsx)(A.Trans,{i18nKey:"pool.removeLiquidity"})})})]}),(0,r.jsxs)(k.k,{borderColor:"$surface3",borderWidth:1,p:"$spacing24",gap:"$gap12",borderRadius:"$rounded20",children:[(0,r.jsxs)(k.k,{row:!0,width:"100%",justifyContent:"space-between",children:[(0,r.jsx)($.xv,{variant:"subheading2",color:"$neutral2",children:(0,r.jsx)(A.Trans,{i18nKey:"position.currentValue"})}),(0,r.jsx)($.xv,{variant:"body2",children:se&&ae?Y({value:se.add(ae),type:F.NumberType.FiatStandard}):"-"})]}),(0,r.jsxs)(k.k,{row:!0,width:"100%",justifyContent:"space-between",children:[(0,r.jsx)($.xv,{variant:"subheading2",color:"$neutral2",children:(0,r.jsx)(A.Trans,{i18nKey:"pool.totalTokens"})}),(0,r.jsxs)(k.k,{row:!0,gap:"$gap8",children:[(0,r.jsx)($.xv,{variant:"body2",children:Y({value:te,type:F.NumberType.TokenNonTx})}),(0,r.jsx)(c.io,{chainId:ie.currency.chainId,currencies:[null===(i=ie)||void 0===i?void 0:i.currency,null===(w=re)||void 0===w?void 0:w.currency],size:24})]})]}),(0,r.jsxs)(k.k,{row:!0,width:"100%",justifyContent:"space-between",children:[(0,r.jsx)($.xv,{variant:"subheading2",color:"$neutral2",children:(0,r.jsx)(A.Trans,{i18nKey:"position.depositedCurrency",values:{currencySymbol:ie.currency.symbol}})}),(0,r.jsxs)(k.k,{row:!0,gap:"$gap8",children:[(0,r.jsx)($.xv,{variant:"body2",children:Y({value:ie,type:F.NumberType.TokenNonTx})}),(0,r.jsx)(c.io,{chainId:null===(f=ie)||void 0===f?void 0:f.currency.chainId,currencies:[null===(q=ie)||void 0===q?void 0:q.currency],size:24})]})]}),(0,r.jsxs)(k.k,{row:!0,width:"100%",justifyContent:"space-between",children:[(0,r.jsx)($.xv,{variant:"subheading2",color:"$neutral2",children:(0,r.jsx)(A.Trans,{i18nKey:"position.depositedCurrency",values:{currencySymbol:re.currency.symbol}})}),(0,r.jsxs)(k.k,{row:!0,gap:"$gap8",children:[(0,r.jsx)($.xv,{variant:"body2",children:Y({value:re,type:F.NumberType.TokenNonTx})}),(0,r.jsx)(c.io,{chainId:null===(W=re)||void 0===W?void 0:W.currency.chainId,currencies:[null===(V=re)||void 0===V?void 0:V.currency],size:24})]})]}),(0,r.jsxs)(k.k,{row:!0,width:"100%",justifyContent:"space-between",children:[(0,r.jsx)($.xv,{variant:"subheading2",color:"$neutral2",children:(0,r.jsx)(A.Trans,{i18nKey:"addLiquidity.shareOfPool"})}),(0,r.jsx)($.xv,{variant:"body2",children:J(null===(Z=de)||void 0===Z?void 0:Z.toFixed(6))})]})]})]})}):(0,r.jsx)(x.default,{title:(0,r.jsx)($.xv,{variant:"heading2",children:X("position.notFound")}),subtitle:(0,r.jsx)(k.k,{centered:!0,maxWidth:"75%",mt:"$spacing20",children:(0,r.jsx)($.xv,{color:"$neutral2",variant:"heading3",textAlign:"center",children:X("position.notFound.description")})}),actionButton:(0,r.jsx)(P.z,{onPress:()=>Q("/positions"),children:X("common.backToPositions")})}):(0,r.jsx)(j.Fg,{to:"/pools",replace:!0})}}}]);
//# sourceMappingURL=7509.56d0abb7.chunk.js.map
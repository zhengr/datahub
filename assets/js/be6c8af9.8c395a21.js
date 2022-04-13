"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4894],{4137:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=u(a),p=r,b=m["".concat(l,".").concat(p)]||m[p]||s[p]||o;return a?n.createElement(b,i(i({ref:t},d),{},{components:a})):n.createElement(b,i({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9708:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),i=["components"],c={sidebar_position:26,title:"DataHubSecret",sidebar_label:"DataHubSecret",slug:"/generated/metamodel/entities/datahubsecret",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubSecret.md"},l="DataHubSecret",u={unversionedId:"docs/generated/metamodel/entities/dataHubSecret",id:"docs/generated/metamodel/entities/dataHubSecret",isDocsHomePage:!1,title:"DataHubSecret",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/dataHubSecret.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/datahubsecret",permalink:"/docs/generated/metamodel/entities/datahubsecret",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubSecret.md",tags:[],version:"current",sidebarPosition:26,frontMatter:{sidebar_position:26,title:"DataHubSecret",sidebar_label:"DataHubSecret",slug:"/generated/metamodel/entities/datahubsecret",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubSecret.md"},sidebar:"overviewSidebar",previous:{title:"DataHubIngestionSource",permalink:"/docs/generated/metamodel/entities/datahubingestionsource"},next:{title:"DataHubExecutionRequest",permalink:"/docs/generated/metamodel/entities/datahubexecutionrequest"}},d=[{value:"Aspects",id:"aspects",children:[{value:"dataHubSecretValue",id:"datahubsecretvalue",children:[],level:3}],level:2},{value:"Relationships",id:"relationships",children:[],level:2},{value:"Global Metadata Model",id:"global-metadata-model",children:[],level:2}],s={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datahubsecret"},"DataHubSecret"),(0,o.kt)("h2",{id:"aspects"},"Aspects"),(0,o.kt)("h3",{id:"datahubsecretvalue"},"dataHubSecretValue"),(0,o.kt)("p",null,"The value of a DataHub Secret"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubSecretValue"\n  },\n  "name": "DataHubSecretValue",\n  "namespace": "com.linkedin.secret",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "The display name for the secret"\n    },\n    {\n      "type": "string",\n      "name": "value",\n      "doc": "The AES-encrypted value of the DataHub secret."\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Description of the secret"\n    }\n  ],\n  "doc": "The value of a DataHub Secret"\n}\n'))),(0,o.kt)("h2",{id:"relationships"},"Relationships"),(0,o.kt)("h2",{id:"global-metadata-model"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}m.isMDXComponent=!0}}]);
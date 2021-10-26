"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9750],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||s[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3847:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=["components"],u={title:"DataHub Frontend",sidebar_label:"Frontend",slug:"/datahub-frontend",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/datahub-frontend/README.md"},l="DataHub Frontend",d={unversionedId:"datahub-frontend/README",id:"datahub-frontend/README",isDocsHomePage:!1,title:"DataHub Frontend",description:"DataHub frontend is a Play service written in Java. It is served as a mid-tier",source:"@site/genDocs/datahub-frontend/README.md",sourceDirName:"datahub-frontend",slug:"/datahub-frontend",permalink:"/docs/datahub-frontend",editUrl:"https://github.com/linkedin/datahub/blob/master/datahub-frontend/README.md",tags:[],version:"current",frontMatter:{title:"DataHub Frontend",sidebar_label:"Frontend",slug:"/datahub-frontend",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/datahub-frontend/README.md"},sidebar:"overviewSidebar",previous:{title:"React App",permalink:"/docs/datahub-web-react"},next:{title:"GraphQL Core",permalink:"/docs/datahub-graphql-core"}},c=[{value:"Pre-requisites",id:"pre-requisites",children:[],level:2},{value:"Build",id:"build",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Start via Docker image",id:"start-via-docker-image",children:[],level:2},{value:"Start via command line",id:"start-via-command-line",children:[],level:2},{value:"Checking out DataHub UI",id:"checking-out-datahub-ui",children:[],level:2},{value:"Authentication",id:"authentication",children:[{value:"Authentication in React",id:"authentication-in-react",children:[],level:3},{value:"API Debugging",id:"api-debugging",children:[],level:3}],level:2}],s={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datahub-frontend"},"DataHub Frontend"),(0,i.kt)("p",null,"DataHub frontend is a ",(0,i.kt)("a",{parentName:"p",href:"https://www.playframework.com/"},"Play")," service written in Java. It is served as a mid-tier\nbetween ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-service"},"DataHub GMS")," which is the backend service and ",(0,i.kt)("a",{parentName:"p",href:"/docs/datahub-web-react"},"DataHub Web"),"."),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You need to have ",(0,i.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/jdk8-downloads.html"},"JDK8"),"\ninstalled on your machine to be able to build ",(0,i.kt)("inlineCode",{parentName:"li"},"DataHub Frontend"),"."),(0,i.kt)("li",{parentName:"ul"},"You need to have ",(0,i.kt)("a",{parentName:"li",href:"https://www.google.com/chrome/"},"Chrome")," web browser\ninstalled to be able to build because UI tests have a dependency on ",(0,i.kt)("inlineCode",{parentName:"li"},"Google Chrome"),".")),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DataHub Frontend")," is already built as part of top level build:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./gradlew build\n")),(0,i.kt)("p",null,"However, if you only want to build ",(0,i.kt)("inlineCode",{parentName:"p"},"DataHub Frontend")," specifically:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./gradlew :datahub-frontend:build\n")),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"Before starting ",(0,i.kt)("inlineCode",{parentName:"p"},"DataHub Frontend"),", you need to make sure that ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-service"},"DataHub GMS")," and\nall its dependencies have already started and running."),(0,i.kt)("p",null,"Also, user information should already be registered into the DB,\notherwise user will not be able to sign in.\nTo do that, first create a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"user.dat")," containing below line and filling the parts ",(0,i.kt)("inlineCode",{parentName:"p"},"<<something>>"),"\nwith your information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{"auditHeader": None, "proposedSnapshot": ("com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot", {"urn": "urn:li:corpuser:<<username>>", "aspects": [{"active": True, "fullName": "<<Full Name>>", "email": "<<e-mail address>>"}, {}]}), "proposedDelta": None}\n')),(0,i.kt)("p",null,"And run ",(0,i.kt)("inlineCode",{parentName:"p"},"mce producer")," script as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python metadata-ingestion/mce_cli.py produce -d user.dat\n")),(0,i.kt)("p",null,"Or, you can run the script without providing any data file. In this case, the script will use ",(0,i.kt)("inlineCode",{parentName:"p"},"bootstrap_mce.dat")," file\nto bootstrap some sample users and datasets:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python metadata-ingestion/mce_cli.py produce\n")),(0,i.kt)("p",null,"This will create a default user with username ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub"),". You can sign in to the app using ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub")," as your username."),(0,i.kt)("h2",{id:"start-via-docker-image"},"Start via Docker image"),(0,i.kt)("p",null,"Quickest way to try out ",(0,i.kt)("inlineCode",{parentName:"p"},"DataHub Frontend")," is running the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/datahub-frontend"},"Docker image"),"."),(0,i.kt)("h2",{id:"start-via-command-line"},"Start via command line"),(0,i.kt)("p",null,"If you do modify things and want to try it out quickly without building the Docker image, you can also run\nthe application directly from command line after a successful ",(0,i.kt)("a",{parentName:"p",href:"#build"},"build"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd datahub-frontend/run && ./run-local-frontend\n")),(0,i.kt)("h2",{id:"checking-out-datahub-ui"},"Checking out DataHub UI"),(0,i.kt)("p",null,"After starting your application in one of the two ways mentioned above, you can connect to it by typing below\ninto your favorite web browser:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://localhost:9001\n")),(0,i.kt)("p",null,"To be able to sign in, you need to provide your user name. You don't need to type any password."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"DataHub frontend leverages ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/technotes/guides/security/jaas/JAASRefGuide.html"},"Java Authentication and Authorization Service (JAAS)")," to perform the authentication. By default we provided a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/datahub-frontend/app/security/DummyLoginModule.java"},"DummyLoginModule")," which will accept any username/password combination. You can update ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/datahub-frontend/conf/jaas.conf"},"jaas.conf")," to match your authentication requirement. For example, use the following config for LDAP-based authentication,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'WHZ-Authentication {\n\xa0\xa0com.sun.security.auth.module.LdapLoginModule sufficient\n\xa0\xa0userProvider="ldaps://<host>:636/dc=<domain>"\n\xa0\xa0authIdentity="{USERNAME}"\n\xa0\xa0userFilter="(&(objectClass=person)(uid={USERNAME}))"\n\xa0\xa0java.naming.security.authentication="simple"\n\xa0\xa0debug="false"\n\xa0\xa0useSSL="true";\n};\n')),(0,i.kt)("h3",{id:"authentication-in-react"},"Authentication in React"),(0,i.kt)("p",null,"The React app supports both JAAS as described above and separately OIDC authentication. To learn about configuring OIDC for React,\nsee the ",(0,i.kt)("a",{parentName:"p",href:"/docs/how/auth/sso/configure-oidc-react"},"OIDC in React")," document."),(0,i.kt)("h3",{id:"api-debugging"},"API Debugging"),(0,i.kt)("p",null,"Most DataHub frontend API endpoints are protected using ",(0,i.kt)("a",{parentName:"p",href:"https://www.playframework.com/documentation/2.1.0/JavaGuide4"},"Play Authentication"),", which means it requires authentication information stored in the cookie for the request to go through. This makes debugging using curl difficult. One option is to first make a curl call against the ",(0,i.kt)("inlineCode",{parentName:"p"},"/authenticate")," endpoint and stores the authentication info in a cookie file like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -c cookie.txt -d \'{"username":"datahub", "password":"datahub"}\' -H \'Content-Type: application/json\' http://localhost:9001/authenticate\n')),(0,i.kt)("p",null,"You can then make all subsequent calls using the same cookie file to pass the authentication check."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -b cookie.txt "http://localhost:9001/api/v2/search?type=dataset&input=page"\n')))}p.isMDXComponent=!0}}]);
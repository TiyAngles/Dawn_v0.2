import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    @charset "utf-8";
/*reset*/
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,
sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,
figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;box-sizing:border-box;}
:focus{outline:0;}
body{line-height:1;}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}
ol,ul{list-style:none;}
img{max-width:100%;vertical-align:middle;}
video{min-width:100%;max-width:100%;}
table{width:100%;border-collapse:collapse;border-spacing:0;table-layout:fixed;empty-cells:show;/*text-align:center;*/word-wrap:break-word;}
caption{overflow:hidden;height:0;font-size:1px;line-height:0;}
legend{border:0;padding:0;white-space:normal;*margin-left:-7px;}
fieldset{border:0;margin:0;padding:0;}
textarea{resize:vertical;vertical-align:top;overflow:auto;}
blockquote,q{quotes:none;}
blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}
a{text-decoration:none;}
strong{font-style:normal;}
em{font-style:normal;}

/*FORM*/
input,label,select,button,textarea{margin:0;border:0;padding:0;display:inline-block;vertical-align:middle;white-space:normal;background:none;line-height:1;}
input[type=text],input[type=password],input[type=tel],input[type=search],input[type=email],input[type=time],input[type=month],input[type=date],
input[type=url],input[type=image],input[type=button],input[type=submit],input[type=reset],input[type=file],input[type=price],
select{-webkit-appearance:none;-moz-appearance:none;-webkit-border-radious:0;border-radius:0;box-sizing:border-box;}
input:focus{outline:0;}
input,textarea{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;}
button,input[type=reset],input[type=button],input[type=submit],input[type=checkbox],
input[type=radio],select{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}

/*Text Inputs*/
input[type=date],input[type=datetime],input[type=datetime-local],input[type=email],input[type=month],input[type=number],input[type=password],
input[type=range],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week]{}
input[type=checkbox],input[type=radio]{width:13px;height:13px;}
input[type=file]{}

button{padding:0;line-height:normal;background:transparent;cursor:pointer;}
button[disabled]{cursor:default;}
select{width:100%;}
select[multiple]{overflow:auto;}

button,input[type="reset"],input[type="button"],input[type="submit"]{overflow:visible;width:auto;}
[role="button"],input[type="button"],input[type="reset"],input[type="submit"],button{padding:0;border:0;font:inherit;font-size:100%;text-align:inherit;background:none;appearance:button;
  user-select:none;}
[role="button"]:-moz-focusring,input[type="button"]:-moz-focusring,input[type="reset"]:-moz-focusring,input[type="submit"]:-moz-focusring,
button:-moz-focusring{outline:none;}
[role="button"]:focus,input[type="button"]:focus,input[type="reset"]:focus,input[type="submit"]:focus,button:focus{outline:none;}

::-webkit-search-decoration{display:none;}
::-webkit-file-upload-button{padding:0;border:0;background:none;}

/*chromeframe*/
.chromeframe{margin:0.2em 0;background:#ccc;color:#000;padding:0.2em 0;}

`;

export default GlobalStyles;

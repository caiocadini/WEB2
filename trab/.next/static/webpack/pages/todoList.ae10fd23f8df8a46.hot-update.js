/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todoList",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[2]!./src/pages/todoList/todo.module.css":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[2]!./src/pages/todoList/todo.module.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Raleway:wght@100;300&display=swap');\\r\\n.todo_body__neG_j{\\r\\n    height: 100vh;\\r\\n}\\r\\n.todo_container__tKdAX {\\r\\n    background-color: #5A5766;\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    box-sizing: border-box;\\r\\n    font-family: 'Josefin Sans', sans-serif;\\r\\n;\\r\\n}\\r\\n/*Page header (topbar)*/\\r\\n.todo_header__gfg88 {\\r\\n    margin: 20px; \\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    /*max-height: 75px;*/\\r\\n    text-align: center;\\r\\n    /*margin-bottom: 10px;*/\\r\\n}\\r\\n/*Titulo da topbar*/\\r\\n.todo_titulo_header__5vd_Z {\\r\\n    color: #e3daff;\\r\\n    text-align: center;\\r\\n    font-size: 40px;\\r\\n    margin: auto;\\r\\n}\\r\\n.todo_user_welcome__FEmN5{\\r\\n    font-size: 15px;\\r\\n    color: #ffff;\\r\\n}\\r\\n/*Navigation hyperlinks*/\\r\\n.todo_add_activity__X2xPp{\\r\\n    color: #E3DAFF;\\r\\n    text-decoration: none;\\r\\n}\\r\\n.todo_exit_account__e5mCR{\\r\\n    margin: 20px;\\r\\n    color: #E3DAFF;\\r\\n    text-decoration: none;\\r\\n}\\r\\n.todo_header__gfg88 a:hover{\\r\\n    color:#C589E8;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n/* div com as 2 listas de tarefa (urgente+bom fazer)*/\\r\\n.todo_listas__yiJJ5 {\\r\\n    display: flex;\\r\\n    margin-top: 80px; \\r\\n}\\r\\n\\r\\n/*título URGENTE e BOM FAZER*/\\r\\n.todo_titulo_lista__w0ume{\\r\\n    color: #e3daff;\\r\\n    font-size: 32px;\\r\\n}\\r\\n\\r\\n/*div para a lista de urgente*/\\r\\n.todo_lista__jK_Xu {\\r\\n    width: 50%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n/*Linha de divisão*/\\r\\n.todo_line__EetTU{\\r\\n    border-left: 3px solid #ECFFF8;\\r\\n    border-radius: 3px;\\r\\n}\\r\\n\\r\\n.todo_atividades__FAx_U{\\r\\n    padding: 23px;\\r\\n    /*height: 550px;*/\\r\\n    width: 500px;\\r\\n    overflow: hidden;\\r\\n    overflow-y: scroll;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.todo_atividades__FAx_U::-webkit-scrollbar{\\r\\n    width: 10px;\\r\\n}\\r\\n\\r\\n.todo_atividades__FAx_U::-webkit-scrollbar-thumb{\\r\\n    background: #C589E8;\\r\\n}\\r\\n\\r\\n\\r\\n.todo_atividade_em_dia_container__y8rnx, .todo_atividade_atrasada_container__I8JX4{\\r\\n    padding: 5%;\\r\\n    margin: 3%;\\r\\n    width: 90%;\\r\\n    border-radius: 17px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo_atividade_em_dia_container__y8rnx{\\r\\n    background-color: #C589E8;\\r\\n}\\r\\n.todo_atividade_atrasada_container__I8JX4{\\r\\n    background-color: #F10000;\\r\\n}\\r\\n\\r\\n.todo_activity_text__VJrja{\\r\\n    width: 80%;\\r\\n}\\r\\n\\r\\n.todo_unchecked__WUQWi{\\r\\n    width: 51px; \\r\\n    height: 50px; \\r\\n    background-image: url('/unchecked.png'); \\r\\n    background-size: cover; \\r\\n}\\r\\n\\r\\n\\r\\n.todo_atividades__FAx_U h3{\\r\\n    font-size: 27px;\\r\\n    color: #ffff;\\r\\n}\\r\\n.todo_atividades__FAx_U span{\\r\\n    font-size: 15px;\\r\\n    color: #ffff;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 970px) {\\r\\n    .todo_header__gfg88{\\r\\n        width: 90%;\\r\\n    }\\r\\n    .todo_titulo_header__5vd_Z {\\r\\n        font-size: 20px;\\r\\n        padding-top: 5px;\\r\\n        align-self: center;\\r\\n    }\\r\\n    .todo_listas__yiJJ5 {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        max-height: 100vh;\\r\\n    }\\r\\n    .todo_lista__jK_Xu{\\r\\n        height: 40vh;\\r\\n    }\\r\\n\\r\\n    .todo_line__EetTU{\\r\\n        transform: rotate(90deg);\\r\\n        height: 300px;\\r\\n    }\\r\\n    .todo_titulo_lista__w0ume{\\r\\n        font-size: 18px;\\r\\n    }\\r\\n\\r\\n   \\r\\n\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 484px) {\\r\\n    .todo_user_welcome__FEmN5{\\r\\n        font-size: 3vw;\\r\\n    }\\r\\n\\r\\n    .todo_exit_account__e5mCR{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n    .todo_add_activity__X2xPp{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n\\r\\n    .todo_titulo_header__5vd_Z{\\r\\n        font-size: 5vw;\\r\\n    }\\r\\n\\r\\n    .todo_atividades__FAx_U{\\r\\n        padding: 2vw;\\r\\n        width: 56vw;\\r\\n    }\\r\\n\\r\\n    .todo_unchecked__WUQWi{\\r\\n        width: 13vw; \\r\\n        height: 13vw; \\r\\n    \\r\\n    }\\r\\n\\r\\n    .todo_listas__yiJJ5 .todo_lista__jK_Xu .todo_atividades__FAx_U{\\r\\n        width: 100vw;\\r\\n    }\\r\\n\\r\\n    .todo_activity_text__VJrja h3{\\r\\n        font-size: 6vw;\\r\\n    }\\r\\n    .todo_activity_text__VJrja span{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n\\r\\n    .todo_titulo_lista__w0ume{\\r\\n        font-size: 8vw;\\r\\n    }\\r\\n\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 300px) {\\r\\n    .todo_user_welcome__FEmN5{\\r\\n        font-size: 0vw;\\r\\n    }\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/pages/todoList/todo.module.css\"],\"names\":[],\"mappings\":\"AAAA,sHAAsH;AACtH;IACI,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,uCAAuC;;AAE3C;AACA,uBAAuB;AACvB;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,oBAAoB;IACpB,kBAAkB;IAClB,uBAAuB;AAC3B;AACA,mBAAmB;AACnB;IACI,cAAc;IACd,kBAAkB;IAClB,eAAe;IACf,YAAY;AAChB;AACA;IACI,eAAe;IACf,YAAY;AAChB;AACA,wBAAwB;AACxB;IACI,cAAc;IACd,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,cAAc;IACd,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA,qDAAqD;AACrD;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA,6BAA6B;AAC7B;IACI,cAAc;IACd,eAAe;AACnB;;AAEA,8BAA8B;AAC9B;IACI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA,mBAAmB;AACnB;IACI,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,mBAAmB;AACvB;;;AAGA;IACI,WAAW;IACX,UAAU;IACV,UAAU;IACV,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uCAAuC;IACvC,sBAAsB;AAC1B;;;AAGA;IACI,eAAe;IACf,YAAY;AAChB;AACA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI;QACI,UAAU;IACd;IACA;QACI,eAAe;QACf,gBAAgB;QAChB,kBAAkB;IACtB;IACA;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,uBAAuB;QACvB,iBAAiB;IACrB;IACA;QACI,YAAY;IAChB;;IAEA;QACI,wBAAwB;QACxB,aAAa;IACjB;IACA;QACI,eAAe;IACnB;;;;AAIJ;;AAEA;IACI;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;IACA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,YAAY;QACZ,WAAW;IACf;;IAEA;QACI,WAAW;QACX,YAAY;;IAEhB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,cAAc;IAClB;IACA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;AAEJ;;AAEA;IACI;QACI,cAAc;IAClB;AACJ\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Raleway:wght@100;300&display=swap');\\r\\n.body{\\r\\n    height: 100vh;\\r\\n}\\r\\n.container {\\r\\n    background-color: #5A5766;\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    box-sizing: border-box;\\r\\n    font-family: 'Josefin Sans', sans-serif;\\r\\n;\\r\\n}\\r\\n/*Page header (topbar)*/\\r\\n.header {\\r\\n    margin: 20px; \\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    /*max-height: 75px;*/\\r\\n    text-align: center;\\r\\n    /*margin-bottom: 10px;*/\\r\\n}\\r\\n/*Titulo da topbar*/\\r\\n.titulo_header {\\r\\n    color: #e3daff;\\r\\n    text-align: center;\\r\\n    font-size: 40px;\\r\\n    margin: auto;\\r\\n}\\r\\n.user_welcome{\\r\\n    font-size: 15px;\\r\\n    color: #ffff;\\r\\n}\\r\\n/*Navigation hyperlinks*/\\r\\n.add_activity{\\r\\n    color: #E3DAFF;\\r\\n    text-decoration: none;\\r\\n}\\r\\n.exit_account{\\r\\n    margin: 20px;\\r\\n    color: #E3DAFF;\\r\\n    text-decoration: none;\\r\\n}\\r\\n.header a:hover{\\r\\n    color:#C589E8;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n/* div com as 2 listas de tarefa (urgente+bom fazer)*/\\r\\n.listas {\\r\\n    display: flex;\\r\\n    margin-top: 80px; \\r\\n}\\r\\n\\r\\n/*título URGENTE e BOM FAZER*/\\r\\n.titulo_lista{\\r\\n    color: #e3daff;\\r\\n    font-size: 32px;\\r\\n}\\r\\n\\r\\n/*div para a lista de urgente*/\\r\\n.lista {\\r\\n    width: 50%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n/*Linha de divisão*/\\r\\n.line{\\r\\n    border-left: 3px solid #ECFFF8;\\r\\n    border-radius: 3px;\\r\\n}\\r\\n\\r\\n.atividades{\\r\\n    padding: 23px;\\r\\n    /*height: 550px;*/\\r\\n    width: 500px;\\r\\n    overflow: hidden;\\r\\n    overflow-y: scroll;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.atividades::-webkit-scrollbar{\\r\\n    width: 10px;\\r\\n}\\r\\n\\r\\n.atividades::-webkit-scrollbar-thumb{\\r\\n    background: #C589E8;\\r\\n}\\r\\n\\r\\n\\r\\n.atividade_em_dia_container, .atividade_atrasada_container{\\r\\n    padding: 5%;\\r\\n    margin: 3%;\\r\\n    width: 90%;\\r\\n    border-radius: 17px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.atividade_em_dia_container{\\r\\n    background-color: #C589E8;\\r\\n}\\r\\n.atividade_atrasada_container{\\r\\n    background-color: #F10000;\\r\\n}\\r\\n\\r\\n.activity_text{\\r\\n    width: 80%;\\r\\n}\\r\\n\\r\\n.unchecked{\\r\\n    width: 51px; \\r\\n    height: 50px; \\r\\n    background-image: url('/unchecked.png'); \\r\\n    background-size: cover; \\r\\n}\\r\\n\\r\\n\\r\\n.atividades h3{\\r\\n    font-size: 27px;\\r\\n    color: #ffff;\\r\\n}\\r\\n.atividades span{\\r\\n    font-size: 15px;\\r\\n    color: #ffff;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 970px) {\\r\\n    .header{\\r\\n        width: 90%;\\r\\n    }\\r\\n    .titulo_header {\\r\\n        font-size: 20px;\\r\\n        padding-top: 5px;\\r\\n        align-self: center;\\r\\n    }\\r\\n    .listas {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        max-height: 100vh;\\r\\n    }\\r\\n    .lista{\\r\\n        height: 40vh;\\r\\n    }\\r\\n\\r\\n    .line{\\r\\n        transform: rotate(90deg);\\r\\n        height: 300px;\\r\\n    }\\r\\n    .titulo_lista{\\r\\n        font-size: 18px;\\r\\n    }\\r\\n\\r\\n   \\r\\n\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 484px) {\\r\\n    .user_welcome{\\r\\n        font-size: 3vw;\\r\\n    }\\r\\n\\r\\n    .exit_account{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n    .add_activity{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n\\r\\n    .titulo_header{\\r\\n        font-size: 5vw;\\r\\n    }\\r\\n\\r\\n    .atividades{\\r\\n        padding: 2vw;\\r\\n        width: 56vw;\\r\\n    }\\r\\n\\r\\n    .unchecked{\\r\\n        width: 13vw; \\r\\n        height: 13vw; \\r\\n    \\r\\n    }\\r\\n\\r\\n    .listas .lista .atividades{\\r\\n        width: 100vw;\\r\\n    }\\r\\n\\r\\n    .activity_text h3{\\r\\n        font-size: 6vw;\\r\\n    }\\r\\n    .activity_text span{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n\\r\\n    .titulo_lista{\\r\\n        font-size: 8vw;\\r\\n    }\\r\\n\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 300px) {\\r\\n    .user_welcome{\\r\\n        font-size: 0vw;\\r\\n    }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"body\": \"todo_body__neG_j\",\n\t\"container\": \"todo_container__tKdAX\",\n\t\"header\": \"todo_header__gfg88\",\n\t\"titulo_header\": \"todo_titulo_header__5vd_Z\",\n\t\"user_welcome\": \"todo_user_welcome__FEmN5\",\n\t\"add_activity\": \"todo_add_activity__X2xPp\",\n\t\"exit_account\": \"todo_exit_account__e5mCR\",\n\t\"listas\": \"todo_listas__yiJJ5\",\n\t\"titulo_lista\": \"todo_titulo_lista__w0ume\",\n\t\"lista\": \"todo_lista__jK_Xu\",\n\t\"line\": \"todo_line__EetTU\",\n\t\"atividades\": \"todo_atividades__FAx_U\",\n\t\"atividade_em_dia_container\": \"todo_atividade_em_dia_container__y8rnx\",\n\t\"atividade_atrasada_container\": \"todo_atividade_atrasada_container__I8JX4\",\n\t\"activity_text\": \"todo_activity_text__VJrja\",\n\t\"unchecked\": \"todo_unchecked__WUQWi\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbOF0udXNlWzJdIS4vc3JjL3BhZ2VzL3RvZG9MaXN0L3RvZG8ubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHlLQUFxRjtBQUMvSDtBQUNBO0FBQ0EsOElBQThJLG1CQUFtQixzQkFBc0Isc0JBQXNCLEtBQUssNEJBQTRCLGtDQUFrQyxxQkFBcUIsc0JBQXNCLHNCQUFzQiwrQkFBK0IsK0JBQStCLGdEQUFnRCxLQUFLLEtBQUsscURBQXFELHNCQUFzQixzQkFBc0IsNEJBQTRCLGdDQUFnQywyQkFBMkIsNkJBQTZCLDhCQUE4QixPQUFPLHdEQUF3RCx1QkFBdUIsMkJBQTJCLHdCQUF3QixxQkFBcUIsS0FBSyw4QkFBOEIsd0JBQXdCLHFCQUFxQixLQUFLLDJEQUEyRCx1QkFBdUIsOEJBQThCLEtBQUssOEJBQThCLHFCQUFxQix1QkFBdUIsOEJBQThCLEtBQUssZ0NBQWdDLHNCQUFzQix3QkFBd0IsS0FBSyx1RkFBdUYsc0JBQXNCLDBCQUEwQixLQUFLLG9FQUFvRSx1QkFBdUIsd0JBQXdCLEtBQUssK0RBQStELG1CQUFtQixzQkFBc0IsK0JBQStCLDRCQUE0QixLQUFLLDhDQUE4Qyx1Q0FBdUMsMkJBQTJCLEtBQUssZ0NBQWdDLHNCQUFzQix3QkFBd0IsdUJBQXVCLHlCQUF5QiwyQkFBMkIsc0JBQXNCLCtCQUErQiw0QkFBNEIsS0FBSyxtREFBbUQsb0JBQW9CLEtBQUsseURBQXlELDRCQUE0QixLQUFLLCtGQUErRixvQkFBb0IsbUJBQW1CLG1C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SyxtQkFBbUI7QUFDLzVVO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3RvZG9MaXN0L3RvZG8ubW9kdWxlLmNzcz84YWZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEA3MDAmZmFtaWx5PVJhbGV3YXk6d2dodEAxMDA7MzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbi50b2RvX2JvZHlfX25lR19qe1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG4udG9kb19jb250YWluZXJfX3RLZEFYIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVBNTc2NjtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuO1xcclxcbn1cXHJcXG4vKlBhZ2UgaGVhZGVyICh0b3BiYXIpKi9cXHJcXG4udG9kb19oZWFkZXJfX2dmZzg4IHtcXHJcXG4gICAgbWFyZ2luOiAyMHB4OyBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC8qbWF4LWhlaWdodDogNzVweDsqL1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIC8qbWFyZ2luLWJvdHRvbTogMTBweDsqL1xcclxcbn1cXHJcXG4vKlRpdHVsbyBkYSB0b3BiYXIqL1xcclxcbi50b2RvX3RpdHVsb19oZWFkZXJfXzV2ZF9aIHtcXHJcXG4gICAgY29sb3I6ICNlM2RhZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcbi50b2RvX3VzZXJfd2VsY29tZV9fRkVtTjV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgY29sb3I6ICNmZmZmO1xcclxcbn1cXHJcXG4vKk5hdmlnYXRpb24gaHlwZXJsaW5rcyovXFxyXFxuLnRvZG9fYWRkX2FjdGl2aXR5X19YMnhQcHtcXHJcXG4gICAgY29sb3I6ICNFM0RBRkY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLnRvZG9fZXhpdF9hY2NvdW50X19lNW1DUntcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbiAgICBjb2xvcjogI0UzREFGRjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4udG9kb19oZWFkZXJfX2dmZzg4IGE6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiNDNTg5RTg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogZGl2IGNvbSBhcyAyIGxpc3RhcyBkZSB0YXJlZmEgKHVyZ2VudGUrYm9tIGZhemVyKSovXFxyXFxuLnRvZG9fbGlzdGFzX195aUpKNSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDgwcHg7IFxcclxcbn1cXHJcXG5cXHJcXG4vKnTDrXR1bG8gVVJHRU5URSBlIEJPTSBGQVpFUiovXFxyXFxuLnRvZG9fdGl0dWxvX2xpc3RhX193MHVtZXtcXHJcXG4gICAgY29sb3I6ICNlM2RhZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLypkaXYgcGFyYSBhIGxpc3RhIGRlIHVyZ2VudGUqL1xcclxcbi50b2RvX2xpc3RhX19qS19YdSB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi8qTGluaGEgZGUgZGl2aXPDo28qL1xcclxcbi50b2RvX2xpbmVfX0VldFRVe1xcclxcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNFQ0ZGRjg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9fYXRpdmlkYWRlc19fRkF4X1V7XFxyXFxuICAgIHBhZGRpbmc6IDIzcHg7XFxyXFxuICAgIC8qaGVpZ2h0OiA1NTBweDsqL1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9fYXRpdmlkYWRlc19fRkF4X1U6Oi13ZWJraXQtc2Nyb2xsYmFye1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9fYXRpdmlkYWRlc19fRkF4X1U6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjQzU4OUU4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udG9kb19hdGl2aWRhZGVfZW1fZGlhX2NvbnRhaW5lcl9feThybngsIC50b2RvX2F0aXZpZGFkZV9hdHJhc2FkYV9jb250YWluZXJfX0k4Slg0e1xcclxcbiAgICBwYWRkaW5nOiA1JTtcXHJcXG4gICAgbWFyZ2luOiAzJTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb19hdGl2aWRhZGVfZW1fZGlhX2NvbnRhaW5lcl9feThybnh7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNTg5RTg7XFxyXFxufVxcclxcbi50b2RvX2F0aXZpZGFkZV9hdHJhc2FkYV9jb250YWluZXJfX0k4Slg0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjEwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb19hY3Rpdml0eV90ZXh0X19WSnJqYXtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9fdW5jaGVja2VkX19XVVFXaXtcXHJcXG4gICAgd2lkdGg6IDUxcHg7IFxcclxcbiAgICBoZWlnaHQ6IDUwcHg7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy91bmNoZWNrZWQucG5nJyk7IFxcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRvZG9fYXRpdmlkYWRlc19fRkF4X1UgaDN7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXHJcXG4gICAgY29sb3I6ICNmZmZmO1xcclxcbn1cXHJcXG4udG9kb19hdGl2aWRhZGVzX19GQXhfVSBzcGFue1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NzBweCkge1xcclxcbiAgICAudG9kb19oZWFkZXJfX2dmZzg4e1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcbiAgICAudG9kb190aXR1bG9faGVhZGVyX181dmRfWiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC50b2RvX2xpc3Rhc19feWlKSjUge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgfVxcclxcbiAgICAudG9kb19saXN0YV9faktfWHV7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwdmg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvZG9fbGluZV9fRWV0VFV7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC50b2RvX3RpdHVsb19saXN0YV9fdzB1bWV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODRweCkge1xcclxcbiAgICAudG9kb191c2VyX3dlbGNvbWVfX0ZFbU41e1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvZG9fZXhpdF9hY2NvdW50X19lNW1DUntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xcclxcbiAgICB9XFxyXFxuICAgIC50b2RvX2FkZF9hY3Rpdml0eV9fWDJ4UHB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDR2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9kb190aXR1bG9faGVhZGVyX181dmRfWntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvX2F0aXZpZGFkZXNfX0ZBeF9Ve1xcclxcbiAgICAgICAgcGFkZGluZzogMnZ3O1xcclxcbiAgICAgICAgd2lkdGg6IDU2dnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvZG9fdW5jaGVja2VkX19XVVFXaXtcXHJcXG4gICAgICAgIHdpZHRoOiAxM3Z3OyBcXHJcXG4gICAgICAgIGhlaWdodDogMTN2dzsgXFxyXFxuICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvX2xpc3Rhc19feWlKSjUgLnRvZG9fbGlzdGFfX2pLX1h1IC50b2RvX2F0aXZpZGFkZXNfX0ZBeF9Ve1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvX2FjdGl2aXR5X3RleHRfX1ZKcmphIGgze1xcclxcbiAgICAgICAgZm9udC1zaXplOiA2dnc7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRvZG9fYWN0aXZpdHlfdGV4dF9fVkpyamEgc3BhbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvX3RpdHVsb19saXN0YV9fdzB1bWV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDh2dztcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XFxyXFxuICAgIC50b2RvX3VzZXJfd2VsY29tZV9fRkVtTjV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDB2dztcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3BhZ2VzL3RvZG9MaXN0L3RvZG8ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzSEFBc0g7QUFDdEg7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix1Q0FBdUM7O0FBRTNDO0FBQ0EsdUJBQXVCO0FBQ3ZCO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0EsbUJBQW1CO0FBQ25CO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQSx3QkFBd0I7QUFDeEI7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUEscURBQXFEO0FBQ3JEO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQSw2QkFBNkI7QUFDN0I7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQSw4QkFBOEI7QUFDOUI7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQSxtQkFBbUI7QUFDbkI7SUFDSSw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7Ozs7QUFJSjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZOztJQUVoQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDcwMCZmYW1pbHk9UmFsZXdheTp3Z2h0QDEwMDszMDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuLmJvZHl7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUE1NzY2O1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG47XFxyXFxufVxcclxcbi8qUGFnZSBoZWFkZXIgKHRvcGJhcikqL1xcclxcbi5oZWFkZXIge1xcclxcbiAgICBtYXJnaW46IDIwcHg7IFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLyptYXgtaGVpZ2h0OiA3NXB4OyovXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgLyptYXJnaW4tYm90dG9tOiAxMHB4OyovXFxyXFxufVxcclxcbi8qVGl0dWxvIGRhIHRvcGJhciovXFxyXFxuLnRpdHVsb19oZWFkZXIge1xcclxcbiAgICBjb2xvcjogI2UzZGFmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuLnVzZXJfd2VsY29tZXtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBjb2xvcjogI2ZmZmY7XFxyXFxufVxcclxcbi8qTmF2aWdhdGlvbiBoeXBlcmxpbmtzKi9cXHJcXG4uYWRkX2FjdGl2aXR5e1xcclxcbiAgICBjb2xvcjogI0UzREFGRjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4uZXhpdF9hY2NvdW50e1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAjRTNEQUZGO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5oZWFkZXIgYTpob3ZlcntcXHJcXG4gICAgY29sb3I6I0M1ODlFODtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBkaXYgY29tIGFzIDIgbGlzdGFzIGRlIHRhcmVmYSAodXJnZW50ZStib20gZmF6ZXIpKi9cXHJcXG4ubGlzdGFzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLXRvcDogODBweDsgXFxyXFxufVxcclxcblxcclxcbi8qdMOtdHVsbyBVUkdFTlRFIGUgQk9NIEZBWkVSKi9cXHJcXG4udGl0dWxvX2xpc3Rhe1xcclxcbiAgICBjb2xvcjogI2UzZGFmZjtcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKmRpdiBwYXJhIGEgbGlzdGEgZGUgdXJnZW50ZSovXFxyXFxuLmxpc3RhIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLypMaW5oYSBkZSBkaXZpc8OjbyovXFxyXFxuLmxpbmV7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI0VDRkZGODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXRpdmlkYWRlc3tcXHJcXG4gICAgcGFkZGluZzogMjNweDtcXHJcXG4gICAgLypoZWlnaHQ6IDU1MHB4OyovXFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXRpdmlkYWRlczo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXRpdmlkYWRlczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNDNTg5RTg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hdGl2aWRhZGVfZW1fZGlhX2NvbnRhaW5lciwgLmF0aXZpZGFkZV9hdHJhc2FkYV9jb250YWluZXJ7XFxyXFxuICAgIHBhZGRpbmc6IDUlO1xcclxcbiAgICBtYXJnaW46IDMlO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hdGl2aWRhZGVfZW1fZGlhX2NvbnRhaW5lcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M1ODlFODtcXHJcXG59XFxyXFxuLmF0aXZpZGFkZV9hdHJhc2FkYV9jb250YWluZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMTAwMDA7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpdml0eV90ZXh0e1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4udW5jaGVja2Vke1xcclxcbiAgICB3aWR0aDogNTFweDsgXFxyXFxuICAgIGhlaWdodDogNTBweDsgXFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3VuY2hlY2tlZC5wbmcnKTsgXFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYXRpdmlkYWRlcyBoM3tcXHJcXG4gICAgZm9udC1zaXplOiAyN3B4O1xcclxcbiAgICBjb2xvcjogI2ZmZmY7XFxyXFxufVxcclxcbi5hdGl2aWRhZGVzIHNwYW57XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgY29sb3I6ICNmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk3MHB4KSB7XFxyXFxuICAgIC5oZWFkZXJ7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuICAgIC50aXR1bG9faGVhZGVyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLmxpc3RhcyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB9XFxyXFxuICAgIC5saXN0YXtcXHJcXG4gICAgICAgIGhlaWdodDogNDB2aDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGluZXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG4gICAgICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRpdHVsb19saXN0YXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgIFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4NHB4KSB7XFxyXFxuICAgIC51c2VyX3dlbGNvbWV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDN2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZXhpdF9hY2NvdW50e1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFkZF9hY3Rpdml0eXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aXR1bG9faGVhZGVye1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmF0aXZpZGFkZXN7XFxyXFxuICAgICAgICBwYWRkaW5nOiAydnc7XFxyXFxuICAgICAgICB3aWR0aDogNTZ2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudW5jaGVja2Vke1xcclxcbiAgICAgICAgd2lkdGg6IDEzdnc7IFxcclxcbiAgICAgICAgaGVpZ2h0OiAxM3Z3OyBcXHJcXG4gICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxpc3RhcyAubGlzdGEgLmF0aXZpZGFkZXN7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFjdGl2aXR5X3RleHQgaDN7XFxyXFxuICAgICAgICBmb250LXNpemU6IDZ2dztcXHJcXG4gICAgfVxcclxcbiAgICAuYWN0aXZpdHlfdGV4dCBzcGFue1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRpdHVsb19saXN0YXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogOHZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcXHJcXG4gICAgLnVzZXJfd2VsY29tZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMHZ3O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJvZHlcIjogXCJ0b2RvX2JvZHlfX25lR19qXCIsXG5cdFwiY29udGFpbmVyXCI6IFwidG9kb19jb250YWluZXJfX3RLZEFYXCIsXG5cdFwiaGVhZGVyXCI6IFwidG9kb19oZWFkZXJfX2dmZzg4XCIsXG5cdFwidGl0dWxvX2hlYWRlclwiOiBcInRvZG9fdGl0dWxvX2hlYWRlcl9fNXZkX1pcIixcblx0XCJ1c2VyX3dlbGNvbWVcIjogXCJ0b2RvX3VzZXJfd2VsY29tZV9fRkVtTjVcIixcblx0XCJhZGRfYWN0aXZpdHlcIjogXCJ0b2RvX2FkZF9hY3Rpdml0eV9fWDJ4UHBcIixcblx0XCJleGl0X2FjY291bnRcIjogXCJ0b2RvX2V4aXRfYWNjb3VudF9fZTVtQ1JcIixcblx0XCJsaXN0YXNcIjogXCJ0b2RvX2xpc3Rhc19feWlKSjVcIixcblx0XCJ0aXR1bG9fbGlzdGFcIjogXCJ0b2RvX3RpdHVsb19saXN0YV9fdzB1bWVcIixcblx0XCJsaXN0YVwiOiBcInRvZG9fbGlzdGFfX2pLX1h1XCIsXG5cdFwibGluZVwiOiBcInRvZG9fbGluZV9fRWV0VFVcIixcblx0XCJhdGl2aWRhZGVzXCI6IFwidG9kb19hdGl2aWRhZGVzX19GQXhfVVwiLFxuXHRcImF0aXZpZGFkZV9lbV9kaWFfY29udGFpbmVyXCI6IFwidG9kb19hdGl2aWRhZGVfZW1fZGlhX2NvbnRhaW5lcl9feThybnhcIixcblx0XCJhdGl2aWRhZGVfYXRyYXNhZGFfY29udGFpbmVyXCI6IFwidG9kb19hdGl2aWRhZGVfYXRyYXNhZGFfY29udGFpbmVyX19JOEpYNFwiLFxuXHRcImFjdGl2aXR5X3RleHRcIjogXCJ0b2RvX2FjdGl2aXR5X3RleHRfX1ZKcmphXCIsXG5cdFwidW5jaGVja2VkXCI6IFwidG9kb191bmNoZWNrZWRfX1dVUVdpXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[2]!./src/pages/todoList/todo.module.css\n"));

/***/ })

});
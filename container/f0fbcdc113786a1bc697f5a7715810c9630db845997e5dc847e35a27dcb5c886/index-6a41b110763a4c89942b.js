(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        6124: function(e, s, n) {
            "use strict";
            n.r(s), n.d(s, {
                default: function() {
                    return r
                }
            });
            n(7294);
            var a = n(9008),
                i = n(5893);

            function r() {
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(a.default, {
                        children: [(0, i.jsx)("title", {
                            children: "pdftoolz -Home"
                        }), (0, i.jsx)("a", {
                            href: "https://github.com/bgoonz/pdf-tools",
                            children: "Github Repo"
                        })]
                    }), (0, i.jsxs)("div", {
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)("br", {}), (0, i.jsx)("hr", {}), (0, i.jsx)("h2", {
                            children: "Usage"
                        }), (0, i.jsx)("br", {}), (0, i.jsx)("center", {
                            children: (0, i.jsx)("img", {
                                src: "https://i.imgur.com/5JDpzgO.gif"
                            })
                        }), (0, i.jsx)("h5", {
                            children: "Code Samples:"
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)("pre", {
                                children: (0, i.jsxs)("code", {
                                    className: "lang-jsx",
                                    children: [(0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "import"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "React"
                                    }), ", ", "{", " useRef ", "}", " ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "from"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"react"'
                                    }), ";", "\n", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "import"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "PDFList"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "from"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"./PDFList"'
                                    }), ";", "\n", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "import"
                                    }), " imageDataURLfromFile ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "from"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"../../methods/imageDataURLfromFile"'
                                    }), ";", "\n", "\n", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "export"
                                    }), " default function ", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "PDFButtons"
                                    }), "(", "{", "\n", "  ", "filesLocal,", "\n", "  ", "setFilesLocal,", "\n", "  ", "downloadPDFHandler,", "\n", "  ", "multiple,", "\n", "}", ") ", "{", "\n", "  ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "const"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "ref"
                                    }), " = useRef();", "\n", "  ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "return"
                                    }), " (", "\n", "    ", "<", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), " className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"container-fluid"'
                                    }), ">", "\n", "      ", "<input", "\n", "        ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "type"
                                    }), "=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"file"'
                                    }), "\n", "        ", "multiple=", "{", "multiple", "}", "\n", "        ", "className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"form-control d-none"'
                                    }), "\n", "        ", "accept=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '".pdf"'
                                    }), "\n", "        ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "ref"
                                    }), "=", "{", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "ref"
                                    }), "}", "\n", "        ", "onChange=", "{", "async (e) => ", "{", "\n", "          ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "const"
                                    }), " addFileButton = document.getElementById(", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"addFileButton"'
                                    }), ");", "\n", "          ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "const"
                                    }), " processFileButton =", "\n", "            ", "document.querySelectorAll(", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"#processFileButton"'
                                    }), ");", "\n", "\n", "          ", "addFileButton.innerText = ", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"Adding Files ..."'
                                    }), ";", "\n", "          ", "addFileButton.disabled = ", (0, i.jsx)("span", {
                                        className: "hljs-literal",
                                        children: "true"
                                    }), ";", "\n", "          ", "processFileButton.forEach((btn) => (btn.disabled = ", (0, i.jsx)("span", {
                                        className: "hljs-literal",
                                        children: "true"
                                    }), "));", "\n", "\n", "          ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "const"
                                    }), " temp = [];", "\n", "          ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "for"
                                    }), " (", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "let"
                                    }), " i = ", (0, i.jsx)("span", {
                                        className: "hljs-number",
                                        children: "0"
                                    }), "; i < e.target.files.length; i++) ", "{", "\n", "            ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "const"
                                    }), " file = e.target.files[i];", "\n", "            ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "const"
                                    }), " res = await imageDataURLfromFile(file);", "\n", "            ", "file.image = res.data;", "\n", "            ", "file.pages = res.pageCount;", "\n", "            ", "temp.push(file);", "\n", "          ", "}", "\n", "          ", "setFilesLocal([...filesLocal, ...temp]);", "\n", "          ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "ref"
                                    }), ".current.value = ", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '""'
                                    }), ";", "\n", "          ", "addFileButton.innerText = ", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"Add Files"'
                                    }), ";", "\n", "          ", "addFileButton.disabled = ", (0, i.jsx)("span", {
                                        className: "hljs-literal",
                                        children: "false"
                                    }), ";", "\n", "          ", "processFileButton.forEach((btn) => (btn.disabled = ", (0, i.jsx)("span", {
                                        className: "hljs-literal",
                                        children: "false"
                                    }), "));", "\n", "        ", "}", "}", "\n", "      ", "/>", "\n", "      ", "<", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), " className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"row justify-content-md-center align-items-center"'
                                    }), ">", "\n", "        ", "<", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), " className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"col-sm-4 d-flex flex-column"'
                                    }), ">", "\n", "          ", "<button", "\n", "            ", "id=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"processFileButton"'
                                    }), "\n", "            ", "className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"btn btn-danger my-2 mx-1"'
                                    }), "\n", "            ", "onClick=", "{", "(e) => ", "{", "\n", "              ", "downloadPDFHandler(e);", "\n", "            ", "}", "}", "\n", "          ", ">", "\n", "            ", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "Save"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "and"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "Download"
                                    }), "\n", "          ", "</button>", "\n", "\n", "          ", "<button", "\n", "            ", "className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"btn btn-primary my-2"'
                                    }), "\n", "            ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "type"
                                    }), "=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"button"'
                                    }), "\n", "            ", "id=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"addFileButton"'
                                    }), "\n", "            ", "onClick=", "{", "() => ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "ref"
                                    }), ".current.click()", "}", "\n", "          ", ">", "\n", "            ", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "Add"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "Files"
                                    }), "\n", "          ", "</button>", "\n", "          ", "<", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), " className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"accordion"'
                                    }), " id=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"settings"'
                                    }), ">", "\n", "            ", "<", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), " className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"accordion-item"'
                                    }), ">", "\n", "              ", "<h2 className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"accordion-header"'
                                    }), " id=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"pageSettings"'
                                    }), ">", "\n", "                ", "<button", "\n", "                  ", "className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"accordion-button collapsed"'
                                    }), "\n", "                  ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "type"
                                    }), "=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"button"'
                                    }), "\n", "                  ", "data-bs-toggle=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"collapse"'
                                    }), "\n", "                  ", "data-bs-target=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"#pageSetting"'
                                    }), "\n", "                  ", "aria-expanded=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"true"'
                                    }), "\n", "                  ", "aria-controls=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"pageSetting"'
                                    }), "\n", "                ", ">", "\n", "                  ", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "Page"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "Settings"
                                    }), "\n", "                ", "</button>", "\n", "              ", "</h2>", "\n", "              ", "<", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), "\n", "                ", "id=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"pageSetting"'
                                    }), "\n", "                ", "className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"accordion-collapse collapse"'
                                    }), "\n", "                ", "aria-labelledby=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"pageSettings"'
                                    }), "\n", "                ", "data-bs-parent=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"#settings"'
                                    }), "\n", "              ", ">", "\n", "                ", "<", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), " className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"accordion-body"'
                                    }), ">", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "Page"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "Settings"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "Goes"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "Here"
                                    }), "</", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), ">", "\n", "              ", "</", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), ">", "\n", "            ", "</", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), ">", "\n", "            ", "<", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), " className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"accordion-item"'
                                    }), ">", "\n", "              ", "<h2 className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"accordion-header"'
                                    }), " id=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"marginSettings"'
                                    }), ">", "\n", "                ", "<button", "\n", "                  ", "className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"accordion-button"'
                                    }), "\n", "                  ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "type"
                                    }), "=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"button"'
                                    }), "\n", "                  ", "data-bs-toggle=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"collapse"'
                                    }), "\n", "                  ", "data-bs-target=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"#marginSetting"'
                                    }), "\n", "                  ", "aria-expanded=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"true"'
                                    }), "\n", "                  ", "aria-controls=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"marginSetting"'
                                    }), "\n", "                ", ">", "\n", "                  ", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "Margin"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "Settings"
                                    }), "\n", "                ", "</button>", "\n", "              ", "</h2>", "\n", "              ", "<", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), "\n", "                ", "id=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"marginSetting"'
                                    }), "\n", "                ", "className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"accordion-collapse collapse"'
                                    }), "\n", "                ", "aria-labelledby=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"marginSettings"'
                                    }), "\n", "                ", "data-bs-parent=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"#settings"'
                                    }), "\n", "              ", ">", "\n", "                ", "<", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), " className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"accordion-body"'
                                    }), ">", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "Margin"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "Settings"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "Goes"
                                    }), " ", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "Here"
                                    }), "</", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), ">", "\n", "              ", "</", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), ">", "\n", "            ", "</", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), ">", "\n", "          ", "</", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), ">", "\n", "        ", "</", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), ">", "\n", "        ", "<", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), "\n", "          ", "className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"col-sm-8 my-3"'
                                    }), "\n", "          ", "style=", "{", "{", "\n", "            ", "height: ", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"50vh"'
                                    }), ",", "\n", "            ", "overflowY: ", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"scroll"'
                                    }), ",", "\n", "            ", "border: ", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"2px dashed red"'
                                    }), ",", "\n", "          ", "}", "}", "\n", "        ", ">", "\n", "          ", "<", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), " className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"container"'
                                    }), ">", "\n", "            ", "<", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), " className=", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"row gy-3"'
                                    }), " style=", "{", "{", " padding: ", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"2rem 0px"'
                                    }), " ", "}", "}", ">", "\n", "              ", "<", (0, i.jsx)("span", {
                                        className: "hljs-type",
                                        children: "PDFList"
                                    }), " files=", "{", "filesLocal", "}", " setFiles=", "{", "setFilesLocal", "}", " />", "\n", "            ", "</", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), ">", "\n", "          ", "</", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), ">", "\n", "        ", "</", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), ">", "\n", "      ", "</", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), ">", "\n", "    ", "</", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "div"
                                    }), ">", "\n", "  ", ");", "\n", "}", "\n"]
                                })
                            }), (0, i.jsx)("h2", {
                                id: "-",
                                children: "---"
                            }), (0, i.jsx)("pre", {
                                children: (0, i.jsxs)("code", {
                                    className: "lang-jsx",
                                    children: ["\n", "\n", (0, i.jsxs)("span", {
                                        className: "moonscript",
                                        children: [(0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "import"
                                        }), " ", "{", " useRouter ", "}", " ", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "from"
                                        }), " ", (0, i.jsx)("span", {
                                            className: "hljs-string",
                                            children: '"next/router"'
                                        }), ";", "\n", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "import"
                                        }), " ", "{", "\n", "  ", "sortableContainer,", "\n", "  ", "sortableElement,", "\n", "  ", "sortableHandle,", "\n", "}", " ", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "from"
                                        }), " ", (0, i.jsx)("span", {
                                            className: "hljs-string",
                                            children: '"react-sortable-hoc"'
                                        }), ";", "\n", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "import"
                                        }), " styles ", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "from"
                                        }), " ", (0, i.jsx)("span", {
                                            className: "hljs-string",
                                            children: '"../../styles/filelist.module.css"'
                                        }), ";", "\n", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "import"
                                        }), " FilePreview ", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "from"
                                        }), " ", (0, i.jsx)("span", {
                                            className: "hljs-string",
                                            children: '"../FilePreview/FilePreview"'
                                        }), ";", "\n", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "import"
                                        }), " FilePreview2 ", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "from"
                                        }), " ", (0, i.jsx)("span", {
                                            className: "hljs-string",
                                            children: '"../FilePreview/FilePreview2"'
                                        }), ";", "\n", "\n", "//Drag handler", "\n", "const DragHandle = sortableHandle(", (0, i.jsxs)("span", {
                                            className: "hljs-function",
                                            children: [(0, i.jsxs)("span", {
                                                className: "hljs-params",
                                                children: ["(", "{", " tabIndex ", "}", ")"]
                                            }), " =>"]
                                        }), " (", "\n", "  ", "<span className=", "{", "styles.dragHandler", "}", " tabIndex=", "{", "tabIndex", "}", ">", "\n", "    ", "<svg", "\n", "      ", "xmlns=", (0, i.jsx)("span", {
                                            className: "hljs-string",
                                            children: '"http://www.w3.org/2000/svg"'
                                        }), "\n", "      ", "width=", (0, i.jsx)("span", {
                                            className: "hljs-string",
                                            children: '"16"'
                                        }), "\n", "      ", "height=", (0, i.jsx)("span", {
                                            className: "hljs-string",
                                            children: '"16"'
                                        }), "\n", "      ", "fill=", (0, i.jsx)("span", {
                                            className: "hljs-string",
                                            children: '"currentColor"'
                                        }), "\n", "      ", "className=", (0, i.jsx)("span", {
                                            className: "hljs-string",
                                            children: '"bi bi-grip-horizontal"'
                                        }), "\n", "      ", "viewBox=", (0, i.jsx)("span", {
                                            className: "hljs-string",
                                            children: '"0 0 16 16"'
                                        }), "\n", "    ", ">", "\n", "      ", "<path d=", (0, i.jsx)("span", {
                                            className: "hljs-string",
                                            children: '"M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"'
                                        }), " />", "\n", "    ", "</svg>", "\n", "  ", "</span>", "\n", "));", "\n", "\n", "//Drag area", "\n", "const SortableContainer = sortableContainer(", (0, i.jsxs)("span", {
                                            className: "hljs-function",
                                            children: [(0, i.jsxs)("span", {
                                                className: "hljs-params",
                                                children: ["(", "{", " children ", "}", ")"]
                                            }), " =>"]
                                        }), " ", "{", "\n", "  ", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "return"
                                        }), " <div className=", "{", "styles.dragContainer", "}", ">", "{", "children", "}", "</div>;", "\n", "}", ");", "\n", "\n", "const arrayMoveMutate = ", (0, i.jsxs)("span", {
                                            className: "hljs-function",
                                            children: [(0, i.jsxs)("span", {
                                                className: "hljs-params",
                                                children: ["(array, ", (0, i.jsx)("span", {
                                                    className: "hljs-keyword",
                                                    children: "from"
                                                }), ", to)"]
                                            }), " =>"]
                                        }), " ", "{", "\n", "  ", "array.splice(to < ", (0, i.jsx)("span", {
                                            className: "hljs-number",
                                            children: "0"
                                        }), " ? array.length + to : to, ", (0, i.jsx)("span", {
                                            className: "hljs-number",
                                            children: "0"
                                        }), ", array.splice(", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "from"
                                        }), ", ", (0, i.jsx)("span", {
                                            className: "hljs-number",
                                            children: "1"
                                        }), ")[", (0, i.jsx)("span", {
                                            className: "hljs-number",
                                            children: "0"
                                        }), "]);", "\n", "}", ";", "\n", "\n", "const arrayMove = ", (0, i.jsxs)("span", {
                                            className: "hljs-function",
                                            children: [(0, i.jsxs)("span", {
                                                className: "hljs-params",
                                                children: ["(array, ", (0, i.jsx)("span", {
                                                    className: "hljs-keyword",
                                                    children: "from"
                                                }), ", to)"]
                                            }), " =>"]
                                        }), " ", "{", "\n", "  ", "array = array.slice();", "\n", "  ", "arrayMoveMutate(array, ", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "from"
                                        }), ", to);", "\n", "  ", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "return"
                                        }), " array;", "\n", "}", ";", "\n", "\n", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "export"
                                        }), " default function PDFList(", "{", " files, setFiles ", "}", ") ", "{", "\n", "  ", "const router = useRouter();", "\n", "  ", "const path = router.pathname.split(", (0, i.jsx)("span", {
                                            className: "hljs-string",
                                            children: '"/"'
                                        }), ").reverse()[", (0, i.jsx)("span", {
                                            className: "hljs-number",
                                            children: "0"
                                        }), "];", "\n", "\n", "  ", "const onSortEnd = ", (0, i.jsxs)("span", {
                                            className: "hljs-function",
                                            children: [(0, i.jsxs)("span", {
                                                className: "hljs-params",
                                                children: ["(", "{", " oldIndex, newIndex ", "}", ")"]
                                            }), " =>"]
                                        }), " ", "{", "\n", "    ", "setFiles(arrayMove(files, oldIndex, newIndex));", "\n", "  ", "}", ";", "\n", "\n", "  ", "// Functions", "\n", "  ", "const deleteFileHandler = ", (0, i.jsxs)("span", {
                                            className: "hljs-function",
                                            children: [(0, i.jsx)("span", {
                                                className: "hljs-params",
                                                children: "(file)"
                                            }), " =>"]
                                        }), " ", "{", "\n", "    ", "const newFiles = files;", "\n", "    ", "newFiles.forEach(", (0, i.jsxs)("span", {
                                            className: "hljs-function",
                                            children: [(0, i.jsx)("span", {
                                                className: "hljs-params",
                                                children: "(fileNew)"
                                            }), " =>"]
                                        }), " ", "{", "\n", "      ", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "if"
                                        }), " (fileNew == file) ", "{", "\n", "        ", "fileNew.deleted = ", (0, i.jsx)("span", {
                                            className: "hljs-literal",
                                            children: "true"
                                        }), ";", "\n", "      ", "}", "\n", "    ", "}", ");", "\n", "    ", "setFiles([...newFiles]);", "\n", "  ", "}", ";", "\n", "\n", "  ", "//Draggable elements", "\n", "  ", "const SortableItem = sortableElement(", (0, i.jsxs)("span", {
                                            className: "hljs-function",
                                            children: [(0, i.jsxs)("span", {
                                                className: "hljs-params",
                                                children: ["(", "{", " value ", "}", ")"]
                                            }), " =>"]
                                        }), " ", "{", "\n", "    ", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "return"
                                        }), " path === ", (0, i.jsx)("span", {
                                            className: "hljs-string",
                                            children: '"split"'
                                        }), " ? (", "\n", "      ", "<div className=", "{", "styles.dragElement2", "}", ">", "\n", "        ", "<DragHandle />", "\n", "        ", "<FilePreview2 file=", "{", "value", "}", " deleteFileHandler=", "{", "deleteFileHandler", "}", " />", "\n", "      ", "</div>", "\n", "    ", ") : (", "\n", "      ", "<div className=", "{", "styles.dragElement", "}", ">", "\n", "        ", "<DragHandle />", "\n", "        ", "<FilePreview file=", "{", "value", "}", " deleteFileHandler=", "{", "deleteFileHandler", "}", " />", "\n", "      ", "</div>", "\n", "    ", ");", "\n", "  ", "}", ");", "\n", "\n", "  ", "let allDeleted = ", (0, i.jsx)("span", {
                                            className: "hljs-literal",
                                            children: "true"
                                        }), ";", "\n", "  ", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "return"
                                        }), " (", "\n", "    ", "<SortableContainer onSortEnd=", "{", "onSortEnd", "}", " useDragHandle axis=", (0, i.jsx)("span", {
                                            className: "hljs-string",
                                            children: '"xy"'
                                        }), ">", "\n", "      ", "{", "files.map(", (0, i.jsxs)("span", {
                                            className: "hljs-function",
                                            children: [(0, i.jsx)("span", {
                                                className: "hljs-params",
                                                children: "(file, index)"
                                            }), " =>"]
                                        }), " ", "{", "\n", "        ", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "if"
                                        }), " (!file.deleted) ", "{", "\n", "          ", "allDeleted = ", (0, i.jsx)("span", {
                                            className: "hljs-literal",
                                            children: "false"
                                        }), ";", "\n", "          ", (0, i.jsx)("span", {
                                            className: "hljs-keyword",
                                            children: "return"
                                        }), " (", "\n", "            ", "<SortableItem key=", "{", "`item-$", "{", "index", "}", "`", "}", " index=", "{", "index", "}", " value=", "{", "file", "}", " />", "\n", "          ", ");", "\n", "        ", "}", "\n", "      ", "}", ")", "}", "\n", "      ", "{", "allDeleted && <h2>No Files</h2>", "}", "\n", "    ", "</SortableContainer>", "\n", "  ", ");", "\n", "}"]
                                    }), "\n"]
                                })
                            }), (0, i.jsx)("h2", {
                                id: "-",
                                children: "---"
                            }), (0, i.jsx)("p", {
                                children: "```jsx"
                            }), (0, i.jsxs)("p", {
                                children: ["import React, ", "{", " useEffect, useState ", "}", ' from "react"; import PDFButtons from "./PDFButtons"; import imageDataURLfromFile from "../../methods/imageDataURLfromFile";']
                            }), (0, i.jsxs)("p", {
                                children: ["export default function PDFTool(", "{", " files, method, multiple ", "}", ") ", "{", "const [filesLocal, setFilesLocal] = useState([]);"]
                            }), (0, i.jsxs)("p", {
                                children: ["  useEffect(() => ", "{", "const temp = []; const arr = Array.from(files); const myFunction = async () => ", "{", 'const addFileButton = document.getElementById("addFileButton"); const processFileButton = document.querySelectorAll("#processFileButton"); addFileButton.innerText = "Adding Files ..."; addFileButton.disabled = true; processFileButton.forEach((btn) => (btn.disabled = true));']
                            }), (0, i.jsx)("pre", {
                                children: (0, i.jsxs)("code", {
                                    children: ["  ", "for (let i = ", (0, i.jsx)("span", {
                                        className: "hljs-number",
                                        children: "0"
                                    }), (0, i.jsxs)("span", {
                                        className: "hljs-comment",
                                        children: ["; i < arr.length; i++) ", "{"]
                                    }), "\n", "    ", "const file = arr[i]", (0, i.jsx)("span", {
                                        className: "hljs-comment",
                                        children: ";"
                                    }), "\n", "    ", "const res = await imageDataURLfromFile(file)", (0, i.jsx)("span", {
                                        className: "hljs-comment",
                                        children: ";"
                                    }), "\n", "    ", "file.image = res", (0, i.jsx)("span", {
                                        className: "hljs-meta",
                                        children: ".data"
                                    }), (0, i.jsx)("span", {
                                        className: "hljs-comment",
                                        children: ";"
                                    }), "\n", "    ", "file.pages = res.pageCount", (0, i.jsx)("span", {
                                        className: "hljs-comment",
                                        children: ";"
                                    }), "\n", "    ", "temp.push(file)", (0, i.jsx)("span", {
                                        className: "hljs-comment",
                                        children: ";"
                                    }), "\n", "  ", "}", "\n", "  ", "setFilesLocal(temp)", (0, i.jsx)("span", {
                                        className: "hljs-comment",
                                        children: ";"
                                    }), "\n", "  ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "addFileButton.innerText "
                                    }), "= ", (0, i.jsx)("span", {
                                        className: "hljs-string",
                                        children: '"Add Files"'
                                    }), (0, i.jsx)("span", {
                                        className: "hljs-comment",
                                        children: ";"
                                    }), "\n", "  ", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "addFileButton.disabled "
                                    }), "= false", (0, i.jsx)("span", {
                                        className: "hljs-comment",
                                        children: ";"
                                    }), "\n", "  ", "processFileButton.forEach((", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "btn) "
                                    }), "=> (", (0, i.jsx)("span", {
                                        className: "hljs-keyword",
                                        children: "btn.disabled "
                                    }), "= false))", (0, i.jsx)("span", {
                                        className: "hljs-comment",
                                        children: ";"
                                    }), "\n", "}", (0, i.jsx)("span", {
                                        className: "hljs-comment",
                                        children: ";"
                                    }), "\n", "myFunction()", (0, i.jsx)("span", {
                                        className: "hljs-comment",
                                        children: ";"
                                    }), "\n"]
                                })
                            }), (0, i.jsxs)("p", {
                                children: ["  ", "}", ", []);"]
                            }), (0, i.jsxs)("p", {
                                children: ["  const downloadPDFHandler = async (e) => ", "{", 'e.target.innerText = "Processing Files...."; e.target.disabled = true; const filteredFiles = filesLocal.filter((file) => !file.deleted); await method(filteredFiles); e.target.innerText = "Save and Download"; e.target.disabled = false;', "}", ";"]
                            }), (0, i.jsx)("p", {
                                children: "  return ("
                            }), (0, i.jsx)("div", {
                                classname: "container",
                                children: (0, i.jsx)("pdfbuttons", {
                                    fileslocal: "{filesLocal}",
                                    setfileslocal: "{setFilesLocal}",
                                    downloadpdfhandler: "{downloadPDFHandler}",
                                    multiple: "{multiple}"
                                })
                            }), ");", "}", (0, i.jsx)("p", {})]
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)("div", {
                                className: "container",
                                style: {
                                    boxSizing: "border-box",
                                    marginRight: "auto",
                                    marginLeft: "auto",
                                    paddingLeft: "15px",
                                    paddingRight: "15px",
                                    width: "1170px",
                                    color: "rgb(51, 51, 51)",
                                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                                    fontSize: "14px",
                                    fontStyle: "normal",
                                    fontVariantLigatures: "normal",
                                    fontVariantCaps: "normal",
                                    fontWeight: 400,
                                    letterSpacing: "normal",
                                    orphans: 2,
                                    textAlign: "start",
                                    textIndent: "0px",
                                    textTransform: "none",
                                    whiteSpace: "normal",
                                    widows: 2,
                                    wordSpacing: "0px",
                                    WebkitTextStrokeWidth: "0px",
                                    textDecorationThickness: "initial",
                                    textDecorationStyle: "initial",
                                    textDecorationColor: "initial"
                                },
                                children: (0, i.jsx)("div", {
                                    className: "starter-template",
                                    style: {
                                        boxSizing: "border-box",
                                        padding: "0px 15px"
                                    },
                                    children: (0, i.jsxs)("section", {
                                        className: "content",
                                        style: {
                                            boxSizing: "border-box",
                                            display: "block"
                                        },
                                        children: [(0, i.jsx)("h1", {
                                            style: {
                                                boxSizing: "border-box",
                                                fontSize: "36px",
                                                margin: "20px 0px 10px",
                                                fontFamily: "inherit",
                                                fontWeight: 500,
                                                lineHeight: "1.1",
                                                color: "inherit"
                                            },
                                            children: "Getting Started"
                                        }), (0, i.jsxs)("p", {
                                            style: {
                                                boxSizing: "border-box",
                                                margin: "0px 0px 10px"
                                            },
                                            children: ["An ************ to\xa0", (0, i.jsx)("span", {
                                                className: "caps",
                                                style: {
                                                    boxSizing: "border-box"
                                                },
                                                children: "PDF"
                                            }), ".js with", (0, i.jsx)("span", {
                                                className: "widont",
                                                style: {
                                                    boxSizing: "border-box"
                                                },
                                                children: "\xa0"
                                            }), "examples."]
                                        }), (0, i.jsx)("h2", {
                                            style: {
                                                boxSizing: "border-box",
                                                fontFamily: "inherit",
                                                fontWeight: 500,
                                                lineHeight: "1.1",
                                                color: "inherit",
                                                marginTop: "20px",
                                                marginBottom: "10px",
                                                fontSize: "30px"
                                            },
                                            children: "Introduction"
                                        }), (0, i.jsxs)("p", {
                                            style: {
                                                boxSizing: "border-box",
                                                margin: "0px 0px 10px"
                                            },
                                            children: ["Before downloading\xa0", (0, i.jsx)("span", {
                                                className: "caps",
                                                style: {
                                                    boxSizing: "border-box"
                                                },
                                                children: "PDF"
                                            }), ".** please take a moment to understand the different layers ** the\xa0", (0, i.jsx)("span", {
                                                className: "caps",
                                                style: {
                                                    boxSizing: "border-box"
                                                },
                                                children: "PDF"
                                            }), ".js", (0, i.jsx)("span", {
                                                className: "widont",
                                                style: {
                                                    boxSizing: "border-box"
                                                },
                                                children: "\xa0"
                                            }), "project."]
                                        }), (0, i.jsxs)("table", {
                                            className: "table",
                                            style: {
                                                boxSizing: "border-box",
                                                borderCollapse: "collapse",
                                                borderSpacing: "0px",
                                                maxWidth: "100%",
                                                backgroundColor: "transparent",
                                                width: "1110px",
                                                marginBottom: "20px"
                                            },
                                            children: [(0, i.jsx)("thead", {
                                                style: {
                                                    boxSizing: "border-box"
                                                },
                                                children: (0, i.jsxs)("tr", {
                                                    style: {
                                                        boxSizing: "border-box"
                                                    },
                                                    children: [(0, i.jsx)("th", {
                                                        style: {
                                                            boxSizing: "border-box",
                                                            padding: "8px",
                                                            textAlign: "left",
                                                            lineHeight: "1.42857",
                                                            verticalAlign: "bottom",
                                                            borderTop: "0px",
                                                            borderBottom: "2px solid rgb(221, 221, 221)"
                                                        },
                                                        children: "Layer"
                                                    }), (0, i.jsx)("th", {
                                                        style: {
                                                            boxSizing: "border-box",
                                                            padding: "8px",
                                                            textAlign: "left",
                                                            lineHeight: "1.42857",
                                                            verticalAlign: "bottom",
                                                            borderTop: "0px",
                                                            borderBottom: "2px solid rgb(221, 221, 221)"
                                                        },
                                                        children: "About"
                                                    })]
                                                })
                                            }), (0, i.jsxs)("tbody", {
                                                style: {
                                                    boxSizing: "border-box"
                                                },
                                                children: [(0, i.jsxs)("tr", {
                                                    style: {
                                                        boxSizing: "border-box"
                                                    },
                                                    children: [(0, i.jsx)("td", {
                                                        style: {
                                                            boxSizing: "border-box",
                                                            padding: "8px",
                                                            lineHeight: "1.42857",
                                                            verticalAlign: "top",
                                                            borderTop: "1px solid rgb(221, 221, 221)"
                                                        },
                                                        children: "Core"
                                                    }), (0, i.jsxs)("td", {
                                                        style: {
                                                            boxSizing: "border-box",
                                                            padding: "8px",
                                                            lineHeight: "1.42857",
                                                            verticalAlign: "top",
                                                            borderTop: "1px solid rgb(221, 221, 221)"
                                                        },
                                                        children: ["The core layer is where a binary\xa0", (0, i.jsx)("span", {
                                                            className: "caps",
                                                            style: {
                                                                boxSizing: "border-box"
                                                            },
                                                            children: "PDF"
                                                        }), " ", "is parsed and interpreted. This layer is the foundation for all subsequent layers. ** is not ********** here because using it ******** is considered an advanced usage and the\xa0", (0, i.jsx)("span", {
                                                            className: "caps",
                                                            style: {
                                                                boxSizing: "border-box"
                                                            },
                                                            children: "API"
                                                        }), " ", "is likely to change. For an example of using the core layer see the\xa0", (0, i.jsxs)("a", {
                                                            href: "https://github.com/brendandahl/pdf.js.utils/tree/master/browser",
                                                            style: {
                                                                boxSizing: "border-box",
                                                                background: "0px 0px",
                                                                color: "rgb(66, 139, 202)",
                                                                textDecoration: "none"
                                                            },
                                                            children: [(0, i.jsx)("span", {
                                                                className: "caps",
                                                                style: {
                                                                    boxSizing: "border-box"
                                                                },
                                                                children: "PDF"
                                                            }), " ", "Object Browser"]
                                                        }), "."]
                                                    })]
                                                }), (0, i.jsxs)("tr", {
                                                    style: {
                                                        boxSizing: "border-box"
                                                    },
                                                    children: [(0, i.jsx)("td", {
                                                        style: {
                                                            boxSizing: "border-box",
                                                            padding: "8px",
                                                            lineHeight: "1.42857",
                                                            verticalAlign: "top",
                                                            borderTop: "1px solid rgb(221, 221, 221)"
                                                        },
                                                        children: "Display"
                                                    }), (0, i.jsxs)("td", {
                                                        style: {
                                                            boxSizing: "border-box",
                                                            padding: "8px",
                                                            lineHeight: "1.42857",
                                                            verticalAlign: "top",
                                                            borderTop: "1px solid rgb(221, 221, 221)"
                                                        },
                                                        children: ["The display layer ***** the core ***** and exposes an easier to use\xa0", (0, i.jsx)("span", {
                                                            className: "caps",
                                                            style: {
                                                                boxSizing: "border-box"
                                                            },
                                                            children: "API"
                                                        }), " ", "to render PDFs and get other *********** out of a document. This\xa0", (0, i.jsx)("span", {
                                                            className: "caps",
                                                            style: {
                                                                boxSizing: "border-box"
                                                            },
                                                            children: "API"
                                                        }), " ", "is what the version number is based on."]
                                                    })]
                                                }), (0, i.jsxs)("tr", {
                                                    style: {
                                                        boxSizing: "border-box"
                                                    },
                                                    children: [(0, i.jsx)("td", {
                                                        style: {
                                                            boxSizing: "border-box",
                                                            padding: "8px",
                                                            lineHeight: "1.42857",
                                                            verticalAlign: "top",
                                                            borderTop: "1px solid rgb(221, 221, 221)"
                                                        },
                                                        children: "Viewer"
                                                    }), (0, i.jsxs)("td", {
                                                        style: {
                                                            boxSizing: "border-box",
                                                            padding: "8px",
                                                            lineHeight: "1.42857",
                                                            verticalAlign: "top",
                                                            borderTop: "1px solid rgb(221, 221, 221)"
                                                        },
                                                        children: ["The viewer is built on the display layer and is the\xa0", (0, i.jsx)("span", {
                                                            className: "caps",
                                                            style: {
                                                                boxSizing: "border-box"
                                                            },
                                                            children: "UI"
                                                        }), " ", "for\xa0", (0, i.jsx)("span", {
                                                            className: "caps",
                                                            style: {
                                                                boxSizing: "border-box"
                                                            },
                                                            children: "PDF"
                                                        }), " ", "****** ** ******* and the other browser extensions within the project. It can be a good starting point for ******** your *** viewer.\xa0", (0, i.jsx)("em", {
                                                            style: {
                                                                boxSizing: "border-box"
                                                            },
                                                            children: "However, we do *** if you plan to embed the viewer in your own site, that it not just be an unmodified version. Please re-skin it or build **** it."
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        }), (0, i.jsx)("h2", {
                                            style: {
                                                boxSizing: "border-box",
                                                fontFamily: "inherit",
                                                fontWeight: 500,
                                                lineHeight: "1.1",
                                                color: "inherit",
                                                marginTop: "20px",
                                                marginBottom: "10px",
                                                fontSize: "30px"
                                            },
                                            children: "Download"
                                        }), (0, i.jsxs)("div", {
                                            className: "row",
                                            style: {
                                                boxSizing: "border-box",
                                                marginLeft: "-15px",
                                                marginRight: "-15px"
                                            },
                                            children: [(0, i.jsxs)("div", {
                                                className: "col-md-4",
                                                style: {
                                                    boxSizing: "border-box",
                                                    position: "relative",
                                                    minHeight: "1px",
                                                    paddingLeft: "15px",
                                                    paddingRight: "15px",
                                                    float: "left",
                                                    width: "380px"
                                                },
                                                children: [(0, i.jsx)("h3", {
                                                    style: {
                                                        boxSizing: "border-box",
                                                        fontFamily: "inherit",
                                                        fontWeight: 500,
                                                        lineHeight: "1.1",
                                                        color: "inherit",
                                                        marginTop: "20px",
                                                        marginBottom: "10px",
                                                        fontSize: "24px"
                                                    },
                                                    children: "Prebuilt"
                                                }), (0, i.jsxs)("p", {
                                                    style: {
                                                        boxSizing: "border-box",
                                                        margin: "0px 0px 10px"
                                                    },
                                                    children: ["Includes the generic build of\xa0", (0, i.jsx)("span", {
                                                        className: "caps",
                                                        style: {
                                                            boxSizing: "border-box"
                                                        },
                                                        children: "PDF"
                                                    }), ".js and the", (0, i.jsx)("span", {
                                                        className: "widont",
                                                        style: {
                                                            boxSizing: "border-box"
                                                        },
                                                        children: "\xa0"
                                                    }), "viewer."]
                                                }), (0, i.jsxs)("span", {
                                                    className: "btn-group-vertical centered",
                                                    style: {
                                                        boxSizing: "border-box",
                                                        position: "relative",
                                                        display: "inline-block",
                                                        verticalAlign: "middle"
                                                    },
                                                    children: [(0, i.jsx)("a", {
                                                        className: "btn btn-primary",
                                                        href: "https://github.com/mozilla/pdf.js/releases/download/v2.10.377/pdfjs-2.10.377-dist.zip",
                                                        style: {
                                                            boxSizing: "border-box",
                                                            background: "none 0px 0px rgb(66, 139, 202)",
                                                            color: "rgb(255, 255, 255)",
                                                            textDecoration: "none",
                                                            display: "block",
                                                            marginBottom: "0px",
                                                            fontWeight: 400,
                                                            textAlign: "center",
                                                            verticalAlign: "middle",
                                                            cursor: "pointer",
                                                            border: "1px solid rgb(53, 126, 189)",
                                                            whiteSpace: "nowrap",
                                                            padding: "6px 12px",
                                                            fontSize: "14px",
                                                            lineHeight: "1.42857",
                                                            borderRadius: "4px 4px 0px 0px",
                                                            userSelect: "none",
                                                            position: "relative",
                                                            float: "none",
                                                            width: "140.625px",
                                                            maxWidth: "100%"
                                                        },
                                                        type: "button",
                                                        children: "Stable (v2.10.377)"
                                                    }), (0, i.jsx)("a", {
                                                        className: "btn btn-warning",
                                                        href: "https://github.com/mozilla/pdf.js/releases/download/v2.11.338/pdfjs-2.11.338-dist.zip",
                                                        style: {
                                                            boxSizing: "border-box",
                                                            background: "none 0px 0px rgb(240, 173, 78)",
                                                            color: "rgb(255, 255, 255)",
                                                            textDecoration: "none",
                                                            display: "block",
                                                            marginBottom: "0px",
                                                            fontWeight: 400,
                                                            textAlign: "center",
                                                            verticalAlign: "middle",
                                                            cursor: "pointer",
                                                            border: "1px solid rgb(238, 162, 54)",
                                                            whiteSpace: "nowrap",
                                                            padding: "6px 12px",
                                                            fontSize: "14px",
                                                            lineHeight: "1.42857",
                                                            borderRadius: "0px 0px 4px 4px",
                                                            userSelect: "none",
                                                            position: "relative",
                                                            float: "none",
                                                            width: "140.625px",
                                                            maxWidth: "100%",
                                                            marginTop: "-1px",
                                                            marginLeft: "0px"
                                                        },
                                                        type: "button",
                                                        children: "Beta (v2.11.338)"
                                                    })]
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "col-md-4",
                                                style: {
                                                    boxSizing: "border-box",
                                                    position: "relative",
                                                    minHeight: "1px",
                                                    paddingLeft: "15px",
                                                    paddingRight: "15px",
                                                    float: "left",
                                                    width: "380px"
                                                },
                                                children: [(0, i.jsxs)("h3", {
                                                    style: {
                                                        boxSizing: "border-box",
                                                        fontFamily: "inherit",
                                                        fontWeight: 500,
                                                        lineHeight: "1.1",
                                                        color: "inherit",
                                                        marginTop: "20px",
                                                        marginBottom: "10px",
                                                        fontSize: "24px"
                                                    },
                                                    children: ["Prebuilt (for older", (0, i.jsx)("span", {
                                                        className: "widont",
                                                        style: {
                                                            boxSizing: "border-box"
                                                        },
                                                        children: "\xa0"
                                                    }), "browsers)"]
                                                }), (0, i.jsxs)("p", {
                                                    style: {
                                                        boxSizing: "border-box",
                                                        margin: "0px 0px 10px"
                                                    },
                                                    children: ["Includes the generic build of\xa0", (0, i.jsx)("span", {
                                                        className: "caps",
                                                        style: {
                                                            boxSizing: "border-box"
                                                        },
                                                        children: "PDF"
                                                    }), ".js *** the", (0, i.jsx)("span", {
                                                        className: "widont",
                                                        style: {
                                                            boxSizing: "border-box"
                                                        },
                                                        children: "\xa0"
                                                    }), "viewer."]
                                                }), (0, i.jsxs)("span", {
                                                    className: "btn-group-vertical centered",
                                                    style: {
                                                        boxSizing: "border-box",
                                                        position: "relative",
                                                        display: "inline-block",
                                                        verticalAlign: "middle"
                                                    },
                                                    children: [(0, i.jsx)("a", {
                                                        className: "btn btn-primary",
                                                        href: "https://github.com/mozilla/pdf.js/releases/download/v2.10.377/pdfjs-2.10.377-legacy-dist.zip",
                                                        style: {
                                                            boxSizing: "border-box",
                                                            background: "none 0px 0px rgb(66, 139, 202)",
                                                            color: "rgb(255, 255, 255)",
                                                            textDecoration: "none",
                                                            display: "block",
                                                            marginBottom: "0px",
                                                            fontWeight: 400,
                                                            textAlign: "center",
                                                            verticalAlign: "middle",
                                                            cursor: "pointer",
                                                            border: "1px solid rgb(53, 126, 189)",
                                                            whiteSpace: "nowrap",
                                                            padding: "6px 12px",
                                                            fontSize: "14px",
                                                            lineHeight: "1.42857",
                                                            borderRadius: "4px 4px 0px 0px",
                                                            userSelect: "none",
                                                            position: "relative",
                                                            float: "none",
                                                            width: "140.625px",
                                                            maxWidth: "100%"
                                                        },
                                                        type: "button"
                                                    }), (0, i.jsx)("a", {
                                                        className: "btn btn-warning",
                                                        href: "https://github.com/mozilla/pdf.js/releases/download/v2.11.338/pdfjs-2.11.338-legacy-dist.zip",
                                                        style: {
                                                            boxSizing: "border-box",
                                                            background: "none 0px 0px rgb(240, 173, 78)",
                                                            color: "rgb(255, 255, 255)",
                                                            textDecoration: "none",
                                                            display: "block",
                                                            marginBottom: "0px",
                                                            fontWeight: 400,
                                                            textAlign: "center",
                                                            verticalAlign: "middle",
                                                            cursor: "pointer",
                                                            border: "1px solid rgb(238, 162, 54)",
                                                            whiteSpace: "nowrap",
                                                            padding: "6px 12px",
                                                            fontSize: "14px",
                                                            lineHeight: "1.42857",
                                                            borderRadius: "0px 0px 4px 4px",
                                                            userSelect: "none",
                                                            position: "relative",
                                                            float: "none",
                                                            width: "140.625px",
                                                            maxWidth: "100%",
                                                            marginTop: "-1px",
                                                            marginLeft: "0px"
                                                        },
                                                        type: "button",
                                                        children: "Beta (v2.11.338)"
                                                    })]
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "col-md-4",
                                                style: {
                                                    boxSizing: "border-box",
                                                    position: "relative",
                                                    minHeight: "1px",
                                                    paddingLeft: "15px",
                                                    paddingRight: "15px",
                                                    float: "left",
                                                    width: "380px"
                                                },
                                                children: [(0, i.jsx)("h3", {
                                                    style: {
                                                        boxSizing: "border-box",
                                                        fontFamily: "inherit",
                                                        fontWeight: 500,
                                                        lineHeight: "1.1",
                                                        color: "inherit",
                                                        marginTop: "20px",
                                                        marginBottom: "10px",
                                                        fontSize: "24px"
                                                    },
                                                    children: "Source"
                                                }), "To get a local copy ** *** ******* code, clone ** using git:", (0, i.jsx)("pre", {
                                                    style: {
                                                        boxSizing: "border-box",
                                                        overflow: "auto",
                                                        fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
                                                        fontSize: "13px",
                                                        display: "block",
                                                        padding: "9.5px",
                                                        margin: "0px 0px 10px",
                                                        lineHeight: "1.42857",
                                                        wordBreak: "break-all",
                                                        overflowWrap: "break-word",
                                                        color: "rgb(51, 51, 51)",
                                                        backgroundColor: "rgb(245, 245, 245)",
                                                        border: "1px solid rgb(204, 204, 204)",
                                                        borderRadius: "4px",
                                                        position: "relative"
                                                    },
                                                    children: (0, i.jsxs)("code", {
                                                        style: {
                                                            boxSizing: "border-box",
                                                            fontFamily: '"Anonymous Pro", monospace',
                                                            fontSize: "inherit",
                                                            padding: "0px",
                                                            color: "inherit",
                                                            backgroundColor: "transparent",
                                                            whiteSpace: "pre-wrap",
                                                            borderRadius: "0px",
                                                            display: "block",
                                                            lineHeight: "1.1"
                                                        },
                                                        children: ["$ git clone https://github.com/mozilla/pdf.js.git", "\n", "$ cd pdf.js", "\n"]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "open_grepper_editor",
                                                    style: {
                                                        boxSizing: "border-box",
                                                        display: "block !important",
                                                        height: "20px !important",
                                                        width: "20px !important",
                                                        position: "absolute !important",
                                                        top: "0px !important",
                                                        right: "0px !important",
                                                        backgroundSize: "20px 20px !important",
                                                        cursor: "pointer !important",
                                                        backgroundColor: "rgb(0, 0, 0) !important",
                                                        backgroundImage: 'url("data:image/png'
                                                    },
                                                    title: "Edit & Save To Grepper"
                                                })]
                                            })]
                                        }), (0, i.jsxs)("h2", {
                                            style: {
                                                boxSizing: "border-box",
                                                fontFamily: "inherit",
                                                fontWeight: 500,
                                                lineHeight: "1.1",
                                                color: "inherit",
                                                marginTop: "20px",
                                                marginBottom: "10px",
                                                fontSize: "30px"
                                            },
                                            children: ["Including via a", (0, i.jsx)("span", {
                                                className: "widont",
                                                style: {
                                                    boxSizing: "border-box"
                                                },
                                                children: "\xa0"
                                            }), (0, i.jsx)("span", {
                                                className: "caps",
                                                style: {
                                                    boxSizing: "border-box"
                                                },
                                                children: "CDN"
                                            })]
                                        }), (0, i.jsxs)("p", {
                                            style: {
                                                boxSizing: "border-box",
                                                margin: "0px 0px 10px"
                                            },
                                            children: [(0, i.jsx)("span", {
                                                className: "caps",
                                                style: {
                                                    boxSizing: "border-box"
                                                },
                                                children: "PDF"
                                            }), ".js is hosted on several free", (0, i.jsx)("span", {
                                                className: "widont",
                                                style: {
                                                    boxSizing: "border-box"
                                                },
                                                children: "\xa0"
                                            }), "CDNs:"]
                                        }), (0, i.jsxs)("ul", {
                                            style: {
                                                boxSizing: "border-box",
                                                marginTop: "0px",
                                                marginBottom: "10px"
                                            },
                                            children: [(0, i.jsx)("li", {
                                                style: {
                                                    boxSizing: "border-box"
                                                },
                                                children: (0, i.jsx)("a", {
                                                    href: "https://www.jsdelivr.com/package/npm/pdfjs-dist",
                                                    style: {
                                                        boxSizing: "border-box",
                                                        background: "0px 0px",
                                                        color: "rgb(66, 139, 202)",
                                                        textDecoration: "none"
                                                    },
                                                    children: "https://www.jsdelivr.com/package/npm/pdfjs-dist"
                                                })
                                            }), (0, i.jsx)("li", {
                                                style: {
                                                    boxSizing: "border-box"
                                                },
                                                children: (0, i.jsx)("a", {
                                                    href: "https://cdnjs.com/libraries/pdf.js",
                                                    style: {
                                                        boxSizing: "border-box",
                                                        background: "0px 0px",
                                                        color: "rgb(66, 139, 202)",
                                                        textDecoration: "none"
                                                    },
                                                    children: "https://cdnjs.com/libraries/pdf.js"
                                                })
                                            }), (0, i.jsx)("li", {
                                                style: {
                                                    boxSizing: "border-box"
                                                },
                                                children: (0, i.jsx)("a", {
                                                    href: "https://unpkg.com/pdfjs-dist/",
                                                    style: {
                                                        boxSizing: "border-box",
                                                        background: "0px 0px",
                                                        color: "rgb(66, 139, 202)",
                                                        textDecoration: "none"
                                                    },
                                                    children: "https://unpkg.com/pdfjs-dist/"
                                                })
                                            })]
                                        }), (0, i.jsx)("h2", {
                                            style: {
                                                boxSizing: "border-box",
                                                fontFamily: "inherit",
                                                fontWeight: 500,
                                                lineHeight: "1.1",
                                                color: "inherit",
                                                marginTop: "20px",
                                                marginBottom: "10px",
                                                fontSize: "30px"
                                            },
                                            children: "File Layout Overview"
                                        }), (0, i.jsxs)("p", {
                                            style: {
                                                boxSizing: "border-box",
                                                margin: "0px 0px 10px"
                                            },
                                            children: ["Note that we only mention the most relevant ***** and", (0, i.jsx)("span", {
                                                className: "widont",
                                                style: {
                                                    boxSizing: "border-box"
                                                },
                                                children: "\xa0"
                                            }), "folders."]
                                        }), (0, i.jsx)("h3", {
                                            style: {
                                                boxSizing: "border-box",
                                                fontFamily: "inherit",
                                                fontWeight: 500,
                                                lineHeight: "1.1",
                                                color: "inherit",
                                                marginTop: "20px",
                                                marginBottom: "10px",
                                                fontSize: "24px"
                                            },
                                            children: "Prebuilt"
                                        }), (0, i.jsx)("pre", {
                                            style: {
                                                boxSizing: "border-box",
                                                overflow: "auto",
                                                fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
                                                fontSize: "13px",
                                                display: "block",
                                                padding: "9.5px",
                                                margin: "0px 0px 10px",
                                                lineHeight: "1.42857",
                                                wordBreak: "break-all",
                                                overflowWrap: "break-word",
                                                color: "rgb(51, 51, 51)",
                                                backgroundColor: "rgb(245, 245, 245)",
                                                border: "1px solid rgb(204, 204, 204)",
                                                borderRadius: "4px",
                                                position: "relative"
                                            },
                                            children: (0, i.jsxs)("code", {
                                                style: {
                                                    boxSizing: "border-box",
                                                    fontFamily: '"Anonymous Pro", monospace',
                                                    fontSize: "inherit",
                                                    padding: "0px",
                                                    color: "inherit",
                                                    backgroundColor: "transparent",
                                                    whiteSpace: "pre-wrap",
                                                    borderRadius: "0px",
                                                    display: "block",
                                                    lineHeight: "1.1"
                                                },
                                                children: ["\u251c\u2500\u2500 build/", "\n", "\u2502", "   ", "\u251c\u2500\u2500 pdf.js", "                             ", "- display layer", "\n", "\u2502", "   ", "\u251c\u2500\u2500 pdf.js.map", "                         ", "- display layer's source map", "\n", "\u2502", "   ", "\u251c\u2500\u2500 pdf.worker.js", "                      ", "- core layer", "\n", "\u2502", "   ", "\u2514\u2500\u2500 pdf.worker.js.map", "                  ", "- **** layer's source map", "\n", "\u251c\u2500\u2500 web/", "\n", "\u2502", "   ", "\u251c\u2500\u2500 cmaps/", "                             ", "- character maps (required by core)", "\n", "\u2502", "   ", "\u251c\u2500\u2500 compressed.tracemonkey-pldi-09.pdf - PDF file for testing purposes", "\n", "\u2502", "   ", "\u251c\u2500\u2500 debugger.js", "                        ", "- helpful debugging features", "\n", "\u2502", "   ", "\u251c\u2500\u2500 images/", "                            ", "- images for the viewer and annotation icons", "\n", "\u2502", "   ", "\u251c\u2500\u2500 locale/", "                            ", "- *********** files", "\n", "\u2502", "   ", "\u251c\u2500\u2500 viewer.css", "                         ", "- viewer style sheet", "\n", "\u2502", "   ", "\u251c\u2500\u2500 viewer.html", "                        ", "- viewer layout", "\n", "\u2502", "   ", "\u251c\u2500\u2500 viewer.js", "                          ", "- viewer layer", "\n", "\u2502", "   ", "\u2514\u2500\u2500 viewer.js.***", "                      ", "- viewer layer's source map", "\n", "\u2514\u2500\u2500 LICENSE"]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "open_grepper_editor",
                                            style: {
                                                boxSizing: "border-box",
                                                display: "block !important",
                                                height: "20px !important",
                                                width: "20px !important",
                                                position: "absolute !important",
                                                top: "0px !important",
                                                right: "0px !important",
                                                backgroundSize: "20px 20px !important",
                                                cursor: "pointer !important",
                                                backgroundColor: "rgb(0, 0, 0) !important",
                                                backgroundImage: 'url("data:image/png'
                                            },
                                            title: "Edit & Save To Grepper"
                                        }), (0, i.jsx)("h3", {
                                            style: {
                                                boxSizing: "border-box",
                                                fontFamily: "inherit",
                                                fontWeight: 500,
                                                lineHeight: "1.1",
                                                color: "inherit",
                                                marginTop: "20px",
                                                marginBottom: "10px",
                                                fontSize: "24px"
                                            },
                                            children: "Source"
                                        }), (0, i.jsx)("pre", {
                                            style: {
                                                boxSizing: "border-box",
                                                overflow: "auto",
                                                fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
                                                fontSize: "13px",
                                                display: "block",
                                                padding: "9.5px",
                                                margin: "0px 0px 10px",
                                                lineHeight: "1.42857",
                                                wordBreak: "break-all",
                                                overflowWrap: "break-word",
                                                color: "rgb(51, 51, 51)",
                                                backgroundColor: "rgb(245, 245, 245)",
                                                border: "1px solid rgb(204, 204, 204)",
                                                borderRadius: "4px",
                                                position: "relative"
                                            },
                                            children: (0, i.jsxs)("code", {
                                                style: {
                                                    boxSizing: "border-box",
                                                    fontFamily: '"Anonymous Pro", monospace',
                                                    fontSize: "inherit",
                                                    padding: "0px",
                                                    color: "inherit",
                                                    backgroundColor: "transparent",
                                                    whiteSpace: "pre-wrap",
                                                    borderRadius: "0px",
                                                    display: "block",
                                                    lineHeight: "1.1"
                                                },
                                                children: ["\u251c\u2500\u2500 docs/", "                                  ", "- website source code", "\n", "\u251c\u2500\u2500 examples/", "                              ", "- simple ***** examples", "\n", "\u251c\u2500\u2500 extensions/", "                            ", "- browser extension source code", "\n", "\u251c\u2500\u2500 external/", "                              ", "- third party code", "\n", "\u251c\u2500\u2500 l10n/", "                                  ", "- translation files", "\n", "\u251c\u2500\u2500 src/", "\n", "\u2502", "   ", "\u251c\u2500\u2500 core/", "                              ", "- core layer", "\n", "\u2502", "   ", "\u251c\u2500\u2500 display/", "                           ", "- display layer", "\n", "\u2502", "   ", "\u251c\u2500\u2500 shared/", "                            ", "- shared code between the core and display layers", "\n", "\u2502", "   ", "\u251c\u2500\u2500 interfaces.js", "                      ", "- interface definitions for *** core/display layers", "\n", "\u2502", "   ", "\u251c\u2500\u2500 pdf.*.js", "                           ", "- wrapper files *** bundling", "\n", "\u2502", "   ", "\u2514\u2500\u2500 worker_loader.js", "                   ", "- **** for developer builds to **** worker files", "\n", "\u251c\u2500\u2500 test/", "                                  ", "- unit, font and reference tests", "\n", "\u251c\u2500\u2500 web/", "                                   ", "- viewer layer", "\n", "\u251c\u2500\u2500 LICENSE", "\n", "\u251c\u2500\u2500 README.md", "\n", "\u251c\u2500\u2500 gulpfile.js", "                            ", "- build scripts/logic", "\n", "\u251c\u2500\u2500 package-lock.****", "                      ", "- pinned dependency versions", "\n", "\u2514\u2500\u2500 package.json", "                           ", "- package definition and dependencies"]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "open_grepper_editor",
                                            style: {
                                                boxSizing: "border-box",
                                                display: "block !important",
                                                height: "20px !important",
                                                width: "20px !important",
                                                position: "absolute !important",
                                                top: "0px !important",
                                                right: "0px !important",
                                                backgroundSize: "20px 20px !important",
                                                cursor: "pointer !important",
                                                backgroundColor: "rgb(0, 0, 0) !important",
                                                backgroundImage: 'url("data:image/png'
                                            },
                                            title: "Edit & Save To Grepper"
                                        }), (0, i.jsx)("h2", {
                                            style: {
                                                boxSizing: "border-box",
                                                fontFamily: "inherit",
                                                fontWeight: 500,
                                                lineHeight: "1.1",
                                                color: "inherit",
                                                marginTop: "20px",
                                                marginBottom: "10px",
                                                fontSize: "30px"
                                            },
                                            children: "Trying the Viewer"
                                        }), (0, i.jsxs)("p", {
                                            style: {
                                                boxSizing: "border-box",
                                                margin: "0px 0px 10px"
                                            },
                                            children: ["With the prebuilt ** source version, open\xa0", (0, i.jsx)("code", {
                                                style: {
                                                    boxSizing: "border-box",
                                                    fontFamily: '"Anonymous Pro", monospace',
                                                    fontSize: "0.85em",
                                                    padding: "0.1em 0.3em 0.2em",
                                                    color: "rgb(255, 255, 255)",
                                                    background: "rgb(68, 68, 68)",
                                                    whiteSpace: "nowrap",
                                                    borderRadius: "0.3em",
                                                    position: "relative",
                                                    top: "-0.15em"
                                                },
                                                children: "web/viewer.html"
                                            }), " ", "in a browser and the test pdf should load. Note: the worker is not enabled for file:// urls, so use a server. If you\u2019re using the source build and have node, you can run\xa0", (0, i.jsx)("code", {
                                                style: {
                                                    boxSizing: "border-box",
                                                    fontFamily: '"Anonymous Pro", monospace',
                                                    fontSize: "0.85em",
                                                    padding: "0.1em 0.3em 0.2em",
                                                    color: "rgb(255, 255, 255)",
                                                    background: "rgb(68, 68, 68)",
                                                    whiteSpace: "nowrap",
                                                    borderRadius: "0.3em",
                                                    position: "relative",
                                                    top: "-0.15em"
                                                },
                                                children: "gulp server"
                                            }), "."]
                                        }), (0, i.jsx)("h2", {
                                            style: {
                                                boxSizing: "border-box",
                                                fontFamily: "inherit",
                                                fontWeight: 500,
                                                lineHeight: "1.1",
                                                color: "inherit",
                                                marginTop: "20px",
                                                marginBottom: "10px",
                                                fontSize: "30px"
                                            },
                                            children: "More Information"
                                        }), (0, i.jsxs)("p", {
                                            style: {
                                                boxSizing: "border-box",
                                                margin: "0px 0px 10px"
                                            },
                                            children: ["For a further walkthrough ** a ******* viewer, *** the ***** world example. More documentation *** be found in our\xa0", (0, i.jsx)("a", {
                                                href: "https://github.com/mozilla/pdf.js/wiki",
                                                style: {
                                                    boxSizing: "border-box",
                                                    background: "0px 0px",
                                                    color: "rgb(66, 139, 202)",
                                                    textDecoration: "none"
                                                },
                                                children: "wiki"
                                            }), (0, i.jsx)("span", {
                                                className: "widont",
                                                style: {
                                                    boxSizing: "border-box"
                                                },
                                                children: "\xa0"
                                            }), "too."]
                                        })]
                                    })
                                })
                            }), (0, i.jsx)("div", {
                                className: "container",
                                style: {
                                    boxSizing: "border-box",
                                    marginRight: "auto",
                                    marginLeft: "auto",
                                    paddingLeft: "15px",
                                    paddingRight: "15px",
                                    width: "1170px",
                                    color: "rgb(51, 51, 51)",
                                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                                    fontSize: "14px",
                                    fontStyle: "normal",
                                    fontVariantLigatures: "normal",
                                    fontVariantCaps: "normal",
                                    fontWeight: 400,
                                    letterSpacing: "normal",
                                    orphans: 2,
                                    textAlign: "start",
                                    textIndent: "0px",
                                    textTransform: "none",
                                    whiteSpace: "normal",
                                    widows: 2,
                                    wordSpacing: "0px",
                                    WebkitTextStrokeWidth: "0px",
                                    textDecorationThickness: "initial",
                                    textDecorationStyle: "initial",
                                    textDecorationColor: "initial"
                                },
                                children: (0, i.jsx)("footer", {
                                    style: {
                                        boxSizing: "border-box",
                                        display: "block",
                                        paddingTop: "40px",
                                        paddingBottom: "40px",
                                        marginTop: "100px",
                                        color: "rgb(119, 119, 119)",
                                        textAlign: "center",
                                        borderTop: "1px solid rgb(229, 229, 229)"
                                    },
                                    children: (0, i.jsx)("p", {
                                        style: {
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px"
                                        },
                                        children: "\xa9Mozilla and individual contributors"
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        8581: function(e, s, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(6124)
            }])
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], (function() {
            return s = 8581, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);
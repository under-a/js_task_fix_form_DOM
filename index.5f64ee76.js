document.querySelectorAll("input").forEach(function(e){var t,a=document.createElement("label"),l=t=(t=e.name.replace(/([A-Z])/g," $1")).charAt(0).toUpperCase()+t.slice(1).toLowerCase();a.className="field-label",a.setAttribute("for",e.id),a.textContent=l,e.placeholder=l,e.parentElement.append(a)});
//# sourceMappingURL=index.5f64ee76.js.map

javascript: function getScript(e, t) {
  var n = document.getElementsByTagName("head")[0],
    r = false;
  var i = document.createElement("script");
  i.src = e;
  i.onload = i.onreadystatechange = function () {
    if (
      !r &&
      (!this.readyState ||
        this.readyState == "loaded" ||
        this.readyState == "complete")
    ) {
      r = true;
      t();
    }
  };
  n.appendChild(i);
}
function urlToFilename(e) {
  return !e
    ? ""
    : e.substring(
        e.lastIndexOf("/") + 1,
        e.lastIndexOf("?") == -1 ? e.length : e.lastIndexOf("?")
      );
}
function init() {
  var e = getModelName(),
    t = getModelUrls();
  window.mywindow = createPopup(
    window.popHtml,
    "width=1001,height=600",
    e,
    window.styles
  );
  Handlebars.registerPartial("tout", window.pFeature);
  Handlebars.registerPartial("specSection", window.pSpecSec);
  createPopupHeader();
  $.when(
    $.getJSON(t["features"]).done(features_callback).fail(fail_callback),
    $.getJSON(t["packages"]).done(package_callback).fail(fail_callback),
    $.getJSON(t["specs"]).done(specs_callback).fail(fail_callback)
  ).then(initEvents);
}
function package_callback(e) {
  console.log("package success", e);
  var t = Handlebars.compile(tmplPkg);
  var n = Handlebars.compile(tmplAcc);
  var r = t(e);
  var i = n(e);
  $(window.mywindow.document).find("#pkgContainer").html(r);
  $(window.mywindow.document).find("#accessoryContainer").html(i);
}
function specs_callback(e) {
  console.log("specs success", e);
  var t = Handlebars.compile(tmplSpec);
  var n = t(e);
  $(window.mywindow.document).find("#specsContainer").html(n);
}
function features_callback(e) {
  console.log("features success", e);
  var t = Handlebars.compile(tmplFeat);
  var n = t(e);
  $(window.mywindow.document).find("#featuresContainer").html(n);
}
function fail_callback() {
  console.error("Failed to load data! Try again.");
}
function initEvents() {}
function createPopupHeader() {
  var e = "";
  e += '<div class="container">';
  e += "";
  e += '       <div class="row">';
  e += '           <div class="col-md-8">';
  e +=
    "               <h1>" +
    getModelName() +
    " <small>" +
    getMSRP() +
    "</small></h1>";
  e += "           </div>";
  e += '           <div class="col-md-4">';
  e += "           </div>";
  e += "       </div>";
  e += "";
  e += "</div>";
  var t = {
    exterior: { desktop: { regular: getHeroExterior() } },
    interior: { desktop: { regular: getHeroInterior() } },
  };
  $(mywindow.document.body).find("header").html(e);
  var n = Handlebars.compile(tmplHero);
  var e = n(t);
  $(window.mywindow.document).find("#heroContainer").html(e);
}
function getHeroInterior() {
  return $("#interior-slide").find("img").attr("src");
}
function getHeroExterior() {
  return $("#exterior-image-container").find("img").eq(0).attr("src");
}
function createPopup(e, t, n, r) {
  if (typeof mywindow !== "undefined") {
    mywindow.close();
  }
  mywindow = window.open("", "MyPopup", t);
  $(mywindow.document.body).html(e);
  $(mywindow.document)
    .find("head")
    .append("<title>" + n + "</title>");
  var i = "//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css";
  $.get(i, function (e) {
    $(mywindow.document)
      .find("head")
      .append("<style>" + r + "</style>");
    $(mywindow.document)
      .find("head")
      .append("<style>" + e + "</style>");
  });
  return mywindow;
}
function getModelUrls() {
  var e = window.location.origin,
    t = $(".content").data("props").model,
    n = $(".content").data("props").class,
    r = $(".content").data("props").contextPath,
    i = e + r + "/json/vehicles/model/class-" + n + "/model-" + t,
    s = {};
  s["features"] = i + "/section-features";
  s["specs"] = i + "/section-specs";
  s["packages"] = i + "/section-packages";
  return s;
}
function getModelName() {
  return $("#exterior-slide").find("h1").find("span").eq(0).text();
}
function getModelYear() {
  return $("#exterior-slide").find("h1").find("span.year").text();
}
function getMSRP() {
  return $("#exterior-slide").find("p.price").text();
}
window.styles = window.popHtml = "";
window.tmplFeat =
  window.tmplSpec =
  window.tmplPkg =
  window.tmplAcc =
  window.tmplHero =
    "";
window.pFeature = window.pSpecSec = "";
popHtml += "<head></head>";
popHtml += "<body>";
popHtml += "<header></header>";
popHtml += '<div id="heroContainer">Loading hero..</div>';
popHtml += '<div id="featuresContainer">Loading features..</div>';
popHtml += '<div id="pkgContainer">Loading packages..</div>';
popHtml += '<div id="accessoryContainer">Loading accessories..</div>';
popHtml += '<div id="specsContainer">Loading specs..</div>';
popHtml += "</body>";
popHtml += "";
styles += ".status-OPT{}";
styles += ".status-OPT .panel-heading .label{ }";
styles += ".status-STD .panel-heading .label{ display: none; }";
styles += ".status-STD{}";
styles += ".feat-thumb { margin: 0 auto; max-width: 100%; }";
styles += "";
styles +=
  ".table-dimensions img{ max-height: 140px; margin: 0 auto; display: block;}";
styles += "table.specs-table td:first-of-type { width: 250px; }";
styles += "";
styles +=
  ".features-container .panel + .feat-section-title { margin-top: 71px; }";
styles += ".item-copy.textless { display: none; }";
styles += ".feature-tout .inline-title { display: none; }";
pFeature += '<div class="row">';
pFeature += "  {{#if image.breakpoint6Col.regular.sourceUrl}}";
pFeature += '  <div class="col-sm-12 col-md-7">';
pFeature += "      {{getImage image.breakpoint6Col.regular.sourceUrl}}";
pFeature += "  </div>";
pFeature += '  <div class="col-sm-12 col-md-5">';
pFeature += "  {{else}}";
pFeature += '  <div class="col-sm-12 col-md-12">';
pFeature += "  {{/if}}";
pFeature += '      <b class="inline-title">{{{title}}}</b><br>';
pFeature += '      <p class="item-copy {{isTextless body}}">{{{body}}}</p>';
pFeature +=
  '      {{#if disclaimer}}<p class="text-primary">{{{disclaimer}}}</p>{{/if}}';
pFeature +=
  '      {{#if defaultDisclaimer}}<p class="text-primary">{{{defaultDisclaimer}}}</p>{{/if}}';
pFeature += "  </div>";
pFeature += "</div>";
pSpecSec += "   <h3>{{title}}</h3>";
pSpecSec +=
  '   <table class="table table-condensed table-bordered specs-table">';
pSpecSec += "   {{#children}}";
pSpecSec += "       {{#if children}}";
pSpecSec +=
  '           <tr class="active"><td colspan="2"><b>{{title}}</b></td></tr>';
pSpecSec += "           {{#children}}";
pSpecSec += "               <tr><td>{{title}}</td><td>{{{body}}}</td></tr>";
pSpecSec += "           {{/children}}";
pSpecSec += "       {{else}}";
pSpecSec += "           <tr><td>{{title}}</td><td>{{{body}}}</td></tr>";
pSpecSec += "       {{/if}}";
pSpecSec += "   {{/children}}";
pSpecSec += "   </table>";
tmplHero += "";
tmplHero += '<div class="container">';
tmplHero += "<h2>Hero</h2>";
tmplHero += '<div class="row">';
tmplHero += '   <div class="col-sm-12 col-md-6">';
tmplHero += "       {{getImage exterior.desktop.regular}}";
tmplHero += "   </div>";
tmplHero += '   <div class="col-sm-12 col-md-6">';
tmplHero += "       {{getImage interior.desktop.regular}}";
tmplHero += "   </div>";
tmplHero += "</div>";
tmplHero += "";
tmplHero += "";
tmplHero += "</div>";
tmplFeat += "";
tmplFeat += '<div class="container features-container">';
tmplFeat += "<h2>Features</h2>";
tmplFeat += "{{#model_section_features}}";
tmplFeat += '   <h3 class="feat-section-title">{{title}}</h3>';
tmplFeat += "   {{#touts}}";
tmplFeat += "       ";
tmplFeat +=
  '       <div class="panel panel-default status-{{status}} standAlone-{{standAlone}}">';
tmplFeat += '           <div class="panel-heading">';
tmplFeat += "               <b>{{title}}</b>";
tmplFeat += '               <div class="pull-right">';
tmplFeat += '                   <h4 class="panel-title">';
tmplFeat +=
  '                       <span class="label label-success">${{standAlonePrice}}</span> ';
tmplFeat += "                       {{getFeatureStatus status}}";
tmplFeat += "                   </h4>";
tmplFeat += "               </div>";
tmplFeat += "           </div>";
tmplFeat +=
  '           <div class="panel-body feature-tout"> {{> tout}} </div>';
tmplFeat += "       </div>";
tmplFeat += "   {{/touts}}";
tmplFeat += "";
tmplFeat += "{{/model_section_features}}";
tmplFeat += "";
tmplFeat += "</div>";
tmplSpec += '<div class="container">';
tmplSpec += "<h2>Specifications</h2>";
tmplSpec += "<h3>Dimensions</h3>";
tmplSpec +=
  '<table class="table table-condensed table-bordered table-dimensions">';
tmplSpec +=
  '<tr class="active"><th class="text-center">Desktop Regular</th><th class="text-center">Desktop Retina</th></tr>';
tmplSpec += "<tr>";
tmplSpec +=
  '   <td><img src="{{dimensions.breakpoint9Col.regular.sourceUrl}}"/></td>';
tmplSpec +=
  '   <td><img src="{{dimensions.breakpoint9Col.retina.sourceUrl}}"/></td>';
tmplSpec += "</tr>";
tmplSpec +=
  '<tr class="active"><th class="text-center">Tablet Regular</th><th class="text-center">Tablet Retina</th></tr>';
tmplSpec += "<tr>";
tmplSpec +=
  '   <td><img src="{{dimensions.breakpoint6Col.regular.sourceUrl}}"/></td>';
tmplSpec +=
  '   <td><img src="{{dimensions.breakpoint6Col.retina.sourceUrl}}"/></td>';
tmplSpec += "</tr>";
tmplSpec += "</table>";
tmplSpec += "";
tmplSpec += "{{#key_features}} {{> specSection}} {{/key_features}}";
tmplSpec +=
  "{{#exterior_dimensions}} {{> specSection}} {{/exterior_dimensions}}";
tmplSpec +=
  "{{#interior_dimensions}} {{> specSection}} {{/interior_dimensions}}";
tmplSpec += "{{#specs}} {{> specSection}} {{/specs}}";
tmplSpec += "</div>";
tmplSpec += "";
tmplPkg += '<div class="container">';
tmplPkg += "<h2>Packages</h2>";
tmplPkg += "{{#model_section_packages}}";
tmplPkg += "       ";
tmplPkg += '       <div class="panel panel-default">';
tmplPkg += '           <div class="panel-heading">';
tmplPkg += "               <b>{{{title}}}</b>";
tmplPkg += '               <span class="pull-right">';
tmplPkg += '                   <p class="label label-success">${{price}}</p>';
tmplPkg += "               </span>";
tmplPkg += "           </div>";
tmplPkg += "";
tmplPkg += '           <div class="panel-body">';
tmplPkg += '               <div class="row">';
tmplPkg +=
  '                    {{#if disclaimer}}<p class="text-primary"> {{{disclaimer}}}</p>{{/if}}';
tmplPkg += "               </div>";
tmplPkg += "           </div>";
tmplPkg += "";
tmplPkg += '            <ul class="list-group">';
tmplPkg += "            {{#touts}}";
tmplPkg += '                <li class="list-group-item">';
tmplPkg += "                    {{> tout}}";
tmplPkg += "                </li>";
tmplPkg += "            {{/touts}}";
tmplPkg += "            </ul>";
tmplPkg += "       </div>";
tmplPkg += "";
tmplPkg += "{{/model_section_packages}}";
tmplPkg += "</div>";
tmplAcc += '<div class="container">';
tmplAcc += "<h2>Accessories</h2>";
tmplAcc += "{{#accessories}}";
tmplAcc += "   {{#if touts}}";
tmplAcc += "    {{#touts}}";
tmplAcc += "       ";
tmplAcc +=
  '       <div class="panel panel-default status-{{status}} standAlone-{{standAlone}}">';
tmplAcc += '           <div class="panel-heading">';
tmplAcc += "               <b>{{title}}</b>";
tmplAcc += '               <span class="pull-right">';
tmplAcc +=
  '                   <p class="label label-success">${{standAlonePrice}}</p> {{getFeatureStatus status}}';
tmplAcc += "               </span>";
tmplAcc += "           </div>";
tmplAcc += '           <div class="panel-body">';
tmplAcc += "";
tmplAcc += '               <div class="row">';
tmplAcc += "                   {{#if image}}";
tmplAcc += '                   <div class="col-sm-12 col-md-7">';
tmplAcc +=
  "                       {{getImage image.breakpoint6Col.regular.sourceUrl}}";
tmplAcc += "                   </div>";
tmplAcc += '                   <div class="col-sm-12 col-md-5">';
tmplAcc += "                   {{else}}";
tmplAcc += '                   <div class="col-sm-12 col-md-12">';
tmplAcc += "                   {{/if}}";
tmplAcc += "                       <p>{{{body}}}</p>";
tmplAcc +=
  '                       <p class="text-primary">{{{defaultDisclaimer}}}</p>';
tmplAcc += "                   </div>";
tmplAcc += "";
tmplAcc += "               </div>";
tmplAcc += "           </div>";
tmplAcc += "";
tmplAcc += "       </div>";
tmplAcc += "";
tmplAcc += "";
tmplAcc += "   {{/touts}}";
tmplAcc += "   {{else}}";
tmplAcc += '        <div class="alert alert-danger">No accessories</div>';
tmplAcc += "    {{/if}}";
tmplAcc += "{{/accessories}}";
tmplAcc += "</div>";
Handlebars.registerHelper("getFeatureStatus", function (e) {
  return new Handlebars.SafeString(e == "OPT" ? "Optional" : "Standard");
});
Handlebars.registerHelper("getImage", function (e) {
  var t = urlToFilename(e);
  return new Handlebars.SafeString(
    '<img src="' +
      e +
      '" alt="' +
      t +
      '" title="' +
      t +
      '" class="feat-thumb" />'
  );
});
Handlebars.registerHelper("getFilename", function (e) {
  return new Handlebars.SafeString(
    !e
      ? ""
      : e.substring(
          e.lastIndexOf("/") + 1,
          e.lastIndexOf("?") == -1 ? e.length : e.lastIndexOf("?")
        )
  );
});
Handlebars.registerHelper("isTextless", function (e) {
  return new Handlebars.SafeString(
    e.replace(/[&#160;+]/g, "").trim() ? "" : "textless"
  );
});
init();

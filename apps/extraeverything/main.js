require(['app/UrlValues', 'app/Visualization/Visualization', 'app/Test', 'jQuery', "bootstrap", "less", "app/LangExtensions"], function (UrlValues, Visualization, Test, $) {
  $(document).ready(function () {
    if (UrlValues.getParameter('test') != undefined) {
      $("#test").show();
      $("#visualization").hide();
      apptest = new Test();
    } else {
      $("#test").hide();
      $("#visualization").show();
      visualization = new Visualization();
    }
  });
});


function loadSnippet(snippet, mode) {
  mode = mode || "r";
  $("#" + snippet).addClass("snippet");
  var editor = ace.edit(snippet);
  editor.setHighlightActiveLine(false);
  editor.setShowPrintMargin(false);
  editor.setReadOnly(true);
  editor.setShowFoldWidgets(false);
  editor.renderer.setDisplayIndentGuides(false);
  editor.renderer.setShowGutter(true);
  editor.renderer.setOption('showLineNumbers', true);
  editor.setTheme("ace/theme/textmate");
  editor.$blockScrolling = Infinity;
  editor.session.setMode("ace/mode/" + mode);
  editor.session.getSelection().clearSelection();

  var root = document.querySelector('meta[name="pkgdown-site-root"]').content
  $.get(root + "snippets/" + snippet + ".md", function(data) {
    editor.setValue(data, -1);
    editor.setOptions({
      maxLines: editor.session.getLength()
    });
  });
}

const reg = /(\s*)(`{3}) *(graphviz) *\n?([\s\S]+?)\s*(\2)(\n+|$)/g;

const ignore = (data) => {
  var source = data.source;
  var ext = source.substring(source.lastIndexOf('.')).toLowerCase();
  return [ '.js', '.css', '.html', '.htm' ].indexOf(ext) > -1;
};

module.exports = function(data) {
  const graphvizConfig = this.config.graphviz;
  let { enabled } = graphvizConfig;
  if (!enabled) {
    return;
  }
  if (!ignore(data)) {
    data.content = data.content.replace(reg, function(
      raw,
      start,
      startQuote,
      lang,
      content,
      endQuote,
      end,
    ) {
      return `${start}{% raw %}<div class="graphviz">${content}</div>{% endraw %}${end}`;
    });
  }
};

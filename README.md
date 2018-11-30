# hexo-graphviz
Plugin for Hexo which renders Graphviz plots

## Installation
### Install Package
```bash
$ yarn add hexo-graphviz
```

### Edit Config
After installed, you should edit hexo config file: `_config.yml`:
```yaml
# hexo-graphviz
graphviz:
  enable: true
```

### Include `viz.js` in `swig` or `ejs`
After editing `_config.yml`, you shoud be able to edit your blog page component like `after-footer.ejs` or a `swig` file which can be found inside the `themes/layout` directory.

The following code should be added in the file `after-footer.ejs`:
```
<% if (theme.graphviz.enable) { %>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/viz.js/1.7.1/viz.js'></script>
  <script>
    String.prototype.replaceAll = function(search, replacement) {
      var target = this;
      return target.split(search).join(replacement);
    };

    let vizObjects = document.querySelectorAll('.graphviz')

    for (let item of vizObjects) {
      let svg = undefined
      try {
        svg = Viz(item.textContent.replaceAll('–', '--'), 'svg')
      } catch(e) {
        svg = `<pre class="error">${e}</pre>`
      }
      item.outerHTML = svg
    }
  </script>
<% } %>
```

And for `swig` template engine use the following code:
```swig
{% if theme.graphviz.enable %}
  <script src='https://cdnjs.cloudflare.com/ajax/libs/viz.js/1.7.1/viz.js'></script>
  <script>
    String.prototype.replaceAll = function(search, replacement) {
      var target = this;
      return target.split(search).join(replacement);
    };

    let vizObjects = document.querySelectorAll('.graphviz')

    for (let item of vizObjects) {
      let svg = undefined
      try {
        svg = Viz(item.textContent.replaceAll('–', '--'), 'svg')
      } catch(e) {
        svg = `<pre class="error">${e}</pre>`
      }
      item.outerHTML = svg
    }
  </script>
{% endif %}
```

## Usage

The graphviz block can be written inside a ```` ```graphviz ```` codeblock.
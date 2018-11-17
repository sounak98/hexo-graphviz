# hexo-graphviz
Plugin for Hexo which renders Graphviz plots

## Installation
## Step1 Install Package
```bash
$ yarn add https://github.com/sounak98/hexo-graphviz
```

## Step2 Edit Config
After installed, you should edit hexo config file: `_config.yml`:
```yaml
# hexo-graphviz
graphviz:
  enable: true
```

## Step3 include mermaid.js in pug or ejs
After edited `_config.yml`, you shou edit your blog page component like `after-footer.ejs` ro `swig` which can be found inside 
the `layout` directory inside the theme directory.

Open your theme folder, you can see the `layout` folder, open it and then you could see it.

`after-footer.ejs` should copy below codes:
```
<% if (theme.mermaid.enable) { %>
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

`swig` template engine:
```swig
{% if theme.mermaid.enable %}
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

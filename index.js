const assign = require('deep-assign');

const config = {
    engine: 'dot',
};

hexo.config.graphviz = assign({
    enable: true
}, config, hexo.config.graphviz);

hexo.extend.filter.register('before_post_render', require('./lib/render'), 9);
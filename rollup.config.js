import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const moduleName = 'greekSpelling';

const config = {
  entry: 'src/index.js',
  format: 'umd',
  moduleName,
  plugins: [
    babel({
      babelrc: false,
      presets: ['es2015-rollup'],
    }),
  ],
  sourceMap: true,
  dest: `dist/${moduleName}.js`,
};

if (process.env.MINIFY === '1') {
  config.plugins.push(uglify());
  config.dest = `dist/${moduleName}.min.js`;
}

export default config;

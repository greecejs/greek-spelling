import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const moduleName = 'greekSpelling';

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName,
  plugins: [
    babel({
      babelrc: false,
      presets: ['es2015-rollup'],
    }),
    uglify(),
  ],
  sourceMap: true,
  dest: `dist/${moduleName}.js`,
};

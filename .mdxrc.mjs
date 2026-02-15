import rehypePrettyCode from 'rehype-pretty-code';

const options = {
  theme: 'github-dark',
};

export const rehypePlugins = [
  [rehypePrettyCode, options],
];

import config from "../vite.config";

/*
 * The storybook @storybook/react-vite framework sets the vite config `base` option to `./` by default.
 * This breaks vike as it's expecting an aboslute path. Since we don't really need vike for storybook,
 * we can just remove it from the plugins array. This of course assumes that vike is the first plugin.
 */
const [_firstPlugin, ...restPlugins] = config.plugins;

export default {
  ...config,
  plugins: [...restPlugins],
};

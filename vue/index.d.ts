import { createApp } from "vue";

export * from "vue";

declare module "vue" {
    /**
     * Wrapper around {@link https://vuejs.org/api/application.html#createapp Vue.createApp} that
     * adds the {@link module:vue#$i18n i18n plugin} and the error handler. These were added
     * globally in Vue 2, but Vue 3 does not support global plugins.
     *
     * To ensure all Vue code has the i18n plugin and the error handler installed, use of
     * `vue.createMwApp()` is recommended anywhere one would normally use `Vue.createApp()`.
     *
     * @method createMwApp
     * @param {...any} args
     * @return {Object} Vue app instance
     * @memberof module:vue
     * @see {@link https://gerrit.wikimedia.org/r/plugins/gitiles/mediawiki/core/+/25026db6cc45d72ce7433d08c6632c03d0e60aee/resources/src/vue/index.js#29}
     */
    export const createMwApp: typeof createApp;

    interface ComponentCustomProperties {
        /**
         * Adds an `$i18n()` instance method that can be used in all components. This method is a
         * proxy to {@link mw.message}.
         *
         * Usage:
         * ```
         * <p>{{ $i18n( 'my-message-key', param1, param2 ) }}</p>
         * ```
         * or
         * ```
         * <p>{{ $i18n( 'my-message-key' ).params( [ param1, param2 ] ) }}</p>
         * ```
         *
         * Note that this method only works for messages that return text. For messages that
         * need to be parsed to HTML, use the `v-i18n-html` directive.
         *
         * @param {string} key Key of message to get
         * @param {...any} parameters Values for $N replacements
         * @return {mw.Message}
         * @memberof module:vue.prototype
         * @see {@link https://gerrit.wikimedia.org/r/plugins/gitiles/mediawiki/core/+/25026db6cc45d72ce7433d08c6632c03d0e60aee/resources/src/vue/i18n.js#31}
         */
        $i18n: (key: string, ...parameters: any[]) => mw.Message;
    }
}

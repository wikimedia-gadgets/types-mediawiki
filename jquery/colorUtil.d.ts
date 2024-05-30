declare global {
    interface JQueryStatic {
        /**
         * @deprecated Removed since 1.41.
         * @see https://doc.wikimedia.org/mediawiki-core/REL1_40/js/#!/api/jQuery.colorUtil
         */
        colorUtil: ColorUtil;
    }
}

type Color = [number, number, number];

interface ColorUtil {
    /**
     * Named color map
     *
     * Based on Interface by Stefan Petre
     * {@link http://interface.eyecon.ro/}
     *
     * @see https://doc.wikimedia.org/mediawiki-core/REL1_40/js/#!/api/jQuery.colorUtil-property-colors
     */
    colors: Record<string, Color>;

    /**
     * Get a brighter or darker rgb() value string.
     *
     * Usage:
     *
     * ```js
     * $.colorUtil.getColorBrightness( 'red', +0.1 );
     * // > "rgb(255,50,50)"
     * $.colorUtil.getColorBrightness( 'rgb(200,50,50)', -0.2 );
     * // > "rgb(118,29,29)"
     * ```
     *
     * @param {Color|string} currentColor Current value in css
     * @param {number} mod Wanted brightness modification between -1 and 1
     * @returns {string} Like `'rgb(r,g,b)'`
     * @see https://doc.wikimedia.org/mediawiki-core/REL1_40/js/#!/api/jQuery.colorUtil-method-getColorBrightness
     */
    getColorBrightness(
        currentColor: string | Color,
        mod: number
    ): `rgb(${number},${number},${number})`;

    /**
     * Parse CSS color strings looking for color tuples
     *
     * Based on highlightFade by Blair Mitchelmore
     * {@link http://jquery.offput.ca/highlightFade/}
     *
     * @param {Color|string} color
     * @returns {Color}
     * @see https://doc.wikimedia.org/mediawiki-core/REL1_40/js/#!/api/jQuery.colorUtil-method-getRGB
     */
    getRGB<T extends Color>(color: string | T): T;

    /**
     * Convert an HSL color value to RGB.
     *
     * Conversion formula based on
     * {@link http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript}
     *
     * Adapted from {@link https://en.wikipedia.org/wiki/HSL_color_space}.
     *
     * Assumes `h`, `s`, and `l` are contained in the set `[0, 1]` and
     * returns `r`, `g`, and `b` in the set `[0, 255]`.
     *
     * @param {number} h The hue
     * @param {number} s The saturation
     * @param {number} l The lightness
     * @returns {Color} The RGB representation
     * @see https://doc.wikimedia.org/mediawiki-core/REL1_40/js/#!/api/jQuery.colorUtil-method-hslToRgb
     */
    hslToRgb(h: number, s: number, l: number): Color;

    /**
     * Convert an RGB color value to HSL.
     *
     * Conversion formula based on
     * {@link http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript}
     *
     * Adapted from {@link https://en.wikipedia.org/wiki/HSL_color_space}.
     *
     * Assumes `r`, `g`, and `b` are contained in the set `[0, 255]` and
     * returns `h`, `s`, and `l` in the set `[0, 1]`.
     *
     * @param {number} r The red color value
     * @param {number} g The green color value
     * @param {number} b The blue color value
     * @returns {Color} The HSL representation
     * @see https://doc.wikimedia.org/mediawiki-core/REL1_40/js/#!/api/jQuery.colorUtil-method-rgbToHsl
     */
    rgbToHsl(r: number, g: number, b: number): Color;
}

export {};

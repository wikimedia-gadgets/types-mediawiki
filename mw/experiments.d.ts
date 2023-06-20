interface Experiment {
    /**
     * The name of the experiment
     */
    name: string;
    /**
     * Whether the experiment is enabled. If the experiment is disabled, then the user is always assigned to the control bucket
     */
    enabled: boolean;
    /**
     * A map of bucket name to probability that the user will be assigned to that bucket
     */
    buckets: Record<string, number>;
}

declare global {
    namespace mw {
        /**
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.experiments
         */
        namespace experiment {
            /**
             * Gets the bucket for the experiment given the token.
             *
             * The name of the experiment and the token are hashed. The hash is converted
             * to a number which is then used to get a bucket.
             *
             * Consider the following experiment specification:
             *
             * ```
             * {
             *   name: 'My first experiment',
             *   enabled: true,
             *   buckets: {
             *     control: 0.5
             *     A: 0.25,
             *     B: 0.25
             *   }
             * }
             * ```
             *
             * The experiment has three buckets: control, A, and B. The user has a 50%
             * chance of being assigned to the control bucket, and a 25% chance of being
             * assigned to either the A or B buckets. If the experiment were disabled,
             * then the user would always be assigned to the control bucket.
             *
             * @param {Experiment} experiment
             * @param {string} token A token that uniquely identifies the user for the
             *  duration of the experiment
             * @return {string} The bucket
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.experiments-method-getBucket
             */
            function getBucket(experiment: Experiment, token: string): string;

            /**
             * An implementation of Jenkins' one-at-a-time hash.
             *
             * See <https://en.wikipedia.org/wiki/Jenkins_hash_function>.
             *
             * @private
             * @param {string} string String to hash
             * @return {number} The hash as a 32-bit unsigned integer
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.experiments-method-hashString
             */
            function hashString(string: string): number;
        }
    }
}

export {};

interface Experiment {
    /**
     * The name of the experiment
     */
    name: string;
    /**
     * Whether the experiment is enabled
     */
    enabled: boolean;
    /**
     * An object consisting of the experiment's buckets ("control" and at least one bucket) and their probabilities (a number < 1, eg 0.25)
     */
    buckets: Record<string, number>;
}

declare global {
    namespace mw {
        namespace experiment {
            /**
             * Get a bucket for a user for the given experiment
             * @param {string} token A unique identifier for the user
             * @param {Experiment} experiment The expermient to get a bucket from
             * @returns {string} The name of the chosen bucket (for example, if the buckets were "control", "a" and "b", it could return "b")
             */
            function getBucket(experiment: Experiment, token: string): string;
        }
    }
}

export {};

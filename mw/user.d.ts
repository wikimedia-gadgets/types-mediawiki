declare global {
    namespace mw {
        /**
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user
         */
        namespace user {
            // TODO: add types for items in the options map
            const options: mw.Map;

            const tokens: mw.Map<{
                csrfToken: string;
                patrolToken: string;
                watchToken: string;
            }>;

            function generateRandomSessionId(): string;

            function getPageviewToken(): string;

            function getId(): number;

            /**
             * Get the current user's name
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-getName
             */
            function getName(): string | null;

            function getRegistration(): boolean | null | Date;

            function isAnon(): boolean;

            function sessionId(): string;

            function id(): string;

            /**
             * Get the current user's groups
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-getGroups
             */
            function getGroups(callback?: (groups: string[]) => any): JQuery.Promise<string[]>;

            function getRights(callback?: (rights: string[]) => any): JQuery.Promise<string[]>;
        }
    }
}

export {};

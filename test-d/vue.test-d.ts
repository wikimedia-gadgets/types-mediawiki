import { expectType } from "tsd";
import { createMwApp, createApp } from "vue";

expectType<typeof createApp>(createMwApp);

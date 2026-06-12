import { expectType } from "tsd";
// @ts-ignore
import { createMwApp, createApp } from "vue";

expectType<typeof createApp>(createMwApp);

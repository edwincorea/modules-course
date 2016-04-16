//this file should not be a module. That's why we are creating it directly on public.
requirejs.config({
    baseUrl: "/scripts",
    paths: {
        "jquery": "../lib/jquery/dist/jquery",
        "jquery-ui": "../lib/jquery-ui/jquery-ui",
        "lodash": "../lib/lodash/lodash"
    }
});
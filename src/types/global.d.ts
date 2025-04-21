import * as jQuery from 'jquery';

declare global {
    interface Window {
        $: typeof jQuery;
        jQuery: typeof jQuery;
    }
}
